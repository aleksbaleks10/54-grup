// 1
async function getFootballData() {
  const url = "https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Arsenal";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

getFootballData();
// 2
function checkRandom() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        resolve("success");
      } else {
        reject("fail");
      }
    }, 2000);
  });
}


async function runCheck() {
  try {
    const result = await checkRandom();
    console.log("Resolved value:", result);
  } catch (error) {
    console.log("Rejected value:", error);
  }
}


runCheck();
// 3
async function fetchTeamData() {
  try {
    const response = await fetch('https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Arsenal');
    const data = await response.json();
    console.log(':', data);
  } catch (error) {
    console.error(':', error);
  }
}

fetchTeamData();
