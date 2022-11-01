var url = "https://randomuser.me/api"

function getUser(){
    axios.get(url)
        .then(response => {
            console.log(response.data);
            var details = response.data.results[0]
            var email = details.email
            var gender = details.gender
            var firstName = details.name.first
            var lastName = details.name.last.toUpperCase()
            var img = details.picture.medium
            
            //access html elements
            var htmlImg = document.getElementById('picture')
            htmlImg.setAttribute('src',img)

            var htmlName = document.getElementById('name')
            htmlName.innerText = firstName + ' ' + lastName

            var htmlEmail = document.getElementById('email')
            htmlEmail.innerText = email

            //show email in input field
            var htmlUpdateEmail = document.getElementById('updateEmail')
            htmlUpdateEmail.value = email

        })
        .catch( error => {
            console.log(error.message);
        });
}

function update(){
    var htmlEmail = document.getElementById('email')
    var updateEmail = document.getElementById('updateEmail').value
    htmlEmail.innerText = updateEmail
}


