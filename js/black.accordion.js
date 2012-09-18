/* ==========================================================
 * black.accordion.js
 * http://icodewithlizard.com/black.accordion/
 * ==========================================================
 * Copyright 2012 blacklizard.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
 
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