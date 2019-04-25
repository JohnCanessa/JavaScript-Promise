// **** asynchronous (non-blocking) example ****
console.log("before");

// **** callback based approach [1] ****
// getUser(1, (user) => {
//   getRepositories(user.gitHubUserName, (repos) => {
//     getCommits(repos[0], (commits) => {
//       console.log(comits);
//     })
//   })
// });

// **** promise-based approach [2] ****
// const p = getUser(1);
// p.then(user => console.log(user));

// getUser(1)
//   .then(user => getRepositories(user.gitHubUserName))
//   .then(repos => getCommits(repos[0]))
//   .then(commits => console.log("commits: ", commits))
//   .catch(err => console.log("error", err.message));

/*
 * async and await (similar to C#) approach [3]
 * Must use async function.
 */
async function displayCommits() {
  // **** try block ****
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUserName);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch (err) {
    // **** catch block ****
    console.log("displayCommits <<< error", err.message);
  }
}

// **** call the async function ****
displayCommits();

// **** ****
console.log("after");

/*
 * Simulate reading user data from a database.
 */
function getUser(id) {
  // **** return a promise ****
  return new Promise((resolve, reject) => {
    const delay = 2000;
    console.log("getUser <<< reading a user from a database...");

    // **** start some async work ****
    setTimeout(() => {
      console.log("getUser <<< database call done!!!");
      resolve({ id: id, gitHubUserName: "JohnCanessa" });
    }, delay);
  });
}

/*
 * Simulate getting repository names using GitHub API.
 */
function getRepositories(userName) {
  // **** return a promise ****
  return new Promise((resolve, reject) => {
    const delay = 2000;
    console.log("getRepositories <<< calling GitHub API...");

    // **** start some async work ****
    setTimeout(() => {
      console.log("getRepositories <<< GitHub API call done!!!");
      // resolve(["repo1", "repo2", "repo3", "repo4"]);
      reject(new Error("getRepositories <<< failed getting repos :o("));
    }, delay);
  });
}

/*
 * Simulate getting commits from a repo using GitHub API.
 */
function getCommits(repo) {
  // **** return a promise ****
  return new Promise((resolve, reject) => {
    const delay = 2000;
    console.log("getCommits <<< calling GitHub API...");

    // **** start some async work ****
    setTimeout(() => {
      console.log("getCommits <<< GitHub API call done!!!");
      resolve(["commit"]);
    }, delay);
  });
}
