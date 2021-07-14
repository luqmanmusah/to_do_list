import _ from 'lodash';
import './style.css';

let tasks = null;

/**       AddTask adds tasks to the tasks list      */
window.addTask = function addTask() {
  const str = document.getElementById('description').value;
  const firstLetter = str.charAt(0).toUpperCase();
  str.replace(str.charAt(0), firstLetter);
  const description = str;
  const completed = false;
  const date = new Date();
  const id = date.getMilliseconds();

  if (!tasks) {
    tasks = [];
  }

  const position = tasks.length + 1;

  if (tasks && description !== '') {
    const task = {
      description,
      completed,
      position,
      id,
    };
    tasks.push(task);
    tasks.sort((taskA, taskB) => {
      const indexA = taskA.position;
      const indexB = taskB.position;
      if (indexA < indexB) {
        return -1;
      }
      if (indexA > indexB) {
        return 1;
      }
      return 0;
    });

    window.updateLocalStorage(false);
  }
};

window.editTask = function editTask(data) {
  const list = document.getElementsByTagName('li');

  Array.from(list).forEach((li) => {
    if (li.id === data.id) {
      li.style.backgroundColor = '#fff59c78';
      const img = li.getElementsByTagName('img')[0];

      img.src = TrashImg;
    } else {
      li.style.backgroundColor = 'white';
      const img = li.getElementsByTagName('img')[0];
      img.src = MoreImg;
    }
  });
};

window.removeTask = function removetask(data) {
  let id;
  if (!data.id) {
    id = data;
  } else {
    id = data.id;
  }
  const temp = [];
  tasks.forEach((task) => {
    if (task.id !== id) {
      temp.push(task);
    }
  });
  tasks = temp;
  window.updateLocalStorage(true);
};

window.clear = function clear() {
  const temp = [];
  tasks.forEach((task) => {
    if (task.completed !== true) {
      temp.push(task);
    }
  });
  tasks = temp;
  window.updateLocalStorage(true);
};

window.updateLocalStorage();