// async function fetchTodo() {
//   try {
//     let response = await fetch("http://localhost:8083/api/todos");
//     let todoList = await response.json();
//     let container = document.querySelector("#todoDisplayContainer");

//     for (let todos of todoList) {
//       let card = document.createElement("div");
//       card.className = "card";

//       let deleteAnchor = document.createElement("a");
//       deleteAnchor.href = `delete.html?id=${todos.id}`;
//       deleteAnchor.style.display = "inline-block";
//       deleteAnchor.style.padding = "5px 10px";
//       deleteAnchor.style.fontSize = "12px";
//       deleteAnchor.style.backgroundColor = "#333";
//       deleteAnchor.style.color = "white";
//       deleteAnchor.style.borderRadius = "5px";
//       deleteAnchor.style.textDecoration = "none";
//       deleteAnchor.style.border = "none";
//       deleteAnchor.style.cursor = "pointer";
//       deleteAnchor.textContent = "Delete";
//       card.appendChild(deleteAnchor);

//       let category = document.createElement("h3");
//       category.innerText = `Category: ${todos.category}`;
//       card.appendChild(category);

//       let deadline = document.createElement("h4");
//       deadline.innerText = `Due: ${todos.deadline}`;
//       card.appendChild(deadline);

//       let priority = document.createElement("h4");
//       priority.innerText = `Priority Level: ${todos.priority}`;
//       card.appendChild(priority);

//       let completed = document.createElement("h4");
//       completed.innerText = `Completed: ${todos.completed}`;
//       card.appendChild(completed);

//       let description = document.createElement("p");
//       description.innerText = `Description: ${todos.description}`;
//       card.appendChild(description);

//       container.appendChild(card);
//     }
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// fetchTodo();

async function fetchTodo() {
  try {
    let response = await fetch("http://localhost:8083/api/todos");
    let todoList = await response.json();
    let container = document.querySelector("#todoDisplayContainer");

    for (let todos of todoList) {
      let card = document.createElement("div");
      card.className = "card";

      let deleteAnchor = document.createElement("a");
      deleteAnchor.href = `delete.html?id=${todos.id}`;
      deleteAnchor.style.display = "inline-block";
      deleteAnchor.style.padding = "5px 10px";
      deleteAnchor.style.fontSize = "12px";
      deleteAnchor.style.backgroundColor = "#333";
      deleteAnchor.style.color = "white";
      deleteAnchor.style.borderRadius = "5px";
      deleteAnchor.style.marginRight = "10px"; // Add right margin to space out the buttons
      deleteAnchor.style.textDecoration = "none";
      deleteAnchor.style.border = "none";
      deleteAnchor.style.cursor = "pointer";
      deleteAnchor.textContent = "Delete";
      card.appendChild(deleteAnchor);

      let doneButton = document.createElement("a");
      doneButton.type = "button";
      doneButton.style.display = "inline-block";
      doneButton.style.padding = "5px 10px";
      doneButton.style.fontSize = "12px";
      doneButton.style.backgroundColor = "#333";
      doneButton.style.color = "white";
      doneButton.style.borderRadius = "5px";
      doneButton.style.textDecoration = "none";
      doneButton.style.border = "none";
      doneButton.style.cursor = "pointer";
      doneButton.textContent = "Done";

      doneButton.addEventListener("click", (e) => {
        if (card.style.textDecoration === "line-through") {
          card.style.textDecoration = "none";
        } else {
          card.style.textDecoration = "line-through";
        }
      });

      card.appendChild(doneButton);

      let category = document.createElement("h3");
      category.innerText = `Category: ${todos.category}`;
      card.appendChild(category);

      let deadline = document.createElement("h4");
      deadline.innerText = `Due: ${todos.deadline}`;
      card.appendChild(deadline);

      let priority = document.createElement("h4");
      priority.innerText = `Priority Level: ${todos.priority}`;
      card.appendChild(priority);

      let completed = document.createElement("h4");
      completed.innerText = `Completed: ${todos.completed}`;
      card.appendChild(completed);

      let description = document.createElement("p");
      description.innerText = `Description: ${todos.description}`;
      card.appendChild(description);

      container.appendChild(card);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchTodo();
