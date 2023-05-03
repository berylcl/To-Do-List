import Tasks from './tasks.js';

class TaskList {
  constructor (object = []) {
    this.tasklist = object;
  }

  addTask(description, completed,index) {
    const Task = new Tasks(description, completed, index);
    this.tasklist.push(Task);
    const tasks = document.querySelector('.tasks');
    tasks.innerHTML = '';
    this.loadTasks();
  }

  readTasks(listtask = []) {
    let index = 1;
    listtask.tasklist.forEach((task) => {
      this.addTask(task.description, task.completed, index);
      index += 1;
    });
  }

  loadTasks() {
    const tasks = document.querySelector('.tasks');
    this.tasklist.forEach((task) => {
      const containertask = document.createElement('div');
      const tasklabel = document.createElement('div');
      const taskinput = document.createElement('input');
      const taskdescription = document.createElement('input');
      const trashicon = document.createElement('i');
      containertask.setAttribute('class', 'task-container');
      tasklabel.setAttribute('class', 'currenttask');
      taskinput.setAttribute('type', 'checkbox');
      taskdescription.setAttribute('type', 'input');
      taskdescription.setAttribute('class', 'taskfield');
      trashicon.setAttribute('class', 'fa-solid fa-trash-can delete-icon');
      trashicon.setAttribute('id', 'removetask'+task.index);
      taskdescription.value = task.description;
      taskinput.checked = task.completed;
      tasklabel.appendChild(taskinput);
      tasklabel.appendChild(taskdescription);
      tasklabel.appendChild(trashicon);
      containertask.appendChild(tasklabel);
      tasks.appendChild(containertask);
    });
  }

  removeTask(removeindex) {
    this.tasklist.splice(removeindex, 1);
    let count = 1;
    this.tasklist.forEach((task) => {
      task.index = count;
      count++;
    });
    const tasks = document.querySelector('.tasks');
    tasks.innerHTML = '';
    this.loadTasks();
  }

  updateDescription(description, index) {
    console.log(index);
    console.log(description.value);
    console.log(this.tasklist[index].description);
    this.tasklist[index].description = description.value;
  }

}

export default TaskList;