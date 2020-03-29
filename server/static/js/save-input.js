
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
const progressBar = document.querySelector('progress')
const fieldsets = document.querySelectorAll('fieldset')
const sendButton = document.querySelector('.sendButton')





form.addEventListener('input', function(event){
    
    let numValid = 0;

    let answer = event.target
    const parent = answer.parentElement.parentElement;
    localStorage.setItem(answer.name, answer.value)


    let checked = document.querySelectorAll('input[type=checkbox]:checked')
   
    filledInCorrectly(parent)


    geslacht.forEach(item => {
        if(item.checked == true) numValid++
    })
    studentAchtergrond.forEach(item => {
        if(item.checked == true) numValid++
    })
    bevalt.forEach(item => {
        if(item.checked == true) numValid++
    })
    voorkennis.forEach(item => {
        if(item.checked == true) numValid++
    })

    if(checked.length > 0) numValid++
    // // if(checked.length === 1) numValid++  


    if(numValid == 1){
        progressBar.value = 20
        }
    if(numValid == 2){
        progressBar.value = 40
        }
    if(numValid == 3){
        progressBar.value = 60
        }
    if(numValid == 4){
        progressBar.value = 80
        }
    if(numValid == 5){
        progressBar.value = 100
        }

})

// if(geslacht[0].checked == true) progressBar.value += 20

sendButton.addEventListener('click', function(event){
    
    required.forEach(element => {
        if(!element.checked) {
            event.preventDefault()
            filledInWrongly(element.parentElement.parentElement)
            element.scrollIntoView({block: "end"})

        }
    });

    console.log('subss')
})






if(localStorage.studentAchtergrond){
    
    if(localStorage.studentAchtergrond == 'wel CMD'){
        studentAchtergrond[0].checked = true
        progressBar.value += 20
        // studentAchtergrond[0].parentElement.parentElement.style['background-color'] = 'seagreen'
        filledInCorrectly(studentAchtergrond[0].parentElement.parentElement)
    }

    if(localStorage.studentAchtergrond == 'geen CMD'){
        studentAchtergrond[1].checked = true
        progressBar.value += 20
        filledInCorrectly(studentAchtergrond[1].parentElement.parentElement)
    }

}

if(localStorage.bevalt){

    if(localStorage.bevalt == 'goed te doen'){
        bevalt[0].checked = true
        progressBar.value += 20
        filledInCorrectly(bevalt[0].parentElement.parentElement)
    }

    if(localStorage.bevalt == 'zwaar'){
        bevalt[1].checked = true
        progressBar.value += 20
        filledInCorrectly(bevalt[1].parentElement.parentElement)
    }

    if(localStorage.bevalt == 'niet te doen'){
        bevalt[2].checked = true
        progressBar.value += 20
        filledInCorrectly(bevalt[2].parentElement.parentElement)
    }

}
if(localStorage.geslacht){

    if(localStorage.geslacht == 'man'){
        geslacht[0].checked = true
        progressBar.value += 20
        filledInCorrectly(geslacht[0].parentElement.parentElement)
    }

    if(localStorage.geslacht == 'vrouw'){
        geslacht[1].checked = true
        progressBar.value += 20
        filledInCorrectly(geslacht[1].parentElement.parentElement)
    }

    if(localStorage.geslacht == 'anders'){
        geslacht[2].checked = true
        progressBar.value += 20
        filledInCorrectly(geslacht[2].parentElement.parentElement)
    }

}

if(localStorage.voorkennis){

    if(localStorage.voorkennis == 'wel voorkennis'){
        voorkennis[0].checked = true
        progressBar.value += 20
        filledInCorrectly(voorkennis[0].parentElement.parentElement)
    }

    if(localStorage.voorkennis == 'geen voorkennis'){
        voorkennis[1].checked = true
        progressBar.value += 20
        filledInCorrectly(voorkennis[1].parentElement.parentElement)
    }

}


function filledInCorrectly(parent){
    // progressBar.value += 20
    parent.style['background-color'] = 'seagreen'
}

function filledInWrongly(parent){
    parent.style['background-color'] = 'red'
}

