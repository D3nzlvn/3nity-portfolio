// Select all sections on the page
let sections = document.querySelectorAll('section');
// Select all navigation links inside the header
let navLinks = document.querySelectorAll('header nav a');

// Attach a scroll event listener to the window
window.onscroll = () => {
     // loop through each section
    sections.forEach(sec => {

        // Get the current scroll position
        let top = window.scrollY;

        // Calculate the offset of the section 
        let offset = sec.offsetTop - 150;

         // Get the height of the section
        let height = sec.offsetHeight;

        // Get the id attribute of the section
        let id = sec.getAttribute('id');

        // Check if the current scroll position is within the section's range
        if(top >= offset && top < offset + height) {

             // loop through each navigation link
            navLinks.forEach(links => {

                // Remove the 'active' class from all navigation links
                links.classList.remove('active');

                // Add the 'active' class to the navigation link corresponding to the current section
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};



// Get all input elements with the name "filter"
const filterInputs = document.querySelectorAll('input[name="filter"]');
// Get all elements with the class ".pic"
    const projects = document.querySelectorAll('.pic');

// Loop through each filter input
    filterInputs.forEach(input => {

        // Attach an event listener for the 'change' event on each input
        input.addEventListener('change', () => {

            // Get the value of the selected category from the input
            const selectedCategory = input.value;

             // Check if the selected category is "all"
            if (selectedCategory === 'all') {
                 // If "all" is selected then display all projects
                projects.forEach(project => {
                    project.style.display = 'block';
                });
            } else {
                // If a specific category is selected, loop through each project
                projects.forEach(project => {
                    // Check if the project has the selected category
                    if (project.classList.contains(selectedCategory)) {
                        // If naka select sa specific category then display the project
                        project.style.display = 'block';
                    } else {
                        // If not, hide the project
                        project.style.display = 'none';
                    }
                });
            }
        });
    });


   
    





  