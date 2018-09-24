window.onload=function() {
    console.log("Plugin connected!");

    //variables
    const body = document.querySelector("body");
    const acceptButton = document.querySelector('#gdpr-plugin-button-accept');
    const declineButton = document.querySelector('#gdpr-plugin-button-decline');



    //searching cookie by name
    function showCookie(name) {
        if (document.cookie !== "") {
            const cookies = document.cookie.split(/; */);

            for (let i=0; i<cookies.length; i++) {
                const cookieName = cookies[i].split("=")[0];
                const cookieVal = cookies[i].split("=")[1];
                if (cookieName === decodeURIComponent(name)) {
                    return decodeURIComponent(cookieVal);
                }
            }
        }
    }

    //checking the cookie
    function acceptedCookie () {
       if (showCookie("accepted") === "true") {
           hideBox();
       } else {
           //blocking overflow when plugin loaded.
           body.style.overflow = "hidden";
       };
   }
    acceptedCookie();

    function gdprDeclineAction() {
        hideBox();
        console.log("Decline");
        Date.prototype.addDays = function(days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        }
        var date = new Date();
        document.cookie = `accepted=false; expires=${date.addDays(0)}; path=/`;
    }

    function gdprAcceptAction() {
        hideBox();
        console.log("Accept");
        Date.prototype.addDays = function(days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        }
        var date = new Date();
       document.cookie = `accepted=true; expires=${date.addDays(7)}; path=/`;
       console.log(document.cookie);
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