$(document).ready(function(){
	
 var nombreID = window.location.hash.substring(1);

        var jsonObject = {
            "userEmail"     : nombreID

        }

        $.ajax({
            type: "POST",
            url: "data/userDatosService.php",
            data : jsonObject, 
            dataType : "json",
            contentType : "application/x-www-form-urlencoded",
            success: function(jsonData) {
                  
                var listaRows = "";
            
                for(var i=0; i<jsonData["datos"].length;i++){
                    listaRows += "<tr>";
                        listaRows += "<td>" + jsonData["datos"][i].nombre + "</td>";
                        listaRows += "<td>" + jsonData["datos"][i].fecha + "</td>"; 
                        listaRows += "<td>" + jsonData["datos"][i].tomate + "</td>";
                        listaRows += "<td>" + jsonData["datos"][i].cebolla + "</td>";
                        listaRows += "<td>" + jsonData["datos"][i].aguacate + "</td>"; 
                        listaRows += "<td>" + jsonData["datos"][i].cilantro + "</td>";
                        listaRows += "<td>" + jsonData["datos"][i].pina + "</td>"; 
                        listaRows += "<td>" + jsonData["datos"][i].lechuga + "</td>";
                        listaRows += "<td>" + jsonData["datos"][i].papas + "</td>";
                        listaRows += "<td>" + jsonData["datos"][i].chile + "</td>"; 
                        listaRows += "<td>" + jsonData["datos"][i].apio + "</td>";
                        listaRows += "<td>" + jsonData["datos"][i].zanahoria + "</td>"; 
                        listaRows += "<td>" + jsonData["datos"][i].comentarios + "</td>";
                        listaRows += "</tr>";
                }
                $("#profileDataUserHistoric").append(listaRows);    
            },
            error: function(errorMsg){  
                alert("error");
            }
        });



$("#borrarRestaurante").on("click", function(){
        var jsonObject = {
            "userEmail" : nombreID

        };

        $.ajax({
            type: "POST",
            url: "data/borrarRestauranteService.php",
            data : jsonObject, 
            dataType : "json",
            contentType : "application/x-www-form-urlencoded",
            success: function(jsonData) {
                  
                    window.location.href = 'restaurantes.html';    
            },
            error: function(errorMsg){  
                alert("error");
            }
        });
   });
});


