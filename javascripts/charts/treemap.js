var d3testing = d3testing || {};
d3testing.treemap = d3testing.treemap || (function() {

  var treemap_obj = inherit(function treemap() {
    treemap_obj._super.constructor.call(this);
    this.node = $('#treemap')[0];
  }, d3testing.basechart.Basechart);

  $.extend(treemap_obj.prototype, {
    draw : function(data) {
      if (this.node == null) { return null; }

      var that = this,
          node_id = this.node.id,
          sorted_data = data.sort(function(a, b){ return d3.descending(a.amount, b.amount); });

      var root = {
        name: "",
        amount: 0.0,
        children: sorted_data
      };

      var treemap = d3.layout.treemap()
        .size([that.opts.width, that.opts.height])
        .sticky(true)
        .value(function(d) { return d.amount; })

      var div = d3.select("#" + node_id).append("div")
        .style("position", "relative")
        .style("width", that.opts.width + "px")
        .style("height", that.opts.height + "px");

      var nodes = div.datum(root).selectAll(".node")
        .data(treemap.nodes)
        .enter().append("div")
        .attr("class", "node")
        .style("left", function(d) { return d.x + "px"; })
        .style("top", function(d) { return d.y + "px"; })
        .style("width", function(d) { return Math.max(0, d.dx - 1) + "px"; })
        .style("height", function(d) { return Math.max(0, d.dy - 1) + "px"; })
        .style("background", function(d,i) { return i == 0 ? "#fff" : that.opts.colour_scale(i-1); })
        .call(function() {
          label_div = this.append("div");
          label_div.append("div")
            .attr("class", "name-label")
            .text(function(d) { return d.name});
          label_div.append("div")
            .attr("class", "amount-label")
            .text(function(d) { return that.get_amount_label(d.amount)});
        });
    }
  });

  return {
    Treemap : treemap_obj
  };
})();