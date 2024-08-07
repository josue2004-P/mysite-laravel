import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();


document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el botón del menú y el navbar
    var menuButton = document.querySelector('.tootle-navbar');
    var navbar = document.getElementById('navbar');

    // Función para mostrar u ocultar el navbar
    function toggleNavbar() {
      // Verificar si el navbar está oculto
      if (navbar.classList.contains('hidden')) {
        // Mostrar el navbar
        navbar.classList.remove('hidden');
      } else {
        // Ocultar el navbar
        navbar.classList.add('hidden');
      }
    }

    // Agregar un evento de escucha al botón del menú
    menuButton.addEventListener('click', toggleNavbar);

    // Función para manejar el cambio de tamaño de la ventana
    function handleResize() {
      if (window.matchMedia("(min-width: 907px)").matches) {
        // Si el ancho de la ventana es 768px o más, remover la clase 'hidden'
        navbar.classList.remove('hidden');
      } else {
        // Si el ancho de la ventana es menos de 768px, agregar la clase 'hidden'
        navbar.classList.add('hidden');
      }
    }

    // Llamar a la función handleResize al cargar la página
    handleResize();

    // Agregar un evento de escucha para el cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);
});

(function ($) {
  "use strict";

  // Navbar on scrolling
  $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
          $('.navbar').fadeIn('slow').css('display', 'flex');
      } else {
          $('.navbar').fadeOut('slow').css('display', 'none');
      }
  });


  // Smooth scrolling on the navbar links
  $(".navbar-nav a").on('click', function (event) {
      if (this.hash !== "") {
          event.preventDefault();
          
          $('html, body').animate({
              scrollTop: $(this.hash).offset().top - 45
          }, 1500, 'easeInOutExpo');
          
          if ($(this).parents('.navbar-nav').length) {
              $('.navbar-nav .active').removeClass('active');
              $(this).closest('a').addClass('active');
          }
      }
  });


  // Typed Initiate
  if ($('.typed-text-output').length == 1) {
      var typed_strings = $('.typed-text').text();
      var typed = new Typed('.typed-text-output', {
          strings: typed_strings.split(', '),
          typeSpeed: 100,
          backSpeed: 20,
          smartBackspace: false,
          loop: true
      });
  }


  // Modal Video
  $(document).ready(function () {
      var $videoSrc;
      $('.btn-play').click(function () {
          $videoSrc = $(this).data("src");
      });
      console.log($videoSrc);

      $('#videoModal').on('shown.bs.modal', function (e) {
          $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
      })

      $('#videoModal').on('hide.bs.modal', function (e) {
          $("#video").attr('src', $videoSrc);
      })
  });


  // Scroll to Bottom
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          $('.scroll-to-bottom').fadeOut('slow');
      } else {
          $('.scroll-to-bottom').fadeIn('slow');
      }
  });


  // Skills
  $('.skill').waypoint(function () {
      $('.progress .progress-bar').each(function () {
          $(this).css("width", $(this).attr("aria-valuenow") + '%');
      });
  }, {offset: '80%'});


  // Portfolio isotope and filter
  var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
  });
  $('#portfolio-flters li').on('click', function () {
      $("#portfolio-flters li").removeClass('active');
      $(this).addClass('active');

      portfolioIsotope.isotope({filter: $(this).data('filter')});
  });
  
  
  // Back to top button
  $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
          $('.back-to-top').fadeIn('slow');
      } else {
          $('.back-to-top').fadeOut('slow');
      }
  });
  $('.back-to-top').click(function () {
      $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
      return false;
  });


  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1500,
      dots: true,
      loop: true,
      items: 1
  });
  
})(jQuery);

