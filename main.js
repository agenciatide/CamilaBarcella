// Slide produtos
$('.slider-products').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
  prevArrow:
    '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
  nextArrow:
    '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// Slide depoimentos
$('.slider-depoimentos').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  arrows: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
      },
    },
  ],
});

// inicia o accordeon fechado ao carregar a pagina
window.onload = function () {
  var accordionHeaders = document.getElementsByClassName('accordion-header');
  for (var i = 0; i < accordionHeaders.length; i++) {
    var accordionContent = accordionHeaders[i].nextElementSibling;
    accordionContent.style.display = 'none';
  }
};

// funcao de abrir e fechar o accordeon
$(document).ready(function () {
  $('.accordion-header').click(function () {
    $('.accordion-content').not($(this).next()).slideUp();
    $(this).next().slideToggle();
  });
});

// galeria
var gallery = document.querySelector('.gallery');
var images = gallery.querySelectorAll('img');

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener('click', function () {
    this.classList.add('expanded');
  });
}

const overlay = document.querySelector('.overlay');

images.forEach(function (img) {
  img.addEventListener('click', function () {
    images.forEach(function (image) {
      image.classList.remove('expanded');
    });
    this.classList.add('expanded');

    overlay.style.visibility = 'visible';
  });
});

const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', function () {
  images.forEach(function (image) {
    image.classList.remove('expanded');
  });
  overlay.style.visibility = 'hidden';
});

document.addEventListener('keydown', function (e) {
  if (e.keyCode === 27) {
    images.forEach(function (image) {
      image.classList.remove('expanded');
    });
    overlay.style.visibility = 'hidden';
  }
});

//

$(document).ready(function () {
  $('form').submit(function (e) {
    e.preventDefault();
    $('#status')
      .html("<i class='fa fa-spinner fa-spin'></i>")
      .addClass('loading');
    var formData = $(this).serialize();
    $.ajax({
      type: 'POST',
      url: 'sendMail.php',
      data: formData,
      success: function (data) {
        $('#status').html(data).removeClass('loading');
        $('#status').html(data).addClass('status-success');
      },
      error: function (data) {
        $('#status').html(data).removeClass('loading');
        $('#status').html(data).addClass('status-error');
      },
    });
  });
});

// menu hamburguer
$(document).ready(function () {
  $('.menu .btn').on('click', function () {
    $('#nav').toggleClass('menu_show');
  });
});
