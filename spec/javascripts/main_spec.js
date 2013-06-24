describe("Main", function() {
  var util = new d3testing.utils.Util();
  var sample_data = [{ name:"Test1", amount:100.0 }, { name:"Test2", amount:200.0 }];

  describe("load_visualisations", function () {
    beforeEach(function () {
      spyOn(util,'load_data_from_table').andReturn(sample_data);
      spyOn(util,'remove_chart_image');
      spyOn(util,'draw_tree_map');
      spyOn(util,'draw_barchart');

      util.load_visualisations();
    });

    it("should call load_data_from_table", function () {
      expect(util.load_data_from_table).toHaveBeenCalled();
    });

    it("should call remove_chart_image", function () {
      expect(util.remove_chart_image).toHaveBeenCalled();
    });

    it("should call draw_tree_map", function () {
      expect(util.draw_tree_map).toHaveBeenCalledWith(sample_data);
    });

    it("should call draw_barchart", function () {
      expect(util.draw_barchart).toHaveBeenCalledWith(sample_data);
    });
  });

  describe("load_from_table", function () {
    it("should return data from data-table", function() {
      loadFixtures('data-table.html');
      expect(util.load_data_from_table()).toEqual([
        { name: "Test1", amount: 100.0},
        { name: "Test2", amount: 200.0},
        { name: "Test3", amount: 300.0}
      ]);
    });
  });

  describe("remove_chart_image", function () {
    it("should remove the chart image", function() {
      loadFixtures('visualisations.html');

      expect($('#chart-image').length).toEqual(1);
      util.remove_chart_image();
      expect($('#chart-image').length).toEqual(0);
    });
  });

  describe("draw_tree_map", function () {
    it("should call draw on treemap", function() {
      loadFixtures('visualisations.html');
      spyOn(util.treemap,'draw');
      util.draw_tree_map(sample_data);
      expect(util.treemap.draw).toHaveBeenCalledWith(sample_data);
    });
  });

  describe("draw_barchart", function () {
    it("should call draw on barchart", function() {
      loadFixtures('visualisations.html');
      spyOn(util.barchart,'draw');
      util.draw_barchart(sample_data);
      expect(util.barchart.draw).toHaveBeenCalledWith(sample_data);
    });
  });
});