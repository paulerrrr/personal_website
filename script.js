var popup;
var overlay;

function openPopupWidget(url) {
    if(popup) return; // If a popup is already open, do nothing
  
    // Prevent scrolling in the body
    document.body.style.overflow = 'hidden';

    // Create a new div for the overlay
    overlay = document.createElement('div');
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.zIndex = '999';

    // Create a new div for the popup
    popup = document.createElement('div');
    popup.style.width = '400px';
    popup.style.height = '670px';
    popup.style.backgroundColor = '#fff';
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.border = '1px solid #ccc';
    popup.style.boxShadow = '1px 1px 1px rgba(0,0,0,0.1)';
    popup.style.zIndex = '1000';
    popup.style.borderRadius = '15px';
    popup.style.overflow = 'hidden';
  

    // Create an iframe and set its source to the provided URL
    var iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';

    // Add the iframe to the popup
    popup.appendChild(iframe);

    // Add the overlay and the popup to the body of the document
    document.body.appendChild(overlay);
    document.body.appendChild(popup);

    // Add an event listener to close the popup when clicked outside
    document.body.addEventListener('click', function(event) {
        if (!popup.contains(event.target)) {
            closePopupWidget();
        }
    }, {capture: true}); // Use capture to handle event in the capture phase not bubbling
}

function closePopupWidget() {
    if (popup) {
        popup.remove();
        popup = null;
    }
    if (overlay) {
        overlay.remove();
        overlay = null;
    }
  
    // Allow scrolling in the body again
    document.body.style.overflow = 'auto';
}
