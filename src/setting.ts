import { App, PluginSettingTab, Setting, TextAreaComponent } from "obsidian";
import i18n, { type Lang, setLanguage } from "./i18n";
import BetterExportPdfPlugin from "./main";

function setAttributes(element: HTMLTextAreaElement, attributes: { [x: string]: string }) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

export const renderBuyMeACoffeeBadge = (contentEl: HTMLElement | DocumentFragment, width = 175) => {
  const linkEl = contentEl.createEl("a", {
    href: "https://www.buymeacoffee.com/l1xnan",
  });
  const imgEl = linkEl.createEl("img");
  imgEl.src =
    "https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=nathangeorge&button_colour=6a8696&font_colour=ffffff&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00";
  imgEl.alt = "Buy me a coffee";
  imgEl.width = width;
};

export default class ConfigSettingTab extends PluginSettingTab {
  plugin: BetterExportPdfPlugin;
  i18n: Lang;

  constructor(app: App, plugin: BetterExportPdfPlugin) {
    super(app, plugin);
    this.plugin = plugin;
    this.i18n = i18n.current;
  }

  display(): void {
    const { containerEl } = this;

    containerEl.empty();

    new Setting(containerEl)
      .setName(this.i18n.language.name)
      .setDesc(this.i18n.language.desc)
      .addDropdown((dropdown) =>
        dropdown
          .addOptions({
            system: this.i18n.language.options.system,
            zh: this.i18n.language.options.zh,
            en: this.i18n.language.options.en,
          })
          .setValue(this.plugin.settings.language)
          .onChange(async (value: string) => {
            this.plugin.settings.language = value as "system" | "zh" | "en";
            await this.plugin.saveSettings();
            setLanguage(value);
            this.plugin.refreshI18n();
            this.i18n = i18n.current;
            this.display();
          }),
      );

    const supportDesc = new DocumentFragment();
    supportDesc.createDiv({
      text: "Support the continued development of this plugin.",
    });
    new Setting(containerEl).setDesc(supportDesc);
    renderBuyMeACoffeeBadge(containerEl);
    new Setting(containerEl).setName(this.i18n.settings.version).addDropdown((dropdown) => {
      dropdown
        .addOptions(Object.fromEntries(["1", "2"].map((v) => [v, `v${v}`])))
        .setValue(this.plugin.settings.version)
        .onChange(async (value: string) => {
          this.plugin.settings.version = value;
          this.plugin.saveSettings();
          updateVersionVisibility(value);
        });
    });
    new Setting(containerEl).setName(this.i18n.settings.showTitle).addToggle((toggle) =>
      toggle
        .setTooltip(this.i18n.settings.showTitle)
        .setValue(this.plugin.settings.showTitle)
        .onChange(async (value) => {
          this.plugin.settings.showTitle = value;
          this.plugin.saveSettings();
        }),
    );
    new Setting(containerEl).setName(this.i18n.settings.displayHeader).addToggle((toggle) =>
      toggle
        .setTooltip(this.i18n.settings.displayHeaderTooltip)
        .setValue(this.plugin.settings.displayHeader)
        .onChange(async (value) => {
          this.plugin.settings.displayHeader = value;
          this.plugin.saveSettings();
        }),
    );
    new Setting(containerEl).setName(this.i18n.settings.displayFooter).addToggle((toggle) =>
      toggle
        .setTooltip(this.i18n.settings.displayFooterTooltip)
        .setValue(this.plugin.settings.displayFooter)
        .onChange(async (value) => {
          this.plugin.settings.displayFooter = value;
          this.plugin.saveSettings();
        }),
    );

    new Setting(containerEl)
      .setName(this.i18n.settings.printBackground)
      .setDesc(this.i18n.settings.printBackgroundDesc)
      .addToggle((toggle) =>
        toggle.setValue(this.plugin.settings.printBackground).onChange(async (value) => {
          this.plugin.settings.printBackground = value;
          this.plugin.saveSettings();
        }),
      );

    new Setting(containerEl)
      .setName(this.i18n.settings.generateTaggedPDF)
      .setDesc(this.i18n.settings.generateTaggedPDFDesc)
      .addToggle((toggle) =>
        toggle.setValue(this.plugin.settings.generateTaggedPDF).onChange(async (value) => {
          this.plugin.settings.generateTaggedPDF = value;
          this.plugin.saveSettings();
        }),
      );

    new Setting(containerEl).setName(this.i18n.settings.maxLevel).addDropdown((dropdown) => {
      dropdown
        .addOptions(Object.fromEntries(["1", "2", "3", "4", "5", "6"].map((level) => [level, `h${level}`])))
        .setValue(this.plugin.settings.maxLevel)
        .onChange(async (value: string) => {
          this.plugin.settings.maxLevel = value;
          this.plugin.saveSettings();
        });
    });

    new Setting(containerEl)
      .setName(this.i18n.settings.displayMetadata)
      .setDesc(this.i18n.settings.displayMetadataDesc)
      .addToggle((toggle) =>
        toggle.setValue(this.plugin.settings.displayMetadata).onChange(async (value) => {
          this.plugin.settings.displayMetadata = value;
          this.plugin.saveSettings();
        }),
      );

    new Setting(containerEl).setName(this.i18n.settings.advancedSection).setHeading();

    const headerContentAreaSetting = new Setting(containerEl);
    headerContentAreaSetting.settingEl.setAttribute("style", "display: grid; grid-template-columns: 1fr;");
    headerContentAreaSetting
      .setName(this.i18n.settings.headerTemplate)
      .setDesc(this.i18n.settings.headerTemplateDesc);
    const hederContentArea = new TextAreaComponent(headerContentAreaSetting.controlEl);

    setAttributes(hederContentArea.inputEl, {
      style: "margin-top: 12px; width: 100%; height: 6vh;",
    });
    hederContentArea.setValue(this.plugin.settings.headerTemplate).onChange(async (value) => {
      this.plugin.settings.headerTemplate = value;
      this.plugin.saveSettings();
    });

    const footerContentAreaSetting = new Setting(containerEl);
    footerContentAreaSetting.settingEl.setAttribute("style", "display: grid; grid-template-columns: 1fr;");
    footerContentAreaSetting
      .setName(this.i18n.settings.footerTemplate)
      .setDesc(this.i18n.settings.footerTemplateDesc);
    const footerContentArea = new TextAreaComponent(footerContentAreaSetting.controlEl);

    setAttributes(footerContentArea.inputEl, {
      style: "margin-top: 12px; width: 100%; height: 6vh;",
    });
    footerContentArea.setValue(this.plugin.settings.footerTemplate).onChange(async (value) => {
      this.plugin.settings.footerTemplate = value;
      this.plugin.saveSettings();
    });

    new Setting(containerEl)
      .setName(this.i18n.settings.isTimestamp)
      .setDesc(this.i18n.settings.isTimestampDesc)
      .addToggle((cb) => {
        cb.setValue(this.plugin.settings.isTimestamp).onChange(async (value) => {
          this.plugin.settings.isTimestamp = value;
          await this.plugin.saveSettings();
        });
      });
    const enabledCssSetting = new Setting(containerEl)
      .setName(this.i18n.settings.enabledCss)
      .setDesc(this.i18n.settings.enabledCssDesc)
      .addToggle((cb) => {
        cb.setValue(this.plugin.settings.enabledCss).onChange(async (value) => {
          this.plugin.settings.enabledCss = value;
          await this.plugin.saveSettings();
        });
      });

    const updateVersionVisibility = (version: string) => {
      enabledCssSetting.settingEl.hidden = version !== "1";
    };
    updateVersionVisibility(this.plugin.settings.version);
    new Setting(containerEl)
      .setName(this.i18n.settings.concurrency)
      .setDesc(this.i18n.settings.concurrencyDesc)
      .addText((cb) => {
        const concurrency = this.plugin.settings?.concurrency;
        cb.setValue(concurrency?.length > 0 ? concurrency : "5").onChange(async (value) => {
          this.plugin.settings.concurrency = value;
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl).setName(this.i18n.settings.debugSection).setHeading();
    new Setting(containerEl)
      .setName(this.i18n.settings.debugMode)
      .setDesc(this.i18n.settings.debugModeDesc)
      .addToggle((cb) => {
        cb.setValue(this.plugin.settings.debug).onChange(async (value) => {
          this.plugin.settings.debug = value;
          await this.plugin.saveSettings();
        });
      });
  }
}
