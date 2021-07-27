// FILTRO PAGINA CATEGORIA
$('.ativar').on('click', function(){
  var categoria = $(this).attr('data-categoria')
  if(categoria == 'todos'){
      $('.produtos > div').show()
  }else{
      $('.produtos > div').each(function(){
          if(!$(this).hasClass(categoria)){
              $(this).hide()
          }else{
              $(this).show()
          }
      })
  }
})