document.addEventListener("DOMContentLoaded", function () {
    const phoneInputField = document.querySelector("#phone");
    const iti = window.intlTelInput(phoneInputField, {
        initialCountry: "auto",
        geoIpLookup: function (callback) {
            fetch('https://ipinfo.io?token=<982ebc8dcc58d3>', {
                headers: { 'Accept': 'application/json' }
            })
                .then(resp => resp.json())
                .then(resp => {
                    const countryCode = (resp && resp.country) ? resp.country : "us";
                    callback(countryCode);
                })
                .catch(() => callback("us"));
        },
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js"
    });

    phoneInputField.addEventListener("focus", function () {
        if (phoneInputField.value === '') {
            phoneInputField.value = "+" + iti.getSelectedCountryData().dialCode + " (";
        }
    });

    phoneInputField.addEventListener("input", function () {
        const dialCode = "+" + iti.getSelectedCountryData().dialCode;
        let digits = phoneInputField.value.replace(/\D/g, '');
        if (digits.startsWith(dialCode.replace('+', ''))) {
            digits = digits.substring(dialCode.length - 1);
        }
        let formattedValue = dialCode + " ";
        if (digits.length > 0) {
            formattedValue += "(" + digits.substring(0, 3);
        }
        if (digits.length >= 4) {
            formattedValue += ") " + digits.substring(3, 6);
        }
        if (digits.length >= 7) {
            formattedValue += "-" + digits.substring(6, 8);
        }
        if (digits.length >= 9) {
            formattedValue += "-" + digits.substring(8, 10);
        }
        phoneInputField.value = formattedValue;
    });

    phoneInputField.addEventListener("keydown", function (event) {
        const key = event.key;
        const cursorPosition = phoneInputField.selectionStart;
        const dialCodeLength = iti.getSelectedCountryData().dialCode.length + 1;
        if ((key === "Backspace" || key === "Delete") && cursorPosition <= dialCodeLength) {
            event.preventDefault();
        }
    });

    phoneInputField.addEventListener("countrychange", function () {
        phoneInputField.value = "+" + iti.getSelectedCountryData().dialCode + " (";
    });
});