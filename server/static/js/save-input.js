// select the save link button and, link 
var saveButton = document.querySelector('.saveButton')
var saveLink = document.querySelector('.saveLink')
// select the form
var form = document.querySelector('form')
//select input fields
var studentAchtergrond = document.querySelectorAll('input[name=studentAchtergrond]')
var bevalt = document.querySelectorAll('input[name=bevalt]')
var voorkennis = document.querySelectorAll('input[name=voorkennis]')
var geslacht = document.querySelectorAll('input[name=geslacht]')
var checkboxes = document.querySelectorAll('input[type=checkbox]')
var required = document.querySelectorAll('[required]')
// select the progress element
var progressBar = document.querySelector('progress')
//progress the fieldset elements
var fieldsets = document.querySelectorAll('fieldset')
//select the send button in the form
var sendButton = document.querySelector('.sendButton')

var value = progressBar.value

// check if local storage is available, if so remove the save button and link 
if(window.localStorage){
    saveButton.parentNode.removeChild(saveButton)
    saveLink.parentNode.removeChild(saveLink)
}
else{
    console.log("Local Storage not available :( ")
}



form.addEventListener('input', function(event){
    
    var numValid = 0;

    var answer = event.target
    var parent = answer.parentNode.parentNode;

    localStorage.setItem(answer.name, answer.value)

    console.log('Parent: ', parent)

    var checked = document.querySelectorAll('input[type=checkbox]:checked')
   
    filledInCorrectly(parent)

    Array.prototype.forEach.call(geslacht, function(node){
        if(node.checked == true) numValid++
    })

    Array.prototype.forEach.call(studentAchtergrond, function(node){
        if(node.checked == true) numValid++
    })

    Array.prototype.forEach.call(bevalt, function(node){
        if(node.checked == true) numValid++
    })

    Array.prototype.forEach.call(voorkennis, function(node){
        if(node.checked == true) numValid++
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
    
    progressBar.style.setProperty('--value', progressBar.value + '%');
})

// if(geslacht[0].checked == true) progressBar.value += 20

sendButton.addEventListener('click', function(event){
    

    if(required[0].checked == false && required[1].checked == false && required[2].checked == false) {
            event.preventDefault()
            filledInWrongly(required[0].parentNode.parentNode)
            required[0].scrollIntoView({behavior: "smooth", block: "end"})

    }

    console.log('subss')
})



if(localStorage.studentAchtergrond){
    
    if(localStorage.studentAchtergrond == 'wel CMD'){
        studentAchtergrond[0].checked = true
        progressBar.value += 20
        // studentAchtergrond[0].parentElement.parentElement.style['background-color'] = 'seagreen'
        filledInCorrectly(studentAchtergrond[0].parentNode.parentNode)
        progressBar.style.setProperty('--value', progressBar.value + '%');
    }

    if(localStorage.studentAchtergrond == 'geen CMD'){
        studentAchtergrond[1].checked = true
        progressBar.value += 20
        filledInCorrectly(studentAchtergrond[1].parentNode.parentNode)
        progressBar.style.setProperty('--value', progressBar.value + '%');
    }

}

if(localStorage.bevalt){

    if(localStorage.bevalt == 'goed te doen'){
        bevalt[0].checked = true
        progressBar.value += 20
        filledInCorrectly(bevalt[0].parentNode.parentNode)
        progressBar.style.setProperty('--value', progressBar.value + '%');
    }

    if(localStorage.bevalt == 'zwaar'){
        bevalt[1].checked = true
        progressBar.value += 20
        filledInCorrectly(bevalt[1].parentNode.parentNode)
        progressBar.style.setProperty('--value', progressBar.value + '%');
    }

    if(localStorage.bevalt == 'niet te doen'){
        bevalt[2].checked = true
        progressBar.value += 20
        filledInCorrectly(bevalt[2].parentNode.parentNode)
        progressBar.style.setProperty('--value', progressBar.value + '%');
    }

}
if(localStorage.geslacht){

    if(localStorage.geslacht == 'man'){
        geslacht[0].checked = true
        progressBar.value += 20
        filledInCorrectly(geslacht[0].parentNode.parentNode)
        progressBar.style.setProperty('--value', progressBar.value + '%');
    }

    if(localStorage.geslacht == 'vrouw'){
        geslacht[1].checked = true
        progressBar.value += 20
        filledInCorrectly(geslacht[1].parentNode.parentNode)
        progressBar.style.setProperty('--value', progressBar.value + '%');
    }

    if(localStorage.geslacht == 'anders'){
        geslacht[2].checked = true
        progressBar.value += 20
        filledInCorrectly(geslacht[2].parentNode.parentNode)
        progressBar.style.setProperty('--value', progressBar.value + '%');
    }

}

if(localStorage.voorkennis){

    if(localStorage.voorkennis == 'wel voorkennis'){
        voorkennis[0].checked = true
        progressBar.value += 20
        filledInCorrectly(voorkennis[0].parentNode.parentNode)
        progressBar.style.setProperty('--value', progressBar.value + '%');
    }

    if(localStorage.voorkennis == 'geen voorkennis'){
        voorkennis[1].checked = true
        progressBar.value += 20
        filledInCorrectly(voorkennis[1].parentNode.parentNode)
        progressBar.style.setProperty('--value', progressBar.value + '%');
    }

}

if(localStorage.geen){
    checkboxes[0].checked = true
    filledInCorrectly(checkboxes[0].parentNode.parentNode)
    var checked = document.querySelectorAll('input[type=checkbox]:checked')
    if(checked.length > 0 ) progressBar.value += 20
}
if(localStorage.zelfSchool){
    checkboxes[1].checked = true
    filledInCorrectly(checkboxes[0].parentNode.parentNode)
    var checked = document.querySelectorAll('input[type=checkbox]:checked')
    if(checked.length > 0 ) progressBar.value += 20
}
if(localStorage.school){
    checkboxes[2].checked = true
    filledInCorrectly(checkboxes[0].parentNode.parentNode)
    var checked = document.querySelectorAll('input[type=checkbox]:checked')
    if(checked.length > 0 ) progressBar.value += 20
}
if(localStorage.anders){
    checkboxes[3].checked = true
    filledInCorrectly(checkboxes[0].parentNode.parentNode)
    var checked = document.querySelectorAll('input[type=checkbox]:checked')
    if(checked.length > 0 ) progressBar.value += 20
}


function filledInCorrectly(parent){
    // progressBar.value += 20
    parent.style['background-color'] = 'seagreen'
}

function filledInWrongly(parent){
    parent.style['background-color'] = 'red'
}

