(function($) {
	$.fn.avg 				= function(params) {
		params 			= $.extend( {items:"div"}, params);
		var sum			= 0;
		var nbValues	= 0;
		var result 		= [];
		this.each(function() {
			$(this).find(params.items).each(function() {
				if($(this).val()!="" && $.isNumeric($(this).val())){
					sum+=parseFloat($(this).val());
					nbValues++;
				}else if($(this).text()!="" && $.isNumeric($(this).text())){
					sum+=parseFloat($(this).text());
					nbValues++;
				}
			})
			result.push(nbValues==0?false:(sum/nbValues));
		})
		return result;
	}
	$.fn.max 				= function(params) {
		params 			= $.extend( {items:"div"}, params);
		var max			= null;
		var result 		= [];
		this.each(function() {
			$(this).find(params.items).each(function() {
				if($(this).val()!="" && $.isNumeric($(this).val())){
					max			= max==null?parseFloat($(this).val()):parseFloat($(this).val())>max?parseFloat($(this).val()):max;
				}else if($(this).text()!="" && $.isNumeric($(this).text())){
					max			= max==null?parseFloat($(this).text()):parseFloat($(this).text())>max?parseFloat($(this).text()):max;
				}
			})
			result.push(max);
		})
		return result;
	}
	$.fn.min 				= function(params) {
		params 			= $.extend( {items:"div"}, params);
		var min			= null;
		var result 		= [];
		this.each(function() {
			$(this).find(params.items).each(function() {
				if($(this).val()!="" && $.isNumeric($(this).val())){
					min			= min==null?parseFloat($(this).val()):parseFloat($(this).val())<min?parseFloat($(this).val()):min;
				}else if($(this).text()!="" && $.isNumeric($(this).text())){
					min			= min==null?parseFloat($(this).text()):parseFloat($(this).text())<min?parseFloat($(this).text()):min;
				}
			})
			result.push(min);
		})
		return result;
	}
	$.fn.isPrimeNumber				= function(nb) {
 		var compter = 0;
		var limite = Math.sqrt(nb) + 1;
		var test = true;
		if (nb % 2 == 0)
			test = false;
		else{
			for (var i = 3 ; i < limite && ! test; i+=2, compter++)
				if (nb % i == 0)
					test = false;
		}
		return test;
	}
})(jQuery);