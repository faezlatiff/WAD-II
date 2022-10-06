/*
 Name: Muhammad Faez Bin Abdul LATIFF
 Email: muhammadal.2021
 */
 
 // DO NOT EDIT: START
const jokeTable = document.getElementById("joke-table");
const jokeTableTbody = jokeTable.getElementsByTagName("tbody")[0];
const jokeText = document.getElementById("jokeText");
// DO NOT EDIT: END

console.log(sampleJokes)
function getSampleJokes() {
  // DO NOT EDIT: START
  while (jokeTableTbody.lastChild) {
    jokeTableTbody.lastChild.remove();
  }
  
  let serial = 1;
  // DO NOT EDIT: END

  for(joke in sampleJokes){
    var serialNo = parseInt(joke)+1
    var category = sampleJokes[joke].category
    console.log(category);
    var row = document.createElement("tr")
    var col = document.createElement("td")
    row.appendChild(col)
    var table = document.getElementById("joke-table")
    row.innerHTML = 'serialNo'

  }

  
}

function getJoke() {
  var url = "q3_getJoke.php?"
  var category = document.getElementById("categoriesDD").value
  
  axios.get(url, {
      params: {
          query: category
      }
  })
      .then(response => {
          insert = document.getElementById("jokeText")
          insert.innerHTML = response.data
      })
      .catch( error => {
          console.log(error.message);
      });

}

