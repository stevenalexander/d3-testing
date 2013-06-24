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
          node_id = this.node.id;

      var svg = d3.select("#" + node_id).append("svg:svg")
        .attr("width", that.opts.width)
        .attr("height", that.opts.height);
    }
  });

  return {
    Barchart : barchart_obj
  };
})();