namespace app {
  let movies: Array<app.Interfaces.IMovie> = [
    new app.Classes.Movie("Waking Life", "Richard Linklater", "7.8/10", "R"),
    new app.Classes.Movie("The Matrix", "The Wachoski's", "8.7/10", "R"),
    new app.Classes.Movie("Midnight in Paris", "Woody Allen", "7.7/10", "PG-13"),
    new app.Classes.Movie("The LEGO Movie", "Chris Miller, Phil Lord", "7.8/10", "PG"),
    new app.Classes.Movie("The Pursuit of Happyness", "Gabriele Muccino", "7.9/10", "PG-13")
  ];

  init();

  export function deleteMovie(index: number) {
    movies.splice(index, 1);
    init();
  }

  function drawTableRow(movie: app.Interfaces.IMovie) {
    return `<tr>
      <td>${movie.title}</td>
      <td>${movie.director}</td>
      <td>${movie.stars}</td>
      <td>${movie.rating}</td>
      <td style="text-align: center;">
        <button class="btn btn-danger" onclick="app.deleteMovie(${movies.indexOf(movie)})">Delete</button>
      </td>
    </tr>`;
  }

  function init() {
    //string to upload shit to
    let moviesString = '';
    movies.forEach((m, index, array) => {
      moviesString += drawTableRow(m);
    });
    $('#moviesTable').html(moviesString);
  }
}
