const getElementDrags = elmt =>
  elmt.mouseDowns.map(mouseDown =>
    document.mouseMoves.takeUntil(document.mouseUps).concatAll()
  );

getElementDrags(image).forEach(pos => (image.position = pos));
