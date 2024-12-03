function resultAnalysis(counterMasterJson){
	    
		//console.log("ResultPage Analysis.......");
				
$("#selectMethod").prop('hidden',true);

$("#simDemo").prop("hidden",true);
$("#btnForModal").prop("hidden",true);
	$("#pdfDownload").prop("hidden",false);
	
	
  function generatePDF() {
    // Select the div by its ID
    const element = document.querySelector("#mainDiv");

    // Use html2canvas to capture the element as a canvas
    html2canvas(element, {
        scale: 3,  // Increase the scale for better resolution (adjustable)
        useCORS: true // In case of cross-origin issues with external resources like images
    }).then(function (canvas) {
        // Convert the canvas to image data in PNG format
        const imgData = canvas.toDataURL("image/png", 1.0); // No compression

        // Initialize the PDF document in landscape mode ('l') and A4 size
        const pdf = new jspdf.jsPDF('l', 'mm', 'a4');
        
        // Define the width and height for the image to fit in the landscape A4 page
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width; // Keep aspect ratio

        // Define the top margin (in mm)
        const topMargin = 10;

        // Check if the image height exceeds the landscape page height minus the top margin
        if (pdfHeight > pdf.internal.pageSize.getHeight() - topMargin) {
            let position = 0;
            const pageHeight = pdf.internal.pageSize.getHeight() - topMargin;

            // Loop over the content to fit into multiple pages in landscape
            while (position < canvas.height) {
                const pageData = canvas.getContext('2d').getImageData(0, position, canvas.width, canvas.height - position);

                // Create a new image element from the slice
                const pageCanvas = document.createElement('canvas');
                pageCanvas.width = canvas.width;
                pageCanvas.height = canvas.height - position < pageHeight ? canvas.height - position : pageHeight;
                pageCanvas.getContext('2d').putImageData(pageData, 0, 0);

                const imgData = pageCanvas.toDataURL('image/png', 1.0);  // Avoid compression
                
                pdf.addImage(imgData, 'PNG', 0, topMargin, pdfWidth, (pdfWidth * pageCanvas.height) / pageCanvas.width);

                position += pageHeight;

                if (position < canvas.height) {
                    pdf.addPage();
                }
            }
        } else {
            // If it fits on one page, simply add the image to the PDF in landscape with the top margin
            pdf.addImage(imgData, 'PNG', 0, topMargin, pdfWidth, pdfHeight);
        }

        // Save the generated PDF
        pdf.save("ultrasonic_report.pdf");
    });
}

// Set up the button click event to generate the PDF
$("#pdfDownload").on("click", function(){
    generatePDF();
});


counterMasterJson = {
    "questionary": {
        "totalQues": 5,
       
    },
    "cntCalMain1MasterJson": {
        "cntSubmitConfig": cntSubmitConfig,
        "cntCalculateMainPage": cntCalculateMainPage
        
    },
    "cntCalMain2MasterJson": {
        "cntSubmitConfigPg2": cntSubmitConfigPg2,
        "cntCalculateMainPage2": cntCalculateMainPage2
    }
//    "setTimerMasterJson": {
//        "bKnowledgeTime": bKnowledgeTime,
//        "type1Config": type1Config,
//        "timeOfMimic": timeOfMimic,
//		"type1tableAndGraph": type1tableAndGraph,
//		"type2Config": type2Config,
//		"type2Mimic": type2Mimic,
//		"type2tableAndGraph": type2tableAndGraph
//    }
}	
	
//basic knowledge	
var correctVal = (answerTotCount/5).toFixed(2);
var quesPercent1 = (correctVal*100).toFixed(1);
var quesPercent = parseFloat(quesPercent1);
//console.log(quesPercent);

//configuration
var correctValConfigType11 = (10/((counterMasterJson.cntCalMain1MasterJson.cntSubmitConfig)+(counterMasterJson.cntCalMain2MasterJson.cntSubmitConfigPg2))).toFixed(2);
var configPercent1 = (correctValConfigType11*100).toFixed(1);
var configPercent = parseFloat(configPercent1);
//console.log(configPercent);

//type1 Configuration
//configuration
var correctValConfigTypeA = (6/(counterMasterJson.cntCalMain1MasterJson.cntSubmitConfig)).toFixed(2);
var configPercent12 = (correctValConfigTypeA*100).toFixed(1);
var configPercentT1 = parseFloat(configPercent12);
//console.log(configPercentT1);

//type2 Configuration
//configuration
var correctValConfigTypeB = (4/(counterMasterJson.cntCalMain2MasterJson.cntSubmitConfigPg2)).toFixed(2);
var configPercent22 = (correctValConfigTypeB*100).toFixed(1);
var configPercentT2 = parseFloat(configPercent22);
//console.log(configPercentT2);

//mimic
var correctValMimic = (5/5).toFixed(2);
var mimicPercent1 = (correctValMimic*100).toFixed(1);
var mimicPercent = parseFloat(mimicPercent1);
//console.log(mimicPercent);

//Calculation
var correctValCalculation = (30/((counterMasterJson.cntCalMain1MasterJson.cntCalculateMainPage)+(counterMasterJson.cntCalMain2MasterJson.cntCalculateMainPage2))).toFixed(2);
var CalculationPercent1 = (correctValCalculation*100).toFixed(1);
var CalculationPercent = parseFloat(CalculationPercent1);
//console.log(CalculationPercent);

//Calculation typeA
var correctValCalculation11 = (6/counterMasterJson.cntCalMain1MasterJson.cntCalculateMainPage).toFixed(2);
var CalculationPercentT1 = (correctValCalculation11*100).toFixed(1);
var CalculationPercentA = parseFloat(CalculationPercentT1);
//console.log(CalculationPercentA);

//Calculation typeB
var correctValCalculationB1 = (4/counterMasterJson.cntCalMain2MasterJson.cntCalculateMainPage2).toFixed(2);
var CalculationPercentB1 = (correctValCalculationB1*100).toFixed(1);
var CalculationPercentB = parseFloat(CalculationPercentB1);
//console.log(CalculationPercentB);


//Observation
var correctValObsevation = (5/5).toFixed(2);
var observationPercent1 = (correctValObsevation*100).toFixed(1);
var observationPercent = parseFloat(observationPercent1);
//console.log(observationPercent);

var htm=''
		
		+'<div class="container-fluid">'
		+'  <div class="row">'


		+'<div class="col-md-12">'
		+' <div class="panel remarkBground" >'
		+' <div class="panel-body remark" ><center>Ultrasonic sensor experiment completed successfully!!</center></div>'
		+'</div>'
		+'</div>'
		
		+' </div>'
		
		//Close 1 Row
		+'<div class="container-fluid">'
		+'  <div class="row">'
		+'<div class="col-md-4">'
	
		 +'<br><table class="table table-bordered ">'
		   +'  <thead class="thead-dark">'
		   +'    <tr class="">'
		   +'     <th><center class="">COMPETENCY ( WORKING ) </center></th>'
		   +'     <th><center class="">STATUS</center></th>'
//		   +'	  <th><center class="">TIME</center></th>'
		   +'    </tr>'
		   +' </thead>'
		   +'  <tbody>'
		   +'   <tr>'
		   +'     <td class=""><center>Basic Knowledge</center></td>'
		   if(quesPercent<60){
			htm+= '     <td class=""><center class="NotAttained"> Not Attained</center></td>'   
		   }else{
			htm += '     <td class=""><center class="attained"> Attained</center></td>' 
		   }
//		   +'     <td class=""><center class="attained"> Attained</center></td>'
//		   +'	  <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.bKnowledgeTime+'</center></td>'
		  htm +='  </tr>'
		   +'  <tr>'
		   +'     <td class=""><center>Configuration</center></td>'
		   if(configPercentT1>=60){
		   htm += '     <td class=""><center class="attained">Attained</center></td>'
		   }else{
			htm += '     <td class=""><center class="NotAttained"> Not Attained</center></td>'    
		   }
		//   +'	  <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.type1Config+'</center></td>'
		   htm +=' </tr>'
		   +'   <tr>'
		   +'     <td class=""><center>Mimic</center></td>'
		   if(mimicPercent>=60){
		   htm += '     <td class=""><center class="attained">Attained</center></td>'
		   }else{
			htm+= '     <td class=""><center class="NotAttained"> Not Attained</center></td>'    
		   }
		   //+'     <td class=""><center class="attained">Attained</center></td>'
//		   +'	  <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.timeOfMimic+'</center></td>'		  
		   htm +='  </tr>'
		   +'  <tr>'
	       +'     <td class=""><center>Calculation</center></td>'
	       if(CalculationPercentA>=60){
			 htm +='     <td class=""><center class="attained">Attained</center></td>'  
		   }else{
			  htm+= '     <td class=""><center class="NotAttained"> Not Attained</center></td>'  
		   }
		   //+'     <td class=""><center class="attained">Attained</center></td>'
//		   +'	  <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.timeOfMimic+'</center></td>'
		   htm += ' </tr>'
		   +'   <tr>'
		   +'      <td class=""><center>Observation</center></td>'
		   +'     <td class=""><center class="attained">Attained</center></td>'
//		   +'	  <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.type1tableAndGraph+'</center></td>'		  
		   +'  </tr>'
		   //	
		   //	setTimerMasterJson.bKnowledgeTime = bKnowledgeTime;
		   //		tempJsonTimer.type1Config = type1Config;
		   //		tempJsonTimer.timeOfMimic = timeOfMimic;
		   //		tempJsonTimer.type1tableAndGraph= type1tableAndGraph;
		   //		tempJsonTimer.type2Config = type2Config;
		   //		tempJsonTimer.timeOfMimic2 = timeOfMimic2;
		   //		tempJsonTimer.type2tableAndGraph= type2tableAndGraph;
		   //	
		   +' </tbody>'
		  +' </table>'
		  
		+' </div>'
		+'<div class="col-md-4" id="graph-div" >'

		+' </div>'
		+'<div class="col-md-4">'
		+'<br><table class="table table-bordered ">'
		   +'  <thead class="thead-dark">'
		   +'    <tr class="">'
		   +'     <th><center class="">COMPETENCY ( APPLICATION )</center></th>'
		   +'     <th><center class="">STATUS</center></th>'
//		   +'     <th><center class="">TIME</center></th>'
		   +'    </tr>'
		   +' </thead>'
		   +'  <tbody>'
		   +'   <tr>'
		   +'     <td class=""><center>Basic Knowledge</center></td>'
		     if(quesPercent<60){
			htm+= '     <td class=""><center class="NotAttained"> Not Attained</center></td>'   
		   }else{
			htm += '     <td class=""><center class="attained"> Attained</center></td>' 
		   }
//		   +'     <td class=""><center class="attained"> Attained</center></td>'
//		   +'     <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.bKnowledgeTime+'</center></td>'
		  
		   htm += '  </tr>'
		   +'  <tr>'
		   +'     <td class=""><center>Configuration</center></td>'
		    if(configPercentT2>=60){
		   htm += '     <td class=""><center class="attained">Attained</center></td>'
		   }else{
			htm += '     <td class=""><center class="NotAttained">Not Attained</center></td>'    
		   }
		   //+'     <td class=""><center class="attained"> Attained</center></td>'
//		   +'     <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.type2Config+'</center></td>'
		   htm +=' </tr>'
		   +'   <tr>'
		   +'     <td class=""><center>Mimic</center></td>'
		   if(mimicPercent>=60){
		   htm += '     <td class=""><center class="attained">Attained</center></td>'
		   }else{
			htm+= '     <td class=""><center class="NotAttained">Not Attained</center></td>'    
		   }
		   //+'     <td class=""><center class="attained"> Attained</center></td>'
//		   +'     <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.type2Mimic+'</center></td>'		  
		   htm +='  </tr>'
		   +'  <tr>'
		   +'     <td class=""><center>Calculation</center></td>'
		   if(CalculationPercentB>=60){
			 htm +='     <td class=""><center class="attained">Attained</center></td>'  
		   }else{
			  htm+='     <td class=""><center class="NotAttained">Not Attained</center></td>'  
		   }
		   //+'     <td class=""><center class="attained"> Attained</center></td>'
//		   +'     <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.type2Mimic+'</center></td>'
		   htm+=' </tr>'
		   +'   <tr>'
		   +'     <td class=""><center>Observation</center></td>'
		   +'     <td class=""><center class="attained"> Attained</center></td>'
//		   +'     <td class=""><center class="attained">'+counterMasterJson.setTimerMasterJson.type2tableAndGraph+'</center></td>'	  
		   +'  </tr>'
//			+'   <tr>'
//		  +'     <td class="info"><center>Fault detection</center></td>'
//		   +'     <td class="success"><center> Attained</center></td>'	  
//		   +'  </tr>'
		   +' </tbody>'
		  +' </table>'
		+' </div>'
		
		+' </div>'
		+' </div>'
		//Close 2 Row
		+' <div class="row">'
		+'<div class="col-md-12">'
		+'<div class="col-md-4">'
		+' <div class="panel panel-danger headingPanel" >'
		+' <div class="panel-body" id="panelbody">'
		+'<center><span class="heading1"><b>Basic Knowledge</b></span></center>'
		+'</div>'
		+'</div>'		
		+'<div class="col-md-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Total Questions</span></center>'
		+' <div class="panel-body counterPanelGreen">'
		+'<center><span class="valueBox"><b>5</b></span></center>'
		+'</div>'
		+'</div>'
//		+'<span class="heading1">1 </span>'
		+'</div>'
		+'<div class="col-md-6">'
		+'<div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Right Answer</span></center>'
		+'<div class="panel-body counterPanelRed">'
		+'<center><span class="valueBox"><b>'+answerTotCount+'</b></span></center>'
		+'</div>'
		+'</div>'
//		+'<span class="heading1">4 </span>'
		+'</div>'
		+'</div>'

		+'<div class="col-sm-4">'
		+' <div class="panel panel-danger headingPanel">'
		+' <div class="panel-body" id="panelbody"><center><span class="heading1"><b>Configuration of ultrasonic sensor</b></span></center></div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Expected Attempt</span></center>'
		+' <div class="panel-body counterPanelGreen">'
		+'<center><span class="valueBox"><b>5</b></span></center>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Actual Attempt</span></center>'
		+' <div class="panel-body counterPanelRed">'
		+'<center><span class="valueBox"><b>'+counterMasterJson.cntCalMain1MasterJson.cntSubmitConfig+'</b></span></center>'
		+'</div>'
		+'</div>'
		+'</div>'
		+' </div>'
		+'<div class="col-sm-4">'
		+' <div class="panel panel-danger headingPanel" >'
		+' <div class="panel-body" id="panelbody"><center><span class="heading1"><b>Calculation of ultrasonic sensor</b></span></center></div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Expected Attempt</span></center>'
		+' <div class="panel-body counterPanelGreen">'
		+'<center><span class="valueBox"><b>5</b></span></center>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Actual Attemptt</span></center>'
		+' <div class="panel-body counterPanelRed">'
		+'<center><span class="valueBox"><b>'+counterMasterJson.cntCalMain1MasterJson.cntCalculateMainPage+'</b></span></center>'
		+'</div>'
		+'</div>'
		+'</div>'
		+' </div>'
		+' </div>'
		+' </div>'
		//Close 2 Row
		+' <div class="row">'
		+'<div class="col-sm-12">'

		
	
		+'<div class="col-sm-4">'
		+' <div class="panel panel-danger headingPanel">'
		+' <div class="panel-body" id="panelbody"><center><span class="heading1"><b>Configuration of ultrasonic level sensor</b></span></center></div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Expected Attempt</span></center>'
		+' <div class="panel-body counterPanelGreen">'
		+'<center><span class="valueBox"><b>4</b></span></center>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Actual Attempt</span></center>'
		+' <div class="panel-body counterPanelRed">'
		+'<center><span class="valueBox"><b>'+counterMasterJson.cntCalMain2MasterJson.cntSubmitConfigPg2+'</b></span></center>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'</div>'
		
		+'<div class="col-sm-4">'
		+' <div class="panel panel-danger headingPanel" >'
		+' <div class="panel-body" id="panelbody"><center><span class="heading1"><b>Calculation of ultrasonic level sensor</b></span></center></div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Expected Attempt</span></center>'
		+' <div class="panel-body counterPanelGreen">'
		+'<center><span class="valueBox"><b>4</b></span></center>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'<div class="col-sm-6">'
		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
		+'<center><span class="valueBox">Actual Attempt</span></center>'
		+' <div class="panel-body counterPanelRed">'

		+'<center><span class="valueBox"><b>'+counterMasterJson.cntCalMain2MasterJson.cntCalculateMainPage2+'</b></span></center>'
		+'</div>'
		+'</div>'

		+'</div>'
		+' </div>'
//		+'<div class="col-sm-4">'
//		+' <div class="panel panel-danger headingPanel" >'
//		+' <div class="panel-body" id="panelbody"><center><span class="heading1">Linearity error Calculation Analysis</span></center></div>'
//		+'</div>'
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
//		+'<center><span class="valueBox">Right Answer</span></center>'
//		+' <div class="panel-body counterPanelGreen">'
//
//		+'<center><span class="valueBox"><b>1</b></span></center>'
//		+'</div>'
//		+'</div>'
//
//		+'</div>'
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger"  style="margin-bottom: 28px;">'
//		+'<center><span class="valueBox">Total Questions</span></center>'
//		+' <div class="panel-body counterPanelRed">'
//
//		+'<center><span class="valueBox"><b>8</b></span></center>'
//		+'</div>'
//		+'</div>'
//
//		+'</div>'
//		+' </div>'
//
//
//		+' </div>'
//		
//		+' </div>'
//		//Close 3 Row
//		+' <div class="row">'
//		+'<div class="col-sm-12">'
//
//		+'<div class="col-sm-4">'
//		+' <div class="panel panel-danger headingPanel" >'
//		+' <div class="panel-body" id="panelbody"><center><span class="heading1">Span error Calculation Analysis</span></center></div>'
//		+'</div>'
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
//		+'<center><span class="valueBox">Right Answer</span></center>'
//		+' <div class="panel-body counterPanelGreen">'
//
//		+'<center><span class="valueBox"><b>1</b></span></center>'
//		+'</div>'
//		+'</div>'
////		+'<span class="heading1">1 </span>'
//		+'</div>'
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
//		+'<center><span class="valueBox">Total Questions</span></center>'
//		+' <div class="panel-body counterPanelRed">'
//
//		+'<center><span class="valueBox"><b>8</b></span></center>'
//		+'</div>'
//		+'</div>'
////		+'<span class="heading1">4 </span>'
//		+'</div>'
//		+' </div>'
//
//		+'<div class="col-sm-4">'
//		+' <div class="panel panel-danger headingPanel" >'
//		+' <div class="panel-body" id="panelbody"><center><span class="heading1">Linearity error Calculation Analysis</span></center></div>'
//		+'</div>'
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
//		+'<center><span class="valueBox">Right Answer</span></center>'
//		+' <div class="panel-body counterPanelGreen">'
//
//		+'<center><span class="valueBox"><b>1</b></span></center>'
//		+'</div>'
//		+'</div>'
////		+'<span class="heading1">1 </span>'
//		+'</div>'
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
//		+'<center><span class="valueBox">Total Questions</span></center>'
//		+' <div class="panel-body counterPanelRed">'
//
//		+'<center><span class="valueBox"><b>8</b></span></center>'
//		+'</div>'
//		+'</div>'
////		+'<span class="heading1">4 </span>'
//		+'</div>'
//		+' </div>'
//		+'<div class="col-sm-4">'
//		+' <div class="panel panel-danger headingPanel" >'
//		+' <div class="panel-body" id="panelbody"><center><span class="heading1">Linearity error Calculation Analysis</span></center></div>'
//		+'</div>'
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger " style="    margin-bottom: 28px;">'
//		+'<center><span class="valueBox">Right Answer</span></center>'
//		+' <div class="panel-body counterPanelGreen">'
//
//		+'<center><span class="valueBox"><b>1</b></span></center>'
//		+'</div>'
//		+'</div>'
////		+'<span class="heading1">1 </span>'
//		+'</div>'
//		+'<div class="col-sm-6">'
//		+' <div class="panel panel-danger  " style="    margin-bottom: 28px;">'
//		+'<center><span class="valueBox">Total Questions</span></center>'
//		+' <div class="panel-body counterPanelRed">'
//
//		+'<center><span class="valueBox"><b>8</b></span></center>'
//		+'</div>'
//		+'</div>'
////		+'<span class="heading1">4 </span>'
//		+'</div>'
//		+' </div>'
//		+' </div>'
//
//		+' </div>'
		
		
		$("#mainDiv").html(htm);
		



		let initialData = [
		    { name: 'Questionaries', y: quesPercent },
		    { name: 'Configuration', y: configPercent },
		    { name: 'Mimic', y: mimicPercent },
		    { name: 'Calculation', y: CalculationPercent },
			{ name: 'Observation', y: observationPercent },
		];

		// Create the pie chart
		let chart = Highcharts.chart('graph-div', {
			exporting: { enabled: false },
				credits: { enabled: false},
		    chart: {
		        type: 'pie'
		    },
		    title: {
		        text: 'Student Performance'
		    },
		    series: [{
		        name: 'Observed',
		        colorByPoint: true,
		        data: initialData
		    }],
		    plotOptions: {
		        pie: {
		            dataLabels: {
		                enabled: true,
		                format: '{point.name}: {point.percentage:.1f} %'
		            }
		        }
		    }
		});
				


  }
