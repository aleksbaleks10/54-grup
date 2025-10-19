// 2)

// Fetch User Data:
// Write a function that uses fetch and async/await to retrieve user data from a public API (e.g., https://jsonplaceholder.typicode.com/users). Log the names of all users.
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

// Handle API Errors:
// Fetch data from an invalid API link inside a try...catch block. Display a custom error message if the request fails.
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
async function fetchWithRetry(url, retriesRemaining = 3) {
  try {
    const response = await fetch(url);
    const data = await response.json(); // Will throw if response is invalid
    console.log('Data received:', data);
  } catch (error) {
    console.error('Fetch failed:', error.message);

    if (retriesRemaining === 1) {
      console.error('No more retries left.');
      return;
    }

    return fetchWithRetry(url, retriesRemaining - 1);
  }
}


fetchWithRetry('https://invalid-api-link.com/data');
// 5)

// Sequential Requests:
// Make two API calls one after the other using await. For example, first fetch a list of posts, then fetch details for the first post’s author.
async function fetchSequentialData() {
  const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  const usersBaseUrl = 'https://jsonplaceholder.typicode.com/users';

  try {
    // First API call: fetch posts
    const postsResponse = await fetch(postsUrl);
    const posts = await postsResponse.json();

    if (!Array.isArray(posts) || posts.length === 0) {
      console.error('No posts found.');
      return;
    }

    const firstPost = posts[0];
    const authorId = firstPost.userId;


    const authorUrl = [usersBaseUrl, authorId].join('');
    const authorResponse = await fetch(authorUrl);
    const author = await authorResponse.json();

    console.log('First post:', firstPost);
    console.log('Author details:', author);
  } catch (error) {
    console.error('Error during sequential fetch:', error.message);
  }
}

fetchSequentialData();