var setTimerArrayJson=[];
var setTimerMasterJson={};
"use strict";

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

//document.form_main.start.onclick = () => start();
//document.form_main.pause.onclick = () => pause();
//document.form_main.reset.onclick = () => reset();

//$( document ).ready(function() {
//	
////  pause();
//  cron = setInterval(() => { timer(); }, 10);
//});

//function pause() {
//  clearInterval(cron);
//}
//
function reset() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  clearInterval(cron);
//  document.getElementById('hour').innerText = '00';
//  document.getElementById('minute').innerText = '00';
//  document.getElementById('second').innerText = '00';
//  document.getElementById('millisecond').innerText = '000';
}


startTimer(); // to check basic knowledge time 
function startTimer(){
	cron = setInterval(() => { timer(); }, 10);
}

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  document.getElementById('hour').innerText = returnData(hour);
  document.getElementById('minute').innerText = returnData(minute);
  document.getElementById('second').innerText = returnData(second);
  
//  document.getElementById('millisecond').innerText = returnData(millisecond);
}

function returnData(input) {
  return input >= 10 ? input : `0${input}`
}

//function addToTimerMasterJson(){
// 	tempJsonTimer={};
//	tempJsonTimer.bKnowledgeTime = bKnowledgeTime;
//	tempJsonTimer.type1Config = type1Config;
//	tempJsonTimer.timeOfMimic = timeOfMimic;
//	tempJsonTimer.type1tableAndGraph= type1tableAndGraph;
//	tempJsonTimer.type2Config = type2Config;
//	tempJsonTimer.type2Mimic = type2Mimic;
//	tempJsonTimer.type2tableAndGraph= type2tableAndGraph;
//	setTimerArrayJson.push(tempJsonTimer);
//	counterMasterJson.setTimerMasterJson = setTimerArrayJson;
//	console.log(setTimerMasterJson);
////	resultAnalysis(setTimerMasterJson);
//
//}


