const getTopRatedFilms = user =>
  user.videoList
    .map(videoList => videoList.videos.filter(video => video.rating === 5.0))
    .concactAll();

getTopRatedFilms(user).foreach(film => console.log(film));

/* 
    Map
    Esta función crea una copia de la colección que recibe,
    no cambia modifica la colección original.
    > [1, 2, 3].map( x => x + 1)
    > [2, 3, 4]

    Filter
    Esta es una función de testing, es decir, toma una colección
    y retorna una nueva solo con los elementos que pasaron el test.
    >[1, 2, 3].filter( x => x > 1)
    >[2, 3] 

    ConcatAll
    Esta función transforma colecciones multidimensionales en 
    colecciones de una sola dimensión.
    > [ [1], [2, 3], [], [4] ].concatAll()
    > [ 1, 2, 3, 4]
*/
