let matter = {
	available:10000,
	usable:0
};
let nanites = 0;
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
		nanites++
	}
	updateMatter();
	updateNanomachines();
};
let updateMatter = () => {
	document.getElementById('usable matter').innerHTML = "Usable matter:<br/>" + matter.usable;
	document.getElementById('available matter').innerHTML = "Available matter:<br/>" + matter.available;
};
let updateNanomachines = () => {
	document.getElementById('nanites').innerHTML = nanites + "nanites";
};
let makeStuff = () => {
	if(matter.available > nanites) {
		matter.available -= nanites;
		matter.usable += nanites;
	} else{
		matter.usable += matter.available;
		matter.available = 0;
	}
}
const ticker = () => {
	makeStuff();
	updateMatter();
};
