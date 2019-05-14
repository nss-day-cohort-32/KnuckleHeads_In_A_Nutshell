import api from "./dbCalls";
const taskContainer = document.getElementById("tasks-container");

//show button
const taskList = document.createElement("button");
taskList.textContent = "Show Tasks";
taskContainer.appendChild(taskList);

//create button
const taskCreator = document.createElement("button");
taskCreator.textContent = "Create Task";
taskContainer.appendChild(taskCreator);

const taskEditor = document.createElement("button");
taskEditor.textContent = "Edit Tasks";
taskContainer.appendChild(taskEditor);

// user click button to (create/POST) a task form to create new task
// make a show task list (read/GET)
// be able to update task name(update/PUT)
// user wants to complete task with a checkbox (delete/DELETE)
const runTasks = {
  getTasks: () => {
    taskList.addEventListener("click", () => {
      api.getCall("tasks").then(results => {
        results.forEach(task => {
          const taskForm = document.createElement("div");
          const taskName = document.createElement("h3");
          const taskDescription = document.createElement("p");
          taskContainer.appendChild(taskForm);
          taskForm.appendChild(taskName);
          taskForm.appendChild(taskDescription);
          const taskNamer = document.createTextNode(task.task);
          const taskDescriptionText = document.createTextNode(task.description);
          taskName.appendChild(taskNamer);
          taskDescription.appendChild(taskDescriptionText);
          // delete method seperate them like the edit
          const taskDone = document.createElement("input");
          taskDone.setAttribute("type", "checkbox");
          taskDescription.appendChild(taskDone);
          taskDone.addEventListener("click", () => {
            taskContainer.removeChild(taskForm);
            api.deleteCall("tasks", task.id);
          });
        });
      });
    });
  },
  createTasks: () => {
    taskCreator.addEventListener("click", () => {
      const taskCreation = document.createElement("div");
      const taskSaveContainer = document.createElement("form");
      const theTask = document.createElement("input");
      theTask.setAttribute("placeholder", "Task Name");
      const description = document.createElement("input");
      description.setAttribute("placeholder", "Description");
      taskContainer.appendChild(taskCreation);
      taskCreation.appendChild(taskSaveContainer);
      taskSaveContainer.appendChild(theTask);
      taskSaveContainer.appendChild(description);
      const taskSave = document.createElement("button");
      const taskSaveName = document.createTextNode("Save Task");
      taskCreation.appendChild(taskSave);
      taskSave.appendChild(taskSaveName);
      taskSave.addEventListener("click", () => {
        const content = {
          task: theTask.value,
          description: description.value
        };
        api.postCall("tasks", content);
        taskContainer.removeChild(taskCreation);
      });
    });
  },
  editTasks: () => {
    taskEditor.addEventListener("click", () => {
      api.getCall("tasks").then(results => {
        results.forEach(task => {
          const taskEditContainer = document.createElement("div");
          const taskEditForm = document.createElement("form");
          const taskEditName = document.createElement("input");
          taskEditName.setAttribute("placeholder", task.task);
          const taskEditDescription = document.createElement("input");
          taskEditDescription.setAttribute("placeholder", task.description);
          taskContainer.appendChild(taskEditContainer);
          taskEditContainer.appendChild(taskEditForm);
          taskEditForm.appendChild(taskEditName);
          taskEditForm.appendChild(taskEditDescription);
          const taskEditSave = document.createElement("button");
          taskEditSave.textContent = "Save Changes";
          taskEditContainer.appendChild(taskEditSave);
          taskEditSave.addEventListener("click", () => {
            const edits = {
              task: taskEditName.value,
              description: taskEditDescription.value
            };
            api
              .putCall("tasks", task.id, edits)
              .then(taskContainer.removeChild(taskEditContainer));
          });
        });
      });
    });
  }
};

export default runTasks;
