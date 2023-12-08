tableReading=0;
function mainPage1(){
	$("#main-div-conf").html('');	
     $("#canvas-div").html('');	
     
      $("#centerText1").html('WORKING OF ULTRASONIC SENSOR ');
      $("#centerText2").html('CONFIGURATION');
      var htm = '<img src="images/ultraWorking.png" class="img-fluid" >'
      $("#canvas-div").html(htm);
//      animation();
      var selection  ='<div class="row"><div class="col-sm-6" >'
       +'<label class="labelstyle"> Select Frequency (KHz) : </label>'   
       +'</div>'
       +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="frequency"  style="height:auto;">'
	   +'<option value="0">--- Select Frequency --- </option>'
	   	+'<option value="30" >30</option>'
	   +'<option value="100">100</option>'
	   +'<option value="200">200</option>'
	   +'<option value="300">300</option>'
	   +'<option value="400">400</option>'
	   +'<option value="500">500</option>'
	   +'</select>'          
       +'</div>' 
       +'</div>'  
       +'<br>'
       +'<div class="row">'
	   
	   
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle"> Select Distance (cm) : </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="distance" " style="height:auto;">'
	   +'<option value="0">--- Select distance --- </option>'
	   +'<option value="2" >2</option>'
	   +'<option value="50">50</option>'
	    +'<option value="100">100</option>'
	     +'<option value="200">200</option>'
	     +'<option value="300">300</option>'
	     +'<option value="400">400</option>'

	   +'</select>'
	   +'</div>'
	   +'</div>'
	   +'<br>'    
	   +'<div class="row">'
	   
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle"> Select Fluid Type : </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="fluidType" " style="height:auto;">'
	   +'<option value="000">--- Select  Speed of Sound --- </option>'
	   +'<option value="34300">Air</option>'	   
	   +'</select>'
	   +'</div>'
	   +'</div>'
	   +'<br>' 
   +'<div class="col-sm-12" id="buttonDiv">'
	   +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="submitconfig" data-toggle="modal" data-target="#selectCheck" ><b>  CHECK CONFIGURATION </b></button>' 
	    +'</div>'

      +'<br>' 
      +'<br>' 
     
+'<div class="row" id="timeAnswer" hidden>'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle">Calculate Time (ms): </label>'
	   +'</div>'
		+'<div class="col-sm-3">'
	+'<input type="text" id="CalTime" style= "padding: 10px;width:100%;"  class=" form-control" />'
	   +'</div>'
	   +'<div class="col-sm-3">'
	+'<button type="button"  "  class="btn btn-danger btnStyle" id="checkAsnTime" data-toggle="modal" data-target="#selectCheck" ><b>SUBMIT </b></button>'
	   +'</div>'
	    +'</div>'
	    
	        
      
	     + ' <!-- Modal -->'
				+ '<div class="modal fade" id="selectCheck" role="dialog">'
				+ ' <div class="modal-dialog modal-md">'
				+ '    <div class="modal-content">'
				+ '     <div class="modal-header">'
				
				+ '       <h4 class="modal-title">Message box</h4>'
				+ '     </div>'
				+ '     <div class="modal-body" id="modelMsg123">'
				
				+ '     </div>'
				+ '     <div class="modal-footer">'
				+ '       <button type="button" class="btn btn-danger" id = "nextPage" data-dismiss="modal" >Okay</button>'
				+ '     </div>'
				+ '   </div>'
				+ ' </div>'
				+ '</div>'
				+'</div>'
				+ '</div>'
				+ ' </div>'  
		$("#main-div-conf").html(selection);	
		id=0;
     $("#checkAsnTime").click(function() {
			 $("#frequency").children(":selected").css("background-color","#f7dddd");
			 $("#distance").children(":selected").css("background-color","#f7dddd");
				$("body").css("padding","0px 0px 0px 0px");
			   var flowAns = $("#CalTime").val();
	
		
				if(flowAns==""){
					
					$("#modelMsg123").html("<b class='boldTextRed'>Enter numeric value ");
					
					
				}
				else
					{
					if (id <= 2) {
						if (flowAns == calculateTime) {
							$("#modelMsg123").html("done ");
							$("#timeAnswer").prop('hidden',true);
							id=0;
							
							addToMasterJSON();
							$("#CalTime").val('');
							
						} else if (flowAns != calculateTime) {
					$("#modelMsg123").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");
//							
						
						}


					} else if (id == 3)
					 {
						$("#modelMsg123").html("<b class='boldTextBlue'>Formula : Distance=Time * (speed of Sound/2)</b> ");

						
					} else {
						flowAns = $("#CalTime").val();
//						flow = flowAns.toFixed(2);
						if (flowAns == calculateTime) {
							
							$("#modelMsg123").html("<b class='boldTextGreen'>Correct Answer</b>");
							$("#timeAnswer").prop('hidden',true);
							
							addToMasterJSON();
							$("#CalTime").val('');
							id=0;
//					$("#submitconfig").prop('disabled',false);
						} else {

							 $("#modelMsg123").html("<b class='boldTextBlue'>Correct Answer is  " +calculateTime+'</b>');
						}
					}
					id++;
					}
					
//					
				});

//    var pipeSizeSelect,angleSelect,flowRateSelect,fluidSelect,distSelect;
    $("#frequency, #distance").change(function(){
		$("#submitconfig").prop('disabled',false);
	})
    
    
     $("#submitconfig").click(function(){
	 	frequencySelect=$("#frequency").val();
		  distSelect=$("#distance").val();
		  fluidSelect=$("#fluidType").val();
			
				
//				dataJson.pipe = pipeSize ;
//				dataJson.fluid = fluidType;
//				dataJson.material = floatMaterial;
//		   console.log("main frequency  =  "+ frequencySelect);	  
//		     console.log("distance =   "+distSelect);
//		    console.log("fluid TypeSelect =   "+fluidSelect);
		   
		   if(frequencySelect==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Select Frequency </b>");
	}else if(distSelect==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Select Distance </b>");
	}else if(fluidSelect==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Select Fluid Type </b>");
	}else{
		$("#errorPanel").prop("hidden",true);
		$("#modelMsg123").html("<b class='boldTextGreen'>Configured Successfully</b>");		
		$("#pipeSizeSelect").prop('hidden',true);
		$("#fluidSelect").prop('disabled',true);
		$("#distSelect").prop('disabled',true);	
	$("#submitconfig").prop('disabled',true);
		   distanceBlock =$("#distance").children(":selected").attr("value");
//		   console.log("distanceBlock" +distanceBlock);	  
		   $("#distance option[value="+distanceBlock+"]").attr("disabled",true); 
		   
//		   frequencyBlock =$("#frequency").children(":selected").attr("value");
//		   console.log("distanceBlock" +frequencyBlock);		  
//		   $("#frequency option[value="+frequencyBlock+"]").attr("disabled",true); 
		   
		  animation(frequencySelect,distSelect,fluidSelect);
	}	


	
	});

	
	
	             
}



