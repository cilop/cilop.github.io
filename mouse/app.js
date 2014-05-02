

var settings = {
  width: 500,
  height: 500,
};

var random = function(min,max){
  return ( Math.random() * max ) + min;
};

var svg = d3.selectAll("#chart").append("svg")
  .attr("width", settings.width)
  .attr("height", settings.height)
  .attr('class','board')
  .append('g');

d3.selectAll('svg').on('mousemove', function(){
  
  svg.selectAll('circle')
     .data(d3.range(3))
     .enter()
     .append('circle')
     .attr('r', 3)
     .attr('cx', 5)
     .attr('cy', 5)


});

