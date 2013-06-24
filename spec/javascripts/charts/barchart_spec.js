describe("barchart", function() {
  var node = null,
    barchart = null;

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
        var sample_data = []
        barchart.draw(sample_data);
      });

      it("should create an svg element under node", function() {
        var barchart_svg = $("#barchart svg");
        expect(barchart_svg.length).toEqual(1)
        expect(barchart_svg.css("width")).toEqual(barchart.opts.width + "px")
        expect(barchart_svg.css("height")).toEqual(barchart.opts.height + "px")
      });
    });

  });
});