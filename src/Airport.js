function Airport() {

this.planes = [];
weather = new Weather();
}


Airport.prototype.landPlane = function(plane) {
  console.log(weather.forecast)
  if (weather.forecast === "Stormy")
    throw new Error("Cannot land plane in stormy weather");
  else
  this.planes.push(plane);
};

Airport.prototype.takeoffPlane = function(plane) {
  var index = this.planes.indexOf(plane);
  this.planes.splice(index, 1);
};

// Airport.prototype.planes = [];
