/*
 Name: TAM Yong Zheng Dominic
 Email: dominic.tam.2021
 */
 
 // DO NOT EDIT: START
const jokeTable = document.getElementById("joke-table");
const jokeTableTbody = jokeTable.getElementsByTagName("tbody")[0];
const jokeText = document.getElementById("jokeText");
// DO NOT EDIT: END

function getSampleJokes() {
  // DO NOT EDIT: START
  while (jokeTableTbody.lastChild) {
    jokeTableTbody.lastChild.remove();
  }
  
  let serial = 1;
  // DO NOT EDIT: END
  
  // To be completed...
  
  console.log(sampleJokes)
//   let num = 0
  for (let joke in sampleJokes) {
    let type = sampleJokes[joke].type
    console.log(type)
    if (type == 'twopart') {
        let table = document.getElementById('joke-table')
        let tdNum = document.createElement('td')
        let tdCat = document.createElement('td')
        let tdSetup = document.createElement('td')
        let tdDel = document.createElement('td')
        let cat = document.createTextNode(sampleJokes[joke].category)
        let delivery = document.createTextNode(sampleJokes[joke].delivery)
        let setup = document.createTextNode(sampleJokes[joke].setup)
        numNode = document.createTextNode(serial)
        serial += 1
        tdNum.appendChild(numNode)
        tdCat.appendChild(cat)
        tdDel.appendChild(delivery)
        tdSetup.appendChild(setup)
        let row = table.insertRow(-1)
        row.appendChild(tdNum)
        row.appendChild(tdCat)
        row.appendChild(tdSetup)
        row.appendChild(tdDel)
        // console.log(table)
    }
  }

  
  
}
function getJoke() {
    // To be completed...
    url = "http://localhost/wadii/resources/Q3/q3_getJoke.php"

    query = document.getElementById('categoriesDD').value

    axios.get(url, {
        params: {
            query : query
        }
    })
    .then(response => {
        let data = response.data
        joke = document.getElementById('jokeText')
        joke.innerHTML = data
        // let textNode = document.createTextNode(data)
        // joke.appendChild(textNode)
    })
    .catch(error => {
        console.log(error.message)
    })

}

