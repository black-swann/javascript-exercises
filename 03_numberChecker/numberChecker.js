function numberChecker(number) {
  if (number >= 10) {
    return true;
  }

  return false;
}

// Do not edit below this line
module.exports = numberChecker;

function numberdivider(number) {
  if (number >= 10) {
    return number / 2;
  }
  else {
  return number / 1;
}
}

module.exports.numberdivider = numberdivider;
