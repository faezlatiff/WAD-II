/*
    
Name:   Muhammad Faez Bin Abdul Latiff
Email:  muhammadal.2021

*/
import 'https://unpkg.com/axios/dist/axios.js'

// YOUR CODE GOES HERE
const url = 'http://localhost/is216/Large%20Lab%20Test/Samples/SampleB/resources/Q2/krazyoscars/winner/read.php'
axios.get(url)
    .then(response => {
        console.log(response.data);
    })
    .catch( error => {
        console.log(error.message);
    });