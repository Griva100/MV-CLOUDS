function dragStart(ev) {
    // ev.dataTransfer.effectAllowed='move';
    ev.dataTransfer.setData("Text", ev.target.id);
    // ev.dataTransfer.setDragImage(ev.target,0,0);
    // return true;        
}

// function dragEnter(e) {
//     e.target.classList.add()
//     e.preventDefault();
//     return true; 
// }

function dragOver(ev) {
    ev.preventDefault();
    // ev.dataTransfer.dropEffect = "move"; 
}
   
var reducer=1;
// var n=0
// var flag=false
// var align = 0;

function dragDrop(ev) {
    ev.preventDefault();
    var currentheight=200;
    var currentwidth=200;
    const draggedCircleId = ev.dataTransfer.getData('text');
    const draggedCircle = document.getElementById(draggedCircleId);
    // let targetCircle = ev.target;
    // const targetCircleId = targetCircle.id;
    // console.log(`Target: ${targetCircleId}`);
    // console.log(`Source: ${draggedCircleId}`);
    ev.target.appendChild(draggedCircle);
    if((currentheight-(20*reducer))!=20){
        draggedCircle.style.height =(currentheight-(20*reducer))+"px";
        console.log(currentheight - 20 * reducer);
        draggedCircle.style.width = (currentwidth - (20*reducer))+ "px"; 
    }
    
    
        // if (reducer==1){
        //     n++;
        //     if ((n%2)!=0){
        //         draggedCircle.style.transform="rotate(-45deg)";
        //         draggedCircle.style.marginLeft="-3em"
        //         draggedCircle.style.marginTop="-3em"
        //         }else{
        //             draggedCircle.style.transform="none";
        //             draggedCirclemarginLeft=parseInt(window.getComputedStyle(dragged
        //                 ,null).getPropertyValue("margin-left"))
        //                 draggedCirclemarginTop=parseInt(window.getComputedStyle(dragged
        //                     ,"").getPropertyValue("margin-top"))
        //                     draggedCircle.style.marginLeft=draggedCirclemarginLeft+"px
        //                     ";
        //                     draggedCircle.style.marginTop=draggedCirclemarginTop+"px
        //                     ;"
        //                     }
        //                     reducer=-reducer

    var newDiv = document.createElement("div");
    newDiv.className = "innercircles";
    newDiv.id = "inner";
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    newDiv.setAttribute("style",`width:${parseFloat(draggedCircle.style.width) * 0.8}px`);
    newDiv.setAttribute("style",`height:${parseFloat(draggedCircle.style.height) * 0.8}px`);    
    // newDiv.setAttribute("style",`left:${ev.clientX - ev.target.getBoundingClientRect().left - newCircle.clientWidth / 2}px`);
    // newDiv.setAttribute("style",`top:${ev.clientY - ev.target.getBoundingClientRect().top - newCircle.clientHeight / 2}px`);
    newDiv.setAttribute("style", `background-color:${randomColor};`);
    newDiv.setAttribute("draggable", "true");
    newDiv.setAttribute("ondragstart", "onDragStart(event)");
    ev.target.appendChild(newDiv);
    draggedCircle.remove();
    // ev.stopPropagation();
    // return false;
 }