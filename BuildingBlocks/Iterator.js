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
    Esto es solo un ejemplo de un patrón de diseño que se implementaba
    antiguamente. Es como se vería en la actualidad utilizando JS.

    Iterator Object es una interface simple. Nos indica si tenemos más
    elementos en una colección.

    Actualmente; Map, Filter y ConcatAll Pueden ser implementados
    usando un iterador.
*/
