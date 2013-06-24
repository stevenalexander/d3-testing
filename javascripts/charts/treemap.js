var d3testing = d3testing || {};
d3testing.treemap = d3testing.treemap || (function() {

  var treemap_obj = inherit(function treemap() {
    treemap_obj._super.constructor.call(this);
    this.node = $('#treemap')[0];
  }, d3testing.basechart.Basechart);

  $.extend(treemap_obj.prototype, {
    draw : function(data) {
      var that = this,
          node_id = this.node.id;

      var root_div = d3.select("#" + node_id).append("div")
    }
  });

  return {
    Treemap : treemap_obj
  };
})();