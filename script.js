document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
    const username = "EDelvalle98";
    const apiUrl = `https://api.github.com/users/EDelvalle98`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById("github-avatar").src = data.avatar_url;
            document.getElementById("github-name").textContent = `Name: ${data.name || "Not available"}`;
            document.getElementById("github-repos").textContent = data.public_repos;
            document.getElementById("github-link").href = data.html_url;
        })
        .catch(error => {
            console.error("Error fetching GitHub data:", error);
        });
});