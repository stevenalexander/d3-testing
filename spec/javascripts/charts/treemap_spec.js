describe("treemap", function() {
  var node = null,
    treemap = null,
    sample_data = null;

  beforeEach(function () {
    loadFixtures('visualisations.html');
    node = $("#treemap")[0];
    treemap = new d3testing.treemap.Treemap();
  });

  it("should have node property set to the treemap div", function() {
    expect(treemap.node.id).toEqual(node.id);
  });

  describe("draw", function() {
    describe("with sample data", function() {
      beforeEach(function () {
        sample_data = [
          { name: "Test1", amount: 1000.0, expected_amount_label: "£1,000" },
          { name: "Test2", amount: 2.9,    expected_amount_label: "£2.90" },
          { name: "Test3", amount: 300.0,  expected_amount_label: "£300" }
        ];
        treemap.draw(sample_data);
      });

      it("should create a root div element under node", function() {
        var treemap_root_div = $("#treemap div")[0];

        expect($(treemap_root_div).css("width")).toEqual(treemap.opts.width + "px")
        expect($(treemap_root_div).css("height")).toEqual(treemap.opts.height + "px")
      });

      it("should create a node div for each sample data item plus root node", function() {
        var treemap_nodes = $("#treemap div.node");

        expect(treemap_nodes.length).toEqual(sample_data.length + 1)

        sample_data.forEach(function(item) {
          var found = false;
          treemap_nodes.each(function() {
            var name_label = $(this).find('div.name-label');
            var amount_label = $(this).find('div.amount-label');
            if (name_label.text() == item.name) {
              found = true;
              expect(amount_label.text()).toEqual(item.expected_amount_label);
            }
          });
          expect(found).toBeTruthy()
        });
      });
    });

  });
});