$(document).ready(function () {
    getData();
});
function getData() {
    let localStorageData = localStorage.getItem("student");
    let studentObj = JSON.parse(localStorageData);
    console.log(studentObj);
    $("#firstName").text(studentObj.firstName);
    $("#lastName").text(studentObj.lastName);
    $("#gender").text(studentObj.gender);
    $("#Rollno").text(studentObj.Rollno);
    $("#Email").text(studentObj.Email);
}