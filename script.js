const form = document.querySelector('form');
const submitBtn = form.querySelector('button');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop page refresh
    // Change style to "Loading"
    submitBtn.innerText = "Thinking...";
    submitBtn.classList.remove('from-indigo-500', 'to-purple-500');
    submitBtn.classList.add('from-gray-500', 'to-gray-600', 'animate-pulse');
    
    // Simulate AI delay
    setTimeout(() => {
        submitBtn.classList.remove('animate-pulse');
        submitBtn.innerText = "Done!";
    }, 2000);
});