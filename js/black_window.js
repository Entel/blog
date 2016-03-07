$('.black_windows').hide();

$('.album_item').click(function(){

	state = $('.black_windows').attr('state');
	id = $(this).attr('id');
	var ng = /_icon/
	iconImg = $(this).children('.album_img').children('img').attr('src');
	intro = $(this).children('.img_intro').text();
	// console.log(intro)
	// console.log(iconImg);

	if (state == 0)
	{
		largeImg = iconImg.replace(ng, '');
		$('.black_windows').children('.showed_img').children('img').attr('src', largeImg);
		$('.black_windows').children('.showed_img_intro').children('p').text(intro);
		$('.black_windows').show();
		$('.black_windows').attr('state', 1);
	}
});

$('.black_windows').click(function(){

	state = $('.black_windows').attr('state');

	if (state == 1)
	{
		$('.black_windows').hide();
		$('.black_windows').attr('state', 0);
	}
})