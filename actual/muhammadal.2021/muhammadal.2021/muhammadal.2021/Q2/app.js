/*
    
Name:   Muhammad Faez Bin Abdul Latiff
Email:  muhammadal.2021

*/

function display_character(parentElement, character) {
    if(character.status == 'correct'){
        parentElement.innerHTML = `
            <span style="background-color:green;">
                ${character.letter}
            </span>
        `
    }
    else if(character.status == 'partial'){
        parentElement.innerHTML = `
        <span style="background-color:yellow;">
            ${character.letter}
        </span>
    `
    }
    else if(character.status == 'wrong'){
        parentElement.innerHTML = `
        <span style="background-color:grey;">
            ${character.letter}
        </span>
    `
    }
}


function display_game(tableElement, game) {

    for(words of game){
        let tr = document.createElement('tr')
        for(letter_info of words){
            let td = document.createElement('td')
            td.innerText = letter_info.letter
            tr.appendChild(td)

            let att = document.createAttribute('style')

            if(letter_info.status == 'correct'){
                att.value = 'background-color:green'
            } else if (letter_info.status == 'partial'){
                att.value = 'background-color:yellow'
            } else if (letter_info.status == 'wrong'){
                att.value = 'background-color:grey'
            }

            td.setAttributeNode(att)
        }

        tableElement.appendChild(tr)
    }



}


function check_guess(answer, guess) {
    var answer_array = []
    for(letter of answer){
        answer_array.push(letter)
    }
    console.log(answer_array);
    
    var guess_array = []
    for(letter of guess){
        let check = ''

        if(answer_array.includes(letter)){
            check = 'partial'
        }
    }
}
