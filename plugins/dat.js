export default() => {
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.6/dat.gui.min.js';
  document.head.appendChild(script);
}