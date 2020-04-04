<!DOCTYPE html>
<html lang="en-US">
<head>
	<title>GlasshouseMainPage</title>
	<link rel="stylesheet" type="text/css" href="glasshouseStyle.css">
</head>

<body>
<h1>Glasshouse</h1>
<h3 class="titleText">A review site</h3>

<label for="businessSelect">Enter or select a restaurant</label>
<br>
<input list="businesses" id="businessSelect" name="businessSelect"/>
<form class="leftCol">
	<datalist id="businesses">
		<option value="Fabiano's">
		<option value="Sumo">
		<option value="McDonald's">
	</datalist>
</form>

<form class="rightCol" action="submittedReview.html"
	  method="post">
	<label for="userReview">Write your review below</label><br>
	<textarea id="userReview" name="userReview" rows="10"
			   cols="30" placeholder="Don't write"></textarea>
	<br>
	<input type="submit" value="Submit"/>

</form>


<button class="leftCol" type="button"
		onclick="document.getElementById('time').innerHTML = Date()">
	What time is it?</button>

<button class="leftCol" type="button"
		onclick="assignCustomer()">
	Does button work?</button>

<p id="time"></p>
<p id="username">Bob</p>

<script src="database.js"></script>
</body>
</html>
