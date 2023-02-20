//var canvas = $('#mixture_canvas');
//var context = canvas.getContext('2d');
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);


$('html').mousemove(function(e){
		
		var wx = $(window).width();
		var wy = $(window).height();
		
		var x = (e.pageX - $('#triangle-1').offset().left) / $('#triangle-1').width();
		var y = 1 - (e.pageY - $('#triangle-1').offset().top) / $('#triangle-1').height();
		
		x = clamp(x, 0, 1);
		y = clamp(y, 0, 1);
		
		var x1 = 0;
		var x2 = 1;
		var x3 = 0.5;
		var y1 = 0;
		var y2 = 0;
		var y3 = Math.sqrt(3) / 2.0;
		
		
		var pi_1 = ((y2-y3)*(x-x3) + (x3-x2)*(y-y3)) / (((y2-y3)*(x1-x3)) + ((x3-x2)*(y1-y3)));
		var pi_2 = ((y3-y1)*(x-x3) + (x1-x3)*(y-y3)) / (((y2-y3)*(x1-x3)) + ((x3-x2)*(y1-y3)));
		var pi_3 = 1-pi_1-pi_2;
		
		pi_1 = clamp(pi_1, 0, 1);
		pi_2 = clamp(pi_2, 0, 1);
		pi_3 = clamp(pi_3, 0, 1);
		
		
		$('#triangle-1').css("opacity", pi_1);
		$('#triangle-2').css("opacity", pi_2);
		$('#triangle-3').css("opacity", pi_3);
		
		var pmp_left_px = (e.pageX - $('#mixture-canvas').offset().left) + 'px';
		var pmp_top_px = (e.pageY - $('#mixture-canvas').offset().top) + 'px';
		
    $('#pmp-obs').css("left", pmp_left_px);
    $('#pmp-obs').css("top", pmp_top_px);
    
		
		$('#debug-text').text("Observed PMPs: (" + pi_1.toFixed(2) + ", " + pi_2.toFixed(2) + ", " + pi_3.toFixed(2) +")");
	});