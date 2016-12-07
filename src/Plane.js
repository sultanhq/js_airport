'use strict';

function Plane() {

}


Plane.prototype.land = function(airport) {
  airport.clearForLanding(this);
};

Plane.prototype.takeOff = function(airport) {
  var index = this.planes.indexOf(plane);
  airport.planes.splice(index, 1);
};
