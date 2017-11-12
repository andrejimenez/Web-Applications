$(document).ready(function(){
	$.ajax({
        url : "data/datosService.php",
        type : "GET",
        dataType : "json",
        success : function(datosJson){

        	var listaRows = "";
        	
        	for(var i=0; i<datosJson["datos"].length;i++){
        		listaRows += "<tr>";
	        		listaRows += "<td>" + datosJson["datos"][i].nombre + "</td>"; 
	        		listaRows += "<td>" + datosJson["datos"][i].tomateT + "</td>";
                    listaRows += "<td>" + datosJson["datos"][i].cebollaT + "</td>";
                    listaRows += "<td>" + datosJson["datos"][i].aguacateT + "</td>"; 
                    listaRows += "<td>" + datosJson["datos"][i].cilantroT + "</td>";
                    listaRows += "<td>" + datosJson["datos"][i].pinaT + "</td>"; 
                    listaRows += "<td>" + datosJson["datos"][i].lechugaT + "</td>";
                    listaRows += "<td>" + datosJson["datos"][i].papasT + "</td>";
                    listaRows += "<td>" + datosJson["datos"][i].chileT + "</td>"; 
                    listaRows += "<td>" + datosJson["datos"][i].apioT + "</td>";
                    listaRows += "<td>" + datosJson["datos"][i].zanahoriaT + "</td>";
                    listaRows += "</tr>";
        	}
        	$("#profileData").append(listaRows);
           
        },
        error : function(errorMessage){
            console.log(errorMessage);
        }
    });
                   
});