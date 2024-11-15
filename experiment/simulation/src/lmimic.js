
var tankHight;
var waterlvl;
var airSpeedOfSound;
var speed;
var distance;
var calculateTimeForLvl;
var levelArrayJson=[];
var levelMasterJson={};


function lmimic(tankHSelect,waterLevelPercent){ 
	var waterPercent;
	//$("#main-div-conf").html('');	
    $("#canvas-div").html('');	
    $("#centerText1").html('LEVEL MEASUREMENT MIMIC');
    $("#centerText2").html('APPLICATION');
	$("#canvas-btndiv").prop("hidden", false);
	$('#canvas-div').removeAttr('width');
	$('#canvas-div').removeAttr('height');
	var w =650;
	var h = 650;

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

	
	var x1=200;
	var y1=200;
	//max of y_value=305 and min _value=
	tankHight=tankHSelect;
	//parseInt(pipeSizeSelect);
	var angle=0;
	 waterPercent=waterLevelPercent;
	//parseInt(angleSelect);
	var flowRate=0;
	//parseInt(flowRateSelect);
	var fluid=0;
	//parseInt(fluidSelect);
	var dist=0;
	//parseInt(distSelect);
	var calculateFrequency=angle+flowRate+fluid;
	//1% water means (350/100=3.5,  350/200=1.75, 350/300=1.16, 350/400=0.875)3.5 pixcle of water level
	//var waterlvl=100;
	 waterlvl=(tankHight*waterPercent)/100;
//	console.log("water Level = "+waterlvl);
	var ratioOfW=350/tankHight;
//	console.log("ratioOfW  =>"+ratioOfW);
	var Wlevel=ratioOfW*waterlvl;
//	console.log("Wlevel  =>"+Wlevel);
	
	
	var h=waterlvl;
	var H=tankHight;
	distance=H-h;
//	console.log("distance="+distance);
	
	distanceValue=(distance/2)+110;
	airSpeedOfSound=34300;
	speed=airSpeedOfSound/2;
	var calculateTimeForLvl2=(distance/speed)*1000;
	calculateTimeForLvl = calculateTimeForLvl2.toFixed(4);
	
	var time=1000;
	var waves;
	var waveflag=0;
	var wavesUP,wavesDOWN;
	var HVal= paper.text((x1-60),(y1+172),"H "+H).attr({'font-size':20,'stroke':'#11c9f2'});
	var HVal2= paper.path('M'+(x1-60)+' '+(y1-1)+'l -10 0 l 20 0 l -10 0 l 0 162 '
					 +'M'+(x1-60)+' '+(y1+350)+'l -10 0 l 20 0 l -10 0 l 0 -167 '
	).attr({'stroke-width':2});
	//350
	tankDesign();
	
	var d1,d2;

////LEVEL ULTRASONIC SENSOR WORKING SIULATION
	
	function tankDesign(){
		var w= 60;
		var h= 30;
		var color ='#11c9f2';
		var color1='#ffffff';
		
		var levelSensor=paper.image("images/levelPS.png", (x1+18), (y1-140), 200, 105).rotate(-4);
		//var tank = paper.path('M'+x1+' '+y1+' '+'A 50 25 0 0 1 450 200 l 0 300 A 50 25 0 0 1 200 500 z').attr({'stroke-width':3} );
		
		var tank = paper.path('M'+x1+' '+y1+' '+'A 50 25 0 0 1 450 200 l 0 351 l -250 0 z').attr({'stroke-width':3} );
		var inlet = paper.path('M'+(x1+15)+' '+(y1-30)+'l -130  0 l ').attr({'stroke-width':3 } );
		//	'M'+(x1+125)+' '+(y1-62)+'l 0  -80 l 100 0 l 0 -15 l 15 15 l 0 -30 l -10 0 l 20 0 l-10 0 l 0 30 l 15 15 l 0 -30 l -30 30 l 0 -15 l 0 15 l 30 -30 l 0 15 l 100 0');          
		//	inlet
		//	paper.text(530, 80, "Inlet").attr({'font-size': 24});
		d1= paper.path('M'+(x1-80)+' '+(y1-15.5)+'l 0 -30 l 30 30 l 0 -30 l -30 30 l 15 -15 l 0 -30 l 15 0 l -30 0 l 15 0 l 0 30 ').attr({'fill':'red'});
		var fwater=paper.text((x1-120),(y1-45),"Inlet").attr({'font-size':25,'stroke':'#800000'});  
		var outlet =paper.path('M'+(x1+125)+' '+(y1+350)+'l 0  50 l 140 0').attr({'stroke-width':3 } );
		d2= paper.path('M'+(x1+195)+' '+(y1+415)+'l 0 -30 l 30 30 l 0 -30 l -30 30 l 15 -15 l 0 -30 l 15 0 l -30 0 l 15 0 l 0 30 ').attr({'fill':'red'});
		var dwater=paper.text((x1+270),(y1+380),"Outlet").attr({'font-size':25,'stroke':'#800000'});
		}

	var tankEmptyFlag=0;

	d1.click(function(){
		if(tankEmptyFlag==0){
			d1.attr({'fill':'green'});
			waterFill();
		}else{
			alert("Tank is already filled");
	//		$("#modelMsg123").html("<b class='boldTextRed'>Fill the tank </b> ");	
		}
		
		
	});

	d2.click(function(){
		if(tankEmptyFlag==1){
			d2.attr({'fill':'green'});
			waterdrain();
		}else{
			alert("Tank is already empty");
	//		$("#modelMsg123").html("<b class='boldTextRed'>Tank is already empty </b> ");	
		}
		//$("#canvas-btndiv").prop("disabled", false);
	});



	function waterdrain(){
		tankEmptyFlag=0;
//		console.log("Water Drain");
		var Waterdrain_arr = [];	
		Waterdrain_arr[0]=paper.path('M' +(x1+125)+ ' ' +(upWaveY-2)+ 'l 0 0 ').attr({'stroke': '#fff','stroke-width':247});
		Waterdrain_arr[0].animate({path :'M' +(x1+125)+ ' ' +(upWaveY-2)+ 'l 0 '+(Wlevel+2)+''},time, function(){
				
		Waterdrain_arr[1]=paper.path('M' +(x1+341)+ ' ' +(y1+213)+ 'l 0 0 ').attr({'stroke': '#74CCF4','stroke-width':130, 'stroke-opacity': 0.4});
		Waterdrain_arr[1].animate({path :'M' +(x1+341)+ ' ' +(y1+213)+ 'l 0 0 '},time-1000, function(){
		//	var bwater=paper.path('M'+(x1+0)+','+(y1+300)+'l 250 0 A 50 25 0 0 1 200 500 z').attr({'fill':'#fff','stroke-width':3 });
	//var Wborder=paper.path('M'+(x1+1.5)+','+(y1+300)+'l 247 0').attr({'stroke':'#fff','stroke-width':4});
	     d2.attr({'fill':'red'});
		});
		});
	}

	function waterFill(){
		tankEmptyFlag=1;
		var Waterfill_arr = [];	
		
		Waterfill_arr[0]=paper.path('M' +(x1+125)+ ' ' +(y1+300)+ 'l 0 0 ').attr({'stroke': '#11c9f2','stroke-width':247});
		Waterfill_arr[0].animate({path :'M' +(x1+125)+ ' ' +(y1+300)+ 'l 0 0'},time-500, function(){
	//	var bwater=paper.path('M'+(x1+0)+','+(y1+300)+'l 250 0 A 50 25 0 0 1 200 500 z').attr({'fill':'#11c9f2','stroke-width':3 });
	//	var Wborder=paper.path('M'+(x1+1.5)+','+(y1+300)+'l 247 0').attr({'stroke':'#11c9f2','stroke-width':4});
	//var waterlevel_line=paper.path('M'+(x1+1.5)+','+(y1+298)+'l 247 0').attr({'stroke':'red','stroke-width':});
	
		Waterfill_arr[1]=paper.path('M' +(x1+125)+ ' ' +(y1+350)+ 'l 0 0 ').attr({'stroke': '#11c9f2','stroke-width':247});
		Waterfill_arr[1].animate({path :'M' +(x1+125)+ ' ' +(y1+350)+ 'l 0 '+(-Wlevel)+''},time, function(){
//			console.log("Wlevel value = "+Wlevel);
				d1.attr({'fill':'red'});
				var levelValW= paper.text((x1+340),(upWaveY)," Water Level "+waterPercent+" %").attr({'font-size':20,'stroke':'#11c9f2'});
					alert("Now click on START button");
	//			$("#canvas-btndiv").prop("hidden", false);
			});
		});
		
	} 
	 var  wavesForLevel;
	 var downWaveY= ((y1-5)+distance);  
	 var upWaveY= ((y1+350)-Wlevel);
	 var upAnimY=412-Wlevel;
//	 console.log("upAnimY"+upAnimY);
//	 console.log("upWaveY"+upWaveY);
	 
	// var line=paper.path('M' +(x1+80)+ ' ' +(138)+ 'l 50 0 ').attr({'stroke':'green','stroke-width':5});
	//var line1=paper.path('M' +(x1+50)+ ' ' +(y1-62)+ 'l 50 0 ').attr({'stroke':'red','stroke-width':5});
	//var line2=paper.path('M' +(x1+50)+ ' ' +(upWaveY)+ 'l 50 0 ').attr({'stroke':'yellow','stroke-width':5});
	
	//line2.animate({transform: ['t',40, -(y1-5)]}, 1000); 
 
	function levelWaves(){
		var wavesL_arr = [];	
		wavesL_arr[0]=paper.path('M' +(x1-100)+ ' ' +(y1+213)+ 'l 0 0 ').attr({'stroke': '#000'});
		wavesL_arr[0].animate({path :'M' +(x1-100)+ ' ' +(y1+213)+ 'l 0 0 '},500, function(){
		
		wavesDOWN=paper.image("images/downW.png", (x1+40), (y1-75), 80, 70);
		wavesDOWN.animate({transform: ['t',40,upAnimY-30]}, 1000);			
		
	//	console.log("Y value for Down wave="+upAnimY)
		
		wavesL_arr[1]=paper.path('M' +(x1-100)+ ' ' +(y1+213)+ 'l 0 0 ').attr({'stroke': '#000'});
		wavesL_arr[1].animate({path :'M' +(x1-100)+ ' ' +(y1+213)+ 'l 0 0 '},time, function(){
		wavesDOWN.remove();
		wavesUP=paper.image("images/levelUpWaves.png", (x1+80), (upWaveY-45), 80, 70);	
		wavesUP.animate({transform: ['t',40, -(upAnimY-20)]}, 1000);
	//	console.log("Y value for UP wave ="+upAnimY);
		
		wavesL_arr[2]=paper.path('M' +(x1-100)+ ' ' +(y1+213)+ 'l 0 0 ').attr({'stroke': '#000'});
		wavesL_arr[2].animate({path :'M' +(x1-100)+ ' ' +(y1+213)+ 'l 0 0 '},time, function(){
		wavesUP.remove();
			});
		  });
		});	
	}

	$("#btnAnimStart").click(function(e){
		e.preventDefault();
		if(tankEmptyFlag==1){
//			console.log("before wavesForLevel = "+wavesForLevel);
			wavesForLevel= setInterval(levelWaves,3000);
//			console.log("setInterval wavesForLevel = "+wavesForLevel);
	  		$("#timeAnswerLvl").prop('hidden',false);
		}else{
			alert("Click on inlet valve to fill the tank");
//			$("#modelMsg123").html("<b class='boldTextRed'>Fill the tank </b> ");		
		}
	})	

	$("#btnAnimStop").click(function(){
		 waveStop();
	//	clearInterval(wavesForLevel);
	//	console.log("clear interval  waves val = "+wavesForLevel);
	})

	function waveStop() {
	  clearInterval(wavesForLevel);
//	  console.log("clear interval  waves val = "+wavesForLevel);
	}


}


function addToLevelMasterJSON(){
						$("#btnAnimStop").click();
	                  tempJson1={};	
						tempJson1.tankHight=tankHight;
						tempJson1.waterlvl = waterlvl;
						tempJson1.airSpeedOfSound = airSpeedOfSound;	
						tempJson1.distanceValue = distance;						
						tempJson1.calculateTimeForLvl = calculateTimeForLvl;
						levelArrayJson.push(tempJson1);
						levelMasterJson.demo = levelArrayJson;
//						console.log(levelMasterJson);
						tableCreateLevel(levelMasterJson);
						$("#btnAnimStart").unbind("click");
						$("#btnAnimStop").unbind("click");
}


