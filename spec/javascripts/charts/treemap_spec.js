describe("treemap", function() {
  var node = null,
    treemap = null;

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
        var sample_data = []
        treemap.draw(sample_data);
      });

      it("should create a root div element under node", function() {
        var treemap_root_div = $("#treemap div");
        expect(treemap_root_div.length).toEqual(1)
        expect(treemap_root_div.css("width")).toEqual(treemap.opts.width + "px")
        expect(treemap_root_div.css("height")).toEqual(treemap.opts.height + "px")
      });
    });

  });
});