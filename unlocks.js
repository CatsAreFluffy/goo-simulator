let unlock = {
	scouts:true,
	nanofactory:true,
	reachable:true,
	scoutfactory:true,
	minicolony:true,
	colony:true,
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
		unlock.reachable = false;
	}
	if(matter.reachable <= 0 && unlock.minicolony === true) {
		let minicolonyDiv = document.createElement("div");
		let minicolonyBuy = document.createElement("button");
		let minicolonySell = document.createElement("button");
		let minicolonyAmount = document.createElement("p");
		minicolonyBuy.onclick = buyMinicolony;
		minicolonyBuy.innerHTML = "Create mini-colony (Cost: 50 nanites)";
		minicolonySell.onclick = sellMinicolony;
		minicolonySell.innerHTML = "Destroy mini-colony";
		
		minicolonyAmount.innerHTML = "0 minicolonies";
		minicolonyAmount.id = "minicolonies";
		minicolonyDiv.appendChild(minicolonyBuy);
		minicolonyDiv.appendChild(minicolonySell);
		minicolonyDiv.appendChild(minicolonyAmount);
		document.getElementById('nanomachines').appendChild(minicolonyDiv);
		unlock.minicolony = false;
	}
	if(minicolonies >= 25 && unlock.colony === true) {
		let colonyDiv = document.createElement("div");
		let colonyBuy = document.createElement("button");
		let colonySell = document.createElement("button");
		let colonyAmount = document.createElement("p");
		colonyBuy.onclick = buyColony;
		colonyBuy.innerHTML = "Create colony (Cost: 50 nanofactories)";
		colonySell.onclick = sellColony;
		colonySell.innerHTML = "Destroy colony";
		
		colonyAmount.innerHTML = "0 colonies";
		colonyAmount.id = "colonies";
		colonyDiv.appendChild(colonyBuy);
		colonyDiv.appendChild(colonySell);
		colonyDiv.appendChild(colonyAmount);
		document.getElementById('nanomachines').appendChild(colonyDiv);
		unlock.colony = false;
	}
};
