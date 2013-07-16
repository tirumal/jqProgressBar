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
<table class="listing">
<tr>
<th>Property</th>
<th>Default</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td>initPercent</td>
<td>0</td>
<td>integer</td>
<td>Set the initial Percent point, from where the animation begins</td>
</tr>
<tr>
<td>percent</td>
<td>100</td>
<td>integer</td>
<td>Set the final percent point</td>
</tr>
<tr>
<td>speed</td>
<td>600</td>
<td>integer</td>
<td>Set the animation speed</td>
</tr>
<tr><td>showText</td>
<td>true</td>
<td>boolean</td>
<td>Show text inside the progress bar</td>
</tr>
<tr><td>text</td>
<td>%</td>
<td>string</td>
<td>Text display inside the progress bar after final percentage value</td>
</tr>
</table>
