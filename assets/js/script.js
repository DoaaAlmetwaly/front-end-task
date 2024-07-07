/**toggel button */
icon = document.querySelector('.icon');
icon.onclick=function(){
    navBar=document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
}
  
/**carsouel */
 if ($("#slider-recruitment").length) {
  $("#slider-recruitment").owlCarousel({
   loop: true,
   margin: 10,
   nav: false,
   items: 5,
   autoplayTimeout: 3500,
  autoplayHoverPause: false,
   rtl: true,
  autoplay: true,
  
   autoplayHoverPause: true,
   dots: true,
   smartSpeed: 500,
   responsiveClass: true,
    responsive: {
   0: {
   items: 1,
   },
   },
   });
  }
  if ($("#carousel_se_02_carousel").length) {
    $("#carousel_se_02_carousel").owlCarousel({
     loop: true,
     margin: 20,
     nav:true,
    dots:false,
     items: 3,
     autoplayTimeout: 3500,
    autoplayHoverPause: false,
     rtl: true,
    autoplay: true,
    
     autoplayHoverPause: true,
     smartSpeed: 700,
     responsiveClass: true,
      responsive: {
     0: {
     items: 1,
     },
     },
     });
    }
  /** language*/

function changeLanguage(lang) {
  alert(lang === 'en' ? 'Language changed to English.' : 'تم تغيير اللغة إلى العربية');
}
