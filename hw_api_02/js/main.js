let container = document.getElementById('container')

function getCharacter(url = 'https://swapi.dev/api/people/') {


   fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
        
        console.log(data)
        
        data.results.forEach(element => {
            let name = element.name
            let h2 = document.createElement('h2');
            h2.innerText = name;
            h2.classList.add('characterName')
            container.appendChild(h2)
        });
        
        if (data.next) {
            getCharacter(data.next)
        }
            
       

        })
        .catch(err => {
            console.log(`error ${err}`)
        });

    }


     getCharacter()