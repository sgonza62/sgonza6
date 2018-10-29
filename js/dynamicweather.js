var weatherData;

var api = "https://api.openweathermap.org/data/2.5/weather?q=";
var city = "Chicago";
var apikey = "&appid=6d55335c587b0b5d868e1eaec6f0e16c";


var cityselect;

var circlecolor = 0;


function setup(){
createCanvas(500, 500);

cityselect = createSelect();
cityselect.position(10, 10);
cityselect.option("Chicago");
cityselect.option("Florida");
cityselect.option("California");
cityselect.changed(changeCity);

}


function changeCity(){
var weatherURL = api + cityselect.value() + apikey;
loadJSON(weatherURL, gotweatherdata);

}


function gotweatherdata(data){
	weatherData = data;
	console.log(weatherData);


}


function draw(){
background(0);

if(weatherData){

	fill(circlecolor)
	stroke(weatherData.main.temp);
	circle = ellipse(width/2, height/2, weatherData.main.temp, weatherData.main.temp);

}

}