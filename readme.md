# Asynchronus Programming with javaScript

This project was created with the purpose of practicing and learning
Asynchronous programming with JavaScript.

## Map, Filter and ConcatAll

Map
Esta función crea una copia de la colección que recibe,
no cambia modifica la colección original.

> [1, 2, 3].map( x => x + 1)

    - [2, 3, 4]

Filter
Esta es una función de testing, es decir, toma una colección
y retorna una nueva solo con los elementos que pasaron el test.

> [1, 2, 3].filter( x => x > 1)

    - [2, 3]

ConcatAll
Esta función transforma colecciones multidimensionales en
colecciones de una sola dimensión.

> [ [1], [2, 3], [], [4] ].concatAll()

    - [ 1, 2, 3, 4]

## So Many Push APIs

1. DOM Events
2. Websockets
3. Server-sent Events
4. Node Streams
5. Service Workers
6. jQuery Events
7. XMLHttpRequest
8. setInterval

## Introducing Observable

- Observable === Collection + Time
  > A collection that arrives over time.
