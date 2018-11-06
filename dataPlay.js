let visualData = [100, 300 , 40, 90, 75, 150, 370];

d3.select('.dataChart')
  .selectAll('div')
  .data(visualData)
  .enter()
  .append('div')
  .style('height', '25px')
  .style('width', function(d) {
    return d + "px";
  })
  .style('margin', '10px')
  .text(function(d) {
    return d;
  })
  .style('color', 'yellow')
  .style('text-align', 'right')
  .style('padding-right', '10px')
  .style('padding-top', '5px');
