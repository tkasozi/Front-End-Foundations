$(document).ready(function(){
    //$('footer').css('margin-top',$('.main-content').height()/2);
    awesomeFunc('btn');
    awesomeFunc('nav-btn');    
});

let awesomeFunc = (className) =>{
    const element = $('.'+className);
    element.on("mouseover", function() {
          $(this).addClass('awesome-font');
      }).on('mouseleave',()=> {
        $(element).removeClass('awesome-font'); 
      });
}