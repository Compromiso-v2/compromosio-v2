new Glider(document.querySelector('.glider'), {
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    dots: '.dots',
    rewind:true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
});