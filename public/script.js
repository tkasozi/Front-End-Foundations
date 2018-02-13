$(document).ready(function(){
    //$('footer').css('margin-top',$('.main-content').height()/2);
    while(true){
      $(".btn").on("mouseover", function() {
          $(this).css('font-size','large');
      });
      $('.btn').on('mouseleave',()=> $(this).css('font-size','13px'));
    }
});