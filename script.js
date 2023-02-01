document.querySelector('#addCardButton').addEventListener('click', () => {
    const newCard = document.createElement('div');
    newCard.classList.add('numberCard');
    const closeIcon = document.createElement('img');
    closeIcon.src = 'https://cdn-icons-png.flaticon.com/512/75/75519.png';
    closeIcon.alt = 'Close window icon';
    closeIcon.classList.add('closeIcon');
    closeIcon.addEventListener('click', event => event.target.parentElement.remove());

    const number = document.createElement('p');
    number.classList.add('number');
    number.textContent = Math.floor(Math.random() * 1000) + 1;

    newCard.append(closeIcon, number);
    document.querySelector('#numberCards').appendChild(newCard);
}
);

document.querySelector('#sortCardsButton').addEventListener('click', () => {
    const numberCards = document.querySelectorAll('.numberCard');
    const numberCardsContainer = document.querySelector('#numberCards');
    [...numberCards].sort((a, b) => Number(a.querySelector('.number').textContent) - Number(b.querySelector('.number').textContent)
    ).forEach(card => numberCardsContainer.appendChild(card));
});