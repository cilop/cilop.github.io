 var randColor = function(){
  var letters = 'ABCDEF0123456789'.split('');
  var color = '#';

  for (var i = 0; i < 6; i++){
    color = color + letters[Math.floor(Math.random() * letters.length)];    
  }

  return color;
 };

 var numCircles = function(w,h,d,s){ 
  return Math.floor(((w - 2 * s) * (h - 2 * s) / ((d * d) * 1.21)));
};


 var settings = {
  radius: 10,
  color: randColor,
  width: 800,
  height: 600,
  sep: 1.2,
  start: 15
 };

settings.diameter = 2 * settings.radius;
settings.circles = Math.floor( settings.width * settings.height / (Math.PI * Math.pow(settings.radius,2)));
settings.circles = numCircles(settings.width,settings.height,settings.diameter,settings.start);

var horLimit = Math.floor((settings.width - 2 * settings.start) / (settings.sep * settings.diameter));
var setPos = function(d,i,x){

//var horLimit = Math.floor( settings.width / ( settings.sep * settings.diameter ));

if (x) {
  i = i % horLimit + 1;
  return i * settings.sep * settings.diameter;
}

i++;
return settings.start + 30 * Math.floor(i / horLimit);
};





var svg = d3.select("#chart").append("svg")
  .attr("width", settings.width)
  .attr("height", settings.height)
  .attr('class','board');

var circle = svg.append('g')
  .attr('class','node')
  .attr('width', settings.width)
  .attr('height', settings.height)
  .selectAll('circle')
  .data(d3.range(settings.circles))
  .enter().append('circle')
  .attr('opacity', 0)
  .transition()
  .duration(3 * settings.circles)
  .attr('opacity', 1)
  .attr('r', settings.radius)
  .attr('cx', function(d,i) { return setPos(d,i,true); })
  .attr('cy', function(d,i) { return setPos(d,i,false); })
  .attr('fill', function(){ return settings.color(); });


window.onresize = function(){
d3.selectAll('#chart')
  .attr('width', settings.width)
  .attr('height', settings.height);
};

var anim = function(elements){
  //console.log('called');
  elements
    //.attr('r', function() { return settings.radius })
    .transition()
    .duration(1500)
    //.delay(Math.random() * 1)
    .attr('fill', function(){ return settings.color(); })
    .attr('r', function() { return settings.radius * Math.random() + 0.5 * settings.radius })
    .each('end', function(){ anim(d3.select(this)) });
};

anim(circle);



