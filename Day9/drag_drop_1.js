let zIndexCounter = 1;

    document.addEventListener('DOMContentLoaded', function () {
      const redCircle = document.getElementById('circle1');
      const blueCircle = document.getElementById('circle2');

      redCircle.addEventListener('dragstart', dragStart);
      blueCircle.addEventListener('dragover', dragOver);
      blueCircle.addEventListener('drop', drop);
    });

    function dragStart(event) {
      event.dataTransfer.setData('text/plain', event.target.id);
    }

    function dragOver(event) {
      event.preventDefault();
    }

    function drop(event) {
      event.preventDefault();

      const draggedCircleId = event.dataTransfer.getData('text/plain');
      const draggedCircle = document.getElementById(draggedCircleId);

      const newCircle = document.createElement('div');
      newCircle.className = 'circle';
      newCircle.style.width = `${parseFloat(draggedCircle.style.width) * 0.8}px`;
      newCircle.style.height = `${parseFloat(draggedCircle.style.height) * 0.8}px`;
      newCircle.style.backgroundColor = getRandomColor();
      newCircle.style.left = `${event.clientX - event.target.getBoundingClientRect().left - newCircle.clientWidth / 2}px`;
      newCircle.style.top = `${event.clientY - event.target.getBoundingClientRect().top - newCircle.clientHeight / 2}px`;
      newCircle.draggable = true;
      newCircle.addEventListener('dragstart', dragStart);

      event.target.appendChild(newCircle);
      draggedCircle.remove();
    }

    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }