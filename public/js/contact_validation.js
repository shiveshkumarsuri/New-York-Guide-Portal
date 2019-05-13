$(document).ready(function () {
    $("#firstName").change(function () {
        $('.error').hide();

    });

    $('#btn').click(function (event) {

        var nameReg = /^[A-Za-z]+$/;
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var phoneReg = /^((\(\d{3}\)?)|(\d{3}))([\s-./]?)(\d{3})([\s-./]?)(\d{4})$/;
        var zipReg = /^\d{5}$/;
        var firstname = $('#firstName').val();
        var lastname = $('#lastName').val();
        var phonenum = $('#phoneNumber').val();
        var emailId = $('#emailId').val();
        var comments = $('#comments').val();
        var zipCode = $('#zipCode').val();

        $('.error').hide();
        if ((firstname == "") || (lastname == "") || (phonenum == "") || (emailId == "") || (zipCode == "") || (comments == "")) {
            alert("Please fill in all the fields");
        }

        if (!nameReg.test(firstname)) {
            $('#firstName').after('<span class="error"> *Letters only*</span>');

        }

        if (!nameReg.test(lastname)) {
            $('#lastName').after('<span class="error"> *Letters only*</span>');

        }

        if (!phoneReg.test(phonenum)) {
            $('#phoneNumber').after('<span class="error"> *Should be only number and 10 digits*</span>');
            complete = false;
        }

        if (!emailReg.test(emailId)) {
            $('#emailId').after('<span class="error"> *Please enter a valid email address* </span>');
            complete = false;
        }

        if (!zipReg.test(zipCode)) {
            $('#zipCode').after('<span class="error"> *Please enter 5 digit zipcode and only number* </span>');
            complete = false;
        }

        if (comments == "") {
            $('#comments').after('<span class="error"> *Please enter some comments* </span>');
            complete = false;
        }

    });

});