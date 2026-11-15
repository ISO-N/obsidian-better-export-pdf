import type { Lang } from ".";

export default {
  exportCurrentFile: "导出当前文件为PDF",
  exportCurrentFileWithPrevious: "使用上一次设置导出为PDF",

  language: {
    name: "语言",
    desc: "选择插件的显示语言。重新加载插件后命令面板中的命令名称才会更新。",
    options: {
      system: "跟随系统",
      zh: "简体中文",
      en: "English",
    },
  },

  menus: {
    exportFolderToPdf: "导出文件夹为PDF",
    betterExportPdf: "Better Export PDF",
    exportToPdf: "导出为PDF...",
    exportEachFileToPdf: "逐个文件导出为PDF",
    generateToc: "生成 TOC.md 文件",
  },

  dialogs: {
    exportToPdf: "导出为PDF",
    allFiles: "所有文件",
    pdfFiles: "PDF",
  },

  buttons: {
    export: "导出",
    refresh: "刷新",
    debug: "调试",
  },

  labels: {
    widthHeight: "宽/高",
    width: "宽度",
    height: "高度",
    topBottom: "上/下",
    leftRight: "左/右",
    marginTop: "上边距",
    marginBottom: "下边距",
    marginLeft: "左边距",
    marginRight: "右边距",
    rendering: "渲染中...",
    renderingShort: "渲染中",
  },

  options: {
    marginNone: "无",
    marginDefault: "默认",
    marginSmall: "小",
    custom: "自定义",
    notSelect: "不选择",
  },

  alerts: {
    customSizeEmpty: "当纸张尺寸为自定义时，宽/高不能为空。",
  },

  notices: {
    cannotOverwrite: "无法覆盖 PDF：文件可能正在被其他程序打开，请关闭后重试。",
    saveFailed: "保存 PDF 失败：{error}",
    exportFailed: "导出 PDF 失败：{error}",
    dataEmpty: "数据为空！",
    contentEmpty: "{file} 内容为空！",
  },

  exportDialog: {
    filenameAsTitle: "将笔记名作为标题",
    pageSize: "纸张尺寸",
    margin: "页边距",
    downscalePercent: "缩放",
    landscape: "横向打印",
    displayHeader: "页眉",
    displayFooter: "页脚",
    openAfterExport: "导出后打开",
    cssSnippets: "CSS代码片段",
    filenameAsTitleTooltip: "将笔记名作为标题",
    landscapeTooltip: "横向打印",
    displayHeaderTooltip: "显示页眉",
    displayFooterTooltip: "显示页脚",
    openAfterExportTooltip: "导出完成后打开生成的文件。",
    marginDesc: "单位为毫米。",
  },

  settings: {
    showTitle: "将笔记名作为标题",
    displayHeader: "显示页眉",
    displayFooter: "显示页脚",
    printBackground: "打印背景",
    maxLevel: "最大标题级别",
    displayMetadata: "PDF元数据",
    headerTemplate: "页眉模板",
    footerTemplate: "页脚模板",
    isTimestamp: "文件名添加时间戳",
    enabledCss: "启用CSS片段选择",
    concurrency: "限制并发数",
    debugMode: "调试模式",
    version: "引擎版本",

    generateTaggedPDF: "生成带标签的 PDF",
    printBackgroundDesc: "是否打印背景图形",
    generateTaggedPDFDesc:
      "是否生成带标签（无障碍）的 PDF。默认为关闭。由于该属性仍处于实验阶段，生成的 PDF 可能不完全符合 PDF/UA 和 WCAG 标准。",
    displayMetadataDesc: "将 frontMatter（title、author、keywords、subject、creator 等）添加到 PDF 元数据",
    headerTemplateDesc:
      '打印页眉的 HTML 模板。应为有效的 HTML 标记，并使用以下 class 注入打印值：date（格式化打印日期）、title（文档标题）、url（文档位置）、pageNumber（当前页码）和 totalPages（文档总页数）。例如 <span class="title"></span> 会生成包含标题的 span。',
    footerTemplateDesc: "打印页脚的 HTML 模板，格式与页眉模板相同。",
    isTimestampDesc: "在输出文件名中添加时间戳",
    enabledCssDesc: "选择未启用的 CSS 片段",
    concurrencyDesc: "限制同时渲染的数量",
    debugModeDesc: "用于排查问题。",
    displayHeaderTooltip: "显示页眉",
    displayFooterTooltip: "显示页脚",
    advancedSection: "高级",
    debugSection: "调试",
  },
} satisfies Lang;
