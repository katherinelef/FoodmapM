$(document).ready(function(){
  var $img=$('#img-foot');
  // funcion para mostrar imagenes de restaurantes
  function showImage(event) {
    for (i = 0; i < data.length; i++) {
      $img.append('<div class="collection"><p class="name" id="type">' + data[i].typeFood + '</p><img class="img"  src=' + data[i].img + '></div>');
    }
  }
  showImage();
   


  // funcion para filtrar por tipo de comida
  
  $('#search').keyup(function() {
    var nombre = $(this).val();
    $('.collection').hide();

    $('.collection').each(function() {
      var search = $(this).text();
      if (search.indexOf(nombre) !== -1) {
        $(this).show();
      }
    });
  });
});