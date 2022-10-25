//Array of legends. 1. Make into objects 2. Put all objects in new array
const dateTimeLabel = document.querySelector(".dateTime");
const youHaveRolled = document.querySelector(".numberOfRolls");
const sinceLastRollLabel = document.querySelector(".sinceLastRoll");
// create objects for each legend with legend name, legend class, passivename, passiveinfo, tacticalname, tacticalinfo, ultimatename, ultimate
class Legend {
  constructor(
    legendName,
    legendClass,
    passiveName,
    passiveInfo,
    tacticalName,
    tacticalInfo,
    ultimateName,
    ultimateInfo
  ) {
    this.legendName = legendName;
    this.legendClass = legendClass;
    this.passiveName = passiveName;
    this.passiveInfo = passiveInfo;
    this.tacticalName = tacticalName;
    this.tacticalInfo = tacticalInfo;
    this.ultimateName = ultimateName;
    this.ultimateInfo = ultimateInfo;
  }
}
const Ash = new Legend(
  "Ash",
  "Offensive Legend",
  "Marked for Death",
  "Allows Ash to locate the squad that killed a player by interacting with their death box",
  "Arc Snare",
  "Throws a device that deals damage and temporarily snares enemies",
  "Phase Breach",
  "Opens a linear one-way portal between two locations"
);

const displayLegendInfo = function (legend) {
  document.querySelector(
    ".Imagetext"
  ).textContent = `'You rolled ${legend}! ${this.legendName} is a ${this.legendClass} legend.
     ${this.legendName}'s passive ability is ${this.passiveName}. ${this.passiveInfo}
     ${this.legendName}'s tactical ability is ${this.tacticalName}. ${this.tacticalInfo}
     ${this.legendName}'s ultimate ability is ${this.ultimateName}. ${this.ultimateInfo}
      `;

};

const legends = [
  "Ash",
  "Bangalore",
  "Bloodhound",
  "Caustic",
  "Crypto",
  "Fuse",
  "Gibralter",
  "Horizon",
  "Lifeline",
  "Loba",
  "Mirage",
  "Octane",
  "Pathfinder",
  "Rampart",
  "Revenant",
  "Seer",
  "Valkyrie",
  "Wattson",
  "Mad Maggie",
  "Newcastle",
  "Vantage",
  "Catalyst"
];

//Array of reroll button strings
const again = [
  "Again",
  "Again?",
  "AGAIN",
  "mmm",
  "A-gain",
  "nahhh",
  "Anotha one",
  "mmm?",
  "meh",
  "ehhhh",
  "not this one",
  "reroll",
  "redo",
];
//Date display 1. Change to "you last rolled at xxx time"
const now = new Date();
const locale = navigator.language;

//Formatting for time
const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long",
  year: "numeric",
};

let timer;
//Time started at
dateTimeLabel.textContent = `Started randomizing on ${new Intl.DateTimeFormat(
  locale,
  options
).format(now)}`;

//Random roll on button click + champion message update

const startTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    //print time to ui in each call
    sinceLastRollLabel.textContent = `${min}:${sec}s since last roll`;

    if (time === 600) {
      sinceLastRollLabel.textContent = `A while since last roll`;
      clearInterval(timer);
    }
    time++;
  };
  let time = 0;
  //call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};
let rolls = []; //array that legend rolls will be pushed to

const roll = document
  .querySelector(".randomizer")
  .addEventListener("click", function (e) {
    e.preventDefault();
    let randomRerollString = again[Math.floor(Math.random() * again.length)];
    let legendNumber = Math.trunc(Math.random() * legends.length);
    let legend = legends[legendNumber];

    document.querySelector(
      ".message"
    ).textContent = `Your legend is ${legend}!`;
    document.querySelector(".randomizer").textContent = `${randomRerollString}`;

    if (timer) clearInterval(timer);
    timer = startTimer();

    //pushing the rolled lengend into empty rolls array
    rolls.push(legend);

    let counts = {};
    //storage for number of rolls on legend object
    rolls.forEach(function (x) {
      counts[x] = (counts[x] || 0) + 1;
    });
    youHaveRolled.textContent = `You have rolled ${legend} ${counts[legend]} times`;
  });

//Make a dropdown of legends to omit from randomizer
//Make a legend info box where an image of the rolled champion is diplayed, then fades away to an information box about their abilites
//Example: ${legend} is a ${legend.offenseDefense} who excels at xxxx. ${legend.passive} is xxxxx. ${legend.tactical} is xxxxxx. ${legend.Ultimate} is xxxxx
