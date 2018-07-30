let matter = {
	available:10000,
	usable:0,
	reachable:990000,
};
let player = {};
let nanites = 0;
let scouts = 0;
let nanofactories = 0;
let scoutfactories = 0;
let minicolonies = 0;
let colonies = 0;

let persec = {
	available:10000,
	usable:0,
	reachable:990000,
	nanites:0,
	scouts:0,
	nanofactories:0,
	scoutfactories:0,
	minicolonies:0,
};

let tickrate = 64

const getMatter = () => {
	if(matter.available > 0) {
		matter.available--;
		matter.usable++;
	}
	updateMatter();
};

const buyNanite = () => {
	if(matter.usable >= 10) {
		matter.usable-=10;
		nanites++;
	}
	updateMatter();
	updateNanomachines();
};
const sellNanite = () => {
	if(nanites > 0) {
		if(nanites-1 < 0) {
			matter.usable += nanites*10
			nanites = 0;
		}
		matter.usable += 10;
		nanites--;
	}
	updateMatter();
	updateNanomachines();
};

const buyScout = () => {
	if(nanites >= 20) {
		nanites-=20;
		scouts++;
	}
	updateNanomachines();
};
const sellScout = () => {
	if(scouts > 0) {
		if(scouts-1 < 0) {
			nanites += scouts*20
			scouts = 0;
		}
		nanites += 20;
		scouts--;
	}
	updateNanomachines();
};

const buyNanofactory = () => {
	if(nanites >= 50) {
		nanites-=50;
		nanofactories++;
	}
	updateNanomachines();
};
const sellNanofactory = () => {
	if(nanofactories > 0) {
		if(nanofactories-1 < 0) {
			nanites += nanofactories*50
			nanofactories = 0;
		}
		nanites += 50;
		nanofactories--;
	}
	updateNanomachines();
};
const buyScoutfactory = () => {
	if(nanites >= 100) {
		nanites-=100;
		scoutfactories++;
	}
	updateNanomachines();
};
const sellScoutfactory = () => {
	if(scoutfactories > 0) {
		if(scoutfactories-1 < 0) {
			nanites += scoutfactories*100
			scoutfactories = 0;
		}
		nanites += 100;
		scoutfactories--;
	}
	updateNanomachines();
};

const buyMinicolony = () => {
	if(nanites >= 50) {
		nanites-=50;
		minicolonies++;
	}
	updateNanomachines();
};
const sellMinicolony = () => {
	if(minicolonies > 0) {
		if(minicolonies-1 < 0) {
			nanites += minicolonies*50
			minicolonies = 0;
		}
		nanites += 50;
		minicolonies--;
	}
	updateNanomachines();
};

const buyColony = () => {
	if(nanofactories >= 50) {
		nanofactories-=50;
		colonies++;
	}
	updateNanomachines();
};
const sellColony = () => {
	if(colonies > 0) {
		if(colonies-1 < 0) {
			nanofactories += colonies*50
			colonies = 0;
		}
		nanofactories += 50;
		colonies--;
	}
	updateNanomachines();
};

const updateMatter = () => {
	document.getElementById('usable matter').innerHTML = "Usable matter:<br/>" + Math.floor(matter.usable);
	document.getElementById('available matter').innerHTML = "Available matter:<br/>" + Math.ceil(matter.available);
	if(unlock.reachable === false) {
		document.getElementById('reachable matter').innerHTML = "Reachable matter:<br/>" + Math.ceil(matter.reachable);
	}
};
const updateNanomachines = () => {
	let persecond = "";
	persecond += persec.usable + " usable/s<br>";
	
	if(Math.floor(nanites) === 1) {
		document.getElementById('nanites').innerHTML = Math.floor(nanites) + " nanite";
	} else{
		document.getElementById('nanites').innerHTML = Math.floor(nanites) + " nanites";
	}
	
	if(unlock.scouts === false) {
		if(Math.floor(scouts) === 1) {
			document.getElementById('scouts').innerHTML = Math.floor(scouts) + " scout";
		} else{
			document.getElementById('scouts').innerHTML = Math.floor(scouts) + " scouts";
		}
		
		persecond += persec.available + " available/s<br>";
	}
	if(unlock.nanofactory === false) {
		if(Math.floor(nanofactories) === 1) {
			document.getElementById('nanofactories').innerHTML = Math.floor(nanofactories) + " nanofactory";
		} else{
			document.getElementById('nanofactories').innerHTML = Math.floor(nanofactories) + " nanofactories";
		}
		
		persecond += persec.nanites + " nanites/s<br>";
	}
	if(unlock.scoutfactory === false) {
		if(Math.floor(scoutfactories) === 1) {
			document.getElementById('scoutfactories').innerHTML = Math.floor(scoutfactories) + " scout factory";
		} else{
			document.getElementById('scoutfactories').innerHTML = Math.floor(scoutfactories) + " scout factories";
		}
		persecond += persec.scouts + " scouts/s<br>";
	}
	if(unlock.reachable === false) {
		persecond += persec.reachable + " reachable/s<br>";
	}
	if(unlock.minicolony === false) {
		if(Math.floor(minicolonies) === 1) {
			document.getElementById('minicolonies').innerHTML = Math.floor(minicolonies) + " mini-colony";
		} else{
			document.getElementById('minicolonies').innerHTML = Math.floor(minicolonies) + " mini-colonies";
		}
		
		
	}
	if(unlock.colony === false) {
		if(Math.floor(colonies) === 1) {
			document.getElementById('colonies').innerHTML = Math.floor(colonies) + " colony";
		} else{
			document.getElementById('colonies').innerHTML = Math.floor(colonies) + " colonies";
		}
		
		
		persecond += persec.nanofactories + " nanofactories/s<br>";
		persecond += persec.scoutfactories + " scoutfactories/s<br>";
		persecond += persec.minicolonies + " minicolonies/s<br>";
	}
	
	document.getElementById('persec').innerHTML = persecond;
};
const makeStuff = () => {
	persec.available = 0;
	persec.usable = 0;
	persec.reachable = 0;
	persec.nanites = 0;
	persec.scouts = 0;
	persec.nanofactories = 0;
	persec.scoutfactories = 0;
	persec.minicolonies = 0;
	if(matter.available > nanites/tickrate) {
		matter.available -= nanites/tickrate;
		matter.usable += nanites/tickrate;
		persec.usable += nanites;
		persec.available -= nanites;
	} else{
		persec.usable += matter.available*tickrate;
		persec.available -= matter.available*tickrate;
		matter.usable += matter.available;
		matter.available = 0;
	}
	if(matter.reachable > scouts*5/tickrate) {
		matter.reachable -= scouts*5/tickrate;
		matter.available += scouts*5/tickrate;
		persec.available += scouts*5;
		persec.reachable -= scouts*5;
	} else{
		persec.available += matter.reachable*tickrate;
		persec.reachable -= matter.reachable*tickrate;
		matter.available += matter.reachable;
		matter.reachable = 0;
	}
	if(matter.usable >= nanofactories*10/tickrate) {
		matter.usable -= nanofactories*10/tickrate;
		nanites += nanofactories/tickrate;
		persec.nanites += nanofactories;
		persec.usable -= nanofactories * 10;
	} else{
		persec.nanites += matter.usable/10*tickrate;
		persec.usable -= matter.usable*tickrate;
		nanites += matter.usable/10;
		matter.usable = 0;
	}
	if(nanites >= scoutfactories*20/tickrate) {
		nanites -= scoutfactories*20/tickrate;
		scouts += scoutfactories/tickrate;
		persec.scouts += scoutfactories;
		persec.nanites -= scoutfactories * 20;
		
	} else{
		persec.scouts += nanites/20*tickrate;
		persec.nanites -= nanites*tickrate;
		scouts += nanites/20;
		nanites = 0;
	}
	if(nanites >= colonies*50/tickrate) {
		nanites -= colonies*50/tickrate;
		nanofactories += colonies/tickrate;
		persec.nanofactories += colonies;
		persec.nanites -= colonies * 50;
	} else{
		persec.nanofactories += nanites/50*tickrate;
		persec.nanites -= nanites*tickrate;
		nanofactories += nanites/50;
		nanites = 0;
	}
	if(nanites >= colonies*4/tickrate) {
		nanites -= colonies*4/tickrate;
		scoutfactories += colonies*(4/100)/tickrate;
		persec.scoutfactories += colonies*(4/100);
		persec.nanites -= colonies * 4;
	} else{
		persec.nanofactories += nanites/100*tickrate;
		persec.nanites -= nanites*tickrate;
		scoutfactories += nanites/100;
		nanites = 0;
	}
	
	if(nanites >= colonies*50/tickrate) {
		nanites -= colonies*50/tickrate;
		minicolonies += colonies/tickrate;
		persec.minicolonies += colonies;
		persec.nanites -= colonies * 50;
	} else{
		persec.minicolonies += nanites/50*tickrate;
		persec.nanites -= nanites*tickrate;
		minicolonies += nanites/50;
		nanites = 0;
	}
	matter.reachable += minicolonies*50/tickrate
	persec.reachable += minicolonies*50;
	
};


const save = () => {
	
	let savefile = JSON.stringify(player);
	
	console.log(savefile);
	
	window.localStorage.setItem("savefile", savefile);
	
};

const load = () => {

	// Check to see if the save file exists
	// Remember the exclamation mark means "NOT"
	// So this says "If the savefile does NOT exist".
	if (!window.localStorage.getItem("savefile")) {
		

	} else {
		
		let tmpSavefile = window.localStorage.getItem("savefile");
		
		player = JSON.parse(tmpSavefile);
		
		
		matter.available = player.available;
		matter.usable = player.usable;
		matter.reachable = player.reachable;
		nanites = player.nanites;
		scouts = player.scouts;
		nanofactories = player.nanofactories;
		scoutfactories = player.scoutfactories;
		minicolonies = player.minicolonies;
		
	}
};

const remove = () => {
	
	if (!window.localStorage.getItem("savefile")) {
		
	} else {
		window.localStorage.removeItem("savefile");
	}

};
const ticker = () => {
	makeStuff();
	updateMatter();
	updateNanomachines();
	unlocks();
	
	player.available = matter.available;
	player.usable = matter.usable;
	player.reachable = matter.reachable;
	player.nanites = nanites;
	player.scouts = scouts;
	player.nanofactories = nanofactories;
	player.scoutfactories = scoutfactories;
	player.minicolonies = minicolonies;
	player.colonies = colonies;
	
};

