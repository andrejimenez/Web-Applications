$(document).ready(function(){
	// Acción para el botón de logout
	$("#cerrarSesion").on("click", function(){
		$.ajax({
			url : "data/deleteSession.php",
			type : "GET",
			dataType : "json",
			success : function(sessionJson){
				window.location.replace("index.html");
			},
			error : function(errorMessage){
				window.location.replace("index.html");
			}
		});
	});

});