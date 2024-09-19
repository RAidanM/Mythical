let card_value = 1;

function takeCard(event, pileElement){
    console.log("new card");
    let newCard = document.createElement('div');
    newCard.classList.add("card");
    newCard.innerHTML = card_value++;
    newCard.style.top = pileElement.style.top;
    newCard.style.left = pileElement.style.left;

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