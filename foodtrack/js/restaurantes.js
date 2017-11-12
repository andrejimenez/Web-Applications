$(document).ready(function(){



	$.ajax({
        url : "data/restaurantesService.php",
        type : "GET",
        dataType : "json",
        success : function(datosJson){

        	var listaRows = "";
        	
        	for(var i=0; i<datosJson["datos"].length;i++){
        	
	        		listaRows += "<div id=" + datosJson["datos"][i].email + " onclick=usuario(\'" +datosJson["datos"][i].email +"\') " +  " class='buttonUser azul'>" + datosJson["datos"][i].nombre + "</div>"; 
	        		
        	}
        	$("#menuUsers").append(listaRows);
           
        },
        error : function(errorMessage){
            console.log(errorMessage);
        }
    });

            
});