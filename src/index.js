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
};