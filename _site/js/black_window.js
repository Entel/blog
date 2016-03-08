$('.black_windows').hide();

$('.album_item').click(function(){

	state = $('.black_windows').attr('state');
	id = $(this).attr('id');
	var ng = /_icon/
	var imgWidth, imgHeight;
	var showedWidth, showedHeight;
	iconImg = $(this).children('.album_img').children('img').attr('src');
	intro = $(this).children('.img_intro').text();

	// console.log(intro)
	// console.log(iconImg);

		largeImg = iconImg.replace(ng, '');
		$('<img/>').attr('src', largeImg).load(function(){
			imgWidth = this.width;
			imgHeight = this.height;
			showedWidth = $('.black_windows').children('.showed_img').width();
			showedHeight = $('.black_windows').children('.showed_img').height();
			console.log(showedWidth, showedHeight);
			// console.log(largeImg);
				// console.log(imgWidth, imgHeight);
			if (parseInt(imgWidth)/parseInt(imgHeight) < showedWidth/showedHeight)
			{
				// console.log('2');
				$('.black_windows').children('.showed_img').children('img').addClass('high_img');
			}
			else
			{
				$('.black_windows').children('.showed_img').children('img').addClass('wide_img');
			}
		});
		$('.black_windows').children('.showed_img').children('img').attr('src', largeImg);
		$('.black_windows').children('.showed_img_intro').children('p').text(intro);
		$('.black_windows').show();
});

$('.black_windows').click(function(){

	state = $('.black_windows').attr('state');

		$('.black_windows').hide();
		$('.black_windows').children('.showed_img').children('img').removeClass('high_img');
		$('.black_windows').children('.showed_img').children('img').removeClass('wide_img');
})