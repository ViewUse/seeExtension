document.addEventListener("DOMContentLoaded", function() {

});

class OperatorObject {
    constructor() {
        this.operators = new Map();
    }

    addOperator(elementId, operatorFn) {
        this.operators.set(elementId, operatorFn);
    }

    getOperator(elementId) {
        return this.operators.get(elementId);
    }
}
let operator = new OperatorObject();
operator.addOperator("open-background", openBackground);
operator.addOperator("invoke-background", invokeBackgroundJs);
operator.addOperator("get-setting-background", getSettingBackgroundTitle);
operator.addOperator("set-setting-background", setSettingBackgroundTitle);
operator.addOperator("new-windows", openNewWindow);
operator.addOperator("window-animate", executeWindowAnimate);
operator.addOperator("window-max", maxCurrWindow);
operator.addOperator("window-min", minCurrWindow);
operator.addOperator("close-win-all-tabs", closeWindowAllTabs);
operator.addOperator("new-tab-open-url", newTabOpenTheUrl);
operator.addOperator("curr-tab-open-url", currTabOpenTheUrl);
operator.addOperator("get-curr-tab-id", getCurrTabId);
operator.addOperator("toggle-first-tab", toggleFirstTab);
operator.addOperator("short-conn-message", shortConnectMessage);
operator.addOperator("long-conn-message", longConnectMessage);
operator.addOperator("modify-bg-color", modifyBackgroundColor);
operator.addOperator("modify-font-size", modifyFontSize);
operator.addOperator("test-i18n", testi18N);

operator.addOperator("show-badge", showBadge);
operator.addOperator("hide-badge", hideBadge);
operator.addOperator("show-notifications", showDesktopNotification);
operator.addOperator("check-media", checkUrlMedia);

operator.addOperator("baidu-ads", extensionAds);
operator.addOperator("context-menu", extensionContextMenu);
operator.addOperator("omnibox", extensionOmnibox);
operator.addOperator("show-picture", extensionShowPicture);
operator.addOperator("show-devtools", extensionShowDevtools);
operator.addOperator("show-sidebar", extensionShowSidebar);
function openBackground() {
    window.open("background.html");
}
function invokeBackgroundJs() {
    var bg = chrome.extension.getBackgroundPage();
    bg.testBackground();
}
function getSettingBackgroundTitle() {

}
function setSettingBackgroundTitle() {

}
function openNewWindow() {

}
function executeWindowAnimate() {

}
function maxCurrWindow() {

}
function minCurrWindow() {

}
function closeWindowAllTabs() {

}
function newTabOpenTheUrl() {

}
function currTabOpenTheUrl() {

}
function getCurrTabId() {

}
function toggleFirstTab() {

}
function shortConnectMessage() {

}
function longConnectMessage() {

}
function modifyBackgroundColor() {

}
function modifyFontSize() {

}
function testi18N() {

}
function showBadge() {

}
function hideBadge() {

}
function showDesktopNotification() {

}
function checkUrlMedia() {

}
function extensionAds() {

}
function extensionContextMenu() {

}
function extensionOmnibox() {

}
function extensionShowPicture() {
    
}
function extensionShowDevtools() {

}
function extensionShowSidebar() {

}
$("button").click((event) => {
    if(!event) return;
    if(!event.target) return;
    var target = event.target;
    var operatorFn = operator.getOperator(target.id);
    operatorFn && operatorFn();
});