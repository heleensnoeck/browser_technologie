var dragSrcEl = null;

function handleDragStart(e) {
  this.style.opacity = '0.5';  // this / e.target is the source node.

  dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }

  e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

  return false;
}

function handleDrop(e) {
  // this/e.target is current target element.

  if (e.stopPropagation) {
    e.stopPropagation(); // Stops some browsers from redirecting.
  }

  // Don't do anything if dropping the same column we're dragging.
  if (dragSrcEl != this) {
    // Set the source column's HTML to the HTML of the column we dropped on.
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }

  return false;
}

function handleDragEnter(e) { // als je over doing hovert geef het dan een dashed border mee
  document.querySelector('.doing').classList.add('over');
}

function handleDragLeave(e) {
  document.querySelector('.doing').classList.remove('over');		
}


function handleDragEnd(e) {
  // this/e.target is the source node.
  [].forEach.call(cols, function (col) {
    col.classList.remove('over');
  });
}

var cols = document.querySelectorAll('.content');
[].forEach.call(cols, function(col) {
  col.addEventListener('dragstart', handleDragStart, false); // voor elke element dat je weg wil slepen geef het een opacity mee van 0.4
  col.addEventListener('dragenter', handleDragEnter, false);
  col.addEventListener('dragover', handleDragOver, false);
  col.addEventListener('dragleave', handleDragLeave, false);
  col.addEventListener('drop', handleDrop, false);
  col.addEventListener('dragend', handleDragEnd, false);
});

//One thing that we still need to do is return the columns opacity to 100% once the drag is done. An obvious place to handle that is the dragend event. More on this later.