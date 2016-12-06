describe("airport", function () {
  var airport;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
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


});
