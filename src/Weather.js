function Weather() {
weathers = ["Sunny","Stormy"];
this.forecast = weathers[(Math.random() * weathers.length) |0];
}
//
// Weather.prototype.forecast = function() {
//   return "Sunny";
// };
