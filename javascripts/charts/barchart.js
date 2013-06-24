var d3testing = d3testing || {};
d3testing.barchart = d3testing.barchart || (function() {

  var barchart_obj = inherit(function barchart() {
    barchart_obj._super.constructor.call(this);
    this.node = $('#barchart')[0];
  }, d3testing.basechart.Basechart);

  $.extend(barchart_obj.prototype, {
    draw : function(data) {
      if (this.node == null) { return null; }

      var that = this,
          node_id = this.node.id,
          margin = { top: 0, right: 120, bottom: 20, left: 120 },
          bar_bottom_m = 5,
          bar_left_m = 5,
          bar_right_m = 5,
          bar_g_height = (that.opts.height - margin.top - margin.bottom) / data.length,
          bar_height = bar_g_height - bar_bottom_m,
          max_x = d3.max(data, function(d) { return d.amount }),
          max_bar_width = that.opts.width - margin.left - margin.right,
          x = d3.scale.linear().domain([0, max_x]).range([0, max_bar_width]),
          sorted_data = data.sort(function(a, b){ return d3.descending(a.amount, b.amount); });;

      var svg = d3.select("#" + node_id).append("svg:svg")
        .attr("width", that.opts.width)
        .attr("height", that.opts.height);

      var x_axis = d3.svg.axis()
        .scale(x)
        .ticks(5)
        .tickSize(that.opts.height - margin.bottom)
        .tickFormat(function(value) {
          return that.get_amount_label(value);
        });

      svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(" + margin.left + ",0)")
        .call(x_axis);

      var bars = svg.append('g')
        .attr('class','bars')
        .selectAll("g.node")
        .data(data)
        .enter()
        .append("g")
        .attr('class','node')
        .attr("transform", function(d, i) {
          return "translate(" + margin.left + "," + (margin.top + i*bar_g_height) + ")"; });

      var bar = bars.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", function(d) { return x(d.amount); })
        .attr("height", bar_height)
        .attr("fill", function(d, i) { return that.opts.colour_scale(i); });

      var bar_name_labels = bars.append("svg:text")
        .attr('class','name-label')
        .attr("x", -bar_left_m)
        .attr("y", bar_g_height/2)
        .attr("text-anchor", "end")
        .text(function(d) { return d.name; });

      var bar_amount_labels = bars.append("svg:text")
        .attr('class', 'amount-label')
        .attr("x", function(d) { return x(d.amount) + bar_right_m; })
        .attr("y", bar_g_height/2)
        .text(function(d) { return that.get_amount_label(d.amount) });
    }
  });

  return {
    Barchart : barchart_obj
  };
})();