

var goodDrivingRecord = true
var age = 24


if (goodDrivingRecord === true && age >=25) {
  console.log("Should get a discount on Car Rental");
} else if (goodDrivingRecord === true || age > 25) {
  console.log("Should pay full price");
} else  {
  console.log("Someone else needs to sign for rental");
}