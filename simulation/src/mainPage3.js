var ArrayJson=[];
function mainPage3(){
//	console.log("MAIN PAGE 2");
	$("#main-div-conf").html('');	
     $("#canvas-div").html('');	
     $("#tableDesign").html("");
      $("#selectMethod").prop('disabled',true);
      $("#centerText1").html('FLOW MEASUREMENT MIMIC');
      $("#centerText2").html('CONFIGURATION');
    
   
      var selection  ='<div class="row"><div class="col-sm-6" >'
       +'<label class="labelstyle"> Select the Pipe Diameter (inch): </label>'   
       +'</div>'
       +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="pipeSize"  style="height:auto;">'
	   +'<option value="0">--- Select the Pipe size --- </option>'
	   	+'<option value="1" >1</option>'
	   +'<option value="2">2</option>'
	   +'<option value="3">3</option>'
	   +'<option value="4">4</option>'
	   +'</select>'          
       +'</div>' 
       +'</div>'  
       +'<br>'
       +'<div class="row">'
	   
	   
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle"> Select Aagle : </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="angle" " style="height:auto;">'
	   +'<option value="0">--- Select Angle --- </option>'
	   +'<option value="1" >15&deg; </option>'
	   +'<option value="2">20&deg;</option>'
	    +'<option value="2">25&deg;</option>'
	     +'<option value="2">30&deg;</option>'
	   +'</select>'
	   +'</div>'
	   +'</div>'
	   +'<br>'    
	   +'<div class="row">'
	   
	   
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle"> Select Flow Rate (m/s) : </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="flowRate" " style="height:auto;">'
	   +'<option value="0">--- Select flowRate --- </option>'
	   +'<option value="1" >0.1 </option>'
	   +'<option value="2">2</option>'
	   +'<option value="3">3</option>'
	   +'<option value="4">4</option>'
	   +'<option value="5">5</option>'
	   +'</select>'
	   +'</div>'
	   +'</div>'
	   +'<br>' 
	   
	   +'<div class="row" >'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle"> Select Fluid Type : </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf" id="fluidType" " style="height:auto;">'
	   +'<option value="000">--- Select  Speed of Sound --- </option>'
	   +'<option value="1480" >Water </option>'
	   +'<option value="343">Air</option>'	   
	   +'</select>'
	   +'</div>'
	   +'</div>'
	   +'<br>' 
	   
	 
	   +'<div class="row" >'
	    +'<div class="col-sm-6">'
	   +'<label class="labelstyle"> Select Distance (m):  </label>'
	   +'</div>'
	   +'<div class="col-sm-6" >'
	   +'<select  class="form-control selectConf" id="distance" " style="height:auto;">'
	   +'<option value="00">--- Select Distance --- </option>'
	   +'<option value="10" >1</option>'
	   +'<option value="15">2</option>'
	   +'<option value="20">3</option>'
	   +'<option value="25">4</option>'
	   +'</select>'
	   +'</div>'
	   +'<br>' 
	   +'<br>' 
	   +'<br>' 
	   +'<br>'    
       +'<div class="col-sm-12" id="buttonDiv">'
	   +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="submitconfig" data-toggle="modal" data-target="#selectCheck" ><b>  CHECK CONFIGURATION </b></button>' 
	    +'</div>'

    
    +'<div class="row" id="timeAnswer" hidden>'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle">Calculate Time (sec): </label>'
	   +'</div>'
		+'<div class="col-sm-3">'
	+'<input type="text" id="CalTime" style= 10px;width:100%;"  class=" form-control" />'
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
			 
				$("body").css("padding","0px 0px 0px 0px");
			   var flowAns = $("#CalTime").val();
	
		
				if(flowAns==""){
					
					$("#modelMsg123").html("<b class='boldTextRed'>Enter numeric value ");
					
					
				}
				else
					{
					if (id <= 3) {
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


					} else if (id == 4)
					 {
						$("#modelMsg123").html("<b class='boldTextBlue'>Formula : <br>Distance = Time * (speed of Sound/2)</b> ");

						
					} else {
						flowAns = $("#CalTime").val();
//						flow = flowAns.toFixed(2);
						if (flowAns == calculateTime) {
							
							$("#modelMsg123").html("<b class='boldTextGreen'>Correct answer</b>");
							$("#timeAnswer").prop('hidden',true);
							
							addToMasterJSON();
							$("#CalTime").val('');
							id=0;
					
						} else {

							 $("#modelMsg123").html("<b class='boldTextBlue'>Correct answer is  " +calculateTime+'</b>');
						}
					}
					id++;
					}
					
//					
				});
				
    
    
    
    
    
    
    
     $("#submitconfig").click(function() {
	 pipeSizeSelect=$("#pipeSize").val();
		   angleSelect=$("#angle").val();
		   flowRateSelect=$("#flowRate").val();
			fluidSelect=$("#fluidType").val();
			
			distSelect=$("#distance").val();
			
				
//				dataJson.pipe = pipeSize ;
//				dataJson.fluid = fluidType;
//				dataJson.material = floatMaterial;
//		   console.log("main pipeSize  =  "+ pipeSizeSelect);
//		   console.log("angle =   "+angleSelect);
//		   console.log("flow_Rate =   "+flowRateSelect);
//		    console.log("fluid =   "+fluidSelect);
//		     console.log("distance =   "+distSelect);
		   
		   
		   if(pipeSizeSelect==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Select Pipe Size </b>");

	}else if(angleSelect==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Select Angle </b>");

	}else if(flowRateSelect==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Select Flow Rate </b>");

	}else if(fluidSelect==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Select Fluid </b>");

	}else if(distSelect==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg123").html("<b class='boldTextRed'>Select Distance </b>");
	}else{
		$("#errorPanel").prop("hidden",true);
		$("#modelMsg123").html("<b class='boldTextGreen'>Configured successfully</b>");		
		$("#pipeSizeSelect").prop('hidden',true);
		$("#angleSelect").prop('disabled',true);
		$("#flowRateSelect").prop('disabled',true);
		$("#fluidSelect").prop('disabled',true);
		$("#fluidSelect").prop('disabled',true);
		$("#distSelect").prop('disabled',true);	
	
//		$("#nextLevelForAnimation").prop('disabled',true);
//		$("#submitconfig").prop('disabled',true);
		   
		   
		  $("#canvas-div").html("");
		   
		   fmimic(pipeSizeSelect,angleSelect,flowRateSelect,fluidSelect,distSelect);
//	$("#buttonDiv").html('<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="submitAnimationConfig" data-toggle="modal" data-target="#selectCheck" disabled><b>  ANIMATION </b></button>');
//
	
	}	


	});

	             
}