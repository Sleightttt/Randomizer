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
///////////Champion info data
///////Add icons in data somewhere
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

const Bangalore = new Legend(
  "Bangalore",
  "Offensive Legend",
  "Double Time",
  "Taking fire while sprinting makes you move faster for a brief time",
  "Smoke Launcher",
  "Fires a high-velocity smoke canister that explodes into a smoke wall on impact",
  "Rolling Thunder",
  "Call in an artillery strike that slowly creeps across the landscape"
);

const Bloodhound = new Legend(
  "Bloodhound",
  "Offensive Legend",
  "Tracker",
  "See tracks left behind by your foes",
  "Eye of the Allfather",
  "Briefly reveal hidden enemies, traps, and clues throughout structures in front of you",
  "Beast of the Hunt",
  "Enhances your senses, allowing you to move faster and highlighting your prey"
)

const Catalyst = new Legend (
  "Catalyst",
  "Defensive Legened",
  "Barricade",
  "Reinforce doors, strengthenin them and locking them to enemies. Spaces where doors have been desroyed can also be reinforced",
  "Piercing Spikes",
  "Throw out a patch of ferrofluid which turns into spikes when enemies are near. Catalyst remains immune to enemy spikes",
  "Dark Veil",
  "Raise a permeable wall of ferrofluid. Enemies who walk through it will be slowed and partially blinded for a brief time"

)

const Caustic = new Legend(
"Caustic",
"Nox Vision",
"Defensive Legend",
"Allows you to see enemies through your gas",
"Nox Gas Trap",
"Drop canisters that release deadly Nox gas when shot or triggered by enemies",
"Nos Gas Grenade",
"Blankets a large area in Nox gas"
);

const Crypto = new Legend(
  "Crypto",
  "Support Legend",
  "Nuerolink",
  "enemies detected by the Surveillance Drone within 30 meters of your position are marked for you and your teamates to see",
  "Surveillance Drone",
  "Deploy an aeriel drone that allows you to view the surrounding area from above. If the drone is destroyed, there is a forty-second cooldown before you can deploy another",
  "Drone EMP",
  "Your Surveillance Drone sets off an EMP blast that deals shield damage, slows enemies, and disables traps"
)

const Fuse = new Legend(
"Fuse",
"Offensive Legend",
"Grenadier",
"Stacks an extra grenade per inventory slot. Fire grenades farther, faster, and more accurately",
"Knuckle Cluster",
"Launch a cluster bomb that continously expels airburst explosives on impact",
"The Motherlode",
"Launch a bombardment that encircles a target area in a wall of flame"
)

const Gibralter = new Legend(
  "Gibralter",
  "Defensive Legend",
  "Gun Shield",
  "Aiming down sights deploys a gun shield that blocks incoming fire",
  "Dome of Protection",
  "Throw down a dome shield that blocks attacks",
  "Defensive Bombardment",
  "Call in a concentrated mortar strike on a marked position"
)

const Horizon = new Legend (
  "Horizon",
  "Offensive Legend",
  "Spacewalk",
  "Increase air control and reduce fall impacts with Horizon's custom spacesuit",
  "Gravity Lift",
  "Reverses the flow of gravity, lifting players upwards and boosting them outwards when they exit",
  "Black Hole",
  "Deploy N.E.W.T. to create a micro black hole that pulls players towards it, and hits them with a graviton blast at the end"
)

const Lifeline = new Legend (
  "Lifeline",
  "Support Legend",
  "Combat Medic",
  "Deploy D.O.C. to revive teammates, leaving you free to move and defend",
  "D.O.C. Heal Drone",
  "Call your Drone of Compassion to automatically heal nearby teammates over time",
  "Care Package",
  "Call in a drop pod full of high-quality defensive gear"
)

const Loba = new Legend(
  "Loba",
  "Support Legend",
  "Eye for Quality",
  "Nearby epic and legendary loot can be seen through walls. The range is the same as Black Market Boutique",
  "Burglar's Best Friend",
  "Teleport to hard-to-reach places or escape trouble quickly by throwing your Jump Drive bracelet",
  "Black Market Boutique",
  "Place a portable device that allows you to teleport neaby loot to your inventory. Each friendly or enemy Legend can take up to Two items"
)

const Mad_Maggie = new Legend(
  "Mad Maggie",
  "Offensive Legend",
  "Warlord's Ire",
  "Temporarily highlight enemies you've damaged, and move faster with a shotgun",
  "Riot Drill",
  "Fire a drill that burns enemies through obstacles",
  "Wrecking Ball",
  "Throw a ball that releases speed-boosting pads and detonates near enemies"
)

const Mirage = new Legend (
  "Mirage",
  "Offensive Legend",
  "Now You See Me...",
  "Automatically cloak when using Respawn Beacons and reviving teammates",
  "Psyche Out",
  "Send out a holographic decoy to confuse the enemy",
  "Life of the Party",
  "Deploy a team of Decoys to distract enemies"
)

const Octane = new Legend(
  "Octane",
  "Offensive Legend",
  "Swift Mend",
  "Automatically restores health over time",
  "Stim",
  "move 30% faster for six seconds. Costs health to use",
  "Launch Pad",
  "Deploy a jump pad that catapults teammates through the air"
);

const Pathfinder = new Legend(
  "Pathfinder",
  "Offensive Legened",
  "Insider Knowledge",
  "Scan a survey beacon to reveal the ring's next location and lower the cooldown of Zipline Gun",
  "Grappling Hook",
  "Grapple to get to out-of-reach places quickly",
  "Zipline Gun",
  "Create a zipline for everyone to use"
);

const Rampart = new Legend (
  "Rampart",
  "Defensive Legend",
  "Modded Loader",
  "Increased magazine capacity and faster relous when using LMGs and the Minigun",
  "Amped Cover",
  "Build a crouch-cover wall, which deplys a full0cover amped wall that blocks incoming shots and amps outgoing shots",
  "Emplaced Minigun 'Shiela'",
  "Place a mounted machine gun that anyone can use. High ammo capacity, long reload time"
);

const Revenant = new Legend (
  "Revenant",
  "Offensive Legend",
  "Stalker",
  "You crouch-walk faster and can climb higher than other Legends",
  "Silence",
  "Throw a device that deals damage and siables enemy abilities",
  "Death Totem",
  "Drop a totem that protects those who use it from death for a set amount of time. Instead of being killed or downed, users will return to the totem"
)

const Seer = new Legend (
  "Seer",
  "Offensive Legend",
  "Heart Seeker",
  "Hear and visualize the heartbeats of nearby enemies when aiming down sights",
  "Focus of Attnetion",
  "Seer summons his micro-drones to emit a delayed blast that goes through walls interrupting and revealing enemies",
  "Exhibit",
  "Create a sphere of micro-drones that reveal the location of enemies moving quickly or firing their weapons within"
)

const Valkyrie = new Legend(
  "Valkyrie",
  "Offensive Legend",
  "VTOL Jets",
  "Use jetpack to fly. Fuel is limited but refills over time",
  "Missile Swarm",
  "Fire a swarm of mini-rockets that damage and disorient the enemy",
  "Skyward Dive",
  "Launch into the air and sky dive. Allies can hook into take-off system to join you"
)

const Vantage = new Legend(
  "Vantage",
  "Spotter's Lens",
  "Aim down sights to scout with your eyepiece (unarmed or with mid-to long-range scopes) and use a bullet drop indicator to see where your shots will land",
  "Echo Relocation",
  "Position your winged compainion Echo and then launch towards him. Must have line of sight for Echo to launch",
  "Sniper's Mark",
  "use your custom sniper rifle to mark enemy targets and apply a damage bonus for you and your team"
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
class TestClass{
  constructor(testName, testDate){
    this.testName = testName;
    this.testDate = testDate;
  }
}
const test1 = new TestClass('bob', 'oct12');
const test2 = new TestClass('Jerry', 'dec12');


const testArray = [test1, test2]
let randomtest = Math.trunc(Math.random() * testArray.length)
console.log(testArray[randomtest].testName);

let testyArr = [[2, 3], [4, 5]];
console.log([testyArr])
