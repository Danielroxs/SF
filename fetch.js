document.getElementById('loaderUsersBtn').addEventListener('click', fetchUsers);

async function fetchUsers() {
    const userList = document.getElementById('userList')
    const errorMsg = document.getElementById('errorMsg')

    userList.innerHTML = '';
    errorMsg.textContent = '';

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if (!response.ok) {
            throw new Error('Error en la respuesta de la API')
        }

        const users = await response.json()
        const limitedUsers = users.slice(0, 5)

        limitedUsers.forEach(user => {
            const li = document.createElement('li')
            li.textContent = user.name
            userList.appendChild(li)
        })
    } catch (error) {
        errorMsg.textContent = `Hubo un problema al cargar los usuarios: ${error.message}`
    }
}