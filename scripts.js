document.addEventListener('DOMContentLoaded', function() {
    const projectsContainer = document.querySelector('.projects-container');

    fetch('https://api.github.com/users/kashan16/repos')
        .then(response => response.json())
        .then(data => {
            // Filter repositories to include only those with 'portfolio' in the description
            const filteredRepos = data.filter(repo => repo.description && repo.description.includes('portfolio'));

            filteredRepos.forEach(repo => {
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card';

                projectCard.innerHTML = `
                    <h3>${repo.name}</h3>
                    <a href="${repo.html_url}" target="_blank">View on GitHub</a>
                `;

                projectsContainer.appendChild(projectCard);
            });
        })
        .catch(error => {
            console.error('Error fetching GitHub repositories:', error);
        });
});

// Function to check if an element is in the viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll animations
function handleScrollAnimations() {
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        if (isInViewport(section)) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
}

// Event listener for scrolling
window.addEventListener('scroll', handleScrollAnimations);
// Initial check
handleScrollAnimations();

