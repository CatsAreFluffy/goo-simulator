let unlock = {
	scouts:true,
	nanofactory:true,
	reachable:true,
	scoutfactory:true,
}	
	
const unlocks = () => {
	if(nanites >= 50 && unlock.scouts === true) {
		let scoutDiv = document.createElement("div");
		let scoutBuy = document.createElement("button");
		let scoutSell = document.createElement("button");
		let amount = document.createElement("p");
		scoutBuy.onclick = buyScout;
		scoutBuy.innerHTML = "Create scout (Cost: 20 nanites)";
		scoutSell.onclick = sellScout;
		scoutSell.innerHTML = "Destroy scout";
		
		amount.innerHTML = "0 scouts";
		amount.id = "scouts";
		scoutDiv.appendChild(scoutBuy);
		scoutDiv.appendChild(scoutSell);
		scoutDiv.appendChild(amount);
		document.getElementById('nanomachines').appendChild(scoutDiv);
		unlock.scouts = false;
	}
	if(nanites >= 100 && unlock.nanofactory === true) {
		let nanofactoryDiv = document.createElement("div");
		let nanofactoryBuy = document.createElement("button");
		let nanofactorySell = document.createElement("button");
		let nanofactoryAmount = document.createElement("p");
		nanofactoryBuy.onclick = buyNanofactory;
		nanofactoryBuy.innerHTML = "Create nanofactory (Cost: 50 nanites)";
		nanofactorySell.onclick = sellNanofactory;
		nanofactorySell.innerHTML = "Destroy nanofactory";
		
		nanofactoryAmount.innerHTML = "0 nanofactories";
		nanofactoryAmount.id = "nanofactories";
		nanofactoryDiv.appendChild(nanofactoryBuy);
		nanofactoryDiv.appendChild(nanofactorySell);
		nanofactoryDiv.appendChild(nanofactoryAmount);
		document.getElementById('nanomachines').appendChild(nanofactoryDiv);
		unlock.nanofactory = false;
	}
	if(scouts >= 20 && unlock.scoutfactory === true) {
		let scoutfactoryDiv = document.createElement("div");
		let scoutfactoryBuy = document.createElement("button");
		let scoutfactorySell = document.createElement("button");
		let scoutfactoryAmount = document.createElement("p");
		scoutfactoryBuy.onclick = buyScoutfactory;
		scoutfactoryBuy.innerHTML = "Create scout factory (Cost: 100 nanites)";
		scoutfactorySell.onclick = sellScoutfactory;
		scoutfactorySell.innerHTML = "Destroy scout factory";
		
		scoutfactoryAmount.innerHTML = "0 scoutfactories";
		scoutfactoryAmount.id = "scoutfactories";
		scoutfactoryDiv.appendChild(scoutfactoryBuy);
		scoutfactoryDiv.appendChild(scoutfactorySell);
		scoutfactoryDiv.appendChild(scoutfactoryAmount);
		document.getElementById('nanomachines').appendChild(scoutfactoryDiv);
		unlock.scoutfactory = false;
	}
	if(matter.reachable <= 500000 && unlock.reachable === true) {
		let reachableAmount = document.createElement("p");
		reachableAmount.innerHTML = "Reachable matter:<br/>" + Math.ceil(matter.reachable);
		reachableAmount.id = "reachable matter";
		document.getElementById("resources").appendChild(reachableAmount);
		
	}
};
