window.onload=function() {
    console.log("Plugin connected!");

    //variables
    const body = document.querySelector("body");
    const acceptButton = document.querySelector('#gdpr-plugin-button-accept');
    const declineButton = document.querySelector('#gdpr-plugin-button-decline');


    //blocking overflow when plugin loaded.
    body.style.overflow = "hidden";


    function gdprDeclineAction() {
        hideBox();
        console.log("Decline");
    }
    function gdprAcceptAction() {
        hideBox();
        console.log("Accept");
    }

    //hidding box function
    function hideBox() {
        const gdprBox = document.querySelector('#gdpr-plugin-box');
        const overlay = document.querySelector('#overlay');

        gdprBox.style.display = "none";
        overlay.style.display = "none";
        body.style.overflow = "auto";
    }


    //buttons action
    declineButton.addEventListener("click", function (e) {
        e.preventDefault();
        gdprDeclineAction();
    });

    acceptButton.addEventListener("click", function (e) {
        e.preventDefault();
        gdprAcceptAction();
    });
}