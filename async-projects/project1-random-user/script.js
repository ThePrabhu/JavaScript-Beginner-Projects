const URL = "https://randomuser.me/api/";

async function getUser() {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Loading...";

  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const user = data.results[0];

    resultDiv.innerHTML = `
      <img src="${user.picture.large}" />
      <p>Name: ${user.name.first} ${user.name.last}</p>
      <p>Email: ${user.email}</p>
      <p>Country: ${user.location.country}</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = "Fetch failed: " + error.message;
  }
}

document.getElementById("generate").addEventListener("click", getUser);