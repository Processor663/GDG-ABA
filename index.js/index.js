let firstAni = document.getElementById("firstAni");
let secondtAni = document.getElementById("secondAni");
let thirdAni = document.getElementById("thirdAni");
let container_two = document.getElementById("container_two");
let generalObserver = document.querySelectorAll("[generalObserver]");


// <========================================= END OF VARIABLE ===================================================>












// <========================================= BEGINNING FUNCTIONS ===================================================>
function container_one_Ain() {
 setTimeout(
     ()=>{
         firstAni.classList="firstAni";
         secondAni.classList="secondAni";
         thirdAni.classList="thirdAni";
         firstAni.style.visibility="visible";
         secondAni.style.visibility="visible";
         thirdAni.style.visibility="visible";


     },1000

 )

}
container_one_Ain();

// let options = {
//     root: null,
//     threshold:0.25,
//     rootMargin: "-150px "

    // rootMargin: "0px 0px -1000px 0px"
// };


// let observer_one = new IntersectionObserver((entries,observer)=>{
//     entries.forEach((entry)=>{
//         if(!entry.isIntersecting){
            // return;
            // entry.target.classList.remove("observer_two_show");
        
        
//         }
//             console.log(entry.target);
//             entry.target.classList.toggle("observer_two_show");
//             observer.unobserve(entry.target);

        
      
//     });

    
// },options);


let opts = {
    root: null,
    // threshold:0.15,
    threshold:0.25,

    rootMargin: "0px 0px -150px 0px"

    // rootMargin: "0px 0px -150px  0px" working fine
};


if("IntersectionObserver" in window){
    let observer_two = new IntersectionObserver((entries,observer)=>{
        entries.forEach((entry)=>{
            if(!entry.isIntersecting){
                entry.target.classList.remove("observer_two_show");
            
            
            } else {
                console.log(entry.target);
                entry.target.classList.toggle("observer_two_show");
                // observer.unobserve(entry.target);
    
            }
          
        });
    
    },opts);
    
    
    generalObserver.forEach((obs)=>{
    observer_two.observe(obs);
    
    })
}else {
alert("You seem to be using unsupported browser, please upgrade or use a supported browser to increase your experience");


}







// <========================================= END FUNCTIONS ===========================================================>






// <========================================= BEGINNING OF EVENTLISTENERS ===================================================>


// <========================================= END OF EVENTLISTENERS ===================================================>
