//Line Motion
function startEntry(){
  var mathFieldSpan = document.getElementById('math-field');
  var MQ = MathQuill.getInterface(2);
  var mathField = MQ.MathField(mathFieldSpan, {
    spaceBehavesLikeTab: true, // configurable
    handlers: {
      edit: function() { // useful event handlers
        var lat = mathField.latex();
        graphIt(latex_to_js(lat)); // simple API
      }
    }
  });
}

function graphIt(latex){
  console.log(latex);
  const node = math.parse(latex)
  const code = node.compile()
  let scope = {x: 3}
  
  scope.x = 1
  console.log(code.evaluate(scope))
  
  var frames = [
    {name: 'distance', data: [{x: [], y: []}]},
    {name: 'velocity', data: [{x: [], y: []}]},
    {name: 'speed', data: [{x: [], y: []}]},
    {name: 'acceleration', data: [{x: [], y: []}]}
  ];

  //populate frames here

  Plotly.plot('graph', [{
    x: frames[0].data[0].x,
    y: frames[0].data[0].y,
    line: {simplify: false},
  }], {
    xaxis: {range: [-10, 10]},
    yaxis: {range: [-15, 15]},
    updatemenus: [{
      buttons: [
        {method: 'animate', args: [['distance']], label: 'distance'},
        {method: 'animate', args: [['velocity']], label: 'velocity'},
        {method: 'animate', args: [['speed']], label: 'speed'},
        {method: 'animate', args: [['acceleration']], label: 'acceleration'}
      ]
    }]
  }, {displayModeBar: false}).then(function() {
    Plotly.addFrames('graph', frames);
  });
}
  
