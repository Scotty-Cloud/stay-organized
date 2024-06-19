async function fetchDetails(){
  const urlParams = new URLSearchParams(window.location.search);
  let id = -1
  if(urlParams.has("userid") === true){
    id = urlParams.get("userid");

    try {
      const response = await fetch(`http://localhost:8083/api/todos/${id}`)
      const detail = await response.json();

      let container = document.querySelector('#agendaDetailContainer')

      let card = document.createElement("div")
      card.className = "card";

      let description = document.createElement("p")
      description.innerText = `Description: ${detail.description}`
      card.appendChild(description)

       let deadline = document.createElement("p");
       deadline.innerText = `Deadline: ${detail.deadline}`
       card.appendChild(deadline)

       let completed = document.createElement("p")
       completed.innerText = `Completed: ${detail.completed}`
       card.appendChild(completed)

       let backButton = document.createElement("button")
       backButton.innerText = "Back"
       backButton.onclick = function (){
        window.location.href = "user-todo.html"
       };
       card.appendChild(backButton)

       container.appendChild(card)
    } catch (error) {
      console.error("Error:",error)
    }
  }
}

fetchDetails()