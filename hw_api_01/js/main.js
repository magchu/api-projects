//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getJoke)

function getJoke() {
    
fetch(`https://icanhazdadjoke.com/`, {
    headers: {
        "Accept": "application/json"
    }
}).then(res =>  res.json()) // parse response as JSON
    .then(data => {
    
        
      console.log(data.joke)

      document.querySelector('.jokeResult').innerText = data.joke

          
    // document.querySelector('h2').innerText = drink.strDrink
    // document.querySelector('img').src = drink.strDrinkThumb
    // document.querySelector('h3').innerText = drink.strInstructions
       

    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}
