jqProgressBar
=============

Simple jQuery progress bar to show percentage increase or decrease by animating the width.


Usage:
=====

$(".progressBar3").jqProgressBar({
      "percent" : 80,
      "speed"   : 300,
      "showText": true
}); 

Settings
=======

"initPercent":  (default 0) Set the initial Percent point, from where the animation begins; type: integer
 "percent"    : (default 100), Set the final percent point; type: integer
 "speed"      : (default 600), Set the animation speed; type: integer
 "showText" : (default true), Show text inside the progress bar; type: boolean
 "text"       : "&nbsp;%&nbsp;" text display inside the progress bar after final percentage value; type: string
