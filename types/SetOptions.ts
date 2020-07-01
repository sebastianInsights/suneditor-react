export default interface SetOptions {
    buttonList?: Array<Array<string> | string>;
    placeholder?: string;
    templates?: Array<{name: string, html: string}>;
    youtubeQuery?: string;
    callBackSave?: (contents: string) => void;
    videoRatioList?: Array<{name: string, value: number}>;
    videoRatio?: number;
    videoRotation?: boolean;
    videoSizeOnlyPercentage?: boolean;
    videoWidth?: string;
    videoRatioShow?:boolean;
    videoHeightShow?:boolean;
    videoResizing?:boolean;
    imageUploadSizeLimit?: number;
    imageUploadUrl?: string;
    imageUploadHeader?: object;
    imageUrlInput?: boolean;
    imageFileInput?: boolean;
    imageRotation?: boolean;
    imageSizeOnlyPercentage?:boolean;
    imageWidth?: string;
    imageHeightShow?: boolean;
    imageResizing?: boolean;
    textStyles?: Array<string | {name: string, style?: string, tag: string, _class?: string, class?: string  }>;
    paragraphStyles?: Array<string | {name: string, class?: string, _class?: string}>;
    lineHeights?: Array<{text: string, value: number}>;
    colorList?: Array<string>;
    formats?: Array<string | {tag: string, name: string, command: string, class: string}>;
    fontSizeUnit?: string; 
    fontSize?: Array<number>;
    font?: Array<string>;
    maxHeight?: string | number;
    minHeight?: string | number;
    height?: string | number;
    maxWidth?: string | number;
    minWidth?: string | number;
    width?: string | number;
    defaultStyle?: string;
    maxCharCount?: number;
    charCounter?: number;
    showPathLabel?: boolean;
    resizingBar?: boolean;
    popupDisplay?: string;
    display?: string;
    position?: string;
    katex?: any | {src: any, options: object};
    codeMirror?: any | {src: any, options: object};
    iframeCSSFileName?: boolean;
    fullPage?: boolean;
    iframe?: boolean;
    stickyToolbar?: number|string;
    toolbarWidth?: number|string;
    mode?: string;
    lang?: object;
    linkProtocol?: string;
    icons?: object;
    attributesWhitelist?: object;
    pasteTagsWhitelist?: string;
    imageGalleryUrl?: string;
    shortcutsHint?: boolean;
    shortcutsDisable?: boolean;
    toolbarContainer?: string | Element;
    addTagsWhitelist?: string;
    plugins?: Array<any>;
}

// const options: SetOptions = {fullPage: false, pasteTagsWhitelist: ''}