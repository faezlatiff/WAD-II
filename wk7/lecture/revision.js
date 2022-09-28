var url = "https://randomuser.me/api"

function getUser() {
    // ADD CODE HERE
    axios.get(url)

    .then(response=>{
        console.log(response.data)
        first = response.data.results[0].name.first
        last = response.data.results[0].name.last.toUpperCase()
        gender = response.data.results[0].gender
        email = response.data.results.email




    })




}
function update() {
   // ADD CODE HERE

}

