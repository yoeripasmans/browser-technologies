# Progressive enhanced responsive menu

Link naar demo: https://yoeripasmans.github.io/browser-technologies/opdracht2/responsive-menu/

Een responsive uitgewerkt menu, dat een hamburger icoon wordt op een klein scherm. Hiermee kan de gebruiker door de pagina heen navigeren ongeacht wat voor een device gebruikt wordt. Daarnaast is er progressive enhanced toegepast zodat je zonder CSS & Javascript door de site kan navigeren.

## Core functionaliteit

De belangrijkste functionaliteit van het responsive menu is dat de gebruiker altijd moet kunnen navigeren op elke device ook als CSS of Javascript het niet doet. Dit heb ik gerealiseerd door eerst een basis structuur op te zetten in HTMl. Dit werkt namelijk altijd. Daarna heb ik een hamburger menu gerealiseerd met pure CSS. Dit heb ik laten werken door middel van target. Hiermee kan je met HTML het menu open en dichtklappen zonder Javascript. Ten slotte heb ik het menu enchant met Javascript door het uitzetten van default behavior van de browser bij het openen van het menu. Voor het openen van het menu gebruikte ik namelijk een link. Het vervelende hiervan is dat het in de browsergeschiedenis komt te staan en dat de pagina automatisch naar boven scrollt. Dit heb ik met Javascript gefixt. Zo blijft het menu ten alle tijden werken.

## Feature detection

Voor feature detection heb ik bovenin mijn javascript bestand een if else neergezet die checkt of de functien ondersteund worden door de browser.

```javascript
if (!document.querySelector || !('classList' in document.body)) {
	return false;
}
```
Daarnaast in de CSS of position fixed door de browser ondersteund wordt:

```CSS
@supports (position: fixed) {
    .main-menu, .main-menu:target + .overlay, .main-menu + .overlay {
        position: fixed;
    }
}
```

## Browser compatibiliteit

### Javascript
- e.preventDefault() wordt door alle brosers ondersteund alleen internet explorer t/m 9.
- document.querySelector wordt door alle brosers ondersteund alleen internet explorer t/m 9.
- classList.add & classList.remove wordt door alle brosers ondersteund alleen internet explorer t/m 9.
- addEventListener niet gesupport op IE 8 en Opera 6.0 and eerdere versies.

## CSS
- position fixed wordt alleen niet op Opera Mini ondersteund
- View width & view height units worden niet ondersteund op opera Mini en deels op Internet explorer (Werkt wel door fallback naar EM)

## Bronnen

Off canvas menu met CSS target
[https://css-tricks.com/off-canvas-menu-with-css-target/](https://css-tricks.com/off-canvas-menu-with-css-target/)

CSS @support functionaliteit
[https://developer.mozilla.org/en-US/docs/Web/CSS/@supports](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports)

Support van features in het algemeen
[https://caniuse.com/](https://caniuse.com/)

Javascript progressive enhancement
[https://alistapart.com/article/progressiveenhancementwithjavascript](https://alistapart.com/article/progressiveenhancementwithjavascript)
