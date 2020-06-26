// newFunction();

// function newFunction() {
//   const evenOdd = (n) => {
//     if (n % 2 != 0) {
//       let n = "Weird";
//       return n; // odd print Weird
//     } else if (n % 2 == 0 && 2 < n < 5) {
//       let n = "Not Weird";
//       return n; // If n is even and in the inclusive range of 2 to 5, print Not Weird
//     } else if (n % 2 == 0 && 6 < n < 20) {
//       let n = "Weird";
//       return n; // If n is even and in the inclusive range of 6 to 20 , print Weird
//     } else if (n % 2 == 0 && 20 < n <= 100) {
//       let n = "Not Weird";
//       return n; // If n is even and greater than 20 , print Not Weird
//     }

//   };
//   evenOdd(24);
// }

const evenOdd1 = (n) => {
  if (n % 2 != 0) {
    let n = "Weird";
    return n; // odd print Weird
  } else if (n % 2 == 0 && 2 < n && n < 5) {
    let n = "Not Weird";
    return n; // If n is even and in the inclusive range of 2 to 5, print Not Weird
  } else if (n % 2 == 0 && 6 < n && n < 20) {
    let n = "Weird";
    return n; // If n is even and in the inclusive range of 6 to 20 , print Weird
  } else if (n % 2 == 0 && 20 < n && n <= 100) {
    let n = "Not Weird";
    return n; // If n is even and greater than 20 , print Not Weird
  }
};
evenOdd1(24);
console.log(evenOdd1(24));
