// Variables
let draggedPiece;
let puzzleBoard = document.querySelector(".puzzle-board");
let puzzlePieces = document.querySelectorAll(".puzzle-image");
let dropZones = document.querySelectorAll(".drop-zone");
let currentGame = 1; // Set default game to 1

// Handle drag start
function handleDragStart(event) {
    draggedPiece = this;
}

// Handle drag over
function handleDragOver(event) {
    event.preventDefault();
}

// Handle drop
function handleDrop(event) {
    event.preventDefault();
    // Check if the drop zone already has a puzzle
    if (!this.querySelector('.puzzle-image')) {
        // If drop zone is empty, allow the other puzzle pieces to drop
        this.appendChild(draggedPiece.cloneNode(true));
    }
}

// Reset puzzle pieces in drop zones
function resetDropZone() {
    dropZones.forEach(zone => {
        // Clear piece in each drop zone
        while (zone.firstChild) {
            puzzleBoard.appendChild(zone.firstChild);
        }
    });
}

// Add event listener for reset button
document.getElementById("resetBut").addEventListener("click", function() {
    resetDropZone();
});

// Add event listeners
puzzlePieces.forEach(piece => {
    piece.addEventListener("dragstart", handleDragStart);
});

dropZones.forEach(zone => {
    zone.addEventListener("dragover", handleDragOver);
});

dropZones.forEach(zone => {
    zone.addEventListener("drop", handleDrop);
});

document.addEventListener("DOMContentLoaded", function() {
  // Default to show the first game board and hide others
  document.getElementById("game-boards").style.display = "block";
  document.getElementById("game-boards-2").style.display = "none";
  document.getElementById("game-boards-3").style.display = "none";
  document.getElementById("game-boards-4").style.display = "none";

  // Function to show the selected game board and hide others
  function showGameBoard(boardId) {
      document.querySelectorAll("[id^='game-boards']").forEach(function(board) {
          board.style.display = "none";
      });
      document.getElementById(boardId).style.display = "block";
  }

  // Event listeners for thumbnail for clicks
  document.getElementById("0").addEventListener("click", function() {
      showGameBoard("game-boards");
  });

  document.getElementById("1").addEventListener("click", function() {
      showGameBoard("game-boards-2");
  });

  document.getElementById("2").addEventListener("click", function() {
      showGameBoard("game-boards-3");
  });

  document.getElementById("3").addEventListener("click", function() {
      showGameBoard("game-boards-4");
  });
});



