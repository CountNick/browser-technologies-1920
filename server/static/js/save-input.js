const form = document.querySelector('form')
const list = []


console.log('le Form: ', form)

form.addEventListener('input', (event) => {
    
    
    let answer = event.target

    localStorage.setItem(answer.name, answer.value)
    
    console.log('answer: ', answer)

    const parent = answer.parentElement.parentElement;
    
    // parent.classList.add('.filledIn')
    parent.style['background-color'] = 'seagreen'

    // console.log('event', answer)
    

    // localStorage.setItem('data', JSON.stringify(answer))


})


const studentAchtergrond = document.querySelectorAll('input[name=studentAchtergrond]')
const bevalt = document.querySelectorAll('input[name=bevalt]')

console.log('bevalt', bevalt)

if(localStorage.studentAchtergrond){

    if(localStorage.studentAchtergrond == 'wel CMD'){
        studentAchtergrond[0].checked = true
    }

    if(localStorage.studentAchtergrond == 'geen CMD'){
        studentAchtergrond[1].checked = true
    }

}

if(localStorage.bevalt){

    if(localStorage.bevalt == 'goed te doen'){
        bevalt[0].checked = true
    }

    if(localStorage.bevalt == 'zwaar'){
        bevalt[1].checked = true
    }

    if(localStorage.bevalt == 'niet te doen'){
        bevalt[2].checked = true
    }

}