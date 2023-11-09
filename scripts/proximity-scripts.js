

/* ===============================Proximity script====================================== */


document.addEventListener("DOMContentLoaded",()=>{



    const proximityElements = document.querySelectorAll("#proximity-element");
    const movementStrength = 2; // Adjust this value to control the movement strength
    
    function handleMouseMove(e) {
        if (window.innerWidth >= 768) {
            proximityElements.forEach((proximityElement) => {
                const { clientX, clientY } = e;
                const { left, top, width, height } = proximityElement.getBoundingClientRect();
                const centerX = left + width / 2;
                const centerY = top + height / 2;
    
                const deltaX = clientX - centerX;
                const deltaY = clientY - centerY;
    
                const moveX = (deltaX / width) * movementStrength;
                const moveY = (deltaY / height) * movementStrength;
    
                proximityElement.style.transition = "transform 0s"; // Disable transition
                proximityElement.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        }
    }
    
    function handleMouseLeave() {
        proximityElements.forEach((proximityElement) => {
            proximityElement.style.transition = "transform 0.3s"; // Re-enable transition
            proximityElement.style.transform = "translate(0, 0)";
        });
    }
    
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    


    /* ===================================================================== */


    /* ===========================Rotating text============================= */


    const text = document.querySelector('.pro-txt p');
    text.innerHTML = text.innerText.split("").map(
    (char,i) =>
    `<span style="transform:rotate(${i*8}deg)">${char}</span>`
    ).join("")



    /* ===================================================================== */





})
