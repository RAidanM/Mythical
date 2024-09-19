let card_value = 1;

function takeCard(event, pileElement){
    console.log("new card");
    let newCard = document.createElement('div');
    newCard.classList.add("card");
    newCard.innerHTML = card_value++;

    document.body.appendChild(newCard);

    newCard.addEventListener('mousedown', function(event) {
        grab(event, newCard);
    });
}

document.querySelectorAll('.pile').forEach(pile => {
    pile.addEventListener('mousedown', function(event) {
        takeCard(event, pile);
    });
});