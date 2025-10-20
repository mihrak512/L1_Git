function fetchUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => users.map(user => ({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone
      })));
  }
  
  function fetchTodos() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todos => todos.filter(todo => !todo.completed));
  }
  
  // Вызовы:
  fetchUsers().then(filteredUsers => {
    console.log('👤 Отфильтрованные пользователи:', filteredUsers);
  });
  
  fetchTodos().then(filteredTodos => {
    console.log('📋 Невыполненные задачи:', filteredTodos);
  });