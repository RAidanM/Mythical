function takeCard(event, pileElement){
    
    //grab card info
    let cards = pileElement.getAttribute('data-cards').split(",");
    console.log(typeof cards);
    console.log(cards.length);
    if (cards.at(0)==''){return"Empty Pile";}

    //create new card
    let newCard = document.createElement('div');
    newCard.classList.add("card");
    newCard.style.top = pileElement.style.top;
    newCard.style.left = pileElement.style.left;

    //assign card value
    newCard.innerHTML = cards.shift();

    //update pile info
    pileElement.setAttribute('data-cards', cards);
    

    document.body.appendChild(newCard);

    newCard.addEventListener('mousedown', function(event) {
        grab(event, newCard);
    });
    grab(event, newCard);
}

document.querySelectorAll('.pile').forEach(pile => {
    pile.addEventListener('mousedown', function(event) {
        takeCard(event, pile);
    });
});