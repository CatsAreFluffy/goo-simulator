let matter = {
	available:10000,
	usable:0
};
let nanites = 0;
let scouts = 0;
let getMatter = () => {
	if(matter.available > 0) {
		matter.available--;
		matter.usable++;
	}
	updateMatter();
};

let buyNanite = () => {
	if(matter.usable >= 10) {
		matter.usable-=10;
		nanites++;
	}
	updateMatter();
	updateNanomachines();
};
let sellNanite = () => {
	if(nanites > 0) {
		matter.usable += 10;
		nanites--;
	}
	updateMatter();
	updateNanomachines();
};

let buyScout = () => {
	if(nanites >= 20) {
		nanites-=20;
		scouts++;
	}
	updateMatter();
	updateNanomachines();
};
let sellNanite = () => {
	if(nanites > 0) {
		matter.usable += 10;
		scouts++;
	}
	updateNanomachines();
};

let updateMatter = () => {
	document.getElementById('usable matter').innerHTML = "Usable matter:<br/>" + matter.usable;
	document.getElementById('available matter').innerHTML = "Available matter:<br/>" + matter.available;
};
let updateNanomachines = () => {
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
};
let makeStuff = () => {
	if(matter.available > nanites) {
		matter.available -= nanites;
		matter.usable += nanites;
	} else{
		matter.usable += matter.available;
		matter.available = 0;
	}
	matter.available+=scouts*5;
};


let scoutsUnlock = true;
const unlocks = () => {
	if(nanites > 100 && scoutsUnlock === true) {
		let scoutDiv = document.createElement("div");
		let buy = document.createElement("button");
		let sell = document.createElement("button");
		let amount = document.createElement("p");
		buy.onclick = "buyScout()";
		buy.innerHTML = "Create scout (Cost: 20 nanites)";
		sell.onclick = "sellScout()";
		sell.innerHTML = "Destroy scout";
		
		amount.innerHTML = "0 scouts";
		amount.id = "scouts";
		scouts.appendChild(buy);
		scouts.appendChild(sell);
		scouts.appendChild(amount);
		document.getElementById('nanomachines').appendChild(scouts);
		scoutsUnlock = false;
	}
};
const ticker = () => {
	makeStuff();
	updateMatter();
	unlocks();
};
