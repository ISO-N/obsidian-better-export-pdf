export default {
  exportCurrentFile: "Export current file to PDF",
  exportCurrentFileWithPrevious: "Export to PDF with previous Settings",

  language: {
    name: "Language",
    desc: "Choose the plugin display language. Reload the plugin to update the command name in the palette.",
    options: {
      system: "Follow system",
      zh: "简体中文",
      en: "English",
    },
  },

  menus: {
    exportFolderToPdf: "Export folder to PDF",
    betterExportPdf: "Better Export PDF",
    exportToPdf: "Export to PDF...",
    exportEachFileToPdf: "Export each file to PDF",
    generateToc: "Generate TOC.md file",
  },

  dialogs: {
    exportToPdf: "Export to PDF",
    allFiles: "All Files",
    pdfFiles: "PDF",
  },

  buttons: {
    export: "Export",
    refresh: "Refresh",
    debug: "Debug",
  },

  labels: {
    widthHeight: "Width/Height",
    width: "width",
    height: "height",
    topBottom: "Top/Bottom",
    leftRight: "Left/Right",
    marginTop: "margin top",
    marginBottom: "margin bottom",
    marginLeft: "margin left",
    marginRight: "margin right",
    rendering: "Rendering...",
    renderingShort: "Rendering",
  },

  options: {
    marginNone: "None",
    marginDefault: "Default",
    marginSmall: "Small",
    custom: "Custom",
    notSelect: "Not select",
  },

  alerts: {
    customSizeEmpty: "When the page size is Custom, the Width/Height cannot be empty.",
  },

  notices: {
    cannotOverwrite: "Cannot overwrite PDF: the file may be open in another program. Please close it and try again.",
    saveFailed: "Failed to save PDF: {error}",
    exportFailed: "Failed to export PDF: {error}",
    dataEmpty: "data is empty!",
    contentEmpty: "{file} content is empty!",
  },

  exportDialog: {
    filenameAsTitle: "Include file name as title",
    pageSize: "Page Size",
    margin: "Margin",
    downscalePercent: "Downscale Percent",
    landscape: "Landscape",
    displayHeader: "Display Header",
    displayFooter: "Display Footer",
    openAfterExport: "Open after export",
    cssSnippets: "CSS snippets",
    filenameAsTitleTooltip: "Include file name as title",
    landscapeTooltip: "landscape",
    displayHeaderTooltip: "Display header",
    displayFooterTooltip: "Display footer",
    openAfterExportTooltip: "Open the exported file after exporting.",
    marginDesc: "The unit is millimeters.",
  },

  settings: {
    showTitle: "Add file name as title",
    displayHeader: "Display headers",
    displayFooter: "Display footer",
    printBackground: "Print background",
    maxLevel: "Max headings level of the outline",
    displayMetadata: "PDF metadata",
    headerTemplate: "Header Template",
    footerTemplate: "Footer Template",
    isTimestamp: "Add timestamp",
    enabledCss: "Enable select css snippets",
    concurrency: "Limit concurrency",
    debugMode: "Debug Mode",
    version: "Engine Version",

    generateTaggedPDF: "Generate tagged PDF",
    printBackgroundDesc: "Whether to print background graphics",
    generateTaggedPDFDesc:
      "Whether or not to generate a tagged (accessible) PDF. Defaults to false. As this property is experimental, the generated PDF may not adhere fully to PDF/UA and WCAG standards.",
    displayMetadataDesc: "Add frontMatter(title, author, keywords, subject creator, etc) to pdf metadata",
    headerTemplateDesc:
      'HTML template for the print header. Should be valid HTML markup with following classes used to inject printing values into them: date (formatted print date), title (document title), url (document location), pageNumber (current page number) and totalPages (total pages in the document). For example, <span class="title"></span> would generate span containing the title.',
    footerTemplateDesc: "HTML template for the print footer. Should use the same format as the headerTemplate.",
    isTimestampDesc: "Add timestamp to output file name",
    enabledCssDesc: "Select the css snippet that are not enabled",
    concurrencyDesc: "Limit the number of concurrent renders",
    debugModeDesc: "This is useful for troubleshooting.",
    displayHeaderTooltip: "Display header",
    displayFooterTooltip: "Display footer",
    advancedSection: "Advanced",
    debugSection: "Debug",
  },
};
