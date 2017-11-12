$(document).ready(function() {


var nombreID = window.location.hash.substring(1);
  var listaRows = "";
  listaRows += "<div>" + nombreID + "</div>";
  $("#nameUserSearch").append(listaRows);  
  
});