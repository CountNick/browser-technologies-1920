# Browser technologies

# Opdracht 1.2:

* ## [Device lab](https://github.com/CountNick/browser-technologies-1920#device-lab-1)
* ## [Screenreader](https://github.com/CountNick/browser-technologies-1920#screenreader-1)
* ## [8 feature test](https://github.com/CountNick/browser-technologies-1920#8-feature-test-1)
* ## [Browser test](https://github.com/CountNick/browser-technologies-1920#browser-test-1)
* ## [To do list](https://github.com/CountNick/browser-technologies-1920#to-do-list-1)

## Device lab

### HTC Nexus tablet

![WhatsApp Image 2020-03-12 at 15 24 43](https://user-images.githubusercontent.com/47485018/76607768-cf4e7c00-6514-11ea-88b2-ba508d1fd9dc.jpeg)

Op de tablet werkt de OBA app naar behoren. Ik heb niets opgemerkt wat niet werkt.

### Ipod touch

![WhatsApp Image 2020-03-12 at 15 24 44](https://user-images.githubusercontent.com/47485018/76607930-1472ae00-6515-11ea-8880-227f997bcee6.jpeg)

Op deze browser was het ook snel afgelopen. Er was geen javascript ondersteuning en het enige dat werkte was het homescherm.

### Nokia

![WhatsApp Image 2020-03-12 at 15 24 44 (1)](https://user-images.githubusercontent.com/47485018/76607985-27857e00-6515-11ea-9637-def2ef068477.jpeg)


Het home scherm word getoond maar vervolgens kan je niks met de pagina. Javascript werkt schijnbaar niet in deze browser

### Screenreader

De wesbite werkt redelijk met een screenreader. Het login scherm geeft aan waar je een username en wachtwoord in kan vullen, en waar de login knop is. Na het inloggen word de gebruiker ook verteld wat knoppen zijn en wat er in een input type staat waar de knop zit etc. De afbeeldingen hebben geen specifike alt text dus de afbeeldignen worden niet voorgelezen zoals dit zou moeten. Ook zitten er ronde knoppen met een x in die verder geen beschrijving hebben. Misschien zou dit verbeterd kunnen worden door hier bijvoorbeeld gewoon tekst neer te zetten.

### 8 feature test 

__1. geen afbeeldingen__

    - op het moment dat de browser geen afbeeldigen kan laden gaat de layout van de website kapot
    - Er is geen alt text die word laten zien, dus iemand die de afbeeldingen niet kan zien weet niet wat voor afbeeldingen dit zouden kunnen zijn
    - Geen image reflow

__2. Custom fonts uitzetten__

    - Ik maakte geen gebruik van custom fonts, maar had ook nog geen fallback font, zeker iets om te verbeteren

__3. Kleur__

    - Verschillende instellingen mbt contrastinstellingen waren niet allemaal even leesbaar en zichtbaar. Zoals de achtergrond van de informatie pagina, de input fields

__4. Muis/trackpad__

    - Opzich werkt de website redelijk met tabs en zonder muis of trackpad. De verwijder knoppen krijgen alleen nog geen duidelijk getabte omlijning wat nog wel zou moeten. 

__5. Breedband internet__

    - Na het zetten van de network throttling op slow 3G werd de website toch nog redelijk snel getoond. Het duurde alleen wel even voordat de afbeeldingen getoond werden. Maar overall was dit nog wel prima.

__6. Javascript uitzetten__

    - App werkt niet zonder javascript, omdat alles in de client met javascript word afgehandeld.

__7. Cookies niet accepteren__

    - Website werkt niet

__8. Local Storage__

    - Routing werkt niet meer zonder local storage, dus app werkt niet meer. Je kan namelijk niet meer naar een detailpagina

## Browser test

### Chrome
![Chrome](https://cdn.neow.in/news/images/uploaded/2014/08/chrome_medium.jpg)
- Er vielen mij geen fouten of dingen niet werkte op. De app is dan ook wel gemaakt op deze browser

### Brave

![Brave](https://seekvectorlogo.com/wp-content/uploads/2018/07/brave-software-vector-logo-small.png)

- Ook op de Brave browser werkt de app naar behoren.

### Firefox

![firefox](https://s.pngkit.com/png/small/194-1948261_google-chrome-microsoft-edge-mozilla-firefox-logo.png)

- Op firefox werkte alles naar behoren, behalve op de detailpagina. Op het moment dat je op het boek klikt draaide de afbeelding niet meer mee.

### Opera

![Opera](https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Opera_2015_icon.svg/200px-Opera_2015_icon.svg.png)

- Op opera werkte de applicatie net als op Firefox prima muv de detailpagina. Hier werd de afbeelding horizontaal te veel uitgerekt.

### Safari

![Safari](https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Safari_browser_logo.svg/200px-Safari_browser_logo.svg.png)

- Net als op de Opera browser werd de afbeelding op de detailpagina horizontaal uitgerekt. Ook klopte de kleur van het kruisje in de verwijderknop niet deze was hier zwart inplaats van wit.



## To do list 

__1 - Afbeeldingen__
* alt tekst meegeven
* vaste height en width meegeven aan afbeelding, zo breekt de layout van de website niet als iemand afbeeldingen niet kan bekijken
* Image reflow zodat afbeeldingen niet out of the blue 

__2 - custom fonts__
* Fallback fonts instellen, die op de custom font van de OBA lijken mbv font matcher

__3 - Kleur__
* Ik heb de website door meerdere contrast checks heen gehaald en de score was opzich redelijk positief, toch vul ik dit graag nog wat aan voor bijvoorbeeld de input fields

__4 - Muis/ trackpad__
* Duidelijk maken als er een knop gesecteerd is met tab

__5 - Breedband internet__
* Het enige wat mij hier opviel bij een langzame 3g verbinding was het extreem langzaam laden van de afbeeldingen. Zie punt 1 voor de oplossing

__6 - De app werkt op dit moment helemaal niet zonder javascript__
* Dit ga ik oplossen dmv serverside rendering 

__7 en 8 cookies en local storage__
* Routing naar een detailpagina werkt niet meer omdat dit via local storage gaat. Ook dit ga ik oplossen dmv serverside rendering.


# Oba data editor
*__You decide which data you share__*

[Checkout the live version](https://countnick.github.io/project-1-1920/), __login with number: 1, 2 or 3 as username and password__

![Screenshot](https://user-images.githubusercontent.com/47485018/76060182-fb9c5280-5f80-11ea-876e-eb21efe6dbd5.png)


## Table of contents

* ### [Concept](https://github.com/CountNick/project-1-1920#concept-1)
* ### [Data](https://github.com/CountNick/project-1-1920#data-1)
* ### [Wishlist](https://github.com/CountNick/project-1-1920#wishlist-1)
* ### [Initial Ideas](https://github.com/CountNick/project-1-1920#wishlist)
* ### [Installation](https://github.com/CountNick/project-1-1920#installation-1)

## Concept

Oba data editor is a user profile where people can change or remove the information they have previously shared with OBA, check their reading behaviour, check rented books and get reading recomendations according to genre.

### Login 
![Login](https://user-images.githubusercontent.com/47485018/76058929-e7a32180-5f7d-11ea-8230-fe7c4bb7f3f2.gif)


### User profile
![profile1](https://user-images.githubusercontent.com/47485018/76059149-6a2be100-5f7e-11ea-96ba-28d45ab4c7d9.gif)

![profile 2](https://user-images.githubusercontent.com/47485018/76059317-d3abef80-5f7e-11ea-85f4-294e8dabb872.gif)

### Book detail
![bookDetail](https://user-images.githubusercontent.com/47485018/76059480-4321df00-5f7f-11ea-83f3-ed441f59ce4f.gif)

![bookDetail2](https://user-images.githubusercontent.com/47485018/76059619-9b58e100-5f7f-11ea-9b41-7a2d4ee43e8f.gif)

## Data

### __Data__

* Oba excell datasheet with user data(not published), the file in this project is a [mockup](https://github.com/CountNick/project-1-1920/blob/master/fakeSet.json)

* The valid ISBN numbers get filtered out of the excel dataset and a fetch request to the OBA api gets send with these numbers

### How the data flow works: 

When the user enters his or her subscriber number the profile page gets rendered and a fetch request gets send with each isbn number of the books rented by the user. When the user clicks on one of the previously rented books a detailpage of said book gets rendered and a new fetch to the API is done with the genre of the book that has been clicked.

For the live version i made a mock up of the data. If you want to try it out you can login with number: 1, 2 or 3. The number has to be typed in the username and password input.

## Wishlist

Things i wanted to do but didn't have any time for

* Data visualisations
    * Reading behaviour
    * How many males / females are interested in your favorite genre
    * How many people from your postal code are interested in the same genre 

* Detail page for each recommended books

* Make data changeble

* Render appropriate color schemes in profile according to age of user

## Initial ideas

Search engine for kids' books based on user input:

* Choose a subject
* Enter your age
* Show suited books for kid based on the given input

## Installation 

Installation

__*Note in order to run this project locally you need some kind of local server to start it up. I used the liveServer extension in VS Code*__

Open up terminal, and type:

```
git clone https://github.com/CountNick/project-1-1920.git
```
```
cd project-1-1920
```
Open up the folder in VS code and start live server. The app will now be running on localhost:5500