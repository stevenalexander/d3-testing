describe("barchart", function() {
  var node = null,
      barchart = null,
      sample_data = null;

  beforeEach(function () {
    loadFixtures('visualisations.html');
    node = $("#barchart")[0];
    barchart = new d3testing.barchart.Barchart();
  });

  it("should have node property set to the barchart div", function() {
    expect(barchart.node.id).toEqual(node.id);
  });

  describe("draw", function() {
    describe("with sample data", function() {
      beforeEach(function () {
        sample_data = [
          { name: "Test1", amount: 1000.0, expected_amount_label: "£1,000" },
          { name: "Test2", amount: 2.9,    expected_amount_label: "£2.90" },
          { name: "Test3", amount: 300.0,  expected_amount_label: "£300" }
        ];
        barchart.draw(sample_data);
      });

      it("should create an svg element under node", function() {
        var barchart_svg = $("#barchart svg");

        expect(barchart_svg.length).toEqual(1)
        expect(barchart_svg.css("width")).toEqual(barchart.opts.width + "px")
        expect(barchart_svg.css("height")).toEqual(barchart.opts.height + "px")
      });

      it("should draw the axis", function() {
        var barchart_axis = $("#barchart svg .axis");

        expect(barchart_axis.length).toEqual(1);
      });

      it("should draw a g element for each data item, containing rect, name label and amount label", function() {
        var barchart_nodes = $("#barchart svg .node");

        expect(barchart_nodes.length).toEqual(sample_data.length);
        barchart_nodes.each(function() {
          expect($(this).find('text.name-label').length).toEqual(1);
          expect($(this).find('rect').length).toEqual(1);
          expect($(this).find('text.amount-label').length).toEqual(1);
        });

        sample_data.forEach(function(item) {
          var found = false;
          barchart_nodes.each(function() {
            var name_label = $(this).find('text.name-label');
            var amount_label = $(this).find('text.amount-label');
            if (name_label.text() == item.name) {
              found = true;
              expect(amount_label.text()).toEqual(item.expected_amount_label);
            }
          });
          expect(found).toBeTruthy()
        });
      });

      it("should order bars by amount descending", function() {
        var barchart_node_rects = $("#barchart svg .node rect"),
            previous_width = 9999999;

        barchart_node_rects.each(function() {
          current_width = $(this).attr('width');
          expect(current_width).toBeLessThan(previous_width);
          previous_width = current_width;
        });
      });
    });

  });
});