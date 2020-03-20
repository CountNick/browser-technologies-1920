# Browser technologies

# Waar ik graag feedback op zou krijgen:

* Op dit moment heb ik doormiddel van een save knop de data in de url opgeslagen. Het formulier kan later verder worden ingevuld door de gekregen link later te bezoeken. Is dit goed genoeg als 'data tijdelijk opslaan' functie

* Moet ik de core functionaliteiten en progressive enhancements verder toelichten? Ik weet niet zo goed wanneer het genoeg is. [hier](), en [hier]() te vinden

* Ik heb in mijn code dezelde progressive enhancement gebruikt als Declan, een live search. Ik heb dit alleen wel nav het voorbeeld dat door Declan gemaakt is gedaan, dus eigenlijk is de code niet echt van mij. Is het nu handiger om over te stappen op iets anders? [Dit is het stukje code waar het om gaat](https://github.com/CountNick/progressive-web-apps-1920/blob/master/server/static/js/search.js)

## [Live demo](https://webdev-enquete.herokuapp.com/)

![Schermafbeelding 2020-03-20 om 13 04 23](https://user-images.githubusercontent.com/47485018/77162064-684c3c80-6aab-11ea-9784-2d98f6666524.png)


## Opdracht 1.2:

* ### [Device lab](https://github.com/CountNick/browser-technologies-1920#device-lab-1)
* ### [Screenreader](https://github.com/CountNick/browser-technologies-1920#screenreader-1)
* ### [8 feature test](https://github.com/CountNick/browser-technologies-1920#8-feature-test-1)
* ### [Browser test](https://github.com/CountNick/browser-technologies-1920#browser-test-1)
* ### [To do list](https://github.com/CountNick/browser-technologies-1920#to-do-list-1)

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

* Fieldset feedback geven op het moment dat de gebruiker een vraag heeft ingevuld/
    * Als de gebruiker een vraag heeft ingevuld word de fieldset groen, en bij een vergeten vraag oranje of rood.

Hier een eerste schets van de tweede versie van de vragenlijst: 

#### V2

![Wireflow v2](https://user-images.githubusercontent.com/47485018/76967495-d667f680-6927-11ea-987b-da67a346fc69.jpeg)


### Vragen 

Hoofdvraag:

* Ben je een CMD student?


ja:

    * Hoe bevalt de minor je tot nu toe?

        * Zwaar
        * Goed te doen
        * Zwaar, maar ik manage het goed
    

    * Heb je blok tech gedaan?
    * Heb je de tech track gedaan?
        
        * Ja
            * Denk je dat je het zonder het volgen van deze vakken ook had kunnen doen?





nee: 

    * Valt de minor je zwaar? 

        * ja

        * nee

            * Had je al voorkennis over HTML, CSS en javascript zo ja open antwoord

