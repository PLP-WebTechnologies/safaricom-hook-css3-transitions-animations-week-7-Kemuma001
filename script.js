// Function with parameters and return values
function calculateArea() {
    var length = parseFloat(document.getElementById('length').value);
    var width = parseFloat(document.getElementById('width').value);
    var area = length * width;
    document.getElementById('area-result').innerText = 'Area: ' + area;
}

// Function demonstrating scope (local vs. global)
var globalVar = 'I am global';

function scopeDemo() {
    var localVar = 'I am local';
    console.log(globalVar); // Accessible
    console.log(localVar); // Accessible
}

scopeDemo();
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined

// Function to toggle a CSS class that applies an animation
function toggleModal() {
    var modal = document.getElementById('modal');
    modal.classList.toggle('hidden');
}
