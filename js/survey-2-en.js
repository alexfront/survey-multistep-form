// JavaScript Document

	
	var target = document.getElementById("calculate");
	var total = 0; 
	
	
	var again = document.getElementById("refresh");
	
	target.addEventListener('click',processAnswers,false);
	//again.addEventListener('click',refreshPage, false);
	
	function refreshPage () {
		window.location.reload(false);
	}
	
	
	
	function processAnswers() {
		//var total=0; 
		var numQuestion = 0; 
		var myScore1 = document.getElementsByName("q1");
		var answered1 = false; 
		for (var i = 0; i < myScore1.length; i++) {
			if (myScore1[i].checked) {
			// do whatever you want with the checked radio
				//console.log(myScore[i].value);
			var currentScore1 = myScore1[i].value;
			// only one radio can be logically checked, don't check the rest
				total += Number(currentScore1);
				numQuestion ++;
				answered1 = true;  
				//
				break;
				
				
			}
			
		}
		if (answered1 == false){
			document.getElementById("a1").innerHTML = "*  Please answer this question!"; 
		}
		
		var myScore2 = document.getElementsByName("q2");
		var answered2 = false; 
		for (var i = 0; i < myScore2.length; i++) {
			if (myScore2[i].checked) {
			// do whatever you want with the checked radio
				//console.log(myScore[i].value);
			var currentScore2 = myScore2[i].value;
			// only one radio can be logically checked, don't check the rest
				total += Number(currentScore2);
				numQuestion ++; 
				var answered1 = true; 
				answered2 = true;
				//document.getElementById("score").innerHTML = currentScore;
				break;
				
				
			}
			
		}
		if (answered2 == false){
			document.getElementById("a2").innerHTML = "*  Please answer this question!"; 
		}
		
		var myScore3 = document.getElementsByName("q3");
		var answered3 = false; 
		for (var i = 0; i < myScore3.length; i++) {
			if (myScore3[i].checked) {
			// do whatever you want with the checked radio
				//console.log(myScore[i].value);
			var currentScore3 = myScore3[i].value;
			// only one radio can be logically checked, don't check the rest
				total += Number(currentScore3);
				numQuestion ++;
				answered3 = true;
				//document.getElementById("score").innerHTML = currentScore;
				break;
			 
				
			}
			
		}
		if (answered3 == false){
			document.getElementById("a3").innerHTML = "*  Please answer this question!"; 
		}
		
		var myScore4 = document.getElementsByName("q4");
		var answered4 = false; 
		for (var i = 0; i < myScore4.length; i++) {
			if (myScore4[i].checked) {
			// do whatever you want with the checked radio
				//console.log(myScore[i].value);
			var currentScore4 = myScore4[i].value;
			// only one radio can be logically checked, don't check the rest
				total += Number(currentScore4);
				numQuestion ++;
				answered4 = true;
				//document.getElementById("score").innerHTML = currentScore;
				break;
				
			}
			
		}
		if (answered4 == false){
			document.getElementById("a4").innerHTML = "*  Please answer this question!"; 
		}
		
		var myScore5 = document.getElementsByName("q5");
		var answered5 = false; 
		for (var i = 0; i < myScore5.length; i++) {
			if (myScore5[i].checked) {
			// do whatever you want with the checked radio
				//console.log(myScore[i].value);
			var currentScore5 = myScore5[i].value;
			// only one radio can be logically checked, don't check the rest
				total += Number(currentScore5);
				numQuestion ++;
				answered5 = true;
				//document.getElementById("score").innerHTML = currentScore;
				break;
				
			}
			
		}
		if (answered5 == false){
			document.getElementById("a5").innerHTML = "*  Please answer this question!"; 
		}
		
		var myScore6 = document.getElementsByName("q6");
		var answered6 = false; 
		for (var i = 0; i < myScore6.length; i++) {
			if (myScore6[i].checked) {
			// do whatever you want with the checked radio
				//console.log(myScore[i].value);
			var currentScore6 = myScore6[i].value;
			// only one radio can be logically checked, don't check the rest
				total += Number(currentScore6);
				numQuestion ++;
				answered6 = true;
				//document.getElementById("score").innerHTML = currentScore;
				break;
				
			}
			
		}
		if (answered6 == false){
			document.getElementById("a6").innerHTML = "*  Please answer this question!"; 
		}
		
		var myScore7 = document.getElementsByName("q7");
		var answered7 = false; 
		for (var i = 0; i < myScore7.length; i++) {
			if (myScore7[i].checked) {
			// do whatever you want with the checked radio
				//console.log(myScore[i].value);
			var currentScore7 = myScore7[i].value;
			// only one radio can be logically checked, don't check the rest
				total += Number(currentScore7);
				numQuestion ++;
				answered7 = true;
				//document.getElementById("score").innerHTML = currentScore;
				break;
				
			}
			
		}
		if (answered7 == false){
			document.getElementById("a7").innerHTML = "*  Please answer this question!"; 
		}
		
		var myScore8 = document.getElementsByName("q8");
		var answered8 = false; 
		for (var i = 0; i < myScore8.length; i++) {
			if (myScore8[i].checked) {
			// do whatever you want with the checked radio
				//console.log(myScore[i].value);
			var currentScore8 = myScore8[i].value;
			// only one radio can be logically checked, don't check the rest
				total += Number(currentScore8);
				numQuestion ++;
				answered8 = true;
				//document.getElementById("score").innerHTML = currentScore;
				break;
				
				
			}
			
		}
		if (answered8 == false){
			document.getElementById("a8").innerHTML = "*  Please answer this question!"; 
		}
		
		var myScore9 = document.getElementsByName("q9");
		var answered9 = false; 
		for (var i = 0; i < myScore9.length; i++) {
			if (myScore9[i].checked) {
			// do whatever you want with the checked radio
				//console.log(myScore[i].value);
			var currentScore9 = myScore9[i].value;
			// only one radio can be logically checked, don't check the rest
				total += Number(currentScore9);
				numQuestion ++;
				answered9 = true;
				//document.getElementById("score").innerHTML = currentScore;
				break;
				
			}
			
		}
		if (answered9 == false){
			document.getElementById("a9").innerHTML = "*  Please answer this question!"; 
		}
		
		// ============= new section start ============================================================ */
		
		
		
		var myScore10 = document.getElementsByName("q10");
		var answered10 = false; 
		for (var i = 0; i < myScore10.length; i++) {
			if (myScore10[i].checked) {
			// do whatever you want with the checked radio
				//console.log(myScore[i].value);
			var currentScore10 = myScore10[i].value;
			// only one radio can be logically checked, don't check the rest
				total += Number(currentScore10);
				numQuestion ++;
				answered10 = true;
				//document.getElementById("score").innerHTML = currentScore;
				break;
				
			}
			
		}
		if (answered10 == false){
			document.getElementById("a10").innerHTML = "*  Please answer this question!"; 
		}
		
		
		
		var myScore11 = document.getElementsByName("q11");
		var answered11 = false; 
		for (var i = 0; i < myScore11.length; i++) {
			if (myScore11[i].checked) {
			// do whatever you want with the checked radio
				//console.log(myScore[i].value);
			var currentScore11 = myScore11[i].value;
			// only one radio can be logically checked, don't check the rest
				total += Number(currentScore11);
				numQuestion ++;
				answered11 = true;
				//document.getElementById("score").innerHTML = currentScore;
				break;
				
			}
			
		}
		if (answered11 == false){
			document.getElementById("a11").innerHTML = "Please select one of these options"; 
		}
		
		
		
		var myScore12 = document.getElementsByName("q12");
		var answered12 = false; 
		for (var i = 0; i < myScore12.length; i++) {
			if (myScore12[i].checked) {
			// do whatever you want with the checked radio
				//console.log(myScore[i].value);
			var currentScore12 = myScore12[i].value;
			// only one radio can be logically checked, don't check the rest
				total += Number(currentScore12);
				numQuestion ++;
				answered12 = true;
				//document.getElementById("score").innerHTML = currentScore;
				break;
				
			}
			
		}
		if (answered12 == false){
			document.getElementById("a12").innerHTML = "Please select one of these options"; 
		}
		
		
		
		var myScore13 = document.getElementsByName("q13");
		var answered13 = false; 
		for (var i = 0; i < myScore13.length; i++) {
			if (myScore13[i].checked) {
			// do whatever you want with the checked radio
				//console.log(myScore[i].value);
			var currentScore13 = myScore13[i].value;
			// only one radio can be logically checked, don't check the rest
				total += Number(currentScore13);
				numQuestion ++;
				answered13 = true;
				//document.getElementById("score").innerHTML = currentScore;
				break;
				
			}
			
		}
		if (answered13 == false){
			document.getElementById("a13").innerHTML = "Please select one of these options"; 
		}
		
		
		
		// =============  / new section END ============ */
		
		
		
		var myScore14 = document.getElementsByName("q14");
		var answered14 = false; 
		for (var i = 0; i < myScore14.length; i++) {
			if (myScore14[i].checked) {
			// do whatever you want with the checked radio
				//console.log(myScore[i].value);
			var currentScore14 = myScore10[i].value;
			// only one radio can be logically checked, don't check the rest
				total += Number(currentScore14);
				numQuestion ++;
				answered14 = true; 
				//document.getElementById("score").innerHTML = currentScore;
				break;
				
			}
			
		}
		if (answered14 == false){
			document.getElementById("a14").innerHTML = "Please select one of these options"; 
		}
		
		if (numQuestion!=14){
			
			//window.alert("Please answer all question!");
			$('#errorModal').modal('show');
			//document.getElementById("error").innerHTML = "Please answer all questions!";
			for (var i=1; i<11; i++)
			{
				var currentError = "a"+i; 
				var currentQuestion = "q"+i;
				var currentTarget = document.getElementsByName(currentQuestion); 
				for (var j=0; j<currentTarget.length; j++){
					if(currentTarget[j].checked){
						document.getElementById(currentError).innerHTML = ""; 
						break;
					}
				}
			}
		}
		
		else {
			showResult();
			for (var i=1; i<15; i++){
				var currentID = "a"+i;
				document.getElementById(currentID).innerHTML =""; 
				document.getElementById("error").innerHTML = "";
			}
		}
		
		
	}
	
	
	
	function showResult (){
		
		//document.getElementById("score").innerHTML = total;
		//var title = document.createElement("h4");
		//var content = document.createElement("p");
		//var p2 = document.createElement("p");
		//var space = document.createElement("br");
		
		
		
		if (total>29)
		{
			//title.innerHTML = "Your loved one seems to be doing fine!"
			content = "<h4>Total > 29</h4><p>Content for maximum points</p>";
		}
		
		else if (total < 20 && total > 14){
			//title.innerHTML = "Your loved one is managing, but it is time to consider future options."
			content = "<h4>Total < 20 && total > 14</h4><p>Content for minimum points</p>"; 
		
		}
		
		else if (total < 28 && total > 21){
			//title.innerHTML = "Your loved one is ready, and it is time to start searching for the perfect senior care home living residence."
			content = "<h4>Total < 28 && total > 21</h4><p>Content for medium number of points</p>"; 
			
		}
		
		
		
		//var rec = document.createElement("h1");
		//rec.innerHTML = "Recommendation";
		//document.getElementById("description").appendChild(rec);
		//document.getElementById("description").appendChild(title);
		//document.getElementById("description").appendChild(content);
		document.getElementById("description").innerHTML = content; 
		$('#myModal').modal('show');
		total = 0;      
	}
	
