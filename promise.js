// **** create a new promise ****
const p = new Promise((resolve, reject) => {
  // **** start asynchronous work ****
  const delay = 2000;
  setTimeout(() => {
    // **** if all goes well (return result for asynchronous operation) ****
    // resolve(1);    // pending => resolved, fulfilled

    // **** if something goes wrong ****
    reject(new Error("error message :o(")); // pending => rejected
  }, delay);
});

// **** use promise instead of callback instead of asynchronous functions ****
console.log("before");
p.then(result => console.log("result: ", result)).catch(err =>
  console.log("error: ", err.message)
);
console.log("waiting...");
