const addBtn = document.getElementById('addBtn')
const taskInput = document.getElementById('taskInput')
const taskList = document.getElementById('taskList')

function addTask() {
    const taskText = taskInput.value.trim()
    if (taskText === "") return

    const li = document.createElement('li')   
    li.textContent = taskText

    li.addEventListener('click', () => {
        li.classList.toggle('done')
    })

    // delete
    const delBtn = document.createElement('button')
    delBtn.textContent = "X"
    delBtn.classList.add('delete')
    delBtn.addEventListener('click', (e) => {
        e.stopPropagation()
        li.remove()
    })

    li.appendChild(delBtn)
    taskList.appendChild(li)

    taskInput.value = ""
}

addBtn.addEventListener('click',addTask)
    addBtn.addEventListener('keypress' ,(e) => {
        if (e.key === "enter") {
            addTask()
            
        }
    })
