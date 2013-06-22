var d3testing = d3testing || {};
d3testing.barchart = d3testing.barchart || (function() {
  var barchart_obj = function barchart() {};

  $.extend(barchart_obj.prototype, {
    draw : function(data) {}
  });

  return {
    Barchart : barchart_obj
  };
})();