$(document).ready(function(){
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.shop').find('div.group').removeClass('group_active').eq($(this).index()).addClass('group_active');
         
        });

      $('.minibtn').each(function(i){
        $(this).on('click', function(e){
            e.preventDefault();
            $('.grid-container').toggleClass('grid-container_active');
            $('.grid-tovar_jibiar').eq(i).toggleClass('grid-tovar_jibiar_active');
            
           
            
        })
      });
      $('.minibtnn').each(function(i){
        $(this).on('click', function(e){
            e.preventDefault();
            $('.grid-containerr').toggleClass('grid-containerr_active');
            $('.grid-tovar_jibiarr').eq(i).toggleClass('grid-tovar_jibiarr_active');
            
        })
      });
      $('.minibtnnn').each(function(i){
        $(this).on('click', function(e){
            e.preventDefault();
            $('.grid-containerrr').toggleClass('grid-containerrr_active');
            $('.grid-tovar_jibiarrr').eq(i).toggleClass('grid-tovar_jibiarrr_active');
            
        })
      });
      $('.undo').each(function(i){
        $(this).on('click', function(e){
            e.preventDefault();
            $('.grid-container').toggleClass('grid-container_active');
            $('.grid-tovar_jibiar').eq(i).toggleClass('grid-tovar_jibiar_active');
            
        })
      });
      $('.undoo').each(function(i){
        $(this).on('click', function(e){
            e.preventDefault();
            $('.grid-containerr').toggleClass('grid-containerr_active');
            $('.grid-tovar_jibiarr').eq(i).toggleClass('grid-tovar_jibiarr_active');
           
        })
      });
      $('.undooo').each(function(i){
        $(this).on('click', function(e){
            e.preventDefault();
            $('.grid-containerrr').toggleClass('grid-containerrr_active');
            $('.grid-tovar_jibiarrr').eq(i).toggleClass('grid-tovar_jibiarrr_active');

        })
      });
      
    
$('.infobtn, .infobtnn, .infobtnnn').each(function(i){
    $(this).on('click', function(e){
        e.preventDefault();
        $('.grid-element__jibiar_item').eq(i).toggleClass('grid-element__jibiar_item_active');
        $('.grid-element__jibiar_info').eq(i).toggleClass('grid-element__jibiar_info_active');
    })
});
$('.backbtn, .backbtnn, .backbtnnn').each(function(i){
    $(this).on('click', function(e){
        e.preventDefault();
        $('.grid-element__jibiar_item').eq(i).toggleClass('grid-element__jibiar_item_active');
        $('.grid-element__jibiar_info').eq(i).toggleClass('grid-element__jibiar_info_active');
    })
  });

  $('.grid-elementtt').each(function(i){
    $(this).on('click', function(e){
        e.preventDefault();
        $('.product').toggleClass('product_active');
        $('.catalog__tabs').toggleClass('catalog__tabs_active');
        $('.header').toggleClass('header_active');
        $('.catalog__tab').eq(i).toggleClass('catalog__tab_active');
        $('.shop').eq(i).toggleClass('shop_active');
        $('.group').eq(i).toggleClass('group_active');
    })
  });
  
    $('.modal__close').on('click', function(){
  $('.overlay').toggleClass('overlay_active');
  $('.moda').toggleClass('moda_active');
      
});
$('.modal__closee').on('click', function(){
  $('.overlayy, #consultt').fadeOut();
  
});
$('.button__next').on('click', function(){
  $('.overlay').toggleClass('overlay_active');
  $('.moda').toggleClass('moda_active');
});
$('.button__basket').on('click', function(){
  $('.overlay').toggleClass('overlay_active');
  $('.moda').toggleClass('moda_active');
  $('.overlayy, #consultt').fadeIn();
});
$('.basket_shop').on('click', function(){
  $('.overlayy, #consultt').fadeIn();
});

});
