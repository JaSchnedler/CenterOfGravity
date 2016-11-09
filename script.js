$(document).ready(function(){		
		hideStuff();
		var url = "http://www.centerofgravity.dk";
		var fadeTimeText = 500;
		var fadeTimeElements = 1000;
		var currentScreen = 0;
		var COREWORDS = 0;
		var P7S = 1;
		var ELABORATION = 2;
		var gravityColor = "#25a2ab";

    	$("#homeLogo").click(function(){    		   		
    			location.reload(true);
    			currentScreen = COREWORDS;
    		});

    	$('#backButton').click(function(){

    		console.log(currentScreen);
    		if(currentScreen == ELABORATION){
				elaborationToOverview();
    		}else if(currentScreen == P7S){
				overviewToCoreWords();
    		}else if(currentScreen == COREWORDS){
				hideStuffSlowly();
    			showCoreWords();
    		}
    	});
    	
		$("#centerPiece").click(function(){
    		//$('#p7s').fadeOut('slow', function(){});
    		//$('#centerPiece').fadeOut('slow', function(){showElaboration();});
			overviewToElaboration();
		});

		$("#tyngde").click(function(){
			coreWordsToOverview();
        	console.log("animation complete");
		});	

		$('#centerBig').hover(function(){
			$('#miniText').fadeIn(fadeTimeText);
			$('#hrFormålsPil').fadeIn(fadeTimeText);
		},function(){
			$('#miniText').fadeOut(fadeTimeText);
			$('#hrFormålsPil').fadeOut(fadeTimeText);
		});


		$('#ofBig').hover(function(){
			$('#middleText').fadeIn(fadeTimeText);
			$('#hrForcerPil').fadeIn(fadeTimeText);
		},function(){
			$('#middleText').fadeOut(fadeTimeText);
			$('#hrForcerPil').fadeOut(fadeTimeText);
		});
		$('#gravityBig').hover(function(){
			$('#bigText').fadeIn(fadeTimeText);
			$('#hrForstærkerePil').fadeIn(fadeTimeText);
		},function(){
			$('#bigText').fadeOut(fadeTimeText);
			$('#hrForstærkerePil').fadeOut(fadeTimeText);
		});

		$('#promotion').mouseenter(function(){
			$(this).css({"background-color":gravityColor,"color":"white"});
			showPromotionElab();
			console.log("hover on");
			});

		$('#promotion').mouseleave(function() {
				$(this).css({"background-color":"white","color":"black"});
				removePromotionElab();
				console.log("hover off");
			});
		console.log("ready");


        function rotate() {
    		$("#cw-wrap").animate(
        		{rotation: 720},
        		{
          		duration: 2000,
          		step: function(now, fx) {
          			$(this).css({"transform": "translate(-50%,-50%)"});
              		$(this).css({"transform": "rotate("+now+"deg)"});
          			}	
    			}
			);
		}


		function showElaboration(){
			$('#elaboration').fadeIn(2000,function(){});
				//Does something else need to happen here?
				currentScreen = 2;
		}
		function hideStuff(){
			$("#p7s").hide(0);
			$("#centerPiece").hide(0);
			$('#elaboration').hide(0);
			$('#miniText').hide(0);
			$('#middleText').hide(0);
			$('#bigText').hide(0);
			$('#hrFormålsPil').hide(0);
			$('#hrForcerPil').hide(0);
			$('#hrForstærkerePil').hide(0);
			$('#promotionElab').hide(0);

		}
		function hideStuffSlowly(){
			$("#p7s").fadeOut(fadeTimeText);
			$("#centerPiece").fadeOut(fadeTimeText);
			$('#elaboration').fadeOut(fadeTimeText);
			$('#miniText').fadeOut(fadeTimeText);
			$('#middleText').fadeOut(fadeTimeText);
			$('#bigText').fadeOut(fadeTimeText);
			$('#hrFormålsPil').fadeOut(fadeTimeText);
			$('#hrForcerPil').fadeOut(fadeTimeText);
			$('#hrForstærkerePil').fadeOut(fadeTimeText);


		}
		function showP7S(){
			$('#p7s').fadeIn(2000);
			$('#centerPiece').fadeIn(2000, function(){});
    		currentScreen = 1;

		}
		function elaborationToOverview(){
			$('#elaboration').fadeOut(fadeTimeText,function () {
				showP7S();
			});
			$('#center').animate({height: "50px", width: "50px"},fadeTimeElements);
			$('#of').animate({height: "100px", width: "100px"},fadeTimeElements);
			$('#gravity').animate({height: "150px", width: "150px"},fadeTimeElements);
		}
		function hideP7S(){
			$('#p7s').fadeOut(fadeTimeText);
			$('#centerPiece').fadeOut(fadeTimeText);
		}
		function showCoreWords(){
			$('#cw-wrap').fadeIn(fadeTimeElements);
			currentScreen = 0;
		}
		function coreWordsToOverview(){
			$("#afstand").css("color","transparent");
			$("#tyngde").css("color","transparent");
			$("#kraft").css("color","transparent");
			$("#afstand").animate({left: "-125px",height: "50px", width: "50px"},2000);
			$("#kraft").animate({left: "125px",height: "50px", width: "50px"},2000);
			$("#tyngde").animate({height: "50px", width: "50px"},2000,function(){
				showP7S();
				$("#cw-wrap").fadeOut(2000,function(){

				});});
		}
		function overviewToCoreWords() {
			hideP7S();
			$("#cw-wrap").fadeIn(1000,function(){
				$("#afstand").animate({left: "0px",height: "150px", width: "150px"},2000);
				$("#kraft").animate({left: "0px",height: "150px", width: "150px"},2000);
				$("#tyngde").animate({height: "150px", width: "150px"},2000,function(){
					$("#afstand").css("color","white");
					$("#tyngde").css("color","white");
					$("#kraft").css("color","white");
			});
		});

		}
		function overviewToElaboration(){
			hideP7S();
			$('#center').animate({height: "0px", width: "0px"},fadeTimeElements);
			$('#of').animate({height: "0px", width: "0px"},fadeTimeElements);
			$('#gravity').animate({height: "0px", width: "0px"},fadeTimeElements,function () {
				showElaboration();
			});

		}


		function showPromotionElab(){
			$('#promotionElab').fadeIn();
		}

		function removePromotionElab(){
			$('#promotionElab').fadeOut();

		}
});


