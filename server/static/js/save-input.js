
const saveButton = document.querySelector('.saveButton')
const saveLink = document.querySelector('.saveLink')

saveButton.remove()
saveLink.remove()

// select the form
const form = document.querySelector('form')
//select input fields
const studentAchtergrond = document.querySelectorAll('input[name=studentAchtergrond]')
const bevalt = document.querySelectorAll('input[name=bevalt]')
const voorkennis = document.querySelectorAll('input[name=voorkennis]')
const geslacht = document.querySelectorAll('input[name=geslacht]')
const required = document.querySelectorAll('[required]')

console.log('required inputs: ', required)


form.addEventListener('input', function(event){
    
    let answer = event.target

    localStorage.setItem(answer.name, answer.value)

    const parent = answer.parentElement.parentElement;

    filledInCorrectly(parent)
    
})


if(localStorage.studentAchtergrond){
    
    if(localStorage.studentAchtergrond == 'wel CMD'){
        studentAchtergrond[0].checked = true
        // studentAchtergrond[0].parentElement.parentElement.style['background-color'] = 'seagreen'
        filledInCorrectly(studentAchtergrond[0].parentElement.parentElement)
    }

    if(localStorage.studentAchtergrond == 'geen CMD'){
        studentAchtergrond[1].checked = true
        filledInCorrectly(studentAchtergrond[1].parentElement.parentElement)
    }

}

if(localStorage.bevalt){

    if(localStorage.bevalt == 'goed te doen'){
        bevalt[0].checked = true
        filledInCorrectly(bevalt[0].parentElement.parentElement)
    }

    if(localStorage.bevalt == 'zwaar'){
        bevalt[1].checked = true
        filledInCorrectly(bevalt[1].parentElement.parentElement)
    }

    if(localStorage.bevalt == 'niet te doen'){
        bevalt[2].checked = true
        filledInCorrectly(bevalt[2].parentElement.parentElement)
    }

}
if(localStorage.geslacht){

    if(localStorage.geslacht == 'man'){
        geslacht[0].checked = true
        filledInCorrectly(geslacht[0].parentElement.parentElement)
    }

    if(localStorage.geslacht == 'vrouw'){
        geslacht[1].checked = true
        filledInCorrectly(geslacht[1].parentElement.parentElement)
    }

    if(localStorage.geslacht == 'anders'){
        geslacht[2].checked = true
        filledInCorrectly(geslacht[2].parentElement.parentElement)
    }

}

if(localStorage.voorkennis){

    if(localStorage.voorkennis == 'wel voorkennis'){
        voorkennis[0].checked = true
        filledInCorrectly(voorkennis[0].parentElement.parentElement)
    }

    if(localStorage.voorkennis == 'geen voorkennis'){
        voorkennis[1].checked = true
        filledInCorrectly(voorkennis[1].parentElement.parentElement)
    }

}

required.forEach(element => {
    // if(!element.checked) filledInWrongly(element.parentElement.parentElement)
});

console.log('parentnodereq: ', required.parentElement)

function filledInCorrectly(parent){
    parent.style['background-color'] = 'seagreen'
}

function filledInWrongly(parent){
    parent.style['background-color'] = 'red'
}