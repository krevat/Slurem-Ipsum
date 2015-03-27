<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Slurem Ipsum BETA</title>
	<link rel="stylesheet" href="css/style.css">
	<!--[if lt IE 9]>
		<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
</head>
	
<body>

<!-- <img src = "fi.png" style = "border-bottom: 1px white solid;"> -->
<!-- <div id ="container"> -->
<h1>Slurem Ipsum BETA</h1>

<?php
	if ($_POST) {
	echo "DOVIE FIX IT";
}
?>

<!-- <p>How much nonsense would you like?</p> -->

		<form id="ipsum-form" action="#" method="post">
			Paragraphs: <input id="paragraph_count" style="width: 25px;" type="text" maxlength="2" /><br>
			Type:

						<!-- default choice on load -->
						<input id="default" type="radio" name="choice" value="default" style="display:none" />
						<!-- mixed -->
						<input id="mixed-lorem" type="radio" name="choice" value="mixed-lorem" checked />
						<label for="mixed-lorem">Slurem Ipsum Classic</label> 
						<!-- just drunk -->
						<input id="just-slorem" type="radio" name="choice" value="just-slorem" />
						<label for="just-slorem">Sans Latin</label> 
						<br />
						<!-- submit button -->
						<input type="submit" id="submit" value="Submit" />
		</form>

		<div id="print-paragraphs"></div>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
	<script>window.jQuery || document.write('<script src="js/jquery-1.8.0.min.js"><\/script>')</script>
	<script src="js/ipsum.js"></script>
<!-- </div> -->
</body>
</html>