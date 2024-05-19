document.addEventListener('DOMContentLoaded', () => {
  // Hide the menu initially
  const userMenu = document.getElementById('user-menu');
  userMenu.classList.add('hidden');

  // Add a click event listener to the profile button
  const profileButton = document.getElementById('user-menu-button');
  profileButton.addEventListener('click', () => {
    userMenu.classList.toggle('hidden');
  });
});
