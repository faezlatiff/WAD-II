/*
    
Name:   Muhammad Faez Bin Abdul Latiff
Email:  muhammadal.2021

*/


/*  use the following predefined global variables as you deem fit
    you may also define additional variables if necessary
*/
var door1 =  document.getElementById('door1');
var door2 =  document.getElementById('door2');
var light1 = document.getElementById('light1');
var light2 = document.getElementById('light2');
var couch =  document.getElementById('couch');
var isAlarmActive = false 

// add event listener codes below
door1.addEventListener('click',door1Func)
door2.addEventListener('click',door2Func)
couch.addEventListener('mouseover',couchFunc)
// setInterval(couchFunc, 1000)
// var thief = false



// implement the event handling functions below
function door1Func() {

    // Add Code Here
    var curr_attribute = door1.getAttribute('src')
    var is_open = false

    if(curr_attribute.includes('close')){
        door1.setAttribute('src','image/door-open')
        is_open = true

    }else if(curr_attribute.includes('open')){
        door1.setAttribute('src','image/door-close')
        is_open = false
    }

    if(is_open){
        light1.setAttribute('src','image/light-on')
    }

}

function door2Func() {

    // Add Code Here
    var curr_attribute = door2.getAttribute('src')
    var is_open = false

    if(curr_attribute.includes('close')){
        door2.setAttribute('src','image/door-open')
        is_open = true

    }else if(curr_attribute.includes('open')){
        door2.setAttribute('src','image/door-close')
        is_open = false
    }
   
    if(is_open){
        light1.setAttribute('src','image/light-off')
        light2.setAttribute('src','image/light-on')
    } else if (!is_open){
        light2.setAttribute('src','image/light-off')
    }
}

function couchFunc() {

     // Add Code Here
    //  var is_on = false
    //  thief = true
    //  if(is_on){
    //     light1.setAttribute('src','image/light-off')
    //     light2.setAttribute('src','image/light-off')
    //     is_on = false

    //  }else if(!is_on){
    //     light1.setAttribute('src','image/light-on')
    //     light2.setAttribute('src','image/light-on')
    //     is_on = true
    //  }

}
