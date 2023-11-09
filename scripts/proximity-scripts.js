

/* ===============================Proximity script====================================== */


document.addEventListener("DOMContentLoaded",()=>{



    const proximityElements = document.querySelectorAll("#proximity-element");
    const movementStrength = .5; 

    document.addEventListener("mousemove", (e) => {
        proximityElements.forEach((proximityElement) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = proximityElement.getBoundingClientRect();
            const centerX = left + width / 2;
            const centerY = top + height / 2;

            const deltaX = clientX - centerX;
            const deltaY = clientY - centerY;

            const moveX = (deltaX / width) * movementStrength;
            const moveY = (deltaY / height) * movementStrength;

            proximityElement.style.transition = "transform 0s"; 
            proximityElement.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });

    document.addEventListener("mouseleave", () => {
        proximityElements.forEach((proximityElement) => {
            proximityElement.style.transition = "transform 0.3s"; 
            proximityElement.style.transform = "translate(0, 0)";
        });
    });



    /* ===================================================================== */


    /* ===========================Rotating text============================= */


    const text = document.querySelector('.pro-txt p');
    text.innerHTML = text.innerText.split("").map(
    (char,i) =>
    `<span style="transform:rotate(${i*8}deg)">${char}</span>`
    ).join("")



    /* ===================================================================== */





})
