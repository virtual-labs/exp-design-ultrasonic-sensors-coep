
var frequency;
var distanceInput;
var speedOFsound;
var distPath;
var speed;
var calculateTime;
var ArrayJson=[];
var TimeMasterJson={};
function animation(frequencySelect,distSelect,fluidSelect){
	$("#canvas-div").html('');	
    $("#centerText1").html('WORKING OF ULTRASONIC SENSOR ');
    $("#centerText2").html('CONFIGURATION');

$('#canvas-div').removeAttr('width');
	$('#canvas-div').removeAttr('height');
	var w =900;
	var h = 600;

	var width = $(window).width();

	if ($(window).width() < 500) {
		width = $(this).width();
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	} else {
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	}
	
var x=100;
var y=100;
frequency=parseInt(frequencySelect);
distanceInput=parseInt(distSelect);
speedOFsound=parseInt(fluidSelect);
distPath=(distanceInput/2)+110;
speed=speedOFsound/2;
var calculateTime2=(distanceInput/speed)*1000;
calculateTime = calculateTime2.toFixed(4);
//console.log("Time Calculation"+calculateTime)





var distanceDig=paper.path("M "+(x+300)+" "+(y+460)+" "+"l "+(-distPath)+" 0 l 0 -25 l 0 50  l 0 -25  l "+(distPath)+" 0  "
													   +"l "+(distPath)+" 0 l 0 -25 l 0 50   l 0 -25 "+(-distPath)).attr({'stroke-width':5});
 distText= paper.text((x+300),(y+440),"Distance ( "+distanceInput+" cm )").attr({'font-size':25,'stroke':'#800000'});;

if(distanceInput==2){
	var USworking=paper.image("images/ultrasonic1.gif", (x+140), (y+10),430, 380);
	var txt=paper.text((x+300), (y-10),"Transmit / Receive").attr({'font-size':25,'stroke':'#800000'});
	var US_txt=paper.text((x+70), (y+290),"Ultrasonic Sensor").attr({'font-size':25,'stroke':'#189AB4'});
    var objec_txt=paper.text((x+500), (y+200),"Object").attr({'font-size':25,'stroke':'#189AB4'});
}else if(distanceInput==50){
	var USworking=paper.image("images/ultrasonic1.gif", (x+120), (y+10),500, 380);
	var txt=paper.text((x+300), (y-10),"Transmit / Receive").attr({'font-size':25,'stroke':'#800000'});
	var US_txt=paper.text((x+70), (y+290),"Ultrasonic Sensor").attr({'font-size':25,'stroke':'#189AB4'});
    var objec_txt=paper.text((x+550), (y+200),"Object").attr({'font-size':25,'stroke':'#189AB4'});
}else if(distanceInput==100){
	var USworking=paper.image("images/ultrasonic1.gif", (x+70), (y-60), 600, 450);
	var txt=paper.text((x+300), (y-10),"Transmit / Receive").attr({'font-size':25,'stroke':'#800000'});
	var US_txt=paper.text((x+70), (y+290),"Ultrasonic Sensor").attr({'font-size':25,'stroke':'#189AB4'});
    var objec_txt=paper.text((x+550), (y+200),"Object").attr({'font-size':25,'stroke':'#189AB4'});
	
}else if(distanceInput==200){
	var USworking=paper.image("images/ultrasonic1.gif", (x+20), (y-140), 750, 550);
	var txt=paper.text((x+300), (y-50),"Transmit / Receive").attr({'font-size':25,'stroke':'#800000'});
	var US_txt=paper.text((x+70), (y+290),"Ultrasonic Sensor").attr({'font-size':25,'stroke':'#189AB4'});
    var objec_txt=paper.text((x+590), (y+200),"Object").attr({'font-size':25,'stroke':'#189AB4'});
	
}else if(distanceInput==300){
	var USworking=paper.image("images/ultrasonic1.gif", (x-30), (y-140), 900, 550);
	var txt=paper.text((x+300), (y-50),"Transmit / Receive").attr({'font-size':25,'stroke':'#800000'});
	var US_txt=paper.text((x+50), (y+290),"Ultrasonic Sensor").attr({'font-size':25,'stroke':'#189AB4'});
    var objec_txt=paper.text((x+650), (y+200),"Object").attr({'font-size':25,'stroke':'#189AB4'});
}else{

	var USworking=paper.image("images/ultrasonic1.gif", (x-90), (y-140), 1100, 550);
	var txt=paper.text((x+300), (y-50),"Transmit / Receive").attr({'font-size':25,'stroke':'#800000'});
	var US_txt=paper.text((x+30), (y+290),"Ultrasonic Sensor").attr({'font-size':25,'stroke':'#189AB4'});
	var objec_txt=paper.text((x+710), (y+200),"Object").attr({'font-size':25,'stroke':'#189AB4'});
}
$("#timeAnswer").prop('hidden',false);


//changenames= setInterval(names,3500);



}
function addToMasterJSON(){
	                  tempJson={};	
						tempJson.frequency=frequency;
						tempJson.distanceInput = distanceInput;
						tempJson.speedOFsound = speedOFsound;
						
						tempJson.distPath = distPath;
						tempJson.speed = speed;
						tempJson.calculateTime = calculateTime;
						ArrayJson.push(tempJson);
						TimeMasterJson.demo = ArrayJson;
//						console.log(TimeMasterJson);
						tableCreate(TimeMasterJson);

}