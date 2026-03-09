const URL = "https://official-joke-api.appspot.com/random_joke";

async function randomJoke() {
     const result = document.querySelector("#result");
    result.innerHTML = "Loading...";
    try{
        const response = await fetch(URL);

        if( !response.ok ){
            throw new Error(`HTTP ERROR : ${response.status}`);
        }

        const data = await response.json();
        result.innerHTML = `
            <p>${data.setup}</p>
            <p>${data.punchline}`;

        document.querySelector("#generate").textContent = "Next Joke";
    }catch (error){
        result.innerHTML = "Failed to load joke: " + error.message;
    }
}
 
document.querySelector("#generate").addEventListener("click", randomJoke);