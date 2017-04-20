$(function(){
	var n = 4;
	$('#nexBtn').on('click',function(){
		initIndex(n)
		$('.page').eq(n).css({transform:'rotateY(-160deg)',zIndex:99})
		n = --n <= 0 ? 0 : n;
	})
	$('#preBtn').on('click',function(){
		initIndex(n)
		$('.page').eq(n).css({transform:'rotateY(0deg)',zIndex:99})
		n = ++n >= 4 ? 4 : n;
	})
	function initIndex(n){
		for(var i = 4; i > n; i-- ){
			$('.page').eq(i).css({zIndex:9-i});
		}
		for(var j = 0; j < n; j++ ){
			$('.page').eq(j).css({zIndex:j});
		}
	}
})