$(document).ready(function(){
	// Acción al darle click al botón de login
	$("#loginButton").on("click", function(){

		var rememberMe = $("#rememberMe").is(":checked");
		var jsonToSend ={
							"uEmail" : $("#emailLog").val(),
							"uPassword" : $("#passwordLog").val(),
							"remember" : rememberMe
						};
		$.ajax({
			url : "data/loginService.php",
			type : "POST",
			data : jsonToSend,
			dataType : "json",
			contentType : "application/x-www-form-urlencoded",
			success : function(jsonReceived){
					if(jsonReceived.email == "dist@gmail.com"){
						
						window.location.replace("adminHome.html");
					}
					else{
						
						window.location.replace("userHome.html");
					}
		
			},
			error : function(errorMessage){
				alert("error");
			}

		});
	});

	
	// Acción para cargar las cookies previamente guardadas
	$.ajax({
		url : "data/cookieService.php",
		type : "GET",
		dataType : "json",
		success : function(cookieJson){
			$("#emailLog").val(cookieJson.email);
			$("#passwordLog").val(cookieJson.password);
		},
		error : function(errorMessage){
			console.log(errorMessage.responseText);
		}

	});
	

});


