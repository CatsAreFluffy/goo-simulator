let unlock = {
	scouts:true,
	nanofactory:true
}	
	
const unlocks = () => {
	if(nanites > 100 && unlock.scouts === true) {
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
		scoutsUnlock = false;
	}
	if(nanites > 150 && unlock.nanofactory === true) {
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
		nanofactoryUnlock = false;
	}
	
};

export { unlock, unlocks };
