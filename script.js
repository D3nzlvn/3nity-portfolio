gsap.fromTo(
  '.loading-page',
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 1.5,
    delay: 3.5,
  }
);
  
gsap.fromTo(
    '.logo-name',
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      delay: 0.5,
    }
  );

// Select the <h1> element
let counter = document.querySelector('h1');

// Initialize a counter variable
let count = 1;

// Set up an interval to run a function every 1000 milliseconds (1 second)
setInterval(()=>{

    // Update the text content of the <h1> element with the current count
    counter.innerText = count;

    // Increment the count
    count++
    // Check if the count is greater than 5 If true, redirect to 'Welcome.html'
    if(count > 5) location.replace('Welcome.html');
},1000);

