$(document).ready(function() {


$("#buttonSearch").click(function() {    
            var jsonToSend = {
                "userSearch" : $("#users").val(),
            };

            $.ajax({
            type: "POST",
            url: "data/searchService.php",
            data : jsonToSend, 
            dataType : "json",
            contentType : "application/x-www-form-urlencoded",
            success: function(descriptionJSON) {
             var listaRows = "";
             
             for(var i=0; i<descriptionJSON["datos"].length; i++){
               listaRows += "<div id=" + descriptionJSON["datos"][i].email + " onclick=usuario(\'" +descriptionJSON["datos"][i].email +"\') " +  " class='buttonUser espacioLargo'>" + descriptionJSON["datos"][i].nombre + "</div>";
             }
             
             $("#menuUsers").append(listaRows);
            
            },
            error : function(errorMessage) {
              console.log(errorMessage);
            }
      });
  });
});