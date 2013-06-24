describe("BaseChart", function() {
  var basechart = new d3testing.basechart.Basechart();

  describe("opts", function() {
    it("should have opts property with colour scale", function() {
      expect(basechart.opts.colour_scale).toBeDefined();
    });
    it("should have opts properties for default width/height", function() {
      expect(basechart.opts.width).toEqual(800);
      expect(basechart.opts.height).toEqual(400);
    });
  });

  describe("get_amount_label", function() {
    it("should return formatted label for amount", function() {
      expect(basechart.get_amount_label(100.0)).toEqual("£100")
      expect(basechart.get_amount_label(1000.0)).toEqual("£1,000")
      expect(basechart.get_amount_label(1.991)).toEqual("£1.99")
    });
  });
});