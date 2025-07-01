/* =======================
   Manuelle "Unit-Tests"
   ======================= */

function runTests() {
  console.log("=== Starte manuelle Tests ===");

  // Test 1: Teste createCard
  const testCard = createCard("🔥");
  console.log("Test 1 - createCard erzeugt '?':", testCard.textContent === "?" ? "✅" : "❌");
  console.log("Test 1 - Symbol gespeichert:", testCard.dataset.value === "🔥" ? "✅" : "❌");

  // Test 2: Teste resetBoard
  flippedCards = [document.createElement("div"), document.createElement("div")];
  lockBoard = true;
  resetBoard();
  console.log("Test 2 - resetBoard leert flippedCards:", flippedCards.length === 0 ? "✅" : "❌");
  console.log("Test 2 - resetBoard entsperrt Board:", lockBoard === false ? "✅" : "❌");

  // Test 3: Teste checkWin (indirekt)
  matched_pairs = 4;
  total_pairs = 4;
  document.getElementById("message").innerText = "";
  checkWin();
  console.log(
    "Test 3 - checkWin schreibt Nachricht:",
    document.getElementById("message").innerText.includes("Glückwunsch") ? "✅" : "❌"
  );

  // Test 4: createCards erstellt doppelte Anzahl Karten
  gameBoard.innerHTML = ""; // leeren
  createCards();
  const cardCount = document.querySelectorAll(".card").length;
  console.log("Test 4 - createCards erstellt 8 Karten:", cardCount === 8 ? "✅" : `❌ (${cardCount})`);

  // Test 5: revealCard ignoriert sichtbare Karte
  const visibleCard = createCard("💖");
  visibleCard.classList.remove("hidden");
  flippedCards = [];
  revealCard(visibleCard);
  console.log("Test 5 - revealCard ignoriert sichtbare Karte:", flippedCards.length === 0 ? "✅" : "❌");

  console.log("=== Tests abgeschlossen ===");
}

// Tests nach DOM-Load starten
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(runTests, 1000); // etwas später, damit DOM geladen ist
});