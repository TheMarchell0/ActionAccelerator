$('.qe-container').accordion({
	heightStyle: 'content',
	header: '> .qe-item > .qe-item__title'
});

$('.s-types-line-slider').slick({
	adaptiveHeight: true
});
$('.s-how-container__next').click(() => {
	$('#s-how-container--2__nav-1').css('display' , 'block')
	$('.s-how-container__next').css('display' , 'none')
})
$('.s-how-container__next-2').click(() => {
	$('#s-how-container--2__nav-2').css('display' , 'block')
	$('.s-how-container__next-2').css('display' , 'none')
})
$('.s-student__container-slider').slick({
	adaptiveHeight: true
});

function onEntry(entry) {
	entry.forEach(change => {
	  if (change.isIntersecting) {
		change.target.classList.add('element-show');
	  }
	});
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  for (let elm of elements) {
	observer.observe(elm);
  }

  const tabParent = $('.s-types-map');

  tabParent.on('click', '.s-types-table', function(){
	if(!$(this).hasClass('.s-types-table--active')) {
	  tabParent
		.find('.s-types-table__title > .--active, .s-types-table__text .--active')
		.removeClass('--active');
		
	  $(this)
		.addClass('s-types-table--active');

	tabParent
		.find('.s-types-table > .s-types-table__title')
		.eq($(this).index())
		.addClass('s-types-table__title--active');

	  tabParent
		.find('.s-types-table > .s-types-table__text')
		.eq($(this).index())
		.addClass('s-types-table__text--active');
	}
	setTimeout(() => {
		$(this).removeClass('s-types-table--active');
		tabParent
			.find('.s-types-table > .s-types-table__title')
			.eq($(this).index())
			.removeClass('s-types-table__title--active');
		tabParent
			.find('.s-types-table > .s-types-table__text')
			.eq($(this).index())
			.removeClass('s-types-table__text--active');
	}, 5000)
  });
  const tab = $('.s-types-table');
  
  tab.hover( function(){
	if(!$(this).hasClass('.s-types-table--active')) {
	  tabParent
		.find('.s-types-table__title > .--active, .s-types-table__text .--active')
		.removeClass('--active');
		
	  $(this)
		.addClass('s-types-table--active');

	tabParent
		.find('.s-types-table > .s-types-table__title')
		.eq($(this).index())
		.addClass('s-types-table__title--active');

	  tabParent
		.find('.s-types-table > .s-types-table__text')
		.eq($(this).index())
		.addClass('s-types-table__text--active');
	}
	setTimeout(() => {
		$(this).removeClass('s-types-table--active');
		tabParent
			.find('.s-types-table > .s-types-table__title')
			.eq($(this).index())
			.removeClass('s-types-table__title--active');
		tabParent
			.find('.s-types-table > .s-types-table__text')
			.eq($(this).index())
			.removeClass('s-types-table__text--active');
	}, 5000)
  });


