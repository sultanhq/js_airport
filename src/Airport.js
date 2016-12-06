function Airport() {

this.planes = [];

}


Airport.prototype.landPlane = function(plane) {
  this.planes.push(plane);
};

Airport.prototype.takeoffPlane = function(plane) {
  var index = this.planes.indexOf(plane);
  this.planes.splice(index, 1);
};

// Airport.prototype.planes = [];
