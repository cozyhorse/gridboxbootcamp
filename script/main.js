
//Target multiple buttons
//Select all elements --- (all .diceDot)
const dots = document.querySelectorAll(".diceDot");
//Put in a forEach to loop through the elements
dots.forEach(dot => {
    // Make the eventlistner on the looped element -- (dot)
    //and target with currentTarget
    dot.addEventListener("click", (event) => {
        event.currentTarget.classList.toggle("active")
    })

});

