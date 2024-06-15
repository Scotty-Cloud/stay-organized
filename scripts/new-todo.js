const dropdownUsers = document.querySelector("#dropdownUsers");
const downdownPriority = document.querySelector("#downdownPriority");
const deadlineInput = document.querySelector("#deadlineInput");
const descriptionInput = document.querySelector("#descriptionInput")

window.onload = () => {
    populateUserDropdown();
    populateCategoriesDropdown();
}

