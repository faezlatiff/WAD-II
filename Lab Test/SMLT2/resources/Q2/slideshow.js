/*
    Name:   Muhammad Faez Bin Abdul LATIFF
    Email:  muhammadal.2021
*/


/* DO NOT CHANGE THIS FUNCTION's NAME */
function display_default() {

    console.log("===[START] display_default() ===")


    // Part A
    // YOUR CODE GOES HERE
    // YOU MAY ADD MORE FUNCTION(S) IF YOU WISH
    var url = "api/info.php"
    console.log(url);

    axios.get(url)
        .then(response => {
            var countries = response.data.military_statistics
            console.log(countries)
            //find img and show
            var active = " active"
            var first = true
            for(let country in countries){
                var details = countries[country]
                var img = details['flag_relative_url']
                var leader = details['head_of_state']
                //find carousel inner, append to it
                var carouselInner = document.getElementById("slides")
                carouselInner.innerHTML += `<div class="carousel-item${active}" data-bs-interval="2000">
                <img src="${img}" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${country}</h5>
                    <p>${leader}}</p>
                </div>

                </div>`

                if(first){
                    first = false
                    active = ''
                }

            }


        })
        .catch( error => {
            console.log(error.message);
        });

    
    console.log("===[END] display_default() ===")

}
