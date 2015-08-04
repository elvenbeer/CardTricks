$(function(){
	var classes = ['.ragnaros', '.ysera', '.sylvanas', '.bloodmage'];
	var degree = 180;
	var currentHero = 'ragnaros';
	$('.card').click(function(){
		if (degree%360 != 0) {
			$(currentHero).css('display', 'none');
			var nextHero = classes[Math.floor(Math.random()*4)];
			$(nextHero).css('display', 'inline');
			currentHero = nextHero;
		};
		$(this).css('transform', 'rotateY('+degree+'deg)');
		degree += 180;
	})
})