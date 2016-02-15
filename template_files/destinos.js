$( document ).ready(function() {
  $("#destino_a").mouseover(function() {
    $("#destinoOption_b, #destinoOption_c, #destinoOption_d, #destinoOption_e").fadeOut("slow", function() {
    });
    $("#destinoOption_a").fadeIn("slow", function() {
    });
  });
  $(".destinoOption").mouseleave(function() {
    $(".destinoOption").fadeOut("slow", function() {
    });
  });
  // ---------------------
  // ------------SEPARADOR
  // ---------------------
  $("#destino_b").mouseover(function() {
    $("#destinoOption_a, #destinoOption_c, #destinoOption_d, #destinoOption_e").fadeOut("slow", function() {
    });
    $("#destinoOption_b").fadeIn("slow", function() {
    });
  });
  // ---------------------
  // ------------SEPARADOR
  // ---------------------
  $("#destino_c").mouseover(function() {
    $("#destinoOption_a, #destinoOption_b, #destinoOption_d, #destinoOption_e").fadeOut("slow", function() {
    });
    $("#destinoOption_c").fadeIn("slow", function() {
    });
  });
  // ---------------------
  // ------------SEPARADOR
  // ---------------------
  $("#destino_d").mouseover(function() {
    $("#destinoOption_a, #destinoOption_b, #destinoOption_c, #destinoOption_e").fadeOut("slow", function() {
    });
    $("#destinoOption_d").fadeIn("slow", function() {
    });
  });
  // ---------------------
  // ------------SEPARADOR
  // ---------------------
  $("#destino_e").mouseover(function() {
    $("#destinoOption_a, #destinoOption_b, #destinoOption_c, #destinoOption_d").fadeOut("slow", function() {
    });
    $("#destinoOption_e").fadeIn("slow", function() {
    });
  });
  // ---------------------
  // ------------SEPARADOR
  // ---------------------
  $("#section_destinos").hover(function() {
    $("#destinoOption_a, #destinoOption_b, #destinoOption_c, #destinoOption_d, #destinoOption_e").fadeOut("slow", function() {
    });
  });
  // ---------------------
  // ------------SEPARADOR
  // ---------------------
  // ---------------------
  // ---------------------
  // ---------------------
  
  
   $("#openDormitorios").click(function(){
    $("#dormitorios").fadeIn("slow",function(){
    });
  });
  $("#openDormitorios").click(function(){
    $(".browse").addClass("active",function(){
    });
  });
  $("#openDormitorios").click(function(){
    $("#openDormitorios").addClass("opacityNone",function(){
    });
  });
  
    // ---------------------
  // ------------SEPARADOR
  // ---------------------
  $("#closeDormitorios").click(function(){
    $("#dormitorios").fadeOut("fast",function(){
    });
  });
  $("#closeDormitorios").click(function(){
    $(".browse").removeClass("active",function(){
    });
  });
  $("#closeDormitorios").click(function(){
    $("#openDormitorios").removeClass("opacityNone",function(){
    });
  });
  
  // ---------------------
  // ---------------------
  // ---------------------
  // ---------------------
  // ---------------------
  // ---------------------
  // ---------------------
  $("#btnBra").click(function() {
    $(this).removeClass("inactive",function(){
    });
  });
  $("#btnBra").click(function() {
    $("#btnArg, #btnChi, #btnUru, #btnPer").addClass("inactive",function(){
    });
  });
  $("#btnArg").click(function() {
    $(this).removeClass("inactive",function(){
    });
  });
  $("#btnArg").click(function() {
    $("#btnBra, #btnChi, #btnUru, #btnPer").addClass("inactive",function(){
    });
  });
  $("#btnChi").click(function() {
    $(this).removeClass("inactive",function(){
    });
  });
  $("#btnChi").click(function() {
    $("#btnBra, #btnArg, #btnUru, #btnPer").addClass("inactive",function(){
    });
  });
  $("#btnUru").click(function() {
    $(this).removeClass("inactive",function(){
    });
  });
  $("#btnUru").click(function() {
    $("#btnBra, #btnArg, #btnChi, #btnPer").addClass("inactive",function(){
    });
  });
  $("#btnPer").click(function() {
    $(this).removeClass("inactive",function(){
    });
  });
  $("#btnPer").click(function() {
    $("#btnBra, #btnArg, #btnChi, #btnUru").addClass("inactive",function(){
    });
  });
  // ---------------------
  // ------------SEPARADOR
  // ---------------------
  $("#btnBra").click(function(){
    $("#infoArg, #infoChi, #infoUru, #infoPer").hide("slow",function(){
      $("#infoBra").show("slow",function(){
      });
    });
  });
  $("#btnArg").click(function(){
    $("#infoBra, #infoChi, #infoUru, #infoPer").hide("slow",function(){
      $("#infoArg").show("slow",function(){
      });
    });
  });
  $("#btnChi").click(function(){
    $("#infoBra, #infoArg, #infoUru, #infoPer").hide("slow",function(){
      $("#infoChi").show("slow",function(){
      });
    });
  });
  $("#btnUru").click(function(){
    $("#infoBra, #infoArg, #infoChi, #infoPer").hide("slow",function(){
      $("#infoUru").show("slow",function(){
      });
    });
  });
  $("#btnPer").click(function(){
    $("#infoBra, #infoArg, #infoChi, #infoUru").hide("slow",function(){
      $("#infoPer").show("slow",function(){
      });
    });
  });
  
  
  $("#btnHabA").click(function(){
    $("#boxHabB, #boxHabC, #boxHabD").slideUp("slow",function(){
    });
  });
  $("#btnHabA").click(function(){
    $("#boxHabA").slideDown("slow",function(){
    });
  });
  $("#btnHabA").click(function(){
    $("#btnHabB, #btnHabC, #boxHabD").removeClass("active",function(){
    });
  });
  $("#btnHabA").click(function(){
    $("#btnHabA").addClass("active",function(){
    });
  });
  $("#btnHabB").click(function(){
    $("#boxHabA, #boxHabC, #boxHabD").slideUp("slow",function(){
    });
  });
  $("#btnHabB").click(function(){
    $("#boxHabB").slideDown("slow",function(){
    });
  });
  $("#btnHabB").click(function(){
    $("#btnHabA, #btnHabC, #boxHabD").removeClass("active",function(){
    });
  });
  $("#btnHabB").click(function(){
    $("#btnHabB").addClass("active",function(){
    });
  });
  $("#btnHabC").click(function(){
    $("#boxHabA, #boxHabB, #boxHabD").slideUp("slow",function(){
    });
  });
  $("#btnHabC").click(function(){
    $("#boxHabC").slideDown("slow",function(){
    });
  });
  $("#btnHabC").click(function(){
    $("#btnHabA, #btnHabB, #boxHabD").removeClass("active",function(){
    });
  });
  $("#btnHabC").click(function(){
    $("#btnHabC").addClass("active",function(){
    });
  });


  $("#btnHabD").click(function(){
    $("#boxHabA, #boxHabB, #boxHabC").slideUp("slow",function(){
    });
  });
  $("#btnHabD").click(function(){
    $("#boxHabD").slideDown("slow",function(){
    });
  });
  $("#btnHabD").click(function(){
    $("#btnHabA, #btnHabB, #boxHabC").removeClass("active",function(){
    });
  });
  $("#btnHabD").click(function(){
    $("#btnHabD").addClass("active",function(){
    });
  });
  // ---------------------
  // ------------SEPARADOR
  // ---------------------
  // ---------------------
  // ---------------------
  // ---------------------
  // ---------------------
  // ---------------------
  // ---------------------
  // ---------------------
  // ---------------------
  // ---------------------
  $("#btnMisteryA").click(function(){
    $("#infoMisteryA").slideDown("slow",function(){
    });
  });
  $("#btnMisteryA").click(function(){
    $("#infoMisteryB").slideUp("slow",function(){
    });
  });
  $("#btnMisteryA").click(function(){
    $("#btnMisteryA").addClass("active",function(){
    });
  });
  $("#btnMisteryA").click(function(){
    $("#btnMisteryB").removeClass("active",function(){
    });
  });
  $("#btnMisteryB").click(function(){
    $("#infoMisteryB").slideDown("slow",function(){
    });
  });
  $("#btnMisteryB").click(function(){
    $("#infoMisteryA").slideUp("slow",function(){
    });
  });
  $("#btnMisteryB").click(function(){
    $("#btnMisteryB").addClass("active",function(){
    });
  });
  $("#btnMisteryB").click(function(){
    $("#btnMisteryA").removeClass("active",function(){
    });
  });
  // ---------------------
  // ------------SEPARADOR
  // ---------------------
  // ---------------------
  // ---------------------
  // ---------------------
  // ---------------------
  // ---------------------
  // ---------------------
  // ---------------------
  // ---------------------
  // ---------------------
  $(".btnInteresa.inactive").click(function(){
    $("#infoIntesa").slideDown("slow",function(){
    });
  });
  $(".btnInteresa.inactive").click(function(){
    $(".btnInteresa.inactive").removeClass("block",function(){
    });
  });
  $(".btnInteresa.inactive").click(function(){
    $(".btnInteresa.active").addClass("block",function(){
    });
  });
  $(".btnInteresa.active").click(function(){
    $("#infoIntesa").slideUp("slow",function(){
    });
  });
  $(".btnInteresa.active").click(function(){
    $(".btnInteresa.active").removeClass("block",function(){
    });
  });
  $(".btnInteresa.active").click(function(){
    $(".btnInteresa.inactive").addClass("block",function(){
    });
  });
  // ---------------------
  // ------------SEPARADOR
  // ---------------------
  // ---------------------
  // ---------------------
  // ---------------------
  // ---------------------
  // ---------------------
  // ---------------------
  // ---------------------
  // ---------------------
  // ---------------------
  $("#btnAtcB").click(function(){
    $("#infoAtcB").slideDown("slow",function(){
    });
  });
  $("#btnAtcB").click(function(){
    $("#infoAtcA, #infoAtcC, #infoAtcD, #infoAtcE, #infoAtcF, #infoAtcG, #infoAtcJ").slideUp("slow",function(){
    });
  });
  $("#btnAtcB").click(function(){
    $("#btnAtcB span").addClass("active",function(){
    });
  });
  $("#btnAtcB").click(function(){
    $("#btnAtcA span, #btnAtcC span, #btnAtcD span, #btnAtcE span, #btnAtcF span, #btnAtcG span, #btnAtcJ span").removeClass("active",function(){
    });
  });
  $("#btnAtcC").click(function(){
    $("#infoAtcC").slideDown("slow",function(){
    });
  });
  $("#btnAtcC").click(function(){
    $("#infoAtA, #infoAtcB, #infoAtcD, #infoAtcE, #infoAtcF, #infoAtcG, #infoAtcJ").slideUp("slow",function(){
    });
  });
  $("#btnAtcC").click(function(){
    $("#btnAtcC span").addClass("active",function(){
    });
  });
  $("#btnAtcC").click(function(){
    $("#btnAtcA span, #btnAtcB span, #btnAtcD span, #btnAtcE span, #btnAtcF span, #btnAtcG span, #btnAtcJ span").removeClass("active",function(){
    });
  });
  $("#btnAtcD").click(function(){
    $("#infoAtcD").slideDown("slow",function(){
    });
  });
  $("#btnAtcD").click(function(){
    $("#infoAtA, #infoAtcB, #infoAtcC, #infoAtcE, #infoAtcF, #infoAtcG, #infoAtcJ").slideUp("slow",function(){
    });
  });
  $("#btnAtcD").click(function(){
    $("#btnAtcD span").addClass("active",function(){
    });
  });
  $("#btnAtcD").click(function(){
    $("#btnAtcA span, #btnAtcB span, #btnAtcC span, #btnAtcE span, #btnAtcF span, #btnAtcG span, #btnAtcJ span").removeClass("active",function(){
    });
  });
  $("#btnAtcE").click(function(){
    $("#infoAtcE").slideDown("slow",function(){
    });
  });
  $("#btnAtcE").click(function(){
    $("#infoAtA, #infoAtcB, #infoAtcC, #infoAtcD, #infoAtcF, #infoAtcG, #infoAtcJ").slideUp("slow",function(){
    });
  });
  $("#btnAtcE").click(function(){
    $("#btnAtcE span").addClass("active",function(){
    });
  });
  $("#btnAtcE").click(function(){
    $("#btnAtcA span, #btnAtcB span, #btnAtcC span, #btnAtcD span, #btnAtcF span, #btnAtcG span, #btnAtcJ span").removeClass("active",function(){
    });
  });
  $("#btnAtcF").click(function(){
    $("#infoAtcF").slideDown("slow",function(){
    });
  });
  $("#btnAtcF").click(function(){
    $("#infoAtA, #infoAtcB, #infoAtcC, #infoAtcD, #infoAtcE, #infoAtcG, #infoAtcJ").slideUp("slow",function(){
    });
  });
  $("#btnAtcF").click(function(){
    $("#btnAtcF span").addClass("active",function(){
    });
  });
  $("#btnAtcF").click(function(){
    $("#btnAtcA span, #btnAtcB span, #btnAtcC span, #btnAtcD span, #btnAtcE span, #btnAtcG span, #btnAtcJ span").removeClass("active",function(){
    });
  });
  $("#btnAtcG").click(function(){
    $("#infoAtcG").slideDown("slow",function(){
    });
  });
  $("#btnAtcG").click(function(){
    $("#infoAtA, #infoAtcB, #infoAtcC, #infoAtcD, #infoAtcE, #infoAtcF, #infoAtcJ").slideUp("slow",function(){
    });
  });
  $("#btnAtcG").click(function(){
    $("#btnAtcG span").addClass("active",function(){
    });
  });
  $("#btnAtcG").click(function(){
    $("#btnAtcA span, #btnAtcB span, #btnAtcC span, #btnAtcD span, #btnAtcE span, #btnAtcF span, #btnAtcJ span").removeClass("active",function(){
    });
  });
  $("#btnAtcJ").click(function(){
    $("#infoAtcJ").slideDown("slow",function(){
    });
  });
  $("#btnAtcJ").click(function(){
    $("#infoAtA, #infoAtcB, #infoAtcC, #infoAtcD, #infoAtcE, #infoAtcF, #infoAtcG").slideUp("slow",function(){
    });
  });
  $("#btnAtcJ").click(function(){
    $("#btnAtcJ span").addClass("active",function(){
    });
  });
  $("#btnAtcJ").click(function(){
    $("#btnAtcA span, #btnAtcB span, #btnAtcC span, #btnAtcD span, #btnAtcE span, #btnAtcF span, #btnAtcG span").removeClass("active",function(){
    });
  });
  $("#btnAtcA").click(function(){
    $("#infoAtcA").slideDown("slow",function(){
    });
  });
  $("#btnAtcA").click(function(){
    $("#infoAtcB, #infoAtcC, #infoAtcD, #infoAtcE, #infoAtcF, #infoAtcG, #infoAtcJ").slideUp("slow",function(){
    });
  });
  $("#btnAtcA").click(function(){
    $("#btnAtcA span").addClass("active",function(){
    });
  });
  $("#btnAtcA").click(function(){
    $("#btnAtcB span, #btnAtcC span, #btnAtcD span, #btnAtcE span, #btnAtcF span, #btnAtcG span, #btnAtcJ span").removeClass("active",function(){
    });
  });
});