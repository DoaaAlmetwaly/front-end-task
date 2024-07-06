
icon = document.querySelector('.icon');
icon.onclick=function(){
    navBar=document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
}
  
//      $(document).ready(function () {
//        $(".carousel_se_01_carousel").owlCarousel({
//          items: 1,
       
       
//      });
//  });
 $(document).ready(function () {
     $(".carousel_se_02_carousel").owlCarousel({
       items: 1,
      nav:true,
      dots:false
   });
 });

 