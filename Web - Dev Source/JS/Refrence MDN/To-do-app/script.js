function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.onclick = () => {
    li.classList.toggle("completed");
  };

  const delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.onclick = () => {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}
