describe("Airport", function () {
  var airport;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
    weather = new Weather();
  });


  it("should land a plane", function() {
    airport.landPlane(plane);
    expect(airport.planes).toContain(plane)
  });

  it("should takeoff a plane", function() {
    airport.landPlane(plane);
    airport.takeoffPlane(plane);
    expect(airport.planes).not.toContain(plane)
  });

  it("should prevent a plane from landing in stormy weather", function() {
    console.log("weather " + weather.forecast);
    expect( function() {airport.landPlane(plane);} ).toThrowError("Cannot land plane in stormy weather")
  });


});
