async function getSortedPostsByTitleLength() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    const sorted = posts.sort((a, b) => b.title.length - a.title.length);
    console.log('📘 [async] Посты по длине title:', sorted);
  }
  
  async function getSortedCommentsByAuthor() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const comments = await response.json();
    const sorted = comments.sort((a, b) => a.name.localeCompare(b.name));
    console.log('💬 [async] Комментарии по имени автора:', sorted);
  }
  
  async function getFilteredUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    const filtered = users.map(user => ({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone
    }));
    console.log('👤 [async] Пользователи с нужными полями:', filtered);
  }
  
  async function getIncompleteTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();
    const filtered = todos.filter(todo => !todo.completed);
    console.log('📋 [async] Невыполненные задачи:', filtered);
  }
  
  // Вызовы:
  getSortedPostsByTitleLength();
  getSortedCommentsByAuthor();
  getFilteredUsers();
  getIncompleteTodos();