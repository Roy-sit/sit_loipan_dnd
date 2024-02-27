#### Course: 
Multimedia Authoring II

#### Project:
Crushing Bugs (Troubleshooting JS)

#### Description:
Use the in-class build files (the Puzzle Drag and Drop) and fix the bugs that were discovered in class. This is a research assignment -
solve the problems outlined in the brief.
Create new branches (named appropriately) and update the functionality to improve the game UX.

#### Platform Used:
VSC / GitHub app / GitHub / Youtube / Online Tutorial

#### Problem & Solution:
Problem (1): Drag & drop function.
Solution: Added a drag start event listener to each puzzle piece element. Added a drag over event listener to each drop zone element, and added a drop event listener to each drop zone element.

Problem (2): More than 1 puzzle pieces can be dropped to the drop-zone.
Solution: In the handleDrop function, added a check to see if the drop zone already has a puzzle piece by using the querySelector. If the drop zone is empty, other puzzle piece is allowed to be dropped into the zone.

Problem (3): Puzzle pieces appearing in the drop zones on reset.
Solution: Added a resetDropZone function to handle the reset of drop zones, and through each drop zone using forEach to remove all puzzle pieces from the drop zone.

Problem (4): To enable switching between puzzle games by clicking on the thumbnail.
Solution: Added event listeners to each thumbnail. When it is clicked, it switches from different puzzle games, and added logic to hide all puzzle game sections except the thumbnail that is clicked, this ensures only the selected puzzle game is displayed, while the others are hidden.

Problem (5): Dropped puzzle pieces remain in the piece box.
Solution: Added 'remove()' function to remove the dragged piece from the DOM.