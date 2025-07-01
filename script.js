/* Initialisierung der Karten: */

const cards = ['⚽', '💖', '🍑', '🔥'];
const gameBoard = document.querySelector('#game-board');
let total_pairs = 0;

function createCards() 
{

    // Erstelle Karten doppelt
    const duplicatedCards = [...cards, ...cards];

    // Karten mischen
    duplicatedCards.sort(() => Math.random() - 0.5);

    duplicatedCards.forEach(symbol => {
        gameBoard.appendChild(createCard(symbol));
    });

    total_pairs = document.querySelectorAll('.card').length / 2; //Kann erst berechnet werden, nachdem die Karten alle erstellt wurden
}

function createCard(symbol) 
{
    const card = document.createElement('div');
    card.textContent = '?';
    card.dataset.value = symbol;  
    card.classList.add('card', 'hidden');

    card.addEventListener('click', () => revealCard(card));

    return card;
}

// Karten werden geladen, erst nachdem der gesamte DOMBaum erstellt wurde
document.addEventListener('DOMContentLoaded', createCards);

/* Spiel: */ 
        
        let flippedCards = []; //Karten werden in einem Array gespeichert
        let lockBoard = false; //klicksperre

        let matched_pairs = 0;

        function revealCard(card) 
        {
            if (!card.classList.contains('hidden') || lockBoard) {return;} // Keine Aktion: Karte schon sichtbar || das Board ist gesperrt

            card.innerText = card.dataset.value; //Text wird von '?' zu Symbol geändert
            card.classList.remove('hidden');

            flippedCards.push(card); // Karte wird ins Array gesetzt
                
                if (flippedCards.length === 2) //2 Karten geflipped
                {
                    lockBoard = true; // Temporäre Sperre, um keine weiteren Karten umzudrehen

                    /* Überprüfung auf ein Match */
                    if (flippedCards[0].dataset.value === flippedCards[1].dataset.value)
                    {
                    setTimeout(() => //Um die Karte nicht direkt ummzudrehen und Spannung zu lassen
                    {
                        flippedCards[0].style.backgroundColor = 'green';
                        flippedCards[1].style.backgroundColor = 'green';

                        matched_pairs++;

                        resetBoard(); //Wenn Karte gefunden wird, wird das Spiel neu gestartet
                        checkWin();
                    }, 500);

                } else //kein Match ;(
                {
                    setTimeout(() =>  // Karten werden zurückgesetzt
                    {
                        flippedCards[0].innerText = '?';
                        flippedCards[1].innerText = '?';
                        flippedCards[0].classList.add('hidden');
                        flippedCards[1].classList.add('hidden');
                        resetBoard();
                    }, 850);
                }

            }
        }

        function resetBoard() 
        {
            flippedCards = []; // Array leeren
            lockBoard = false;
        }

        function checkWin() 
        {
            if (matched_pairs === total_pairs) 
            {
                document.getElementById('message').innerText = 'Glückwunsch! Du bist der Beste!!!';
                document.body.style.backgroundColor = 'lightgreen';
            }
        }

        document.getElementById('reset-button').addEventListener('click', () => {
            location.reload(); // Neustart durch Seiten-Reload
        });
