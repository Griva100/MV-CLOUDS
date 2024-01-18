function dragOver(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move"; 
}
   
var circle_reduce=1;

function dragDrop(ev) {
    ev.preventDefault();
        var draggedCircle = document.getElementsByClassName("innercircles")[0];

        var height=200;
        var width=200;

        ev.target.appendChild(draggedCircle);
        if((height-(20*circle_reduce))==20){
            draggedCircle.style.height = 20+ "px";
            draggedCircle.style.width =  20+ "px";
        }
        else{
            draggedCircle.style.height =(height-(20*circle_reduce))+"px";
            draggedCircle.style.width = (width - (20*circle_reduce))+ "px";
            draggedCircle.style.marginRight = "10px";
            draggedCircle.style.marginTop = "10px"; 
            circle_reduce+=1;
        }

        var dropCircle = document.getElementsByClassName("container")[0];
       console.log(dropCircle);
        var newDiv = document.createElement("div");
        newDiv.className = "innercircles";
        newDiv.id = "inner";
        var randomColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
        newDiv.style.width = `${width}px`;
        newDiv.style.height = `${height}px`;
        newDiv.style.background = `${randomColor}`;
        newDiv.draggable = true;
        dropCircle.appendChild(newDiv);
 }

  