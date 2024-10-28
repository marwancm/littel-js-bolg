const mainContainer = document.getElementById('container');

const blogTitle = document.createElement('h1');
blogTitle.textContent = 'My Blog!';
blogTitle.id = 'blog-title';
mainContainer.appendChild(blogTitle);

function createPost(title, data, body) {
  // Create DOM elements
  const postContainer = document.createElement('div');
  const postTitle = document.createElement('h3');
  const postDate = document.createElement('span');
  const postBody = document.createElement('p');
  
  // Update text content 
  postTitle.textContent = title;
  postDate.textContent = data;
  postBody.textContent = body;

  // Add classes to element
  postContainer.classList.add('post-container');
  postTitle.classList.add('blog-entry-title');
  postDate.classList.add('blog-entry-date');
  postBody.classList.add('blog-entry-body');
  
  // Appending elements to proper container
  postContainer.appendChild(postTitle);
  postContainer.appendChild(postDate);
  postContainer.appendChild(postBody);
  mainContainer.appendChild(postContainer);
}

posts.forEach(function(post) {
  createPost(post.title, post.date, post.body);
});
