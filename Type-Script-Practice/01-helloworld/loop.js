var reviews = [5, 4, 5.5, 6];
var rev = [3, 6, 3];
var total = 0;
var t = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total = total + reviews[i];
}
for (var _i = 0, rev_1 = rev; _i < rev_1.length; _i++) {
    var k = rev_1[_i];
    t = t + k;
}
var avg;
avg = total / reviews.length;
var avg1;
avg1 = t / rev.length;
console.log("Average is " + avg);
console.log("Average is " + avg1);
var Sports = ["Football", "Tennis", "Golf"];
Sports.push("Baseball");
Sports.push("Hockey");
for (var _a = 0, Sports_1 = Sports; _a < Sports_1.length; _a++) {
    var temp = Sports_1[_a];
    console.log(temp);
}
