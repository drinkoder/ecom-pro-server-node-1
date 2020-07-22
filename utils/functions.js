exports.isMatchInArrays = (arr1, arr2) => {
  return arr1.some(i => arr2.includes(i));
  // needs.some(i => myRoles.includes(i));
};
