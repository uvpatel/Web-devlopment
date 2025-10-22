const API_URL = 'http://localhost:3000/users';
const form = document.getElementById('userForm');
const usersList = document.getElementById('usersList');

// Load all users
async function loadUsers() {
    const res = await fetch(API_URL);
    const users = await res.json();

    usersList.innerHTML = '';
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `${user.name} (${user.email}) - Age: ${user.age || 'N/A'}`;
        usersList.appendChild(li);
    });
}

// Add new user
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const user = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value
    };

    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    });

    form.reset();
    loadUsers();
});

// Initial load
loadUsers();
