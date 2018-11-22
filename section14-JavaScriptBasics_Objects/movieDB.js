console.log("CONNECTED");

var movies = [
  {
    title: "In Bruges",
    seen: true,
    rating: 5
  },
  {
    title: "Frozen",
    seen: false,
    rating: 4.5
  },
  {
    title: "Mad Max Fury Road",
    seen: true,
    rating: 5
  },
  {
    title: "Les Miserables",
    seen: false,
    rating: 3.5
  }
];

for (var i = 0; i < movies.length; i++) {
  if (movies[i].seen == true) {
    console.log("You have seen " + "\"" + movies[i].title + "\"" + "- " + movies[i].rating + " stars");
  } else {
    console.log("You have not seen " + "\"" + movies[i].title + "\"" + "- " + movies[i].rating + " stars");
  }
}
