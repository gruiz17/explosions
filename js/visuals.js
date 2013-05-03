visuals = {

  yoloswag: function(mx, my, h, w, timeScale) {
    svg.append("svg:text")
    .text("#yoloswag")
    .attr("font-size","16").attr("font-family","Lato").attr("fill","#ffffff").attr("fill-opacity",1)
    .attr("x",mx).attr("y",my)
    .transition().duration(timeScale*500).ease(Math.sqrt).attr("font-size","28").attr("x", mx-50).attr("y",my-50).attr("fill-opacity",0.1)
    .remove();
  },

  hexagon: function(mx, my, h, w, timeScale) {
    var rotation=0;
    for (var k = 0; k < 6; k++) {
      svg.append("svg:circle")
      .attr("transform","rotate(" + rotation + ", " + mx + "," + my +")")
      .attr("cx",mx)
      .attr("cy",my)
      .attr("r", 10)
      .style("stroke",colors(++ci)).style("fill", colors(++ci)).style("stroke-opacity",0.6).style("fill-opacity",0.4)
      .transition().duration(timeScale*500).ease(Math.sqrt).attr("cx",mx + 200).attr("cy", my + 200)
      .transition().duration(timeScale*500).ease(Math.sqrt).attr("cx",mx - 200)
      .transition().duration(timeScale*500).ease(Math.sqrt).attr("cx",mx - 200).attr("cy", my - 200)
      .transition().duration(timeScale*500).ease(Math.sqrt).attr("cy",my - 200).attr("cx", mx + 200)
      .transition().duration(timeScale*500).ease(Math.sqrt).attr("cx",mx + 200).attr("cy", my + 200)
      .transition().duration(timeScale*500).ease(Math.sqrt).attr("cx",my+200).attr("cy", my - 200)
      .style("stroke-opacity",1e-6).style("fill-opacity", 1e-6).remove();
      rotation+=60;
    }
  },

  triangles: function(mx, my, h, w, timeScale) {
    var p1init = (mx-20) + " " + (my);
    var p2init = mx + " " + (my-40);
    var p3init = (mx+20) + " " + (my);
    var p1 = (mx-50) + " " + (my-100);
    var p2 = mx + " " + (my-250);
    var p3 = (mx+50) + " " + (my-100);
    var rotations = ["0", "125"," 235"];
    for (var k = 0; k < 3; k++) {
      for (var i = 0; i < rotations.length; i++) {
        svg.append("svg:path")
        .attr("transform","rotate("+rotations[i]+", " + mx + "," + my +")")
        .attr("d", "M " + p1init + " L "+p2init + " L "+p3init + " L " + p1init)
        .style("stroke", colors(++ci)).style("stroke-opacity",1).style("stroke-width","5px").style("fill-opacity",0)
        .transition().duration(timeScale*500).ease(Math.sqrt)
          .attr("d", "M " + p1 + " L "+p2 + " L "+p3 + " L " + p1)
          .style("stroke-opacity",1e-6).remove();
      }
    }
  },

  biglines: function(mx, my, h, w, timeScale) {
    for (var k = 0; k < 5; k++) {
      var randx = Math.floor(Math.random()*2000)-1000,
        randy = Math.floor(Math.random()*2000)-1000;
        thunnidx=300, thunnidy=300;
      if (randx < 0){thunnidx *= -1;}
      if (randy < 0){thunnidy*=-1;}
      svg.append("svg:line")
      .attr("x1",mx).attr("y1",my).attr("x2",mx).attr("y2",my)
      .style("stroke",colors(++ci)).style("stroke-width", "10px")
      .transition()
        .duration(timeScale*1000).ease(Math.sqrt)
        .attr("x1",mx+randx).attr("y1",my+randy).attr("x2",mx+randx+thunnidx).attr("y2",my+randy+thunnidy)
        .style("stroke-opacity",0.1).remove();
    }
  },

  confetti: function(mx, my, h, w, timeScale) {
    for (var k = 0; k < 5; k++) {
      var randx = Math.floor(Math.random()*2000)-1000,
        randy = Math.floor(Math.random()*2000)-1000;
        thunnidx=30, thunnidy=30;
      if (randx < 0){thunnidx *= -1;}
      if (randy < 0){thunnidy*=-1;}
      svg.append("svg:line")
      .attr("x1",mx).attr("y1",my).attr("x2",mx).attr("y2",my)
      .style("stroke",colors(++ci)).style("stroke-width", "10px")
      .transition().duration(timeScale*1000).ease(Math.sqrt)
        .attr("x1",mx+randx).attr("y1",my+randy)
        .attr("x2",mx+randx+thunnidx).attr("y2",my+randy+thunnidy)
        .style("stroke-opacity",0.1).remove();
    }
  },

  jazz: function(mx, my, h, w, timeScale) {
    for (var k = 0; k < 5; k++) {
      svg.append("svg:circle")
        .attr("cx",mx).attr("cy",my).attr("r",6)
        .style("stroke",colors(++ci)).style("fill",colors(++ci))
        .transition().duration(timeScale*800).ease(Math.sqrt)
          .attr("cx",mx+Math.floor(Math.random()*200)-100).attr("cy",my+Math.floor(Math.random()*200)-100)
          .style("stroke-opacity",1e-6).style("fill-opacity",1e-6).remove();
    }
  },

  drawing: function(mx, my, h, w, timeScale) {
    for (k = 0; k < 7; k++) {
      svg.append("svg:circle")
        .attr("cx",mx).attr("cy",my).attr("r",4)
        .style("stroke","#00FFFF").style("fill","#00FFFF")
        .transition().delay(2000).duration(timeScale*800)
          .attr("cx",mx+Math.floor(Math.random()*200)-100).attr("cy",my+Math.floor(Math.random()*200)-100)
          .style("stroke",colors(++ci)).style("fill",colors(++ci)).style("stroke-opacity",1e-6).style("fill-opacity",1e-6).remove();
    }
  },

  foursquare: function(mx, my, h, w, timeScale) {
    var rotations = ["0", "90", "180"," 270"];
    for (var i = 0; i < rotations.length; i++) {
      svg.append("svg:rect")
        .attr("transform","rotate("+rotations[i]+", " + mx + "," + my +")")
        .attr("x",mx).attr("y",my).attr("width",0).attr("height",0)
        .style("stroke",colors(++ci)).style("stroke-opacity",1)
        .transition().duration(timeScale*500).ease(Math.sqrt)
          .attr("x",mx+40).attr("y",my+40).attr("width",100).attr("height",100)
          .style("stroke-opacity",1e-6).remove();

    }
  },

  linestomouse: function(mx, my, h, w, timeScale) {
    var offsets = [
      [[+1, +30], [0, 0], [+1, +300], [0, 0]],
      [[-1, -30], [0, 0], [-1, -300], [0, 0]],
      [[0, 0], [+1, 0], [0, 0], [+1, +300]],
      [[0, 0], [-1, 0], [0, 0], [-1, -300]],
      [[+1, +30], [+1, +30], [+1, +300], [+1, +300]],
      [[-1, -30], [+1, -30], [-1, -300], [+1, +300]],
      [[-1, -30], [-1, -30], [-1, -300], [-1, -300]],
      [[+1, +30], [-1, -30], [+1, +300], [-1, -300]]
    ];
    for (var i = 0; i < offsets.length; i++) {
      var o = offsets[i];
      svg.append("svg:line")
        .attr("x1", mx + w*o[0][0] + o[0][1])
        .attr("y1", my + h*o[1][0] + o[1][1])
        .attr("x2", mx + w*o[2][0] + o[2][1])
        .attr("y2", my + h*o[3][0] + o[3][1])
        .style("stroke",colors(++ci)).style("stroke-width", "10px").style("stroke-opacity",1)
        .transition().duration(timeScale*500).ease(Math.sqrt).attr("x1",mx).attr("y1",my).attr("x2",mx).attr("y2",my).remove();
    }
  },

  circlereverse: function(mx, my, h, w, timeScale) {
    svg.append("svg:circle")
      .attr("cx",mx).attr("cy",my).attr("r",w/2).style("stroke",colors(++ci))
      .transition().duration(timeScale*500).attr("r",0).style("stroke-opacity",1e-6).remove();
  },

  basiccircle: function(mx, my, h, w, timeScale) {
    svg.append("svg:circle")
      .attr("cx",mx).attr("cy",my).attr("r",0).style("stroke",colors(++ci))
      .transition().duration(timeScale*1000).ease(Math.sqrt).attr("r",w/2).style("stroke-opacity",1e-6).remove();
  },

  miniworks: function(mx, my, h, w, timeScale) {
    var transforms = ["155,155","-155,155","155,-155","-155,-155"];
    for (var i = 0; i < transforms.length; i++) {
      svg.append("svg:circle")
        .attr("cx",mx).attr("cy",my).attr("r",10)
        .style("stroke",colors(++ci)).style("fill",colors(ci)).style("stroke-opacity",0.5)
        .transition()
          .attr("transform","translate("+transforms[i]+")").duration(timeScale*1000).ease(Math.sqrt).attr("r",25)
          .style("stroke-opacity",1e-6).style("fill-opacity",1e-6).remove();
    }
  },

  fireworks: function(mx, my, h, w, timeScale) {
    var transforms = ["0,-400","0,400","400,0","-400,0","355,355","-355,355","355,-355","-355,-355"];
    for (var i = 0; i < transforms.length; i++) {
      svg.append("svg:circle")
        .attr("cx",mx).attr("cy",my).attr("r",10)
        .style("stroke",colors(++ci)).style("fill",colors(ci)).style("stroke-opacity",0.5)
        .transition()
          .attr("transform","translate("+transforms[i]+")").duration(timeScale*1000).ease(Math.sqrt).attr("r",25)
          .style("stroke-opacity",1e-6).style("fill-opacity",1e-6).remove();
    }
  }

};