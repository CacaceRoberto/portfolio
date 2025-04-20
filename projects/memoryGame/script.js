const images = [
    'img1', 'img2', 'img3', 'img4' 
];

let cards = [...images, ...images];  // Duplicate the images to create pairs
cards = cards.sort(() => 0.5 - Math.random());  // Shuffle the cards

const gameBoard = document.querySelector(".gameBoard");  // Get gameBoard div
let flippedCards = [];
let locked = false;
let count = 0;

function createCard(img) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = 
    `   <div class="cardInner">
            <div class="cardFront"></div>
            <div class="cardBack" style="background-image: url('image/${img}.png')"></div>  <!-- Background Image -->
        </div>
    `;

    card.addEventListener("click", () => flipCard(card, img)); // Event listener for click
    gameBoard.appendChild(card);
}

function flipCard(card, img) {
    if (locked || card.classList.contains("flipped")) return;
    card.classList.add("flipped");
    flippedCards.push({ img, card });
    
    if (flippedCards.length === 2) {
        locked = true;
        const [first, second] = flippedCards;

        if (first.img === second.img) {
            flippedCards = [];
            count++;
            if (count === images.length / 2) {
                const winner = document.getElementById("winMessage");
                winner.textContent = "Congratulations! You found all pairs!";
                winner.style.opacity = 1;
            }
            locked = false;
        } else {
            setTimeout(() => {
                first.card.classList.remove("flipped");
                second.card.classList.remove("flipped");
                flippedCards = [];
                locked = false;
            }, 1000);  // Flip back after 1 second
        }
    }
}

// Create cards for the game board
cards.forEach(img => createCard(img));
