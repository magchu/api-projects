
document.querySelector('button').addEventListener('click', getDrinks)

let resultBox = document.querySelector('.resultBox')

function makeElement(type, className, parent) {
    let element = document.createElement(type)
    element.classList.add(className)
    parent && parent.appendChild(element);
    return element
}

function getRecipe(drink) {
   
    let miniBox = makeElement('section', 'miniBox', resultBox)

    let cocktailName = makeElement('h3', 'cocktailName', miniBox)
    cocktailName.innerText = drink.strDrink;
    
    let cocktailIngredients = makeElement('ul', 'ingredients', miniBox)
    
    for (i = 1; i <= 15; i++) {
        let ingredient = drink[`strIngredient${i}`]
        if (!ingredient) break;

        let li = document.createElement('li');
        li.innerText = ingredient;
        cocktailIngredients.appendChild(li);
        }
    
    let instructionHeader = makeElement('h3', 'instructionHeader', miniBox)
    instructionHeader.innerText = `INSTRUCTION`

    let cocktailInstruction = makeElement('p', 'instruction', miniBox)
    cocktailInstruction.innerText = drink.strInstructions;
        
    
}


       

function getDrinks(){
    let drink = document.querySelector('input').value


    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            
            resultBox.classList.add('resultBoxPadding')

            let drinks = data.drinks;


            console.log(drinks)

            resultBox.innerText = ""
            
            if (!drinks || drinks.length === 0) {
                let noDrink = makeElement('h1', 'noDrink', resultBox)
                noDrink.innerText = `NO DRINK HAS BEEN FOUND!`;
            } else {

                drinks.forEach(drink => {
                    getRecipe(drink)
                });

            }
          
        // getRecipe(drinks)

    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}