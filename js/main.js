if (screen.width <= 699) {
  document.location = "https://github.com/evevision/evevision";
}

interact('.eve-window').draggable({
  listeners: {
    move (event) {
      if(!event.target.dragX || !event.target.dragY) {
        event.target.dragX = 0;
        event.target.dragY = 0;
      }
      event.target.dragX += event.dx
      event.target.dragY += event.dy

      event.target.style.transform =
        `translate(${event.target.dragX}px, ${event.target.dragY}px)`
    },
  }
})
