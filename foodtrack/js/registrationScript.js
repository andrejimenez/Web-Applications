$(document).ready(function(){
	// Acción del registro
	$("#registerButton").on("click", function(){
        var jsonObject = {
            "userName" : $("#nameReg").val(),
            "userEmail" : $("#emailReg").val(),
            "userPassword" : $("#passwordReg").val(),
        };

        $.ajax({
            type: "POST",
            url: "data/registrationService.php",
            data : jsonObject, 
            dataType : "json",
            contentType : "application/x-www-form-urlencoded",
            success: function(jsonData) {      

                window.location.replace("userHome.html");
               
               
            },
            error: function(errorMsg){  
                alert(errorMsg.statusText);
            }
        });
   });
});


