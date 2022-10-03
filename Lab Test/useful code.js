// remove spaces
str.replace(/\s/g, '');
str.replaceAll(" ", "");

//combine elements 
str.join("")

//split into array
str.split("")

//reverse array
arr.reverse()

//bootstrap + js code
`
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    
    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
  </body>
</html>
`
//function for pressing enter (wk5 ex3)
function enter(){
    console.log(event)
    if(event.keyCode == 13){
       update()
    }
 }

//function for removing parent nodes (wk5 ex3)
 function remove(node){
    node.parentNode.remove()
 }

//axios post, wk6example3
 function getPost() {
  //const url = 'http://jsonplaceholder.typicode.com/todos'
  //const data = { userId: '1', completed: false}
  //const data = { completed: false}
  //const url = 'http://localhost/is216/REST/blog/addPost.php'
  //const data = { subject: 'Weather', entry: 'Cloudy but nice', mood: 'Happy'}

  types = ['customers', 'suppliers'];
  const url = 'http://localhost/is216/wk6/example/getPost.php'
  const data = { type: types[1], limit: 3}

  axios.post(url, data)
  .then(response =>  {
      console.log(response.status);
      console.log(response.data);
      
      let data = response.data.records;

      let output = "<table class='table table-dark'>"
      data.forEach(
          element => output +="<tr><td>" + element.name + "</td><td>" + 
              element.age + "</td><td>" + element.city + "</td><td></tr>"
      )
      output += "</table>"
      document.getElementById("axios").innerHTML = output;
  })
  .catch(error => {
      console.log(error.message)
      document.getElementById("axios").innerText = error.message;
  });   
}

//  transform: translate(-50%,-50%);

//  <!--
//  Week 1: HTML Tags & Attributes
     
//      Header              <h1>...</h1>, <h2>...</h2>
//      Paragraph           <p>...</p>
//      Image               <img src="..">
//      Anchor link         <a href="..">Link</a>

//      Table               <table><tr><td>...</td></tr></table>

//      Input field         Name: <input type="text" name="name">
//                          Age: <input type="number" name="age" max='80' min='10'> 
//                          Remember me? <input type="checkbox" name="" id="" checked> 
//                          <input type="radio">

     
//      Drop down list      <select name="school" id="">
//                              <option value="scis">SCIS</option>
//                              <option value="soa" selected>SOA</option>
//                              <option value="lkcsb">LKCSB</option>
//                          </select>

//      Button              <button type="submit">Submit</button>


//      (Un)Ordered List    <ol><li>...</li></ol>
//      division            <div id='div1'>...</div>
//      span                <span id='inline'>...</span>


//  Week 2: CSS
//      Syntax 
//          selector { property : value; }  
//          - note: do not omit ';' 

//      Three ways of CSS: inline, internal, external
//          inline: <p style="text-align:center;">
//          internal: <style> p { text-align:center; } </style>
//          external (*.css file): p { text-align:center; }
     
//      Selectors
//          Element: p, h1, img, a, button, etc.
//          id: #unique-name
//          class: .class-name  (an element can belong to multiple classes)
  
//      Box Model: content, padding, border, margin
//          - every HTML element is a box

//      Positioning element: absolute, relative, fixed, sticky
   
//      Centering an element: 
//              - text-align: center
//              - margin-left: auto, margin-right: auto

//      Pseudo class: define a state of an element
//          - Syntax: selector:pseudo-classs { property : value; } 
//          - e.g. a:hover { color: white; }

//  Week 3: Bootstrap
//      Grid System: https://getbootstrap.com/docs/5.2/layout/grid/ 
//          - provides 12 column grid system for building layouts of all shapes & sizes
//          - can easily design the layout by doing col-*, where * can range from 1 to 12

 
//      Breakpoints: https://getbootstrap.com/docs/5.2/layout/breakpoints/ 
//          - customizable widths that determine how your responsive layout behaves across devices
//          - e.g. col-lg-6, col-md-4, col-sm-2, row-cols-md-2
     
//      Utilities: 
//          color: -primary, -secondary, -success, -danger, -warning, -info, -dark, -light
//          spacing: p{t,b,s,e,x,y}-{0-5}, m{t,b,s,e,x,y}-{0-5}
//          sizing: w-{0, 25, 50, 75, 100, auto} h-{0, 25, 50, 75, 100, auto}
//          ...
   
//  Week 4: Javascript Basics
//      var vs let
//          - var & let   : Global scope if defined outside function
//          - var & let   : Function scope if defined inside function
//          - let         : Block scope if defined inside block
     

//      for  : loop as long as given condition evaluates to true 
//      for...in : loop through properties of an object 
//      for...of : loop through values of an iterable variable 
//                          (e.g. Array, String, NodeList etc.) 

//      Number Operations: Number(), parseInt(), parseFloat(), isNaN()

//      String Operations : length, indexOf(), toUpperCase(), trim(), slice(), 
//                              substr(), replace(), split(), many more...

//      Array Operations : legnth, push(), pop(), splice(), join(), 
//                              slice(), sort(), reverse(), many more...

//      Object: Read/Write operations
     
//      Callback functions : setTimeOut, filter, find, forEach, ...

//  Week 5-6: DOM Manipulation & Event Handling

//      HTML Elements have properties and methods
//      - property is a value that you can get or set -- elem.value, elem.type, elem.id, elem.name, etc.
//      - method is an action that you can perform for accessing elements, attributes, creating, or removing elements

//      Access elements: (Mindful of the typo error)
//          getElementById 
//          getElementsByClassName 
//          getElementsbyTagName 

//      Modifying attribute values:
//          elem.setAttribute("id", "unique")
//          elem.setAttribute("class", "is216")
//          elem.id = "unique"

//      Modifying via innerText and innerHTML
//          elem.innerHTML = "<p>...</p>"
//          elem.innerText = "new text content"

//      Add/Remove elements: createElement, createTextNode, appendChild, remove

 
//  Week 6: Asynchronous Call and JSON data handling

//      Axios -- a library for making Async. Requests

//          Syntax: 
//              // GET request
//              axios.get(url, {
//                  params: {
//                      name1 : value1,
//                      name2 : value2
//                  }
//              })
//              .then(response => {
//                      // process response.data object
//              })
//              .catch(error => {
//                  // process error object
//              })

//              // POST request
//              axios.post(url, {
//                  name1 : value1,
//                  name2 : value2
//              })
//              .then(response => {
//                  // process response.data object
//              })
//              .catch(error => {
//                  // process error object
//              })


//      JSON 
//          Syntax: 
//              {   "name" : value, 
//                  "name" : { "name" : value }, 
//                  "name" : [ value, value, ... ]
//              }
//          e.g.
//              {   "name": "Mary",
//                  "age":  26,
//                  "spouse" : { "name" : "John", "age": 27 }
//                  "hobby":["swimming","badminton"],
//                  "isMarried":true
//              }

//      - Converting between JSON string and JS object
//              JSON.parse() : covert JSON string to JS object
//              JSON.stringify() : convert JS object to JSON string

//          - Note: when we use Axios, it internally performs JSON.parse() 
//                  and assign the resulting JS object to response.data
//                  Hence, response.data is already a JS object (no need converting)
    
//      x. use of backtick `` for breaking the string into multi-lines
//      x. encodeURI(url) : for treating special characters such as space, slash / that have syntactic meaning to URL: https://www.w3schools.com/jsref/jsref_encodeURI.asp

// -->
