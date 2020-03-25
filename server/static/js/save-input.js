const form = document.querySelector('form')


console.log('le Form: ', form)

form.addEventListener('input', (event) => {
    
    let answer = event.target

    const parent = answer.parentElement.parentElement;
    
    // parent.classList.add('.filledIn')
    parent.style['background-color'] = 'seagreen'
    console.log('parent: ', parent)

    // console.log('event', answer)

    // localStorage.setItem('data', JSON.stringify(answer))


})