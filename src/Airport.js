'use strict';
function Airport() {
  this._hangar = [];
  // weather = new Weather();
}
Airport.prototype.planes = function(){
  return this._hangar;
};

Airport.prototype.clearForLanding = function(plane) {
  this._hangar.push(plane);
};

Airport.prototype.clearForTakeOff = function(plane) {
  this._hangar = [];
};


// Airport.prototype.planes = [];
