<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="icon" href="img/ot.ico" type="image/x-icon" />
		<script type="text/javascript" async="" src="orvosi_technika.js"></script>
		<link rel="stylesheet" type="text/css" href="orvosi_technika.css"></link>
		<title>Orvosi Technika kérdés-válasz</title>
	</head>
	<body onload="init();">	
	  <input list="questions" id="question" style="width:100%">
	  <datalist id="questions"></datalist>
	  <input type="button" onclick="searchAnswer()" value="Keres">
	  <input type="button" onclick="reset()" value="X">
	  <div id="answer"></div>
	</body>
</html>
