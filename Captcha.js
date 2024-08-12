document.addEventListener("DOMContentLoaded", function() {
    // Enforce uppercase letters for Account Holder Name
    const usernameInput = document.getElementById("username");
    usernameInput.addEventListener("input", function() {
        this.value = this.value.toUpperCase();
    });

    // Enforce 14-digit limit for Account Number
    const accountNumberInput = document.getElementById("digit");
    accountNumberInput.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '').slice(0, 14);
    });

    // Captcha functionality
    const fonts = ["cursive","sans-serif","serif","monospace"];
    let captchaValue = "";

    function generateCaptcha(){
        let value = btoa(Math.random() * 1000000000);
        value = value.substr(0, 5 + Math.random() * 5);
        captchaValue = value;
    }

    function setCaptcha(){
        const html = captchaValue.split("").map((char) => {
            const rotate = -20 + Math.trunc(Math.random() * 40); // Increase rotation range for zigzag effect
            const font = Math.trunc(Math.random() * fonts.length);
            return `<span style="display: inline-block; transform: rotate(${rotate}deg); font-family: ${fonts[font]}">${char}</span>`;
        }).join("");
        document.querySelector(".login-form .captcha .preview").innerHTML = html;
    }

    function initCaptcha(){
        document.querySelector(".login-form .captcha .captcha-refresh").addEventListener("click", function() {
            generateCaptcha();
            setCaptcha();
        });
        generateCaptcha();
        setCaptcha();
    }

    initCaptcha();

    document.querySelector("#loginForm").addEventListener("submit", function(e) {
        e.preventDefault();
        let inputCaptchaValue = document.querySelector(".login-form .captcha input").value;
        if (inputCaptchaValue === captchaValue){
            // If captcha is correct, submit the form
            this.submit();
        } else {
            alert("Invalid captcha");
        }
    });
});
