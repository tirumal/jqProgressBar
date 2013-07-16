jqProgressBar
=============

Simple jQuery progress bar to show percentage increase or decrease by animating the width.


Usage:
=====
<pre>
$(".progressBar3").jqProgressBar({
      "percent" : 80,
      "speed"   : 300,
      "showText": true
}); 
</pre>

Settings
=======
<table>
<tr><td>
"initPercent":  (default 0) Set the initial Percent point, from where the animation begins; type: integer
</td></tr><tr><td>
 "percent"    : (default 100), Set the final percent point; type: integer
 </td></tr><tr><td>
 "speed"      : (default 600), Set the animation speed; type: integer
 </td></tr><tr><td>
 "showText" : (default true), Show text inside the progress bar; type: boolean
 </td></tr><tr><td>
 "text"       : <code>"&nbsp;%&nbsp;"</code> text display inside the progress bar after final percentage value; type: string
 </td></tr>
 <table>
