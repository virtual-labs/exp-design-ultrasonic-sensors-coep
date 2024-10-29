function resultAnalysis(counterMasterJson){
	    
		console.log("ResultPage Analysis.......");
				
$("#selectMethod").prop('hidden',true);

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
console.log(quesPercent);

//configuration
var correctValConfigType11 = (10/((counterMasterJson.cntCalMain1MasterJson.cntSubmitConfig)+(counterMasterJson.cntCalMain2MasterJson.cntSubmitConfigPg2))).toFixed(2);
var configPercent1 = (correctValConfigType11*100).toFixed(1);
var configPercent = parseFloat(configPercent1);
console.log(configPercent);

//type1 Configuration
//configuration
var correctValConfigTypeA = (6/(counterMasterJson.cntCalMain1MasterJson.cntSubmitConfig)).toFixed(2);
var configPercent12 = (correctValConfigTypeA*100).toFixed(1);
var configPercentT1 = parseFloat(configPercent12);
console.log(configPercentT1);

//type2 Configuration
//configuration
var correctValConfigTypeB = (4/(counterMasterJson.cntCalMain2MasterJson.cntSubmitConfigPg2)).toFixed(2);
var configPercent22 = (correctValConfigTypeB*100).toFixed(1);
var configPercentT2 = parseFloat(configPercent22);
console.log(configPercentT2);

//mimic
var correctValMimic = (5/5).toFixed(2);
var mimicPercent1 = (correctValMimic*100).toFixed(1);
var mimicPercent = parseFloat(mimicPercent1);
console.log(mimicPercent);

//Calculation
var correctValCalculation = (30/((counterMasterJson.cntCalMain1MasterJson.cntCalculateMainPage)+(counterMasterJson.cntCalMain2MasterJson.cntCalculateMainPage2))).toFixed(2);
var CalculationPercent1 = (correctValCalculation*100).toFixed(1);
var CalculationPercent = parseFloat(CalculationPercent1);
console.log(CalculationPercent);

//Calculation typeA
var correctValCalculation11 = (6/counterMasterJson.cntCalMain1MasterJson.cntCalculateMainPage).toFixed(2);
var CalculationPercentT1 = (correctValCalculation11*100).toFixed(1);
var CalculationPercentA = parseFloat(CalculationPercentT1);
console.log(CalculationPercentA);

//Calculation typeB
var correctValCalculationB1 = (4/counterMasterJson.cntCalMain2MasterJson.cntCalculateMainPage2).toFixed(2);
var CalculationPercentB1 = (correctValCalculationB1*100).toFixed(1);
var CalculationPercentB = parseFloat(CalculationPercentB1);
console.log(CalculationPercentB);


//Observation
var correctValObsevation = (5/5).toFixed(2);
var observationPercent1 = (correctValObsevation*100).toFixed(1);
var observationPercent = parseFloat(observationPercent1);
console.log(observationPercent);

var htm=''
		
		+'<div class="container-fluid">'
		+'  <div class="row">'


		+'<div class="col-md-12">'
		+' <div class="panel remarkBground" >'
		+' <div class="panel-body remark" ><center>Experiment completed successfully!!</center></div>'
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
		   +'     <th><center class="">PHASES OF ULTRASONIC SENSOR </center></th>'
		   +'     <th><center class="">STATUS</center></th>'
//		   +'	  <th><center class="">TIME</center></th>'
		   +'    </tr>'
		   +' </thead>'
		   +'  <tbody>'
		   +'   <tr>'
		   +'     <td class=""><center>Basic knowledge</center></td>'
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
		   +'     <th><center class="">PHASES OF ULTRASONIC LEVEL SENSOR</center></th>'
		   +'     <th><center class="">STATUS</center></th>'
//		   +'     <th><center class="">TIME</center></th>'
		   +'    </tr>'
		   +' </thead>'
		   +'  <tbody>'
		   +'   <tr>'
		   +'     <td class=""><center>Basic knowledge</center></td>'
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
		+'<center><span class="heading1"><b>Basic knowledge</b></span></center>'
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
		+' <div class="panel-body" id="panelbody"><center><span class="heading1">Calculation of ultrasonic sensor</span></center></div>'
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
		+' <div class="panel-body" id="panelbody"><center><span class="heading1">Calculation of ultrasonic level sensor</span></center></div>'
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
