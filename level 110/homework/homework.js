// 2)
async function fetchUserNames() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    users.forEach(user => {
      console.log(user.name);
    });
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
}

fetchUserNames();
// 3)


async function fetchData() {
  const apiUrl = 'https://invalid-api-link.com/data';

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log('Data received:', data);
  } catch (error) {
    console.error('Oops! Something went wrong:', error.message);
  }
}

fetchData();
// 4)
const MAX_TRIES = 3;
let tries = 0;

const retryFunc = async () => {
    tries++;
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todo");
        const data = await res.json();
        console.log(data);
    } catch (e) {
        if (tries < MAX_TRIES) {
            console.log(`Retrying... Attempt ${tries}`);
            retryFunc();
        } else {
            console.log("Maximum retry limit reached.");
        }
    }
};

retryFunc();


fetchWithRetry('https://invalid-api-link.com/data');
// 5)
const sequentialCalls = async () => {
  try {
    const res1 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data1 = await res1.json();

    const res2 = await fetch("https://api.thecatapi.com/v1");
    const data2 = await res2.json();

    console.log(data1);
    console.log(data2);
  } catch (error) {
    console.log({ error });
  }
};

sequentialCalls();
