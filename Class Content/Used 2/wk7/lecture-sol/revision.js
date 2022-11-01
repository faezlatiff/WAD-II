var url = "https://randomuser.me/api"

function getUser() {
    axios.get(url) // this will make an Async Request

    .then( response => {
        console.log(response.data)

        // read values from response.data
        var profile =  response.data.results[0]

        let firstName = profile.name.first
        let lastName = profile.name.last
        let email = profile.email
        let gender = profile.gender
        let picture = profile.picture.medium
       
        // make updates here
        var infoElem = document.getElementById('info')
        var pictureElem = document.getElementById('picture')
        var nameElem = document.getElementById('name')
        var emailElem = document.getElementById('email')
        var updateElem = document.getElementById('updateEmail')

        nameElem.innerText = firstName + " " + lastName.toUpperCase()
        infoElem.setAttribute('class', gender)
        
        pictureElem.src = picture
        emailElem.innerText = email
        updateElem.value = email

        
    })

    .catch( error => {
        console.log(error.message)
    })

}

function update() {
    var emailElem = document.getElementById('email')
    var updateElem = document.getElementById('updateEmail')
    emailElem.innerText = updateElem.value

}
