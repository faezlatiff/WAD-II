/*
    
Name:   
Email:  

*/

function calculate () {
     // YOUR CODE GOES HERE
     let amount = document.getElementById('myAmt').value
     let interest = document.getElementById('myInterest').value * 0.01
     let goal = document.getElementById('myGoal').value

     let years = Math.ceil((goal - amount)/((interest)*amount))
     let actual = Math.max(goal, amount * (1 + interest * years)) 

     // document.getElementById('a_table').innerHTML = `
     // <h1 id='result'> Result </h1>
     // <table class='table' id='result_table'>
     //      <tr>
     //           <th class="col-9">You will achieve your goal in (years): </th>
     //           <td class="col-3">${years}</td>
     //      </tr>
     //      <tr>
     //           <th class="col-9">You will get ($)</th>
     //           <td class="col-3">${actual}</td>
     //      </tr>
     // </table>
     // `

     var str = `<h4 class='text-success' style="margin-bottom:20px; margin-top:30px"> Result </h4> 
     <table class='table table-bordered' style="width:500px"> 
        <tr> 
             <th> You will achieve your goal in (years): </th> 
             <td> ${years} </td>
        </tr>
        <tr>
             <th> You will get ($):  </th>
             <td> ${ actual } </td>
        </tr>
   </table>`
     document.getElementById('a_table').innerHTML = str 
}