export const SVG2PNG = (canvas, callback) => {
  var ctx = canvas.getContext('2d'); // For Canvas returns 2D graphic.
  var svgString = svg.outerHTML;
  var img = new Image();
  img.addEventListener('load', () => {
    ctx.drawImage(img, 0, 0, 400, 400);
    callback(canvas.toDataURL('image/png')); // toDataURL return DataURI as Base64 format.
  });
  img.src = 'data:image/svg+xml,' + svgString;
};
