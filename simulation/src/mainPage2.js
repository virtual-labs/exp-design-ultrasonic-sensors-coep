
var cntSubmitConfigPg2=0;
tableReading=0;
var cntCalculateMainPage2=0;
var cntCalMain2ArrayJson=[];
var cntCalMain2MasterJson={};

function mainPage2(){
	
//	console.log("MAIN PAGE 2");
	$("#main-div-conf").html('');	
     $("#canvas-div").html('');	
     $("#tableDesign").html("");
    
      $("#centerText1").html('LEVEL MEASUREMENT DIAGRAM');
      $("#centerText2").html('APPLICATION');
      var htm = '<center><img src="images/ultrasonic_mod.png" class="img-fluid" style="width:55%; height="50%;" ></center>'
      $("#canvas-div").html(htm);
      var selection  ='<div class="row"><div class="col-sm-6" >'
       +'<label class="labelstyle"> Select Tank Height (cm): </label>'   
       +'</div>'
       +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="tankHight"  style="height:auto;">'
	   +'<option value="0">--- Select Tank Height --- </option>'
	   	+'<option value="100" >100</option>'
	   +'<option value="200">200</option>'
	   +'<option value="300">300</option>'
	   +'<option value="400">400</option>'
	   +'</select>'          
       +'</div>' 
       +'</div>'  
       +'<br>'
       
       +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle"> Select Water Level : </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<div class="slidecontainer"  id="waterSlider" >'
       +'<input type="range" min="0" max="tankHSelect" value="0" class="slider" id="myRange" disabled>'
	   +'<p><center><b><span id="demo"></span> % </b></center></p>'
	   +'</div>'
	   +'</div>'
	   +'</div>' 
	   +'<br>'     
       +'<div class="col-sm-12" id="buttonDiv">'
	   +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="submitconfigL" data-toggle="modal" data-target="#selectCheck" disabled ><b>  CHECK CONFIGURATION </b></button>' 
	   +'</div>'
	   +'<br>' 
       +'<br>'       
	   +'<div class="row" id="timeAnswerLvl" hidden>'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle">Calculate Time of flight(ms): </label>'
	   +'</div>'
	   +'<div class="col-sm-3">'
	   +'<input type="number" id="CalTimeforL" style= "padding: 10px;width:100%;"  class=" form-control" />'
	   +'</div>'
	   +'<div class="col-sm-3">'
	   +'<button type="button"  "  class="btn btn-danger btnStyle" id="submitTimeforL" data-toggle="modal" data-target="#selectCheck" ><b>SUBMIT</b></button>'
	   +'</div>'
	   +'</div> <br>'


	   			+ ' <!-- Modal -->'
				+ '<div class="modal fade" id="selectCheck" role="dialog">'
				+ '<div class="modal-dialog modal-md">'
				+ '<div class="modal-content">'
				+ '<div class="modal-header">'
				
				+ '<h4 class="modal-title">Message box</h4>'
				+ '</div>'
				+ '<div class="modal-body" id="modelMsg123">'
				
				+ '</div>'
				+ '<div class="modal-footer">'
				+ '<button type="button" class="btn btn-danger" id = "nextPage" data-dismiss="modal" >Okay</button>'
				+ '</div>'
				+ '</div>'
				+ '</div>'
				+ '</div>'
				+ '</div>'
				+ '</div>'
				+ ' </div>'  
		$("#main-div-conf").html(selection);	
  
    
    
//    var pipeSizeSelect,angleSelect,flowRateSelect,fluidSelect,distSelect;
    $("#tankHight").change(function(){
	$("#myRange").prop('disabled',false);
	$("#submitconfigL").prop('disabled',false);	
})

	var slider = document.getElementById("myRange");
	var waterLevelPercent = document.getElementById("demo");
	waterLevelPercent.innerHTML = slider.value;
	
	slider.oninput = function() {
		waterLevelPercent.innerHTML = this.value;
	}
    
     $("#submitconfigL").click(function() {
			cntSubmitConfigPg2++;
			 $("#centerText2").html('APPLICATION');
			$("#submitconfigL").prop('disabled',true);
			var slider = document.getElementById("myRange");
		 	var waterLevelPercent = document.getElementById("demo");
		 	waterLevelPercent.innerHTML = slider.value;
	
		   tankHSelect=$("#tankHight").val();
//		   WLSelect=$("#waterSlider").val();
		   
//		   console.log("Tank Hight   =  "+ tankHSelect);
//		   console.log("angle =   "+WLSelect);
		 
		   if(tankHSelect==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Select Tank Hight </b>");

	}else if(waterLevelPercent.innerHTML == 0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Select Water Level</b>");


	}else{
		$("#errorPanel").prop("hidden",true);
		$("#modelMsg123").html("<b class='boldTextGreen'>Configured successfully</b>");		
		$("#tankHSelect").prop('hidden',true);
		$("#WLSelect").prop('disabled',true);
//		$("#flowRateSelect").prop('disabled',true);
//		$("#fluidSelect").prop('disabled',true);
//		$("#distSelect").prop('disabled',true);	
		
		   
		  $("#canvas-div").html("");
		  $("#btnAnimStart").bind("click");
		  $("#btnAnimStop").bind("click");
		   lmimic(tankHSelect,waterLevelPercent.innerHTML);
//	$("#buttonDiv").html('<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="submitAnimationConfig" data-toggle="modal" data-target="#selectCheck" disabled><b>  ANIMATION </b></button>');
//
	
	}	



	
	});
var timeFormula11='<img src="images/ultrasonicTimeUpdated.png" alt=" " width="350" height="50">'	;
	 id1=0;
     $("#submitTimeforL").click(function() {
			
			 $("#tankHight").children(":selected").css("background-color","#f7dddd");
			 
				$("body").css("padding","0px 0px 0px 0px");
			   var flowAns = $("#CalTimeforL").val();
				if(flowAns==""){
					$("#modelMsg123").html("<b class='boldTextRed'>Enter numeric value </b> ");	
				}
				else
					{
					if (id1 <= 2) {
						if (flowAns == calculateTimeForLvl) {
							if(tableReading >=3){}else{
								$("#modelMsg123").html("<b class='boldTextGreen'>Correct answer. Select another configuration</b>");
							}	
							//$("#modelMsg123").html("<b class='boldTextGreen'>Correct Answer. Select another configuration.</b>");
							$("#timeAnswerLvl").prop('hidden',true);
							id1=0;
							
							addToLevelMasterJSON();
							$("#CalTimeforL").val('');
							
							
						} else if (flowAns != calculateTimeForLvl) {
					$("#modelMsg123").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");
//							
						
						}


					} else if (id1 == 3)
					 {
						$("#modelMsg123").html("<b class='boldTextBlue'>Formula : "+timeFormula11+"</b> ");

						
					} else {
						flowAns = $("#CalTimeforL").val();
//						flow = flowAns.toFixed(2);
						if (flowAns == calculateTimeForLvl) {
							if(tableReading >=3){}else{
								$("#modelMsg123").html("<b class='boldTextGreen'>Correct answer. Select another configuration</b>");
							}
							//$("#modelMsg123").html("<b class='boldTextGreen'>Correct Answer. Select another configuration.</b>");
							$("#timeAnswerLvl").prop('hidden',true);
							
							addToLevelMasterJSON();
							$("#CalTimeforL").val('');
							id1=0;
							
//					$("#submitconfig").prop('disabled',false);
						} else {

							 $("#modelMsg123").html("<b class='boldTextBlue'>Correct answer is  " +calculateTimeForLvl+'</b>');
						}
					}
					id1++;
					cntCalculateMainPage2++;
					}
					
//					
				}); 
	 
	             
}

function addToCntCalMain22MasterJson(){
 			var cntCalMain22tempJson={};
				cntCalMain22tempJson.cntSubmitConfigPg2= cntSubmitConfigPg2;
				cntCalMain22tempJson.cntCalculateMainPage2=cntCalculateMainPage2;
//			let lastEntry2 = cntCalMain1ArrayJson[cntCalMain1ArrayJson.length - 1] || {cntCalculateMainPage2: 0 };
//			cntCalMain22tempJson.cntCalculateMainPage2 = lastEntry2.cntCalculateMainPage2 + cntCalculateMainPage2; // Add the new count			  
//            cntCalMain22tempJson.cntSubmitConfigPg2 = lastEntry2.cntSubmitConfigPg2 + cntSubmitConfigPg2; // Add the new count
   			cntCalMain2ArrayJson.push(cntCalMain22tempJson);
			counterMasterJson.cntCalMain2MasterJson = cntCalMain2ArrayJson;
		
						

}

