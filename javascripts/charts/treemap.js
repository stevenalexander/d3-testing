var d3testing = d3testing || {};
d3testing.treemap = d3testing.treemap || (function() {
  var treemap_obj = function treemap() {};

  $.extend(treemap_obj.prototype, {
    draw : function(data) {}
  });

  return {
    Treemap : treemap_obj
  };
})();