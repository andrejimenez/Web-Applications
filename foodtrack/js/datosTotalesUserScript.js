$(document).ready(function(){
	$.ajax({
        url : "data/datosTotalesUserService.php",
        type : "GET",
        dataType : "json",
        success : function(datosJson){

        	var listaRows = "";
        	
        	for(var i=0; i<datosJson["datos"].length;i++){
        		listaRows += "<tr>";
	        		listaRows += "<td>" + datosJson["datos"][i].fecha + "</td>"; 
	        		listaRows += "<td>" + datosJson["datos"][i].tomate + "</td>";
                    listaRows += "<td>" + datosJson["datos"][i].cebolla + "</td>";
                    listaRows += "<td>" + datosJson["datos"][i].aguacate + "</td>"; 
                    listaRows += "<td>" + datosJson["datos"][i].cilantro + "</td>";
                    listaRows += "<td>" + datosJson["datos"][i].pina + "</td>"; 
                    listaRows += "<td>" + datosJson["datos"][i].lechuga + "</td>";
                    listaRows += "<td>" + datosJson["datos"][i].papas + "</td>";
                    listaRows += "<td>" + datosJson["datos"][i].chile + "</td>"; 
                    listaRows += "<td>" + datosJson["datos"][i].apio + "</td>";
                    listaRows += "<td>" + datosJson["datos"][i].zanahoria + "</td>"; 
                    listaRows += "<td>" + datosJson["datos"][i].comentarios + "</td>";
                    listaRows += "</tr>";
        	}
        	$("#profileDataUserHistoric").append(listaRows);
           
        },
        error : function(errorMessage){
            console.log(errorMessage);
        }
    });
                   
});