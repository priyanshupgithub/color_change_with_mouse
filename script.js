var box = document.querySelector(".box");

box.addEventListener("mousemove",function(details){
    var boxposition = box.getBoundingClientRect();
    
    // get the leftmost and right most position value of the box
    var leftposition = boxposition.left;
    var rightposition = boxposition.right;
    // console.log(leftposition);
    // console.log(rightposition);

    // get the position value of the mouse inside the box
    // console.log(details);  
    var mouse_pos = details.clientX - box.getBoundingClientRect().left;
    // console.log(mouse_pos);

    // checking mouse is on right or left side of the box
    if(mouse_pos < boxposition.width/2){
        // console.log("left");
        var color1 = gsap.utils.mapRange(0,boxposition.width/2 , 255,0,mouse_pos);
        gsap.to(box,{
            backgroundColor : `rgb(111,322,${color1})`,
            ease : Power4,
        });
    }
    else{
        // console.log("right");
        var color2 = gsap.utils.mapRange(boxposition.width/2,rightposition ,0,255,mouse_pos);
        gsap.to(box,{
            backgroundColor : `rgb(302,211,${color2})`,
            ease : Power4,
        });
    }

    // now we map the color according to the position of the mouse with the help of gsap
    // as 255 is the max intensity of any color and if we are at just the entry level of the box then we get the
    // maximum intensity of the color ...therefore we map 0 position with 255 intensity and at middle position with 
    // 0 intensity and this will handled by gsap

}) 

box.addEventListener("mouseleave",function(){
    gsap.to(box,{
        backgroundColor : "white"
    })
})