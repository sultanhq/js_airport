describe("Weather", function () {
  var weather;

  beforeEach(function() {
    weather = new Weather;
  });

  it("tests that weather exists", function() {
    expect(["Sunny","Stormy"]).toContain(weather.forecast);
  });

});
