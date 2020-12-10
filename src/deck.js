const shuffle = require('shuffle-array'),

Knight = 'Knight';
VictoryPoint = 'Victory Point';
YearOfPlenty = 'Year of Plenty';
Monopoly = 'Monopoly';
RoadBuilding = 'Road Building';

function make() {
  return shuffle([
    ...Array(14).fill(Knight),
    ...Array(5).fill(VictoryPoint),
    ...Array(2).fill(YearOfPlenty),
    ...Array(2).fill(Monopoly),
    ...Array(2).fill(RoadBuilding),
  ]);
}

module.exports = {
  Knight,
  VictoryPoint,
  YearOfPlenty,
  Monopoly,
  RoadBuilding,
  make
};
