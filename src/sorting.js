let toLiIndex = null;

function allowDrop(event) {
  event.preventDefault();
  toLiIndex = event.target.id;
}

function dragStart(event) {
  event.dataTransfer.setData('Text', event.target.id);
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData('Text');
  const oldDiv = document.getElementById(data);
  const oldLi = document.getElementById(oldDiv.data);
  const newLi = document.getElementById(toLiIndex);
  const newDiv = newLi.getElementsByTagName('div')[0];
  const oldDivData = oldDiv.data;
  const newDivData = newDiv.data;
  oldDiv.data = newDivData;
  newDiv.data = oldDivData;
  oldLi.appendChild(newDiv);
  oldLi.removeChild(oldLi);
  newLi.appendChild(oldDiv);

  window.update();
}

export { dragStart, allowDrop, drop };