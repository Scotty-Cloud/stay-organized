const dropdownUsers = document.querySelector("#dropdownUsers");
const displayTodos = document.querySelector("#displayTodos");

window.onload = () => {
  fetchDataToDropdown();
  displayTodos.innerText = "";
  dropdownUsers.onchange = displayUserToDos;
};

async function fetchDataToDropdown() {
  try {
    const response = await fetch("http://localhost:8083/api/users");
    const data = await response.json();
    dropdownUsers.appendChild(new Option("Select a user"));
    data.forEach((user) => {
      dropdownUsers.appendChild(new Option(user.name, user.id));
    });
  } catch (error) {
    displayTodos.innerText = `Error: ${error}`;
  }
}

async function displayUserToDos() {
  displayTodos.innerText = "";
  try {
    const response = await fetch("http://localhost:8083/api/todos");
    const data = await response.json();

    for (const todo of data) {
      if (dropdownUsers.value == todo.userid) {
        const card = document.createElement("div");
        card.classList.add("card");

        const category = document.createElement("h4");
        category.textContent = todo.category;
        card.appendChild(category);

        const description = document.createElement("p");
        description.textContent = todo.description;
        card.appendChild(description);

        const priority = document.createElement("p");
        priority.textContent = `Priority: ${todo.priority}`;
        card.appendChild(priority);

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

        displayTodos.appendChild(card);
      }
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
