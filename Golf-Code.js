var names = [
  “Hole-in-one!“,
  “Eagle”,
  “Birdie”,
  “Par”,
  “Bogey”,
  “Double Bogey”,
  “Go Home!”
];

function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else {
    return names[6];
  }
}

// I tested every single value to make sure they pass the test
golfScore(5, 4);
golfScore(4, 1);
golfScore(5, 2);
golfScore(4, 3);
golfScore(4, 4);
golfScore(1, 1);
golfScore(5, 5);
golfScore(4, 5);
golfScore(4, 6);
golfScore(4, 7);
golfScore(5, 9);