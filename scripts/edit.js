async function editAgenda() {
  let urlParams = new URLSearchParams(window.location.search);
  let todosId = urlParams.get("id");
  await fetchAgendaData(todosId);
}

async function fetchAgendaData(todosId) {
  try {
    let resonse = await fetch(`http://localhost:8083/api/todos/${todosId}`);
    let agenda = await resonse.json();
    document.querySelector("#category").value = agenda.category;
    document.querySelector("#deadline").value = agenda.deadline;
    document.querySelector("#priority").value = agenda.priority;
    document.querySelector("#completed").value = agenda.completed;
    document.querySelector("#description").value = agenda.description;
  } catch (error) {
    console.error("Error fetching agenda data:", error);
  }
}

async function editAgendaData() {
  try {
    let urlParams = new URLSearchParams(window.location.search);
    let todosId = urlParams.get("id");

    let category = document.querySelector("#category").value;
    let deadline = document.querySelector("#deadline").value;
    let priority = document.querySelector("#priority").value;
    let completed = document.querySelector("#completed").value;
    let description = document.querySelector("#description").value;

    let agendaData = {
      category: category,
      deadline: deadline,
      priority: priority,
      completed: completed,
      description: description,
    };

    let response = await fetch(`http://localhost:8083/api/todos/${todosId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(agendaData),
    });
    let data = await response.json();
    console.log("Agenda updated:", data);
    window.location.href = "all-todo.html";
  } catch (error) {
    console.error("Error updating user:", error);
  }
}

editAgenda();