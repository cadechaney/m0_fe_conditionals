

var goodDrivingRecord = true
var age = 2


if (goodDrivingRecord === true && age >= 25) {
  console.log("Should get a discount on Car Rental");
} else if (goodDrivingRecord === true || age >= 25) {
  console.log("Should pay full price");
} else if (goodDrivingRecord === false && age < 25) {
  console.log("Someone else needs to sign for rental");
} 