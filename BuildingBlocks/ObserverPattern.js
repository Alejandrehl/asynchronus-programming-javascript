document.addEventListener("mousemove", function next(e) {
  console.log(e);
});
// > { clientX: 425, clientY: 543 }
// > { clientX: 450, clientY: 558 }
// > { clientX: 455, clientY: 562 }
// > { clientX: 460, clientY: 743 }
// > { clientX: 476, clientY: 760 }
// > { clientX: 476, clientY: 760 }
// > { clientX: 476, clientY: 760 }

/*
    Observer Pattern

    They still find a way that you cold add a function to some data
    producer. And instead of the consumer pulling the data out one 
    of the time, instead the producer pushes data action.

    In the observer pattern, the producer is in control. The producer
    decides when you get the next value, cuz it calls your callback and
    pushes it at you.
*/
