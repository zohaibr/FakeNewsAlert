wrapperDiv = document.createElement("div");
wrapperDiv.id = "wrapperDiv";
wrapperDiv.setAttribute("style","position: absolute; left: 0px; top: 0px; background-color: rgb(255, 255, 255); opacity: 0.5; z-index: 2000; height: 1083px; width: 100%;");

iframeElement = document.createElement("iframe");
iframeElement.setAttribute("style","width: 100%; height: 100%;");

wrapperDiv.appendChild(iframeElement);

modalDialogParentDiv = document.createElement("div");
modalDialogParentDiv.id = "modalDialog"
modalDialogParentDiv.setAttribute("style","position: absolute; width: 350px; border: 1px solid rgb(51, 102, 153); padding: 10px; background-color: rgb(255, 255, 255); z-index: 2001; overflow: auto; text-align: center; top: 149px; left: 497px;");

modalDialogSiblingDiv = document.createElement("div");

modalDialogTextDiv = document.createElement("div");
modalDialogTextDiv.setAttribute("style" , "text-align:center");

modalDialogTextSpan = document.createElement("span");
modalDialogText = document.createElement("strong");
modalDialogText.innerHTML = "Entering a Fake News Site";

breakElement = document.createElement("br");
imageElement = document.createElement("img");
imageElement.setAttribute("style", "display: block; margin-left: auto; margin-right: auto;")
imageElement.src = chrome.extension.getURL("graphics-flashing-light.gif");

modalDialogTextSpan.appendChild(modalDialogText);
modalDialogTextDiv.appendChild(modalDialogTextSpan);
modalDialogTextDiv.appendChild(breakElement);
modalDialogTextDiv.appendChild(breakElement);
modalDialogTextDiv.appendChild(imageElement);

modalDialogSiblingDiv.appendChild(modalDialogTextDiv);
modalDialogParentDiv.appendChild(modalDialogSiblingDiv);

document.body.appendChild(wrapperDiv);
document.body.appendChild(modalDialogParentDiv);

window.setTimeout(function() {
  var frame = document.getElementById("modalDialog");
      frame.parentNode.removeChild(frame);
  var largeWindow = document.getElementById("wrapperDiv");
      largeWindow.parentNode.removeChild(largeWindow);
}, 5000);

