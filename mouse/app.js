

var settings = {
  width: 500,
  height: 500,
  minR: 2,
  maxR: 4,
  pi: Math.PI,
  outerRad: 100
};

var random = function(min,max){
  return ( Math.random() * max ) + min;
};


var posX = function(x){

  var angle = random(0, 2 * settings.pi);
  return x + settings.outerRad * Math.cos(angle);
};

var posY = function(y){

  var angle = random(0, 2 * settings.pi);
  return y - settings.outerRad * Math.sin(angle);
}

var svg = d3.selectAll("#chart").append("svg")
  .attr("width", settings.width)
  .attr("height", settings.height)
  .attr('class','board')
  .append('g');

d3.selectAll('svg').on('mousemove', function(){
  
  var coords = d3.mouse(this);

  


  svg.selectAll('circle')
     .data(d3.range(20))
     .enter()
     .append('circle')
     .attr('r', function() { return random(settings.minR, settings.maxR); })
     .attr('cx', function() { return posX(coords[0]); })
     .attr('cy', function() { return posY(coords[1]); })
     .transition()
     .duration(1000)
     .attr('cx', coords[0])
     .attr('cy', coords[1])
     .remove();

});

