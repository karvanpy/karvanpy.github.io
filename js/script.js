let currentPage = 1;
const articlesPerPage = 7;

// Dummy data for articles
const articles = [
  { title: "Understanding HTML Semantics", category: "web-dev", link: "articles/article-1.html" },
  { title: "JavaScript Closures Explained", category: "javascript", link: "articles/article-2.html" },
  { title: "CSS Grid vs Flexbox", category: "css", link: "articles/article-3.html" },
  // Add more articles here
];

function filterArticles() {
  const searchQuery = document.getElementById('search-input').value.toLowerCase();
  const selectedCategory = document.getElementById('category-select').value;
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery);
    const matchesCategory = selectedCategory ? article.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });
  renderArticles(filteredArticles);
}

function renderArticles(articles) {
  const grid = document.getElementById('articles-grid');
  grid.innerHTML = '';
  const start = (currentPage - 1) * articlesPerPage;
  const end = start + articlesPerPage;
  const paginatedArticles = articles.slice(start, end);
  paginatedArticles.forEach(article => {
    const articleCard = document.createElement('article');
    articleCard.className = 'article-card';
    articleCard.setAttribute('data-category', article.category);
    articleCard.innerHTML = `
      <h2><a href="${article.link}">${article.title}</a></h2>
      <p>${article.description || 'Read more about this topic.'}</p>
      <span class="category-tag">${article.category}</span>
    `;
    grid.appendChild(articleCard);
  });
  updatePagination(articles.length);
}

function updatePagination(totalArticles) {
  const pageNumber = document.getElementById('page-number');
  pageNumber.textContent = currentPage;
  const totalPages = Math.ceil(totalArticles / articlesPerPage);
  document.querySelector('.pagination').style.display = totalPages > 1 ? 'flex' : 'none';
}

function nextPage() {
  const totalPages = Math.ceil(articles.length / articlesPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    filterArticles();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    filterArticles();
  }
}

// Initial render
filterArticles();
