import { koalas } from './koalas'
let activeKoala = null
// Changes the active koala, then re-renders the page to display that koala
const selectKoala = koala => {
    activeKoala = koala
    render()
}

// Called once when the page loads, and again every time a koala is selected
const render = () => {
    let oldPage = document.querySelector('.koala-container')
    let newPage;
    if (activeKoala) {
        newPage = renderActiveKoala(activeKoala)
    } else {
        newPage = renderKoalaList(koalas)
    }
    newPage.classList.add('koala-container')
    oldPage.replaceWith(newPage)
}

// Renders a list of koalas
export const renderKoalaList = koalas => {
    let koalaContainer = document.createElement('div')

    koalaContainer.setAttribute('class', 'ui items')

    koalas.forEach(koala => {
        let koalaCard = renderKoalaCard(koala)
        koalaContainer.append(koalaCard)
    })

    return koalaContainer
}

// Renders a card to display a single koala
export const renderKoalaCard = koala => {
    let koalaCard = document.createElement('div')
    koalaCard.setAttribute('class', 'item')
    koalaCard.style.cursor = 'pointer';
    koalaCard.addEventListener('click', () => {
        selectKoala(koala)
    })

    let koalaImage = renderKoalaCardImage(koala)
    let koalaContent = renderKoalaCardContent(koala)

    koalaCard.append(
        koalaImage,
        koalaContent
    )

    return koalaCard
}

export default render 