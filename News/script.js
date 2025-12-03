document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navbar = document.querySelector('.navbar');
    
    mobileMenuBtn.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
    
    // API configuration
    const apiKey = 'f2718e9491b746d6b72112afbdee1d5c';
    const apiUrl = 'https://newsapi.org/v2/everything?q=pakistan&from=2025-03-12&sortBy=publishedAt&apiKey=' + apiKey;
    
    let currentPage = 1;
    const pageSize = 9; // Number of articles per page
    
    // DOM elements
    const newsContainer = document.getElementById('news-container');
    const featuredArticle = document.querySelector('.featured-article');
    const loadMoreBtn = document.getElementById('load-more');
    
    // Fetch news data
    async function fetchNews(page = 1) {
        try {
            const response = await fetch(`${apiUrl}&page=${page}&pageSize=${pageSize}`);
            const data = await response.json();
            
            if (data.status === 'ok') {
                return data.articles;
            } else {
                throw new Error(data.message || 'Failed to fetch news');
            }
        } catch (error) {
            console.error('Error fetching news:', error);
            showError('Failed to load news. Please try again later.');
            return [];
        }
    }
    
    // Display error message
    function showError(message) {
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        newsContainer.appendChild(errorElement);
    }
    
    // Format date
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }
    
    // Create article card
    function createArticleCard(article) {
        console.log(article)
        const card = document.createElement('div');
        card.className = 'news-card';
        
        const imageUrl = article.urlToImage || 'https://via.placeholder.com/300x200?text=No+Image';
        const publishedAt = article.publishedAt ? formatDate(article.publishedAt) : 'Date not available';
        const sourceName = article.source?.name || 'Unknown source';
        
        card.innerHTML = `
            <img src="${imageUrl}" alt="${article.title}">
            <div class="card-content">
                <h3>${article.title || 'No title available'}</h3>
                <div class="meta">
                    <span><i class="far fa-calendar-alt"></i> ${publishedAt}</span>
                    <span><i class="far fa-newspaper"></i> ${sourceName}</span>
                </div>
                <p>${article.description || 'No description available'}</p>
                <a href="${article.url}" target="_blank" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
        `;
        
        return card;
    }
    
    // Display featured article
    async function displayFeaturedArticle() {
        const articles = await fetchNews(1);
        if (articles.length > 0) {
            const featured = articles[0]; // Use first article as featured
            const imageUrl = featured.urlToImage || 'https://via.placeholder.com/800x400?text=No+Image';
            const publishedAt = featured.publishedAt ? formatDate(featured.publishedAt) : 'Date not available';
            const sourceName = featured.source?.name || 'Unknown source';
            
            featuredArticle.innerHTML = `
                <img src="${imageUrl}" alt="${featured.title}" style="width:100%; max-height:400px; object-fit:cover;">
                <div class="featured-content">
                    <h2>${featured.title || 'No title available'}</h2>
                    <div class="meta">
                        <span><i class="far fa-calendar-alt"></i> ${publishedAt}</span>
                        <span><i class="far fa-newspaper"></i> ${sourceName}</span>
                    </div>
                    <p>${featured.content || featured.description || 'No content available'}</p>
                    <a href="${featured.url}" target="_blank" class="read-more">Read Full Story</a>
                </div>
            `;
        }
    }
    
    // Display news articles
    async function displayNewsArticles(page) {
        loadMoreBtn.disabled = true;
        loadMoreBtn.textContent = 'Loading...';
        
        const articles = await fetchNews(page);
        
        if (articles.length > 0) {
            articles.forEach((article, index) => {
                // Skip the first article if it's page 1 (it's the featured article)
                if (page === 1 && index === 0) return;
                
                const card = createArticleCard(article);
                newsContainer.appendChild(card);
            });
            
            // Hide load more button if we've reached the end (assuming 100 is max for demo)
            if (articles.length < pageSize || page * pageSize >= 100) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'block';
            }
        } else if (page === 1) {
            showError('No news articles found.');
        }
        
        loadMoreBtn.disabled = false;
        loadMoreBtn.textContent = 'Load More Articles';
    }
    
    // Initialize the page
    async function init() {
        await displayFeaturedArticle();
        await displayNewsArticles(currentPage);
    }
    
    // Load more articles
    loadMoreBtn.addEventListener('click', function() {
        currentPage++;
        displayNewsArticles(currentPage);
    });
    
    // Search functionality (mock for this demo)
    const searchInput = document.querySelector('.search-bar input');
    const searchBtn = document.querySelector('.search-bar button');
    
    searchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
            alert(`Search functionality would search for: ${query}\nIn a full implementation, this would make a new API call with the search query.`);
        }
    });
    
    // Initialize the page
    init();

});
