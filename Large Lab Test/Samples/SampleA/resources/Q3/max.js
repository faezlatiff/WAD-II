/*
    
Name:   KIM Jong Un
Email:  kim.jongun.2020

*/


function get_max(url1, url2, ele_id) {
    /*
    Assume list1 and list2 are the lists obtained from url1 and url2
    the output to be displayed in HTML element with id ele_id
        url1 + " : " + JSON.stringify(list1) + "<br>" +
        url2 + " : " + JSON.stringify(list2) + "<br>" +
        "max : " + max
    
    For failed AJAX calls, assuming url1 fails
        url1 + "<br>" + error;
    */

    // YOUR CODE GOES HERE: START

    ifError = false

    var list1 = []
    var list2 = []

    list1 = axios.get(url1)
        .then(response => {
            var text = document.createTextNode(url1 + ' : ' + JSON.stringify(response.data))
            document.getElementById(ele_id).appendChild(text)
            var br = document.createElement('br')
            document.getElementById(ele_id).appendChild(br)
        })
        .catch(error => {
           document.getElementById(ele_id).innerHTML = `
                ${url1} <br>
                ${error.message}
            `
            ifError = true
        });

    list2 = axios.get(url2)
    .then(response => {
        if(!ifError){
            var text = document.createTextNode(url2 + ' : ' + JSON.stringify(response.data))
            document.getElementById(ele_id).appendChild(text)
        }
    })
    .catch(error => {
        document.getElementById(ele_id).innerHTML = `
        ${url2} <br>
        ${error.message}
    `
    });

    console.log(list1,list2);


    // YOUR CODE GOES HERE: END
}
