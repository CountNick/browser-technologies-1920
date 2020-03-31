# Browser technologies

## [Live demo](https://webdev-enquete.herokuapp.com/)

![headerimg](https://user-images.githubusercontent.com/47485018/78030734-d96cd900-7362-11ea-8f9a-4b930cbead35.png)



## Opdracht 2 

Gekozen case: Ik wil een enquete kunnen invullen over de minor Web Development, met verschillende antwoord mogelijkheden. Als ik de enquete niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.

## Anonieme enquete over de minor webdev

### Core functionaliteiten: 

Feature 1 - Ik wil een enquete kunnen invullen over de minor Web Development, met verschillende antwoord mogelijkheden.

* Gebruikers moeten de vragenlijst kunnen zien op elke browser
* De vragenlijst mag alleen van input types gerbuik maken die op elke browser werken
* Form moet verstuurd kunnen worden

Feature 2 - Als ik de enquete niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.

* Ingevulde input waardes opslaan in de url van de gebruiker, en deze url aan de gerbuiker tonen zodat deze later verder ingevuld kan worden.

### Wireflow

#### V1
![Wireflow v1](https://user-images.githubusercontent.com/47485018/76967426-b89a9180-6927-11ea-84a6-bdb6c1c0bb4b.jpeg)

#### Notes over features en PE
Na het maken van de eerste schets schoten mij oplossingen te binnen over hoe ik de belangrijkste dingen en enhancements kon scheiden:

__Core features:__

* Alle vragen op 1 pagina
    * Zodat mensen met traag internet niet hoeven te linken naar verschillende pagina's.
    * Hierdoor kunnen ook mensen zonder muis of trackpad makkelijk door de pagina heen tabben.
* Inputs worden tijdelijk opgeslagen in de url
    * Voor als gebruikers geen javascript hebben
* Serverside rendering en JS
    * Dit word op de server afgehandeld, dus de gebruiker heeft geen clientside javascript nodig
* Standaard width en height afbeelding
    * De header image heeft een standaard height, width en een alt tekst. Hierdoor kan iemand die geen afbeeldingen kan laden toch zien hoe groot de afbeelding was en wat er in deze afbeeldinge te zien zou zijn.


__Progressive enhancements:__

* Scroll progression bar
    * Geberuikers kunnen zien hoever ze met het formulier zijn
* Data automatisch opslaan met Local Storage inplaats van saveknop voor mensen met JS/localstorage

* Fieldsets geven feedback op het moment dat de gebruiker een vraag heeft ingevuld/
    * Als de gebruiker een vraag heeft ingevuld word de fieldset groen, en bij een vergeten vraag oranje of rood.

Hier een eerste schets van de tweede versie van de vragenlijst: 

#### V2

![Wireflow v2](https://user-images.githubusercontent.com/47485018/76967495-d667f680-6927-11ea-987b-da67a346fc69.jpeg)


### Progressive enhancement

* **Functional layer**

![functional](https://user-images.githubusercontent.com/47485018/77910796-056b5a00-7290-11ea-8bb7-f0c6cbe091e6.gif)

De basislaag werkt nu zonder javascript en css. Gebruikers kunnen het formulier invullen en op de opslaan knop drukken, de link die gekopieeerd moet worden worde dan getoond. Ook kan de gebruiker het formulier verzenden.

* **Usable layer**

De usable laag zorgt ervoor dat het formulier gestyled is. Er is nu ook feedback op het moment dat de gebruiker in de fieldset klikt. Ook krijgt de gebruiker de link die moet worden opgeslagen in een groen blok.

![Usable](https://user-images.githubusercontent.com/47485018/77913265-3ea5c900-7294-11ea-8d8d-a0a22e354e39.gif)


* **Pleasurable**

The pleasurable version shows the user what his or her progression is in the form through the progress element. The save option doesn't have to be clicked anymore in order to save the state of the form. This is now autmatically being taken care of through local storage: 

![filled in and progress](https://user-images.githubusercontent.com/47485018/77913807-37cb8600-7295-11ea-916d-8ed41e300d2e.gif)

The user also gets feedback when a question gets filled in correctly or when a required field was not filled in:
![forgot to fill in: ](https://user-images.githubusercontent.com/47485018/77916029-bd046a00-7298-11ea-9051-8ee926152f1b.gif)

Alle lagen worden ondersteund in de volgende browsers:

* IE 9, 10, 11 en edge
* Firefox
* Opera
* Brave
* Chrome

Verder is de website ontwikkelt op Chrome en zijn de meest features hiero ook op getest. Het is dus aan te raden om de website op chrome te draaien.




### Onderzoek 

#### Progress

I kwam erachter dat er een HTML element bestaat dat gemaakt is om progressie te tonen:

```html
<progress class="animated" max="100" value="0" id="progress"></progress>
```
Dit element word door bijna elke major browser ondersteund behalve door iOS Safari. Ook is de waarde die in dit element zit te animeren. Voor Chrome en Safari is dit vrij simpel je heoft hiervoor alleen een transition op de width van het value element te zetten. Dit bleek voor Firefox niet ven makkelijk te zijn, maar helaas kan je geen transition op de width zetten in Firefox. Om hetzelfde effect te bereiken heb ik naar instructie van [Jonathan Snook](https://snook.ca/archives/html_and_css/animating-progress) de padding-bottm geanimeerd dmv een custom propertie die in javascript gebonden is aan de value van het progress element:

css:
```css
::-moz-progress-bar {
  transition: padding-bottom 1s;
  padding-bottom: var(--value);
  transform-origin: 0 0;
  transform: rotate(-90deg) translateX(-15px);
  padding-left: 15px;
}

progress {
  overflow: hidden;
}

::-moz-progress-bar {
  height: 0;
}

```
js:
```js
progressBar.style.setProperty('--value', progressBar.value + '%');
```

bron: [Animating Progress - Jonathan Snook](https://snook.ca/archives/html_and_css/animating-progress)

# CSS

#### Flexbox

Als flexbox niet ondersteund worden de knoppen onderaan het formulier met float aan de rechterkant geplaatst:

```css
.formBtns input{
  float: right;
}
```

Ook de header afbeelding word dan met float geplaatst::

```css
header > section a{
  float: left;
}
```

#### REM 

Rem word nog niet door elke browser ondersteund [dit artikel](https://stackoverflow.com/questions/21854416/using-rems-with-a-pixel-fallback) bood hiervoor een oplossing: Als je eerste de waarde in pixels defineert en daar onder in rem, pakt de browser als rem bekent is rem en anders blijf het px : 

```css
label{

    font-size: 20px;
    font-size: 1.2rem;
    
    margin-bottom: 16px;
    margin-bottom: 1rem;

    padding-top: 5px;
    padding-top: .3rem;
}
```

#### Remove

Remove() is not supported [by older browsers](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove).
There is a older way of using remove: 

```js
saveButton.remove()
saveLink.remove()
//became:
saveButton.parentNode.removeChild(saveButton)
saveLink.parentNode.removeChild(saveLink)
```

#### Arrow functions

```js
geslacht.forEach((item) => {
    if(item.checked == true) numValid++
})
//became:
geslacht.forEach(function(item){
    if(item.checked == true) numValid++
})

```

#### forEach

Blijkbaar ondersteund [internet explorer forEach niet](https://developer.mozilla.org/nl/docs/Web/API/NodeList/forEach).[Uitleg](https://stackoverflow.com/questions/16053357/what-does-foreach-call-do-in-javascript) Dit was de oplossing hiervoor: 

```js
geslacht.forEach(function(item){
    if(item.checked == true) numValid++
})
//became:
Array.prototype.forEach.call(geslacht, function(node){
    if(node.checked == true) numValid++
})

```

### input

Op internet explorer werkte het input event niet. Na lang zoeken kwam ik erachter dat dit aan het input event lag. Dit bleek niet goed ondersteund te worden in ie. Maar het change event werkte wel:

```js
form.addEventListener('input', function(event){
    ...
}
//became:
form.addEventListener('change', function(event){
    ...
}
```

Ik heb voor de zekerheid ook parentElement veranderd omdat ik niet zeker wist of dit fout ging bij het selecteren van de een input veld

### Feature detection

Ik check of localStorage word ondersteund door de browser, als localstorage word ondersteund worden de save knop en link verwijdert:

```js
// check if local storage is available, if so remove the save button and link 
if(window.localStorage){
    saveButton.parentNode.removeChild(saveButton)
    saveLink.parentNode.removeChild(saveLink)
}
else{
    console.log("Local Storage not available :( ")
}

```

### Feature test

## 8 feature test 

__1. geen afbeeldingen__

    - Er zit 1 afbeelding in de pagina. Deze zit in de header. Als de gebruiker geen afbeeldingen kan laden laad de pagina een block element in met dezelfde height en width die het img element zou hebben met hierin een beschrijvende alt text. Door dit te doen breekt de header niet op het moment dat de afbeelding niet geladen kan worden.

__2. Custom fonts uitzetten__

    - Ik maak op alleen gebruik van websafefonts om dit probleem te voorkomen.

__3. Kleur__

    - Ik heb de pagina door checkmycolors.com heen gehaald. De enige issues die hieruit kwamen waren voor de afbeelding achtergrond kleur en de a tags die op deze afbeelding zit. Deze twee issues heb ik genegeerd omdat ik dit bewust zo heb gedaan:
    
![Schermafbeelding 2020-03-30 om 15 36 39](https://user-images.githubusercontent.com/47485018/77918673-816b9f00-729c-11ea-94c7-08b9e1fb8e16.png)


__4. Muis/trackpad__

    - De website werkt prima zonder muis of trackpad. De gebruiker kan door de pagina heentabben en een keuze maken met de spatiebalk. Als de gebruiker van keuze wil veranderen kan dit door gebruik avan de pijltjes toetsen.

__5. Breedband internet__

    - Na het zetten van de network throttling op slow 3G werd de website toch nog redelijk snel getoond. Het duurde alleen wel even voordat de header afbeelding getoond werd. Ook dit was verder geen probleem omdat deze een vaste height en width heeft.

__6. Javascript uitzetten__

    - De app werkt zonder javascript. Alleen moet de gebruiker wel zelf op de opslaan knop drukken, en de link handmatig kopiëren om zijn of haar voortgang op te kunnen slaan. Ook word de voortgang niet getoond in de progressbar.

__7. Cookies niet accepteren__

    - In het geval cookies niet geaccepteerd worden, is de fallback dat de gebruiker handmatig zijn of haar progressie op zal moeten slaan

__8. Local Storage__

    - Ook zonder Local Storage werkt de automatische opslag functie dus niet. Dus in dit geval is ook hier de fallback hetzelfde als in stap 7 en 8.

