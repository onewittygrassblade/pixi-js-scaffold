export default function centerCanvas(canvas, backgroundColor = '#2C3539') {
  const marginX = (window.innerWidth - canvas.offsetWidth) / 2;
  const marginY = (window.innerHeight - canvas.offsetHeight) / 2;

  canvas.style.margin = `${marginY}px ${marginX}px`;

  document.body.style.backgroundColor = backgroundColor;
}
