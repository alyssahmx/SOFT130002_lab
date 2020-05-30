<html>
<head>
    <title>Exercise 1</title>
</head>
<body>
<h1>Regular HTML section (outside &lt;?php ... ?&gt; tags)</h1>
<p>You can type regular HTML here and it will show up</p>

<h1>PHP section (inside &lt;?php ... ?&gt; tags)</h1>
<?php
//this is a php comment IN tags (will not appear)
$date = date("l M dS ,Y H:i:s");
echo "This page was generated: " . $date ."<hr/>";
$remaining = 365 - date("z");
echo "There are ". $remaining . " days left in the year";
/*$year = date("Y");
$remainingyear = 366 - date("z");
if($year%4==0){
    echo "There are ". $remainingyear . " days left in the year";
}else {
    echo "There are ". $remaining . " days left in the year";
}
*/
echo "<br>"; //notice we must echo tags in php.

?>
</body>
</html>