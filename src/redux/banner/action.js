export const BANNER_CHANGE_SRC = "BANNER_CHANGE_SRC";
export const BANNER_CHANGE_TEXT = "BANNER_CHANGE_TEXT";
export const BANNER_CHANGE_COLOR = "BANNER_CHANGE_COLOR";
export const BANNER_CHANGE_LINK = "BANNER_CHANGE_LINK";

export const setBannerSrc = (src) => ({
    type: BANNER_CHANGE_SRC,
    payload: src
});
export const setBannerText = (text) => ({
    type: BANNER_CHANGE_TEXT,
    payload: text
});
export const setBannerColor = (color) => ({
    type: BANNER_CHANGE_COLOR,
    payload: color
});
export const setBannerLink = (link) => ({
    type: BANNER_CHANGE_LINK,
    payload: link
});