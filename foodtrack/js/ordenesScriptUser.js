$(document).ready(function(){
	// Acción del registro
	$("#userOrder").on("click", function(){
        var jsonObject = {
            "tomate" : $("#tomate").val(),
            "cebolla" : $("#cebolla").val(),
            "aguacate" : $("#aguacate").val(),
            "cilantro" : $("#cilantro").val(),
            "pina" : $("#pina").val(),
            "lechuga" : $("#lechuga").val(),
            "papas" : $("#papas").val(),
            "chile" : $("#chile").val(),
            "apio" : $("#apio").val(),
            "zanahoria" : $("#zanahoria").val(),
            "comentarios" : $("#comentarios").val()
        };

        if($("#tomate").val() == "" && $("#cebolla").val() == "" && $("#aguacate").val() == "" && $("#cilantro").val() == "" 
            && $("#pina").val() == "" && $("#lechuga").val() == "" && $("#papas").val() == "" && $("#chile").val() == "" 
            && $("#apio").val() == "" && $("#zanahoria").val() == "" && $("#comentarios").val() == "") {
            alert("Tienes que llenar al menos un campo");
        }
        else{
            $.ajax({
                type: "POST",
                url: "data/ordenesUserService.php",
                data : jsonObject, 
                dataType : "json",
                contentType : "application/x-www-form-urlencoded",
                success: function(jsonData) {
                    window.location.replace("datosTotalesUser.html");  
                       
                },
                error: function(errorMsg){  
                    alert("error");
                }
            });
        }
        
   });
    
    $("#comentarios").keyup(function (e) {
    autoheight(this);
});

function autoheight(a) {
    if (!$(a).prop('scrollTop')) {
        do {
            var b = $(a).prop('scrollHeight');
            var h = $(a).height();
            $(a).height(h - 5);
        }
        while (b && (b != $(a).prop('scrollHeight')));
    };
    $(a).height($(a).prop('scrollHeight') + 20);
}

autoheight($("#comentarios"));
});

