namespace app.Classes {
  export class Movie implements app.Interfaces.IMovie {

    constructor(
      public title: string,
      public director: string,
      public stars: string,
      public rating: string
    ) {}
  }
}
