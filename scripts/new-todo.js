const dropdownUsers = document.querySelector("#dropdownUsers");
const downdownPriority = document.querySelector("#downdownPriority");
const deadlineInput = document.querySelector("#deadlineInput");
const descriptionInput = document.querySelector("#descriptionInput");

window.onload = () => {
  populateUserDropdown();
  populateCategoriesDropdown();
};

async function populateUserDropdown() {
  try {
    const response = await fetch("http://localhost:8083/api/users");
    const data = await response.json();
    dropdownUsers.innerHTML = ""; // clear the dropdown
    dropdownUsers.appendChild(new Option("Select a user"));
    data.map((user) =>
      dropdownUsers.appendChild(new Option(user.username, user.id))
    );
  } catch (error) {
    console.error("Error loading users:", error);
  }
}

async function populateCategoriesDropdown() {
    try {
      const response = await fetch("http://localhost:8083/api/categories");
      const data = await response.json();
      downdownPriority.appendChild(new Option("Select a category"));
      await Promise.all(data.map(user => downdownPriority.appendChild(new Option(user.name))));
    } catch (error) {
        console.error("Error loading users:", error);
    }
  }