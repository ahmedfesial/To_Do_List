// Set Up Varianles

let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus"); // Add Method = function
let tasksContainer = document.querySelector(".tasks-content");
let tasksCompleted = document.querySelector(".tasks-completed span");
let tasksCount = document.querySelector(".tasks-count span");
let btnDelete = document.querySelector(".delete-all")

// Foucs On Input Field

window.onload = function () {
  theInput.focus();
};


// Adding The Task  // Mark plus

theAddButton.onclick = function () {

  // Step_1 Check if in put is empty 'We Use State If'

  if (theInput.value === "") {   //=== "Empty"

    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Empty Field... wrong!",
      });
  } 
  else {
    // Show A Message Create a var 

    let noTaskMessage = document.querySelector(".tasks-content .no-Task-message");

    // Check if  span with  No Tasks message is exist

    if(document.body.contains(document.querySelector('.tasks-content .no-Task-message'))){

    // Remove No Tasks Message
    noTaskMessage.remove("Ahmed");    
    }
    // Create Main Span Element
    let mainSpan = document.createElement("span");

    // Create delete Button
    let deleteButton = document.createElement("span");

    // Create The Span Text // Search About This 'Create Text Node'
    let text = document.createTextNode(theInput.value); 

    // Create the delete Button Text
    let deleteText = document.createTextNode("Delete");

    // Add Text to Span

    mainSpan.appendChild(text);

    // Add Class to Span

    mainSpan.className = "task-box";

    // Add Text To Delete Button

    deleteButton.appendChild(deleteText);

    // Add Class to Delte

    deleteButton.className = "delete";

    // Add Delete Button To Main Span

    mainSpan.appendChild(deleteButton);

    // Add the Task To the container

    tasksContainer.appendChild(mainSpan);
    }

    // Empty The Input

    theInput.value = "";

    theInput.focus();

    calcTasks();
    

  };

document.addEventListener("click", function (e) {
  // Delete Task

  if (e.target.className == "delete") {
    // Remove Current Task
    e.target.parentNode.remove();
    
    calcTasks();

    // Check Number Of Tasks Inside The Container

    if (tasksContainer.childElementCount == 0) {
      createNoTasks();
    }
  }
  // Finish Task
  if (e.target.classList.contains("task-box")) {
    e.target.classList.toggle("finished");
    calcTasks();
  }

});

// Function To Create No Task Message

function createNoTasks() {
  // Create Message Span Element

  let msgSpan = document.createElement("span");

  // Create Text Message

  let msgText = document.createTextNode("No Tasks To Show");

  // Add Text To Message Span Element

  msgSpan.appendChild(msgText);

  // Add Class To Message Span

  msgSpan.className = "no-Task_message";

  // append The Message Span Element To The Task Container

  tasksContainer.appendChild(msgSpan);
}

// Function to calculate Task

function calcTasks(){

    // Calculate All Tasks
    tasksCount.innerHTML = document.querySelectorAll(".tasks-content .task-box").length;
    // Calculate Completed Tasks
    tasksCompleted.innerHTML = document.querySelectorAll(".tasks-content .finished").length;
  }
  // Delete All Tasks 
  document.querySelector(".delete-all").onclick = function () {
    let myArrayAllTask = Array.from(document.querySelectorAll(".task-box"));
    for (let i = 0; i < myArrayAllTask.length; i++) {
      myArrayAllTask[i].remove();
    }
    calcTasks();
    createNoTasks() 
    theInput.focus();
  };
// Finish All Tasks
let finishedDone = document.querySelector(".finish-all");
finishedDone.onclick = function () {
  let ArrayTasksDone = Array.from(document.querySelectorAll(".task-box"));
  for (let i = 0; i < ArrayTasksDone.length; i++) {
    if (ArrayTasksDone[i].classList.contains("finished")) {
      ArrayTasksDone[i].remove();
    }
  }
  calcTasks();
};

  


 








