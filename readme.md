# black Accordion #

A jQuery plugin to create accordion effect.

HTML structure

	<ul id="accordion">
		<li>
			<div class="title"><div class="icon"></div>Lorem ipsum</div>
			<div class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </div>
		</li>
		<li>
			<div class="title"><div class="icon"></div>Lorem ipsum</div>
			<div class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </div>
		</li>
	</ul>

jQuery

	$(document).ready(function() {
	   $('#accordion').accordion({
			'speed' : 'fast'
		});
	});

## [Preview](http://icodewithlizard.com/black.accordion/) ##