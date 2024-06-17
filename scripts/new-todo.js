const dropdownUsers = document.querySelector("#dropdownUsers");
const dropdownPriority = document.querySelector("#dropdownPriority");
const dropdownCategories = document.querySelector("#dropdownCategories")
const deadlineInput = document.querySelector("#deadlineInput");
const descriptionInput = document.querySelector("#descriptionInput");
const todoForm = document.querySelector("#formAddToDo");

window.onload = () => {
  populateUserDropdown();
  populateCategoryDropdown();
};

async function populateUserDropdown() {
  try{
      const response = await fetch("http://localhost:8083/api/users");
      const data = await response.json();
      dropdownUsers.appendChild(new Option("Select a user"));
      data.forEach(user => {
          dropdownUsers.appendChild(new Option(user.username, user.id));
      })
  }
  catch(error){
      alert(error);;
  }
}

async function populateCategoryDropdown() {
  try{
      const response = await fetch("http://localhost:8083/api/categories");
      const data = await response.json();
      dropdownCategories.appendChild(new Option("Select a category"));
      data.forEach(user => {
          dropdownCategories.appendChild(new Option(user.name));
      })
  }
  catch(error){
      alert(error);
  }
}

todoForm.addEventListener("submit", 
  async function(event){
  event.preventDefault();

  const response = await fetch("http://localhost:8083/api/todos", {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          'userid': dropdownUsers.value,
          'category': dropdownCategories.value,
          'description': inputDescription.value,
          'deadline': inputDeadline.value,
          'priority': dropdownPriority.value,
      })
  });
  const data = await response.json();
  console.log(data);
  todoForm.reset();
  alert('Submitted!');
});