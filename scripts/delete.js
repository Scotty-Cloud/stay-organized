async function deleteTask() {
  try {
    let urlParams = new URLSearchParams(window.location.search);
    let todoId = urlParams.get("id");

    let response = await fetch(`http://localhost:8083/api/todos/${todoId}`, {
      method: "DELETE",
    });
    let data = await response.json();
    console.log("Task Deleted:", data);
  } catch (error) {
    console.error("Error deleting task:", error);
  } finally {
    window.location.href = "all-todo.html";
  }
}
