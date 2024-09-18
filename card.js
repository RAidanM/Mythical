isGrabbed = false;
grabbedCard = null;
offsetX = 0;
offsetY = 0;

function grab(event, cardElement){
    grabbedCard = cardElement;
    isGrabbed = true;

    const bounds = cardElement.getBoundingClientRect();
    offsetX = event.clientX - bounds.left;
    offsetY = event.clientY - bounds.top;

    document.addEventListener("mousemove",move);
    document.addEventListener("mouseup",drop);

    event.preventDefault(); //avoids text selection
}

function move(event){
    if(isGrabbed && grabbedCard){
        grabbedCard.style.left = `${event.clientX - offsetX}px`;
        grabbedCard.style.top = `${event.clientY - offsetY}px`;

    }
}

function drop(){
    isGrabbed = false;
    grabbedCard = null;
    document.removeEventListener("mousemove",move);
    document.removeEventListener("mouseup",drop);
}

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousedown', function(event) {
        grab(event, card);
    });
});