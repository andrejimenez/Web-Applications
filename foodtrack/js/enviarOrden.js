$(document).ready(function(){
	
 var nombreID = window.location.hash.substring(1);

	$("#adminOrder").on("click", function(){
        var jsonObject = {
            "tomate" : $("#tomateAdmin").val(),
            "cebolla" : $("#cebollaAdmin").val(),
            "aguacate" : $("#aguacateAdmin").val(),
            "cilantro" : $("#cilantroAdmin").val(),
            "pina" : $("#pinaAdmin").val(),
            "lechuga" : $("#lechugaAdmin").val(),
            "papas" : $("#papasAdmin").val(),
            "chile" : $("#chileAdmin").val(),
            "apio" : $("#apioAdmin").val(),
            "zanahoria" : $("#zanahoriaAdmin").val(),
            "userEmail" : nombreID

        };

        $.ajax({
            type: "POST",
            url: "data/envioOrdenService.php",
            data : jsonObject, 
            dataType : "json",
            contentType : "application/x-www-form-urlencoded",
            success: function(jsonData) {
                  
                    window.location.href = 'adminHome.html';    
            },
            error: function(errorMsg){  
                alert("error");
            }
        });
   });

});


