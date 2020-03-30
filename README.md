# Browser technologies

## [Live demo](https://webdev-enquete.herokuapp.com/)

![Schermafbeelding 2020-03-20 om 13 04 23](https://user-images.githubusercontent.com/47485018/77162064-684c3c80-6aab-11ea-9784-2d98f6666524.png)


## [Opdracht 1.2]()

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

### Wireflows

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


### Onderzoek 

* Rem niet ondersteunde ie 9-10 
* Scrollto/scroll into view vervangen door bijvoorbeeld relatieve link?



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

Schrijf hier iets over flexbox fallback

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
