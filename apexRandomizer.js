const dateTimeLabel = document.querySelector(".dateTime");
const youHaveRolled = document.querySelector(".numberOfRolls");
const sinceLastRollLabel = document.querySelector(".sinceLastRoll");
const imgClass = document.querySelector(".legendImg");

class Legend {
  constructor(
    legendName,
    legendClass,
    passiveName,
    passiveInfo,
    tacticalName,
    tacticalInfo,
    ultimateName,
    ultimateInfo,
    imageSrc,
    pasImg,
    tacImg,
    ultImg
  ) {
    this.legendName = legendName;
    this.legendClass = legendClass;
    this.passiveName = passiveName;
    this.passiveInfo = passiveInfo;
    this.tacticalName = tacticalName;
    this.tacticalInfo = tacticalInfo;
    this.ultimateName = ultimateName;
    this.ultimateInfo = ultimateInfo;
    this.imageSrc = imageSrc;
    this.pasImg = pasImg;
    this.tacImg = tacImg;
    this.ultImg = ultImg;
  }
}
//Move Legends classes to seperate file
const Ash = new Legend(
  "Ash",
  "Offensive Legend",
  "Marked for Death",
  "Allows Ash to locate the squad that killed a player by interacting with their death box",
  "Arc Snare",
  "Throws a device that deals damage and temporarily snares enemies",
  "Phase Breach",
  "Opens a linear one-way portal between two locations",
  "Images/Ash/apex-section-bg-legends-ash-xl.jpg.adapt.320w.jpg",
  "Images/Ash/Ash-pas.png",
  "Images/Ash/Ash-tac.png",
  "Images/Ash/Ash-ult.png"
);

const Bangalore = new Legend(
  "Bangalore",
  "Offensive Legend",
  "Double Time",
  "Taking fire while sprinting makes you move faster for a brief time",
  "Smoke Launcher",
  "Fires a high-velocity smoke canister that explodes into a smoke wall on impact",
  "Rolling Thunder",
  "Call in an artillery strike that slowly creeps across the landscape",
  "Images/Bangalore/Bangalore-apex-randomizer.webp",
  "Images/Bangalore/Bangalore-pas.png",
  "Images/Bangalore/Bangalore-tac.png",
  "Images/Bangalore/Bangalore-ult.png"
);

const Bloodhound = new Legend(
  "Bloodhound",
  "Offensive Legend",
  "Tracker",
  "See tracks left behind by your foes",
  "Eye of the Allfather",
  "Briefly reveal hidden enemies, traps, and clues throughout structures in front of you",
  "Beast of the Hunt",
  "Enhances your senses, allowing you to move faster and highlighting your prey",
  "Images/Bloodhound/Bloodhound-apex-randomizer.webp",
  "Images/Bloodhound/Bloodhound-pas.png",
  "Images/Bloodhound/Bloodhound-tac.png",
  "Images/Bloodhound/Bloodhound-ult.png"
);

const Catalyst = new Legend(
  "Catalyst",
  "Defensive Legened",
  "Barricade",
  "Reinforce doors, strengthening them and locking them to enemies. Spaces where doors have been desroyed can also be reinforced",
  "Piercing Spikes",
  "Throw out a patch of ferrofluid which turns into spikes when enemies are near. Catalyst remains immune to enemy spikes",
  "Dark Veil",
  "Raise a permeable wall of ferrofluid. Enemies who walk through it will be slowed and partially blinded for a brief time",
  "Images/Catalyst/catalyst-apex-randomizer.webp",
  "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/catalyst/apex-grid-tile-legends-abilities-passive-catalyst.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/catalyst/apex-grid-tile-legends-abilities-tactical-catalyst.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/catalyst/apex-grid-tile-legends-abilities-ultimate-catalyst.png.adapt.crop16x9.652w.png"
);

const Caustic = new Legend(
  "Caustic",
  "Defensive Legend",
  "Nox Vision",
  "Allows you to see enemies through your gas",
  "Nox Gas Trap",
  "Drop canisters that release deadly Nox gas when shot or triggered by enemies",
  "Nos Gas Grenade",
  "Blankets a large area in Nox gas",
  "Images/Caustic/CausticImages:Wraith:Wraith-apex-randomizer.webp",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-passive-caustic.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-tactical-caustic.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-ultimate-caustic.png.adapt.crop16x9.652w.png"
);

const Crypto = new Legend(
  "Crypto",
  "Support Legend",
  "Nuerolink",
  "Enemies detected by the Surveillance Drone within 30 meters of your position are marked for you and your teammates to see",
  "Surveillance Drone",
  "Deploy an aeriel drone that allows you to view the surrounding area from above. If the drone is destroyed, there is a forty-second cooldown before you can deploy another",
  "Drone EMP",
  "Your Surveillance Drone sets off an EMP blast that deals shield damage, slows enemies, and disables traps",
  "Images/Crypto/Crypto-apex-randomizer.webp",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-passive-crypto.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-tactical-crypto.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-ultimate-crypto.png.adapt.crop16x9.652w.png"
);

const Fuse = new Legend(
  "Fuse",
  "Offensive Legend",
  "Grenadier",
  "Stacks an extra grenade per inventory slot. Fire grenades farther, faster, and more accurately",
  "Knuckle Cluster",
  "Launch a cluster bomb that continously expels airburst explosives on impact",
  "The Motherlode",
  "Launch a bombardment that encircles a target area in a wall of flame",
  "Images/Fuse/Fuse-apex-randomizer.webp",
  "https://media.contentapi.ea.com/content/dam/apex-legends/common/season-8/fuse-page/apex-grid-tile-legends-abilities-passive-fuse.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/common/season-8/fuse-page/apex-grid-tile-legends-abilities-tactical-fuse.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/common/season-8/fuse-page/apex-grid-tile-legends-abilities-ultimate-fuse.png.adapt.crop16x9.652w.png"
);

const Gibralter = new Legend(
  "Gibralter",
  "Defensive Legend",
  "Gun Shield",
  "Aiming down sights deploys a gun shield that blocks incoming fire",
  "Dome of Protection",
  "Throw down a dome shield that blocks attacks",
  "Defensive Bombardment",
  "Call in a concentrated mortar strike on a marked position",
  "Images/Gibralter/Gibraltar-apex-randomizer.webp",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-passive-gibraltar.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-tactical-gibraltar.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-ultimate-gibraltar.png.adapt.crop16x9.652w.png"
);

const Horizon = new Legend(
  "Horizon",
  "Offensive Legend",
  "Spacewalk",
  "Increase air control and reduce fall impacts with Horizon's custom spacesuit",
  "Gravity Lift",
  "Reverses the flow of gravity, lifting players upwards and boosting them outwards when they exit",
  "Black Hole",
  "Deploy N.E.W.T. to create a micro black hole that pulls players towards it, and hits them with a graviton blast at the end",
  "Images/Horizon/Horizon-apex-randomizer.webp",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/10/horizon/apex-grid-tile-legends-abilities-passive-horizon.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/10/horizon/apex-grid-tile-legends-abilities-tactical-horizon.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/10/horizon/apex-grid-tile-legends-abilities-ultimate-horizon.png.adapt.crop16x9.652w.png"
);

const Lifeline = new Legend(
  "Lifeline",
  "Support Legend",
  "Combat Medic",
  "Deploy D.O.C. to revive teammates, leaving you free to move and defend",
  "D.O.C. Heal Drone",
  "Call your Drone of Compassion to automatically heal nearby teammates over time",
  "Care Package",
  "Call in a drop pod full of high-quality defensive gear",
  "Images/Lifeline/Lifeline-apex-randomizer.webp",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-passive-lifeline.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-tactical-lifeline.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-ultimate-lifeline.png.adapt.crop16x9.652w.png"
);

const Loba = new Legend(
  "Loba",
  "Support Legend",
  "Eye for Quality",
  "Nearby epic and legendary loot can be seen through walls. The range is the same as Black Market Boutique",
  "Burglar's Best Friend",
  "Teleport to hard-to-reach places or escape trouble quickly by throwing your Jump Drive bracelet",
  "Black Market Boutique",
  "Place a portable device that allows you to teleport neaby loot to your inventory. Each friendly or enemy Legend can take up to Two items",
  "Images/Loba/Loba-apex-randomizer.webp",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/05/apex-grid-tile-legends-abilities-passive-loba.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/05/apex-grid-tile-legends-abilities-tactical-loba.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/05/apex-grid-tile-legends-abilities-ultimate-loba.png.adapt.crop16x9.652w.png"
);

const Mad_Maggie = new Legend(
  "Mad Maggie",
  "Offensive Legend",
  "Warlord's Ire",
  "Temporarily highlight enemies you've damaged, and move faster with a shotgun",
  "Riot Drill",
  "Fire a drill that burns enemies through obstacles",
  "Wrecking Ball",
  "Throw a ball that releases speed-boosting pads and detonates near enemies",
  "Images/Mad_Maggie/Mad_Maggie-apex-randomizer.webp",
  "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/mad-maggie/apex-grid-tile-legends-abilities-passive-maggie.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/mad-maggie/apex-grid-tile-legends-abilities-tactical-maggie.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/mad-maggie/apex-grid-tile-legends-abilities-ultimate-maggie.png.adapt.crop16x9.652w.png"
);

const Mirage = new Legend(
  "Mirage",
  "Offensive Legend",
  "Now You See Me...",
  "Automatically cloak when using Respawn Beacons and reviving teammates",
  "Psyche Out",
  "Send out a holographic decoy to confuse the enemy",
  "Life of the Party",
  "Deploy a team of Decoys to distract enemies",
  "Images/Mirage/Mirage-apex-randomizer.webp",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-passive-mirage.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-tactical-mirage.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-ultimate-mirage.png.adapt.crop16x9.652w.png"
);

const Newcastle = new Legend(
  "Newcastle",
  "Defensive Legend",
  "Retrieve the Wounded",
  "Drag downed allies as you revive and protect them with your Revive Shield",
  "Mobile Shield",
  "Throw a controllable drone that creates a moving energy shield",
  "Castle Wall",
  "Leap to an ally or target area and slam down, creating a fortified stronghold",
  "Images/Newcastle/Newcastle-apex-randomizer.webp",
  "https://media.contentapi.ea.com/content/dam/apex-legends/common/saviors/newcastle-legends-page/apex-grid-tile-legends-abilities-passive-newcastle.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/common/saviors/newcastle-legends-page/apex-grid-tile-legends-abilities-tactical-newcastle.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/common/saviors/newcastle-legends-page/apex-grid-tile-legends-abilities-ultimate-newcastle.png.adapt.crop16x9.652w.png"
);

const Octane = new Legend(
  "Octane",
  "Offensive Legend",
  "Swift Mend",
  "Automatically restores health over time",
  "Stim",
  "Move 30% faster for six seconds. Costs health to use",
  "Launch Pad",
  "Deploy a jump pad that catapults teammates through the air",
  "Images/Octane/Octane-apex-randomizer.webp",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-passive-octane.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-tactical-octane.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-ultimate-octane.png.adapt.crop16x9.652w.png"
);

const Pathfinder = new Legend(
  "Pathfinder",
  "Offensive Legened",
  "Insider Knowledge",
  "Scan a survey beacon to reveal the ring's next location and lower the cooldown of Zipline Gun",
  "Grappling Hook",
  "Grapple to get to out-of-reach places quickly",
  "Zipline Gun",
  "Create a zipline for everyone to use",
  "Images/Pathfinder/Pathfinder-apex-randomizer.webp",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-passive-pathfinder.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-tactical-pathfinder.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-ultimate-pathfinder.png.adapt.crop16x9.652w.png"
);

const Rampart = new Legend(
  "Rampart",
  "Defensive Legend",
  "Modded Loader",
  "Increased magazine capacity and faster reloads when using LMGs and the Minigun",
  "Amped Cover",
  "Build a crouch-cover wall, which deplys a full0cover amped wall that blocks incoming shots and amps outgoing shots",
  "Emplaced Minigun 'Shiela'",
  "Place a mounted machine gun that anyone can use. High ammo capacity, long reload time",
  "Images/Rampart/Rampart-apex-randomizer.webp",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/08/rampart/apex-grid-tile-legends-abilities-passive-rampart.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/08/rampart/apex-grid-tile-legends-abilities-tactical-rampart.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/08/rampart/apex-grid-tile-legends-abilities-ultimate-rampart.png.adapt.crop16x9.652w.png"
);

const Revenant = new Legend(
  "Revenant",
  "Offensive Legend",
  "Stalker",
  "You crouch-walk faster and can climb higher than other Legends",
  "Silence",
  "Throw a device that deals damage and siables enemy abilities",
  "Death Totem",
  "Drop a totem that protects those who use it from death for a set amount of time. Instead of being killed or downed, users will return to the totem",
  "Images/Revenant/Revenant-apex-randomizer.webp",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/02/revenant-assets/passive-revenant.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/02/revenant-assets/tactical-revenant.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/02/revenant-assets/ultimate-revenant.png.adapt.crop16x9.652w.png"
);

const Seer = new Legend(
  "Seer",
  "Offensive Legend",
  "Heart Seeker",
  "Hear and visualize the heartbeats of nearby enemies when aiming down sights",
  "Focus of Attention",
  "Seer summons his micro-drones to emit a delayed blast that goes through walls interrupting and revealing enemies",
  "Exhibit",
  "Create a sphere of micro-drones that reveal the location of enemies moving quickly or firing their weapons within",
  "Images/Seer/Seer-apex-randomizer.webp",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2021/07/seer-assets/apex-grid-tile-legends-abilities-passive-seer.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2021/07/seer-assets/apex-grid-tile-legends-abilities-tactical-seer.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2021/07/seer-assets/apex-grid-tile-legends-abilities-ultimate-seer.png.adapt.crop16x9.652w.png"
);

const Valkyrie = new Legend(
  "Valkyrie",
  "Offensive Legend",
  "VTOL Jets",
  "Use jetpack to fly. Fuel is limited but refills over time",
  "Missile Swarm",
  "Fire a swarm of mini-rockets that damage and disorient the enemy",
  "Skyward Dive",
  "Launch into the air and sky dive. Allies can hook into take-off system to join you",
  "Images/Valkyrie/Valkyrie-apex-randomizer.webp",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2021/04/apex-grid-tile-legends-abilities-passive-valkyrie.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2021/04/apex-grid-tile-legends-abilities-tactical-valkyrie.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2021/04/apex-grid-tile-legends-abilities-ultimate-valkyrie.png.adapt.crop16x9.652w.png"
);

const Vantage = new Legend(
  "Vantage",
  "Offensive Legend",
  "Spotter's Lens",
  "Aim down sights to scout with your eyepiece (unarmed or with mid-to long-range scopes) and use a bullet drop indicator to see where your shots will land",
  "Echo Relocation",
  "Position your winged compainion Echo and then launch towards him. Must have line of sight for Echo to launch",
  "Sniper's Mark",
  "Use your custom sniper rifle to mark enemy targets and apply a damage bonus for you and your team",
  "Images/Vantage/Vantage-apex-randomizer.webp",
  "https://media.contentapi.ea.com/content/dam/apex-legends/common/hunted/vantage/apex-grid-tile-legends-abilities-passive-vantage.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/common/hunted/vantage/apex-grid-tile-legends-abilities-tactical-vantage.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/common/hunted/vantage/apex-grid-tile-legends-abilities-ultimate-vantage.png.adapt.crop16x9.652w.png"
);

const Wattson = new Legend(
  "Wattson",
  "Defensive Legend",
  "Spark of Genius",
  "Ultimate Accelerants fully charge your Ultimate Ability",
  "Perimeter Security",
  "Connect nodes to create electrified fences that damage and slow enemies",
  "Interception Pylon",
  "Place an electrified pylon that destroys incoming ordnance and repairs damaged shields",
  "Images/Wattson/Wattson-apex-randomizer.webp",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-passive-wattson.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-tactical-wattson.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-ultimate-wattson.png.adapt.crop16x9.652w.png"
);

const Wraith = new Legend(
  "Wraith",
  "Offensive Legend",
  "Voices from the Void",
  "A voice warns you when danger approaches. As far as you can tell, it's on your side",
  "Into the Void",
  "reposition quickly through the safety of void space, avoiding all damage",
  "Dimensional Rift",
  "Link two locations with portals for 60 seconds, allowing your entire team to use them",
  "Images/Wraith/Wraith-apex-randomizer.webp",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-passive-wraith.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-tactical-wraith.png.adapt.crop16x9.652w.png",
  "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-ultimate-wraith.png.adapt.crop16x9.652w.png"
);
const legendsArr = [
  Ash,
  Bangalore,
  Bloodhound,
  Catalyst,
  Caustic,
  Crypto,
  Fuse,
  Gibralter,
  Horizon,
  Lifeline,
  Loba,
  Mad_Maggie,
  Mirage,
  Newcastle,
  Octane,
  Pathfinder,
  Rampart,
  Revenant,
  Seer,
  Valkyrie,
  Vantage,
  Wattson,
  Wraith,
];

const legends = [
  "Ash",
  "Bangalore",
  "Bloodhound",
  "Catalyst",
  "Caustic",
  "Crypto",
  "Fuse",
  "Gibralter",
  "Horizon",
  "Lifeline",
  "Loba",
  "Mad Maggie",
  "Mirage",
  "Newcastle",
  "Octane",
  "Pathfinder",
  "Rampart",
  "Revenant",
  "Seer",
  "Valkyrie",
  "Vantage",
  "Wattson",
  "Wraith",
];

//Array of reroll button strings
const again = [
  "Again",
  "Again?",
  "AGAIN",
  "Mmm",
  "A-gain",
  "Nahhh",
  "Anotha one",
  "Mmm?",
  "Meh",
  "Ehhhh",
  "Not this one",
  "Reroll",
  "Redo",
  "Reroll",
  "Redo",
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
dateTimeLabel.textContent = `STARTED RANDOMIZING ON ${new Intl.DateTimeFormat(
  locale,
  options
)
  .format(now)
  .toString()
  .toUpperCase()}`;

//Begin tracking time
const startTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    //print time in each call
    sinceLastRollLabel.textContent = `${min}:${sec}s SINCE LAST ROLL`;

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

//Random roll on button click + champion message update
const roll = document
  .querySelector(".randomizer")
  .addEventListener("click", function (e) {
    e.preventDefault();

    let randomRerollString = again[Math.floor(Math.random() * again.length)];
    let legendNumber = Math.trunc(Math.random() * legends.length);
    let legend = legendsArr[legendNumber];

    document.querySelector(
      ".message"
    ).textContent = `YOUR LEGEND IS ${legend.legendName.toUpperCase()}!`;

    document.querySelector(".randomizer").textContent = `${randomRerollString}`;

    document.querySelector(
      ".legend-type"
    ).textContent = ` ${legend.legendClass}`;

    document.querySelector(
      ".passive-name"
    ).textContent = ` ${legend.passiveName}`;

    document.querySelector(
      ".passive-desc"
    ).textContent = ` ${legend.passiveInfo}`;

    document.querySelector(".tac-name").textContent = ` ${legend.tacticalName}`;

    document.querySelector(".tac-desc").textContent = ` ${legend.tacticalInfo}`;

    document.querySelector(".ult-name").textContent = ` ${legend.ultimateName}`;

    document.querySelector(".ult-desc").textContent = ` ${legend.ultimateInfo}`;
    const infoBG = document.querySelector(".infoContainer");
    infoBG.style.backgroundColor = "rgb(228, 223, 217)";

    document.getElementById("legendPic").remove();
    const img = document.createElement("img");
    document.querySelector(".legendPicture").appendChild(img);
    img.setAttribute("class", "legendImg animate-in");
    img.id = "legendPic";
    img.height = "300px";

    img.src = `${legend.imageSrc}`;

    document.querySelector(".legendImg").classList.add("animate-in");

    document.getElementById("pasImg").src = `${legend.pasImg}`;

    document.getElementById("tacImg").src = `${legend.tacImg}`;

    document.getElementById("ultImg").src = `${legend.ultImg}`;

    if (timer) clearInterval(timer);
    timer = startTimer();

    //pushing the rolled lengend into empty rolls array
    rolls.push(legend.legendName);

    let counts = {};
    //storage for number of rolls on legend
    rolls.forEach(function (x) {
      counts[x] = (counts[x] || 0) + 1;
    });

    youHaveRolled.textContent = `YOU HAVE ROLLED ${legend.legendName.toUpperCase()} ${
      counts[legend.legendName]
    } TIMES`;
  });
