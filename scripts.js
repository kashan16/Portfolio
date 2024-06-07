document.addEventListener('DOMContentLoaded', function () {
    fetchProjects();
    fetchLeetCodeData('mohdkashan21165');
    handleScrollAnimations();
    window.addEventListener('scroll', handleScrollAnimations);
});

function fetchProjects() {
    const projectsContainer = document.querySelector('.projects-container');

    fetch('https://api.github.com/users/kashan16/repos')
        .then(response => response.json())
        .then(data => {
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
        .catch(error => console.error('Error fetching GitHub repositories:', error));
}

function fetchLeetCodeData(username) {
    fetch(`https://alfa-leetcode-api.onrender.com/userProfile/${username}`)
        .then(response => response.json())
        .then(data => {
            const leetcodeData = {
                totalSolved: data.totalSolved,
                categories: {
                    Easy: data.easySolved,
                    Medium: data.mediumSolved,
                    Hard: data.hardSolved
                }
            };

            document.getElementById('leetcode-total').textContent = leetcodeData.totalSolved;

            const ctx = document.getElementById('leetcode-chart').getContext('2d');
            new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: Object.keys(leetcodeData.categories),
                    datasets: [{
                        data: Object.values(leetcodeData.categories),
                        backgroundColor: ['#4caf50', '#ffeb3b', '#f44336'],
                        borderColor: '#0a192f',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: {
                                color: '#ccd6f6',
                                font: {
                                    size: 14
                                }
                            }
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error fetching LeetCode data:', error));
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScrollAnimations() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
}
