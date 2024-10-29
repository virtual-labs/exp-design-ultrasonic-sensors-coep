
tableReading=0;
tableReading2=0;
function tableCreate(masterJson) {
//	console.log(masterJson);
	var tableMainDiv = '<div class="col-sm-12">'
		+ '<table class=" table table-bordered " style=" text-align: center">'
		+ ' <thead>'
		+ '  <tr style = "BACKGROUND-COLOR: #072647; color:#fff; ">'
		+ '  <tr>'
		+ '  <th><center>Sr.No</center></th>'
		+ '  <th scope="col"><center>Frequency (KHz)</center></th>'
		+ '   <th scope="col"><center >Distance (cm)</center></th>'
		+ '  <th scope="col"><center>Speed of Sound (cm/s)</center></th>'
		+ '  <th scope="col"><center>Calculated Time (ms)</center></th>'
		+ '   </tr>'
		+ '  </thead>'
		+ '   <tbody>'
	for (var i = 0, p = 1; i < masterJson.demo.length; i++, p++) {
		tableMainDiv += '<tr>'
			+ '<td>' + p + '</td>'
			+ ' <td><center style="color:red;">' + masterJson.demo[i].frequency + '</center></td>'
			+ ' <td><center style="color:red;">' + masterJson.demo[i].distanceInput + '</center></td>'
			+ ' <td><center>' + masterJson.demo[i].speedOFsound + '</center></td>'
			+ '<td><center>' + masterJson.demo[i].calculateTime + '</center></td>'
			+ ' </tr>'
	}
	tableMainDiv += ' </tbody>'
		+ '  </table>'
		+ ' </div>'
	console.log("tableReading2 : " +tableReading2);
	if (tableReading2 >=5){
		tableMainDiv += '<div class="col-sm-12"><button type="button"    class="btn btn-danger btnStyle" id="levelM"  ><b>GO FOR LEVEL MEASUREMENT </b></button></div> <br><br><br><br><br><br>'
	}

	$("#tableDesign").html(tableMainDiv);
	tableReading2++;
	
	$("#levelM").click(function(){
		mainPage2();
	});
}


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


function tableCreateLevel(levelMasterJson) {
//	console.log(levelMasterJson);
	var tableMainDiv = '<div class="col-sm-12">'
		+ '<table class=" table table-bordered " style="text-align: center">'
		+ ' <thead>'
		+ '  <tr style = "BACKGROUND-COLOR: #072647; color:#fff; ">'
		+ '  <tr>'
		+ '  <th><center>Sr.No</center></th>'
		+ '  <th scope="col"><center>Tank Height (cm)</center></th>'
		+ '  <th scope="col"><center>Calculated Time (ms)</center></th>'
		+ '  <th scope="col"><center>Distance (cm)</center></th>'
		+ '   <th scope="col"><center >water Level (cm)</center></th>'
		+ '  <th scope="col"><center>Speed of Sound (cm/s)</center></th>'
		
		
		+ '   </tr>'
		+ '  </thead>'
		+ '   <tbody>'
			
	for (var i = 0, p = 1; i < levelMasterJson.demo.length; i++, p++) {
		tableMainDiv += '<tr>'
			+ '<td>' + p + '</td>'
			+ '   <td><center style="color:red;">' + levelMasterJson.demo[i].tankHight + '</center></td>'
			+ '<td><center style="color:red;">' + levelMasterJson.demo[i].calculateTimeForLvl + '</center></td>'
			+ '<td><center>' + levelMasterJson.demo[i].distanceValue + '</center></td>'
			+ ' <td><center style="color:red;">' + levelMasterJson.demo[i].waterlvl + '</center></td>'
			+ ' <td><center>' + levelMasterJson.demo[i].airSpeedOfSound + '</center></td>'
			
			
			+ ' </tr>'
	}
	tableMainDiv += ' </tbody>'
		+ '  </table>'
		+ ' </div>'
console.log("tableReading : " +tableReading);
	if (tableReading >= 3){
		console.log("table.....")
		tableMainDiv += '<div class="col-sm-12"><button type="button"  class="btn btn-danger btnStyle"  id="finish"  data-toggle="modal" data-target="#selectCheck"  ><b> RESULT</b></button></div><br><br><br><br>'
	}

	$("#tableDesign").html(tableMainDiv);
	tableReading++;
	
	$("#finish").click(function(){
		//$("#modelMsg123").html('<img src="images/cong.gif" class="img-fluid" >');
		resultAnalysis(counterMasterJson);
//		alert("Experiment successfully completed");
	});
}
