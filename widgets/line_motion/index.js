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
  const dnode = math.parse(latex);
  const distance = dnode.compile();
  const vnode = math.derivative(dnode, 'x');
  const velocity = vnode.compile();
  const anode = math.derivative(vnode, 'x');
  const acceleration = anode.compile()
  let scope = {x: 0};
  
  var frames = [
    {name: 'distance', data: [{x: [], y: []}, {x: [], y: []}]},
    {name: 'velocity', data: [{x: [], y: []}, {x: [], y: []}]},
    {name: 'speed', data: [{x: [], y: []}, {x: [], y: []}]},
    {name: 'acceleration', data: [{x: [], y: []}, {x: [], y: []}]}
  ];

  //populate frames here
  var n = 200;
  for (var i = 0; i < n; i++) {
      var t = i/(n/20)-10;
      
      // distance:
      scope.x = t
      frames[0].data[0].x[i] = t;
      frames[0].data[0].y[i] = distance.evaluate(scope)

      // velocity:
      frames[1].data[0].x[i] = t;
      frames[1].data[0].y[i] = velocity.evaluate(scope);
    
      // speed:
      frames[2].data[0].x[i] = t;
      frames[2].data[0].y[i] = math.abs(velocity.evaluate(scope));
    
      // acceleration:
      frames[3].data[0].x[i] = t;
      frames[3].data[0].y[i] = acceleration.evaluate(scope);
  }
  var dr = nerdamer("roots("+latex+")").evaluate().toDecimal().slice(1,-1).split(",");
  var vr = nerdamer("roots(diff("+latex+"))").evaluate().toDecimal().slice(1,-1).split(",");
  var ar = nerdamer("roots(diff(diff("+latex+")))").evaluate().toDecimal().slice(1,-1).split(",");
  var i = 0;
  while (i < dr.length){
  frames[0].data[1].x[i] = parseFloat(dr[i]);
  frames[0].data[1].y[i] = 0;
  i++;
  }
  
  var i = 0;
  while (i < vr.length){
  frames[1].data[1].x[i] = parseFloat(vr[i]);
  frames[1].data[1].y[i] = 0;
    
  frames[2].data[1].x[i] = parseFloat(vr[i]);
  frames[2].data[1].y[i] = 0;
  i++;
  }
  
  var i = 0;
  while (i < ar.length){
  frames[3].data[1].x[0] = parseFloat(ar[i]);
  frames[3].data[1].y[0] = 0;
  i++;
  }
  
  console.log(frames[0][1]);
  
  Plotly.newPlot('graph', [{
    x: frames[0].data[0].x,
    y: frames[0].data[0].y,
    line: {simplify: false},
  }], {
    xaxis: {autorange: true},
    yaxis: {autorange: true},
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
  	Plotly.plot('graph', [{
	x: frames[0].data[1].x,
	y: frames[0].data[1].y,
	mode: 'markers'}], {
    updatemenus: [{
      buttons: [
        {method: 'animate', args: [['distance']], label: 'distance'},
        {method: 'animate', args: [['velocity']], label: 'velocity'},
        {method: 'animate', args: [['speed']], label: 'speed'},
        {method: 'animate', args: [['acceleration']], label: 'acceleration'}
      ]
    }]
	}).then(function() {
		Plotly.addFrames('graph', frames);
	});
}
  
