

var settings = {
  width: 500,
  height: 500,
  minR: 2,
  maxR: 6,
  pi: Math.PI,
  outerRad: 50
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
};

var randomColor = function(){

  var color = Math.floor(random(65,200));

  return 'rgb(' + color + ',' + color + ',' + color + ')';
}

var svg = d3.selectAll("#chart").append("svg")
  .attr("width", settings.width)
  .attr("height", settings.height)
  .attr('class','board')
  .append('g');

d3.selectAll('svg').on('mousemove', function(){
  
  var self = this;

  var animate = function(){


    var coords = d3.mouse(self);
    svg.selectAll('circle')
       .data(d3.range(random(20,40)))
       .enter()
       .append('circle')
       .attr('r', function() { return random(settings.minR, settings.maxR); })
       .attr('cx', function() { return posX(coords[0]); })
       .attr('cy', function() { return posY(coords[1]); })
       //.attr('fill', 'rgb(155,155,155)')
       .attr('fill', function() { return randomColor(); })
       .transition()
       .duration(400)
       .delay(function() { return Math.random() * 800 })
       .attr('cx', coords[0])
       .attr('cy', coords[1])
       .transition()
       .duration(200)
       .attr('r', 0.005)
       //.each('end', animate)
       .remove();

  };

  animate();
  

});

