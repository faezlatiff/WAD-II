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

 //
 transform: translate(-50%,-50%);
