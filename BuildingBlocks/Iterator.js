const iterator = [1, 2, 3].iterator();
console.log(iterator.next());
// > { value: 1, done: false }
console.log(iterator.next());
// > { value: 2, done: false }
console.log(iterator.next());
// > { value: 3, done: false }
console.log(iterator.next());
// > { done: true }

/* 
    Iterator Pattern - Have a producer and consumer
    Consumer request information, one at a time from the producer until
    one of two things happens: The producer says, I have no more 
    information for you, or the producer says, an error ocurred.

    This is just an example in JavaScript. Currently, Map, Filter and 
    ConcatAll can be implemented using an Iterator.
*/
