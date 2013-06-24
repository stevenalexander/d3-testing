function inherit(C, Base) {
  var F = function() {};
  F.prototype = Base.prototype;
  C.prototype = new F();
  C._super = Base.prototype;
  C.prototype.constructor = C;
  return C;
};

var d3testing = d3testing || {};
d3testing.basechart = d3testing.basechart || (function() {
  var basechart_obj = function basechart() {
    this.node = null;
    this.opts = {
      width : 800,
      height : 400,
      colour_scale : d3.scale.category10()
    };
  };

  $.extend(basechart_obj.prototype, {
    get_amount_label : function(amount) {
      var parts = amount.toFixed(2).toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      var formatted_value = parts.join(".").replace(/\.00/,"");

      return "£" + formatted_value;
    }
  });

  return {
    Basechart : basechart_obj
  };
})();