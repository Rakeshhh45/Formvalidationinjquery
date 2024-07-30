$(document).ready(function () {
    $('#myform').validate({
        rules: {
            inputEmail4: {
                required: true,
                email: true
            },
            inputPassword4: {
                required: true,
                minlength: 5
            },
            inputAddress: {
                required: true
            },
            inputAddress2: {
                required: true
            },
            inputCity: {
                required: true
            },
            inputState: {
                required: true
            },
            inputZip: {
                required: true,
                minlength: 6
            }
        },
        messages: {
            inputEmail4: {
                required: "Please enter a valid email",
                email: "Please enter a valid email address"
            },
            inputPassword4: {
                required: "Please enter your password",
                minlength: "Password must be at least 5 characters long"
            },
            inputAddress: "Please enter your address",
            inputAddress2: "Please enter your second address",
            inputCity: "Please enter your city",
            inputState: "Please enter your state",
            inputZip: {
                required: "Please enter your zip code",
                minlength: "Zip code must be at least 6 characters long"
            }
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});