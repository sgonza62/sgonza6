
//WeatherMap API
var apiW = "https://api.openweathermap.org/data/2.5/weather?q=";
var apiWkey = "&appid=6d55335c587b0b5d868e1eaec6f0e16c";


var countryapi = "https://restcountries.eu/rest/v2/name/";
var countryname;


var weatherData;
var countrydata;


//Select City
var TextFieldforcity;
var Addbutton;
var sumbitbutton;



var textFieldforcountry;

var numcircles;








function setup(){
createCanvas(displayWidth, displayHeight);




for (var i = 0; i < numcircles; i++) {
	var x = random(width);
	var y = random(height);
	var r = .001;
	fill(155);
	stroke(255);
	ellipse(x, y, r);
}





var Addbutton = select('#Add');
var sumbitbutton = select('#enter')
Addbutton.mousePressed(changeCity);
sumbitbutton.mousePressed(country);


TextFieldforcity= select('#city');
textFieldforcountry = select('#num');




}








function changeCity(){
var weatherURL = apiW + TextFieldforcity.value() + apiWkey + "&units=imperial";
loadJSON(weatherURL, gotweatherdata);

}


function gotweatherdata(data){
	weatherData = data;
	console.log(weatherData);


}



function country(){

var countryURL = countryapi + textFieldforcountry.value();
loadJSON(countryURL, gotcountrydata);

}


function gotcountrydata(data){

countrydata = data;
console.log(countrydata);


}







function draw(){
background(50,17,70);


if(weatherData){
temptext = 'Temp:' + weatherData.main.temp;
textSize(24);
text(temptext, 40, 400);

Humiditytext = 'Humidity:'+ weatherData.main.humidity;
textSize(24);
text(Humiditytext,40, 440);

windtext = 'Wind Speed:' +weatherData.wind.speed;
textSize(24);
text(windtext, 40, 480);

weathertext = 'Weather:' +weatherData.weather[0].description;
textSize(24);
text(weathertext, 40, 520);




}
if (weatherData){
fill(155);
stroke(weatherData.main.humidity);
ellipse(500,800,weatherData.main.temp * 2, weatherData.main.temp * 2);


}
if (countrydata){
numcircles = countrydata[0].population;

}



if (countrydata){
numcircles = countrydata[0].population;
for (var i = 0; i < numcircles/10000; i++) {
	var x = random(width);
	var y = random(height);
	var r = .000001;
	fill(155);
	stroke(255);
	ellipse(x, y, r);
}
}

if (countrydata){
poptext = 'Population:' + countrydata[0].population;
fill(255);
stroke(0);
textSize(24);
text(poptext, 1000, 400);

capital = 'Capital:' + countrydata[0].capital;
fill(255);
stroke(0);
textSize(24);
text(capital, 1000, 440);
}



}

