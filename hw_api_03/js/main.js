document.querySelector('button').addEventListener('click', getActivity)

function getActivity() {

    fetch(`https://www.boredapi.com/api/activity`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
        

        console.log(data)

        
        if (!data.link) {
            document.querySelector('span').innerText = data.activity
        } else {
            document.querySelector('span').innerHTML = `<a href='${data.link}' target="_blank" rel="noopener noreferrer">${data.activity}</a>`
        }    

        let dataBox = document.getElementById("dataBox")
        
        dataBox.innerHTML=""

        let participants = data.participants
        let participantsElement = document.createElement('h5')
        participantsElement.classList.add("participants")
        participantsElement.innerText = `# of Participants Needed: ${participants}`
        dataBox.appendChild(participantsElement)
        
        let type = data.type
        let typeElement = document.createElement('h5')
        typeElement.classList.add("type")
        typeElement.innerText = `Activity Type: ${type}`
        dataBox.appendChild(typeElement)
        

        console.log(dataBox)
        
        // document.querySelector('h2').innerText = drink.strDrink
        // document.querySelector('img').src = drink.strDrinkThumb
        // document.querySelector('h3').innerText = drink.strInstructions

        // function findIngredients() {
        //     let list = document.getElementById('myList')
        //     for (i = 1; i <= 15; i++) {
        //         let ingredient = drink[`strIngredient${i}`]
        //         if (!ingredient) break;

        //         let li = document.createElement('li');
        //         li.innerText = ingredient;
        //         list.appendChild(li);
        //     }

        // }
        



        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}