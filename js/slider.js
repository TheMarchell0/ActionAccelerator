$('.carousel-container').slick({
    infinite: true,
    centerMode: true,
    centerPadding: '12%',
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 700,
        centerPadding: '5%',
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  