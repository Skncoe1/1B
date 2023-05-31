$(document).ready(function () {
    $("#btnAddStudent").click(function () {
        function getStudentData() {
            let student = {
                firstName: $("#firstName").val(),
                lastName: $("#lastName").val(),
                gender: $("input[name='gender']:checked").val(),
                Rollno : $("#Rollno").val(),
                Email : $("#Email").val()
            };
            return student;
        }
        function validateEmailAtSign(email) {
            var atSignCount = 0;

            for (var i = 0; i < email.length; i++) {
                if (email[i] === "@") {
                    atSignCount++;
                }
            }

            return atSignCount === 1;
        }
        function storeDataToLocalStorage() {
            let email = $("#Email").val();
            if (!validateEmailAtSign(email)) {
                alert("Please enter a valid email address with a single @ sign.");
                return; // Stop the execution if email is invalid
            }
            if (!localStorage.getItem("student")) {
                localStorage.setItem("student", JSON.stringify(getStudentData()));
            } else {
                localStorage.removeItem("student");
                localStorage.setItem("student", JSON.stringify(getStudentData()));
            }
        }
        storeDataToLocalStorage();
        window.location.href="display.html"
    });
});