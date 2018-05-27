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
	if(nanites === 1) {
		document.getElementById('nanites').innerHTML = nanites + " nanite";
	} else{
		document.getElementById('nanites').innerHTML = nanites + " nanites";
	}
	
	if(scouts === 1) {
		document.getElementById('scouts').innerHTML = scouts + " scout";
	} else{
		document.getElementById('scouts').innerHTML = scouts + " scouts";
	}
	
	if(nanofactories === 1) {
		document.getElementById('scouts').innerHTML = nanofactories + " nanofactory";
	} else{
		document.getElementById('scouts').innerHTML = nanofactories + " nanofactories";
	}
};
const makeStuff = () => {
	if(matter.available > nanites) {
		matter.available -= nanites;
		matter.usable += nanites;
	} else{
		matter.usable += matter.available;
		matter.available = 0;
	}
	matter.available += scouts*5;
	if(matter.usable > nanofactories * 10) {
		matter.usable -= nanofactories * 10;
		nanites += nanofactories;
	} else{
		nanites += Math.floor(matter.usable/(nanofactories * 10));
		console.log(Math.floor(matter.usable/(nanofactories * 10)));
		matter.usable = matter.usable % (nanofactories * 10);
		console.log(matter.usable = matter.usable % (nanofactories * 10));
	}
};


let scoutsUnlock = true;
let nanofactoryUnlock = true;
const unlocks = () => {
	if(nanites > 100 && scoutsUnlock === true) {
		let scoutDiv = document.createElement("div");
		let buy = document.createElement("button");
		let sell = document.createElement("button");
		let amount = document.createElement("p");
		buy.onclick = buyScout;
		buy.innerHTML = "Create scout (Cost: 20 nanites)";
		sell.onclick = sellScout;
		sell.innerHTML = "Destroy scout";
		
		amount.innerHTML = "0 scouts";
		amount.id = "scouts";
		scoutDiv.appendChild(buy);
		scoutDiv.appendChild(sell);
		scoutDiv.appendChild(amount);
		document.getElementById('nanomachines').appendChild(scoutDiv);
		scoutsUnlock = false;
	}
	if(nanites > 150 && nanofactoryUnlock === true) {
		let nanofactoryDiv = document.createElement("div");
		let buy = document.createElement("button");
		let sell = document.createElement("button");
		let amount = document.createElement("p");
		buy.onclick = buyScout;
		buy.innerHTML = "Create nanofactory (Cost: 50 nanites)";
		sell.onclick = sellScout;
		sell.innerHTML = "Destroy nanofactory";
		
		amount.innerHTML = "0 scouts";
		amount.id = "nanofactories";
		scoutDiv.appendChild(buy);
		scoutDiv.appendChild(sell);
		scoutDiv.appendChild(amount);
		document.getElementById('nanomachines').appendChild(nanofactoryDiv);
		nanofactoryUnlock = false;
	}
	
};
const ticker = () => {
	makeStuff();
	updateMatter();
	unlocks();
};
