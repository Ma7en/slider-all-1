

/*  
===============================================
===============================================
*/

/* start slider 1 */

let prodCont = [...document.querySelectorAll(".product-container")];
let nexBtn = [...document.querySelectorAll(".next-btn")];
let preBtn = [...document.querySelectorAll(".pre-btn")];

prodCont.forEach((item, i) => {
    let containerDimesions = item.getBoundingClientRect();
    let containerWidth = containerDimesions.width;

    nexBtn[i].addEventListener("click", () => {
        item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener("click", () => {
        item.scrollLeft -= containerWidth;
    });
});



/* end slider 1 */

/*  
===============================================
===============================================
*/

/* start slider 2 */

let sideLeft = document.querySelector(".content .left");
let sideRight = document.querySelector(".content .right");
let btmSidSpan = document.querySelectorAll(".btm-sliders span");
let btmSidSpanArray = Array.from(btmSidSpan);
let indexValue = 1;
showImg(indexValue);



sideLeft.addEventListener("click", () => {
    side_slide(-1);
});

sideRight.addEventListener("click", () => {
    side_slide(1);
});

function side_slide(e) {
    showImg(indexValue += e);
}


function btm_slide(e) {
    showImg(indexValue = e);
}

function showImg(e) {
    let i;
    const img = document.querySelectorAll(".slider-2 .images img");
    const sliders = document.querySelectorAll(".btm-sliders span")

    if (e > img.length) {
        indexValue = 1;
    } 
    
    if (e < 1) {
        indexValue = img.length;
    }

    for(i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }

    for(i = 0; i < sliders.length; i++) {
        sliders[i].style.background = "rgba(255, 255, 255, 0.5)";
    }

    img[indexValue - 1].style.display = "block";
    sliders[indexValue - 1].style.background = "white";
}



/* end slider 2 */

/*  
===============================================
===============================================
*/

/* start slider 3 */



/* end slider 3 */

/*  
===============================================
===============================================
*/

/* start slider 4 */

/*  
===============================================
===============================================
*/

/* start slider 5 */

/*  
===============================================
===============================================
*/

/* start slider 6 */

/*  
===============================================
===============================================
*/

/* start slider 7 */

/*  
===============================================
===============================================
*/

/* start slider 8 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/
