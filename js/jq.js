$(function () {
    $("#pass").keyup(function(){
        let password = $("#pass").val();
        if(password.length<8){
            $("restrict").html("Min Password length must be 8");
            console.log("min")
        }
        else if(password.length>12){
            $("restrict").html("Max Password length must be 12");
            console.log("max")
        }
        else{
            $("restrict").hide()
        }
    });
    $("#cpass").keyup(function() {
        let password = $("#pass").val();
        let confirmPassword = $("#cpass").val();
        if (password != confirmPassword) {
            $("#msg").html("Passwords does not match!");
        }
        else{
            $("#msg").hide()
        }
    });
    
});
function togg() {
    var x = document.getElementById("pass");
    var y = document.getElementById("cpass");
    if (x.type === "password" && y.type === "password") {
        x.type = "text";
        y.type = "text";
    } else {
        x.type = "password";
        y.type = "password";
    }
}

