// Variables
let draggedPiece;
let puzzleBoard = document.querySelector(".puzzle-board");
let puzzlePieces = document.querySelectorAll(".puzzle-image");
let dropZones = document.querySelectorAll(".drop-zone");

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
        // If drop zone is empty, allow the other puzzle pieces
        this.appendChild(draggedPiece.cloneNode(true));
    }
}

// Reset puzzle pieces in drop zones
function resetDropZone() {
  dropZones.forEach(zone => {
      // Clear each drop zone
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


