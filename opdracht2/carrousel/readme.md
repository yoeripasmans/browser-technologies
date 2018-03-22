# Progressive enhanced carrousel

Een responsive uitgewerkt menu, dat een hamburger icoon wordt op een klein scherm. Hiermee kan de gebruiker door de pagina heen navigeren ongeacht wat voor een device gebruikt wordt. Daarnaast is er progressive enhanced toegepast zodat je zonder CSS & Javascript door de site kan navigeren.

https://yoeripasmans.github.io/browser-technologies/opdracht2/carrousel/

## Core functionaliteit

De belangrijkste functionaliteit van het responsive menu is dat de gebruiker altijd moet kunnen navigeren op elke device ook als CSS of Javascript het niet doet. Dit heb ik gerealiseerd door eerst een basis structuur op te zetten in HTMl. Dit werkt namelijk altijd. Daarna heb ik een hamburger menu gerealiseerd met pure CSS. Dit heb ik laten werken door middel van target. Hiermee kan je met HTML het menu open en dichtklappen zonder Javascript. Ten slotte heb ik het menu enchant met Javascript door het uitzetten van default behavior van de browser bij het openen van het menu. Voor het openen van het menu gebruikte ik namelijk een link. Het vervelende hiervan is dat het in de browsergeschiedenis komt te staan en dat de pagina automatisch naar boven scrollt. Dit heb ik met Javascript gefixt. Zo blijft het menu ten alle tijden werken.

## Browser compatibiliteit

### Javascript
- e.preventDefault() wordt door alle brosers ondersteund alleen internet explorer t/m 9.
- document.querySelector wordt door alle brosers ondersteund alleen internet explorer t/m 9.
- classList.add & classList.remove wordt door alle brosers ondersteund alleen internet explorer t/m 9.
- addEventListener niet gesupport op IE 8 en Opera 6.0 and eerdere versies.
