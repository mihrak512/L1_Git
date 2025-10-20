function fetchPosts(callback) {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => callback(data));
  }
  
  function sortPostsByTitleLength(posts) {
    const sorted = posts.sort((a, b) => b.title.length - a.title.length);
    console.log('📘 Отсортированные посты по длине title:', sorted);
  }
  
  function fetchComments(callback) {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => callback(data));
  }
  
  function sortCommentsByAuthor(comments) {
    const sorted = comments.sort((a, b) => a.name.localeCompare(b.name));
    console.log('💬 Отсортированные комментарии по имени автора:', sorted);
  }
  
  // Вызовы:
  fetchPosts(sortPostsByTitleLength);
  fetchComments(sortCommentsByAuthor);