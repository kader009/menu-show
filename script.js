document.addEventListener('DOMContentLoaded', () => {
  // Hide the menu initially
  const userMenu = document.getElementById('user-menu');
  userMenu.classList.add('hidden');

  // Add a click event listener to the profile button
  const profileButton = document.getElementById('user-menu-button');
  profileButton.addEventListener('click', () => {
    userMenu.classList.toggle('hidden');
  });

  // // Add a click event listener to the document to close the menu when clicking outside of it
  // document.addEventListener('click', (event) => {
  //   if (!event.target.matches('user-menu-button')) {
  //     // If the clicked element is not the profile button, close the menu
  //     userMenu.classList.add('hidden');
  //   }
  // });
});




// // Get the profile button and menu elements
// const profileButton = document.getElementById('user-menu-button');
// const userMenu = document.getElementById('user-menu');

// // Add a click event listener to the profile button
// profileButton.addEventListener('click', (event) => {
//   // Toggle the visibility of the menu by adding or removing the 'hidden' class
//   event.stopPropagation();
//   userMenu.classList.toggle('hidden');
// });

// //Add a click event listener to the document to close the menu when clicking outside of it
// document.addEventListener('click', (event) => {
//   if (!event.target.matches('user-menu-button')) {
//     // If the clicked element is not the profile button, close the menu
//     userMenu.classList.add('hidden');
//   }
// }

// );



// document.addEventListener('DOMContentLoaded', () => {
//   const userMenuButton = document.getElementById('picture');
//   const userMenu = document.getElementById('user-menu');



  // // Check if the elements exist
  // if (userMenuButton && userMenu) {
  //     // Toggle the visibility of the user menu on button click
  //     userMenuButton.addEventListener('click', (event) => {
  //         event.stopPropagation();
  //         userMenu.classList.toggle('hidden');
  //     });


  //     // Close the user menu when clicking outside of it
  //     document.addEventListener('click', (event) => {
  //         if (!userMenu.contains(event.target) && !userMenuButton.contains(event.target)) {
  //             userMenu.classList.add('hidden');
  //         }
  //     });
  // } 
// });
