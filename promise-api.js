// // **** create a resolved promise ****
// const p = Promise.resolve({ id: 1 });

// // **** ****
// p.then(result => console.log(result));

// // **** create a rejected promise ****
// const p = Promise.reject(new Error("reason for rejection"));

// // **** ****
// p.catch(error => console.log(error));

// **** simulating calling FaceBook API ****
const p1 = new Promise((resolve, reject) => {
  const timeOut = 6000;
  console.log("async operation 1...");
  setTimeout(() => {
    console.log("async operation 1 done!");
    resolve(1);
    // reject(new Error("something went wrong!"));
  }, timeOut);
});

// **** simulating calling Twitter API ****
const p2 = new Promise((resolve, reject) => {
  const timeOut = 3000;
  console.log("async operation 2...");
  setTimeout(() => {
    console.log("async operation 2 done!");
    resolve(2);
  }, timeOut);
});

// // **** wait for all promises to be resolved ****
// Promise.all([p1, p2])
//   .then(result => console.log(result))
//   .catch(err => console.log("error: ", err.message));

// **** wait for a promise to be resolved ****
Promise.race([p1, p2])
  .then(result => console.log(result))
  .catch(err => console.log("error: ", err.message));
