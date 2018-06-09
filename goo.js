let matter = {
	available:10000,
	usable:0
};
let nanites = 0;
let scouts = 0;
let nanofactories = 0;
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
		nanites += 50;
		nanofactories--;
	}
	updateNanomachines();
};

const updateMatter = () => {
	document.getElementById('usable matter').innerHTML = "Usable matter:<br/>" + matter.usable;
	document.getElementById('available matter').innerHTML = "Available matter:<br/>" + matter.available;
};
const updateNanomachines = () => {
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
	}
	if(unlock.nanofactory === false) {
		if(Math.floor(nanofactories) === 1) {
			document.getElementById('nanofactories').innerHTML = Math.floor(nanofactories) + " nanofactory";
		} else{
			document.getElementById('nanofactories').innerHTML = Math.floor(nanofactories) + " nanofactories";
		}
	}
};
const makeStuff = () => {
	if(matter.available > nanites/100) {
		matter.available -= nanites/100;
		matter.usable += nanites/100;
	} else{
		matter.usable += matter.available;
		matter.available = 0;
	}
	matter.available += scouts/20;
	if(matter.usable >= nanofactories/10) {
		matter.usable -= nanofactories/10;
		nanites += nanofactories;
	} else{
		nanites += Math.floor(matter.usable/(nanofactories/10));
		matter.usable = matter.usable % (nanofactories/10);
		console.log(matter.usable % (nanofactories/10));
	}
	updateNanomachines();
};



const ticker = () => {
	makeStuff();
	updateMatter();
	unlocks();
};

