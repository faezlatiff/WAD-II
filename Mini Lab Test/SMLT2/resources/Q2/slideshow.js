/*
    Name:   YOUR NAME GOES HERE (LEE Oppa)
    Email:  YOUR SMU EMAIL ID GOES HERE (lee.oppa.2020)
*/


/* DO NOT CHANGE THIS FUNCTION's NAME */
function display_default() {

    console.log("===[START] display_default() ===")


    // Part A
    // YOUR CODE GOES HERE
    // YOU MAY ADD MORE FUNCTION(S) IF YOU WISH
    // Call API and get data
    let api_endpoint_url = "api/info.php"

    // Use Axios to call API asynchronously
    axios.get(api_endpoint_url)
    .then(response => {
        console.log(response.data)
        console.log("LOOK HERE")


        // a) Inspect the response
        // console.log(response.data)

        // DOM
        populate_slides(response.data.military_statistics)
        
    })
    .catch(error => {
        console.log(error.message)
    })

    console.log("===[END] display_default() ===")

}
