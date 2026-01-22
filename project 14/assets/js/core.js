/*------- Page Loader -------*/

 if ((".loader").length) {
      // show Preloader until the website ist loaded
      $(window).on('load', function () {
        $(".loader").fadeOut("slow");
      });
    }

/*------- Smooth Scroll -------*/

$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});

/*------- Swiper Slider -------*/
       var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 3500,
           speed: 1500,
           loop: true,
        autoplayDisableOnInteraction: false
    });



/* Nivo lightbox
    -----------------------------------------------*/
  $('.gallery-sec .col-md-4 a').nivoLightbox({
        effect: 'fadeScale',
    });


/* Istope Portfolio
-----------------------------------------------*/
jQuery(document).ready(function($){

  if ( $('.iso-box-wrapper').length > 0 ) { 

      var $container  = $('.iso-box-wrapper'), 
        $imgs     = $('.iso-box img');

      $container.imagesLoaded(function () {

        $container.isotope({
        layoutMode: 'fitRows',
        itemSelector: '.iso-box'
        });

        $imgs.load(function(){
          $container.isotope('reLayout');
        })

      });

      //filter items on button click

      $('.filter-wrapper li a').click(function(){

          var $this = $(this), filterValue = $this.attr('data-filter');

      $container.isotope({ 
        filter: filterValue,
        animationOptions: { 
            duration: 750, 
            easing: 'linear', 
            queue: false, 
        }                
      });             

      // don't proceed if already selected 

      if ( $this.hasClass('selected') ) { 
        return false; 
      }

      var filter_wrapper = $this.closest('.filter-wrapper');
      filter_wrapper.find('.selected').removeClass('selected');
      $this.addClass('selected');

        return false;
      }); 

  }

});
document.addEventListener("DOMContentLoaded", function () {

    const bannerContainer = document.getElementById("page-banner");
    if (!bannerContainer) return;

    const page = location.pathname.split("/").pop();

    // ❌ Skip home page
    if (!page || page === "index.html") return;

    const pageConfig = {
        "benefits.html": {
            title: "Benefits Of Exercise",
            image: "assets/img/contact-bg.webp"
        },
        "about.html": {
            title: "About Us",
            image: "assets/img/contact-bg.webp"
        },
        "blog.html": {
            title: "Our Blog",
            image: "assets/img/contact-bg.webp"
        },
        "gallery.html": {
            title: "Image Gallery",
            image: "assets/img/contact-bg.webp"
        },
        "contact.html": {
            title: "Contact Us",
            image: "assets/img/video-bg.webp"
        }
    };

    const current = pageConfig[page] || {
        title: document.title,
        image: "assets/img/contact-bg.webp"
    };

    bannerContainer.innerHTML = `
        <section class="page-banner" style="background-image:
            linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
            url('${current.image}')">
            <div class="container">
                <h1>${current.title}</h1>
                <nav class="breadcrumb">
                    <a href="index.html">Home</a>
                    <span>/</span>
                    <span>${current.title}</span>
                </nav>
            </div>
        </section>
    `;
});

