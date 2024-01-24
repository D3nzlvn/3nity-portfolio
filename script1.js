let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};


const filterInputs = document.querySelectorAll('input[name="filter"]');
    const projects = document.querySelectorAll('.pic');

    filterInputs.forEach(input => {
        input.addEventListener('change', () => {
            const selectedCategory = input.value;

            if (selectedCategory === 'all') {
                projects.forEach(project => {
                    project.style.display = 'block';
                });
            } else {
                projects.forEach(project => {
                    if (project.classList.contains(selectedCategory)) {
                        project.style.display = 'block';
                    } else {
                        project.style.display = 'none';
                    }
                });
            }
        });
    });


   
    





  