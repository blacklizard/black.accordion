(function( $ ){

  $.fn.accordion = function( options ) {  

	//speed setting
    var settings = $.extend( {
      'speed'         : 'fast'
    }, options);

	//main ul for accordion
	var $ul = '#'+$(this).attr('id');
	//loop through all title div
    $($ul+' li .title').each(function() {
		var $this = $(this);
		// on click for eacj title div
		$this.click(function () 
		{
			//stop any ongoing animation for content div
			$('.content:animated').stop(true, true);
			
			//if currently clicked is active
			if($this.is('.active'))
			{
				//remove active state icon
				$this.find('.icon').removeClass('icon-active');
				//close the opened content div
				$this.removeClass('active').next().slideUp(settings.speed);
			}
			else
			{	
				//remove active state icon
				$($ul).find('.icon').removeClass('icon-active');
				//close all opened div
				$($ul).find('.active').removeClass('active').next().slideUp(settings.speed);
				//add active state icon for currently clicked div
				$this.find('.icon').addClass('icon-active');
				//open clicked div
				$this.addClass('active').next().slideDown(settings.speed);
			}
		});
    });
  };
})( jQuery );