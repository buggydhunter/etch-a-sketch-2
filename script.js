let slider = 5 //let that value be between 3 and 10

document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.margin = "0"; // Remove default margins

// Create the parent container
const container = document.createElement("div");
container.style.display = "flex";
container.style.flexWrap = "wrap"; // Enable wrapping
container.style.width = "400px";  // Fixed parent width
container.style.height = "400px"; // Fixed parent height
container.style.border = "2px solid black";
document.body.appendChild(container);

// Define the number of rows and columns
const rows = slider * slider;
const cols = slider * slider;

// Calculate child size
const childWidth = container.clientWidth / cols; // Width of each child
const childHeight = container.clientHeight / rows; // Height of each child

// Create the children
for (let i = 0; i < rows * cols; i++) {
    const child = document.createElement("div");
    // child.textContent = i + 1;
    child.style.width = `${childWidth}px`; // Dynamically set width
    child.style.height = `${childHeight}px`; // Dynamically set height
    child.style.display = "flex";
    child.style.justifyContent = "center";
    child.style.alignItems = "center";
    child.style.border = "1px solid gray";
    child.style.boxSizing = "border-box"; // Ensure borders are included in the size
    child.style.backgroundColor = i % 2 === 0 ? "#f0f0f0" : "#d0d0d0"; // Alternate colors
    container.appendChild(child);
}

// for the mvp I only need a slider that changes the slider value between 3 and 10 
// TODO: Hover effect with black color when hovered over - with the use of boolean 
// TODO: Rainbow mode with random color generation
// Add a title to the page, maybe also a better background color but most important is the mvp site for the start! 

