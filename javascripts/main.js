$(document).ready(function() {
  var util = new d3testing.utils.Util();
  util.load_visualisations();
});

var d3testing = d3testing || {};
d3testing.utils = d3testing.utils || (function() {
  var util_obj = function util() {};

  $.extend(util_obj.prototype, {

    load_visualisations : function() {
      var data = this.load_data_from_table();

      this.remove_chart_image();
      this.draw_tree_map(data);
      this.draw_barchart(data);
    },

    load_data_from_table : function() {
      var data = [];
      $('#data-table tbody tr').each(function() {
        data.push({
          name: this.children[0].innerText,
          amount: parseFloat(this.children[1].innerText)
        });
      });
      return data;
    },

    remove_chart_image : function() {
      $('#chart-image').remove();
    },

    treemap : new d3testing.treemap.Treemap(),

    draw_tree_map : function(data) {
      this.treemap.draw(data);
    },

    barchart : new d3testing.barchart.Barchart(),

    draw_barchart : function(data) {
      this.barchart.draw(data);
    }
  });

  return {
    Util : util_obj
  };
})();