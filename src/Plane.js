'use strict';

function Plane() {

}

Plane.prototype.land = function(airport) {
  airport.clearForLanding(this);
  this._location = airport;
};

Plane.prototype.takeOff = function(airport) {
  this._location.clearForTakeOff('');

  // var index = this.planes.indexOf(plane);
  // airport.planes.splice(index, 1);
};
