const menuBtn = document.getElementById("hamburger-menu");
const popup = document.querySelector(".nav-popup");

// Toggle the popup when the menu button is clicked
menuBtn.addEventListener("click", function (event) {
  event.stopPropagation(); // Prevent the click from bubbling up to the window
  popup.classList.toggle("active");
});

// Close the popup if clicking outside of it
window.addEventListener("click", function (event) {
  if (!popup.contains(event.target) && !menuBtn.contains(event.target)) {
    popup.classList.remove("active");
  }
});

const userCard = document.querySelector(".overview__container .user-card");

// Function to fetch data from the GitHub API
async function fetchGitHubData() {
  try {
    const response = await fetch("https://api.github.com/users/D4RYO");

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Error fetching data");
    }

    renderOverview(data);
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    userCard.innerHTML = `<p style="color: red;">Failed to load data</p>`;
  }
}

function renderOverview(data) {
  const formattedDate = new Date(data.created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const html = `
    <img src="${data.avatar_url}" alt="${
    data.login
  }'s avatar" class="user-avatar" />
    <h2>${data.name || "No Name Provided"}</h2>
    <p><span class='code'>Username:</span> ${data.login}</p>
    <p><span class='code'>Public Repos:</span> ${data.public_repos}</p>
    <p><span class='code'>Location:</span> ${
      data.location || "Not available"
    }</p>
    <p><span class='code'>Website:</span> ${data.blog || "Not available"}</p>
    <p><span class='code'>Followers:</span> ${data.followers}</p>
    <p><span class='code'>Following:</span> ${data.following} users</p>
    <p><span class='code'>Account Created at:</span> ${formattedDate}</p>
    <a href="${data.html_url}" target="_blank">Visit GitHub Profile</a>
  `;

  userCard.innerHTML = html;
}

fetchGitHubData();
