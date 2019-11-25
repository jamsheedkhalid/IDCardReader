var port = null;
var tabId = null;
/* listener for messages coming from the content_script */
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {

    tabId=sender.tab.id;
    var hostName = "ae.eid.chrome";
    port = chrome.runtime.connectNative(hostName);
    if(message.type == "student")
        port.onDisconnect.addListener(onDisconnectedStudent);
    else if (message.type == "guard1")
        port.onDisconnect.addListener(onDisconnectedGuard1);
    else if (message.type == "guard2")
        port.onDisconnect.addListener(onDisconnectedGuard2);

});


/* THIS WILL BE CALLED ONCE EXE FINISH */
function onDisconnectedStudent() {
    port = null;
    SendResponse();
}

function onDisconnectedGuard1() {
    port = null;
    SendResponseGuard1();
}

function onDisconnectedGuard2() {
    port = null;
    SendResponseGuard2();
}

function SendResponse() {
    //create a textarea, focus on it, and make a "paste" command to get the clipboard, then send the pasted value back to the content_script
    bg = chrome.extension.getBackgroundPage();
    bg.document.body.innerHTML = ""; // clear the background page
    var helper = null;
    if (helper == null) {
        helper = bg.document.createElement("textarea");
        helper.style.position = "absolute";
        helper.style.border = "none";
        document.body.appendChild(helper);
    }

    //Focus the textarea
    helper.select();

    // perform a Paste in the selected control, here the textarea
    bg.document.execCommand("Paste"); 


    chrome.tabs.sendMessage(tabId, { action: "EID_DATA", response: helper.value }, function (response) { });

}

function SendResponseGuard1() {
    //create a textarea, focus on it, and make a "paste" command to get the clipboard, then send the pasted value back to the content_script
    bg = chrome.extension.getBackgroundPage();
    bg.document.body.innerHTML = ""; // clear the background page
    var helper = null;
    if (helper == null) {
        helper = bg.document.createElement("textarea");
        helper.style.position = "absolute";
        helper.style.border = "none";
        document.body.appendChild(helper);
    }

    //Focus the textarea
    helper.select();

    // perform a Paste in the selected control, here the textarea
    bg.document.execCommand("Paste"); 


    chrome.tabs.sendMessage(tabId, { action: "EID_DATA_GUARD1", response: helper.value }, function (response) { });

}

function SendResponseGuard2() {
    //create a textarea, focus on it, and make a "paste" command to get the clipboard, then send the pasted value back to the content_script
    bg = chrome.extension.getBackgroundPage();
    bg.document.body.innerHTML = ""; // clear the background page
    var helper = null;
    if (helper == null) {
        helper = bg.document.createElement("textarea");
        helper.style.position = "absolute";
        helper.style.border = "none";
        document.body.appendChild(helper);
    }

    //Focus the textarea
    helper.select();

    // perform a Paste in the selected control, here the textarea
    bg.document.execCommand("Paste"); 


    chrome.tabs.sendMessage(tabId, { action: "EID_DATA_GUARD2", response: helper.value }, function (response) { });

}


