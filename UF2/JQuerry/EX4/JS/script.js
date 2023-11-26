
$(document).ready(function(){
   
    const paises = ["España", "Francia", "Alemania", "Italia", "Reino Unido", "Portugal", "Suecia", "Holanda", "Bélgica", "Suiza"];

    function cargarPaises() {
        const listaPaises = paises.map(pais => '<li value="' + pais + '">' + pais + '</li>');
      
        document.getElementById("origen").innerHTML = '<ol>' + listaPaises.join('') + '</ol>';
      
       
      }
      
    cargarPaises();
      
    $("#btn1").click(function(){
        $("ol").prepend("<li>Nueva Ciudad</li>");
      });


    $("#btn2").click(function(){
      $("ol").append("<li>Nueva Ciudad</li>");
    });

    $("#btn3").click(function(){
      $("ol li:first").remove();
    });
    
    
    $("#btn4").click(function(){
      $("ol li:last").remove();
    });
    

  });