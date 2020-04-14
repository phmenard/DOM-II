// Your code goes here
let myH2s = document.querySelectorAll('h2');
myH2s.forEach((item) => {
    // Listen for mouseover
    item.addEventListener('mouseover', (event) => {
        event.target.style.color = 'blue'; // change target to blue
    })

    // Listen for mouseleave
    item.addEventListener('mouseleave', (event) => {
        event.target.style.color = 'black'; // change target to black
    })
})


// Get all nav <a>'s
let myNavs = document.querySelectorAll('nav a');
myNavs.forEach((item) => {
    // Change the size on 'mouseover'
    item.addEventListener('mouseover', (event) => {
        event.target.style.fontSize = '2rem';

    })

    // Change back to default on 'mouseleave'
    item.addEventListener('mouseleave', (event) => {
        event.target.style.fontSize = '1.5rem';

    })

    // Prevent default
    item.addEventListener('click', (event) => {
        event.preventDefault();
    })

})

// Use keydown
let myBody = document.querySelector('body');
let myFooter = document.querySelector('footer');
myBody.addEventListener('keydown', (event) => {
    myFooter.style.background = 'red';
    myBody.style.background = "white";
})

// reset keydown
myFooter.addEventListener('click', (event => {
    myFooter.style.background = '#FFEBCD';
}))


// Drag and drop

// create dropzone
let myDropzone = document.createElement('div');
myDropzone.classList.add('content-destination');
myDropzone.style.border = '1px solid red';
myDropzone.style.height = '30rem';
myBody.appendChild(myDropzone);

var dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function (event) {

}, false);

document.addEventListener("dragstart", function (event) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function (event) {
    // reset the transparency
    event.target.style.opacity = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function (event) {
    // prevent default to allow drop
    event.preventDefault();
}, false);

document.addEventListener("dragenter", function (event) {
    // highlight potential drop target when the draggable element enters it
    if (event.target.className == "content-destination" || event.target.className == "destination") {

        event.target.style.background = "purple";

    }

}, false);

document.addEventListener("dragleave", function (event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className == "content-destination") {
        event.target.style.background = "";
    }

}, false);

document.addEventListener("drop", function (event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if (event.target.className == "content-destination") {
        event.target.style.background = "";
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
    }
}, false);

// End drag and drop

// Wheel event
function zoom(event) {
    event.preventDefault();

    scale += event.deltaY * -0.01;

    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);

    // Apply scale transform
    el.style.transform = `scale(${scale})`;
}

let scale = 1;
const myImage = document.querySelectorAll('img');
myImage.forEach((item) => {
    // Change the size on 'mouseover'
    item.addEventListener('wheel', (event) => {
        event.preventDefault();

        scale += event.deltaY * -0.01;

        // Restrict scale
        scale = Math.min(Math.max(.125, scale), 4);

        // Apply scale transform
        event.target.style.transform = `scale(${scale})`;

    })

    // dblClick event
    item.addEventListener('dblclick', (event) => {
        event.target.style.display = 'none';
    })
    // end dblClick


})

// End wheel event

// Load event
window.addEventListener('load', (event) => {
    alert('Page loaded successfuly');
});

// End load event  

// Focus event
const myLogo = document.querySelector('h1');
myLogo.addEventListener('mouseup', (event) => {
    event.target.style.color = "blue";

})

// End focus event

// Resize event

window.addEventListener('resize', (event) => {
    alert(`Window height: ${window.innerHeight}`);
});
// end resize event

//Scroll event

window.addEventListener('scroll', (event) => {
    myBody.style.background = "grey";
});


// Select event
let myPargs = document.querySelectorAll('p');
myPargs.forEach((item) => {
    item.addEventListener('mouseup', (event) => {
        let selection = event.target.textContent.substring(event.target.selectionStart, event.target.selectionEnd);
        alert(`You have selected ${selection}`);
        event.stopPropagation();
    })
})

// end select

let myButtons = document.querySelectorAll('.btn');
myButtons.forEach((item)=>{
    item.addEventListener('click', (event)=>{
        alert('You clicked a button');
        event.stopPropagation();
    })
})

myBody.addEventListener('click', (event)=>{
    event.target.style.background = "blue";
});







