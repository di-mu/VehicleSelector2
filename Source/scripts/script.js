$(document).ready(function(){
	//var lbl = document.getElementById("lblLoaded");
	//lbl.innerHTML = "<h3>The window load event has fired</h3>";
	
	//Code to get an element and change its CSS Display property to make it visible in the page.
	//document.getElementById("vehicleSelector").childNodes[1].style.display = "block";
	$("#middle-col").click(function(event){
		if (event.target == document.getElementById("carTypes")) {
			selectBody(event);
		} else if (event.target == document.getElementById("carModels")) {
			selectModel(event);
		} else if (event.target == document.getElementById("trim1") ||
			event.target == document.getElementById("trim2") ||
			event.target == document.getElementById("trim3")) {
			selectTrim(event);
		}
	});
});

function selectBody(event) {
	var window_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var x = event.pageX - window_width * 0.25;
	var y = event.pageY - 195;
	//alert(x+","+y);
	col = Math.floor(x / 110) + 1;
	row = Math.floor(y / 85) + 1;
	//alert("row:"+row+" col:"+col);
	var sel = document.getElementById("vehicleSelector");
	if (row==1 && col==1) {
		sel.innerHTML = "<img id='carModels' src='images/AWD4WD.png'/>";
	} else if (row==1 && col==2) {
		sel.innerHTML = "<img id='carModels' src='images/Convertible.png'/>";
	} else if (row==1 && col==3) {
		sel.innerHTML = "<img id='carModels' src='images/Coupe.png'/>";
	} else if (row==1 && col==4) {
		sel.innerHTML = "<img id='carModels' src='images/Hatchback.png'/>";
	} else if (row==1 && col==5) {
		sel.innerHTML = "<img id='carModels' src='images/Hybrid.png'/>";
	} else if (row==2 && col==1) {
		sel.innerHTML = "<img id='carModels' src='images/Luxury.png'/>";
	} else if (row==2 && col==2) {
		sel.innerHTML = "<img id='carModels' src='images/Sedan.png'/>";
	} else if (row==2 && col==3) {
		sel.innerHTML = "<img id='carModels' src='images/SUV.png'/>";
	} else if (row==2 && col==4) {
		sel.innerHTML = "<img id='carModels' src='images/Truck.png'/>";
	} else if (row==2 && col==5) {
		sel.innerHTML = "<img id='carModels' src='images/Van.png'/>";
	} else if (row==3 && col==1) {
		sel.innerHTML = "<img id='carModels' src='images/Wagon.png'/>";
	} else return;
	document.getElementById("trimSelector").innerHTML = "Please select car model to continue ... <br><br><br><br><br><br>";
	//document.getElementById("carModels").addEventListener("click", selectModel);
}


function selectModel(event) {
	var window_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var x = event.pageX - window_width * 0.25;
	var sel = document.getElementById("trimSelector");
	model = Math.floor(x / 135) + 1;
	//alert(model);
	if (model==1 && ((row==1 && col==1) || (row==2 && col==3))) {
		sel.innerHTML = "\
			<div id='trimsMenu'>\
				<ul>\
				  <li class='menu' id='trim1'>Trim 1</li>\
				  <li class='menu' id='trim2'>Trim 2</li>\
				  <li class='menu' id='trim3'>Trim 3</li>\
				</ul>\
			</div>\
			<br><br>\
			<div id='carTrim'>\
				<img class='vehicle-image' src='images/jeep_wrangler.png' style='float:left;'>\
				<table class='vehicle-stats'>\
					<tbody>\
						<tr><td>Car ID:</td><td>15D3975D</td></tr>\
						<tr><td>Price</td><td><span>$25,254</span></td></tr>\
						<tr><td>Mileage</td><td>35,824</td></tr>\
						<tr><td>Body Style</td><td>Sport Utility</td></tr>\
						<tr><td>Exterior Color</td><td>Silve</td></tr>\
						<tr><td>Engine</td><td>6 Cylinder</td></tr>\
						<tr><td>Drive Type</td><td>4 wheel drive - rear</td></tr>\
						<tr><td>Fuel Type</td><td>Gasoline</td></tr>\
						<tr><td>Doors</td><td>Four Door</td></tr>\
						<tr><td>Stock No.</td><td>00ABC9953</td></tr>\
						<tr><td>VIN</td><td>1ABC1234567890PPP</td></tr>\
					</tbody>\
				</table>\
			</div>\
		";
	} else {
		sel.innerHTML = "\
			<ul id='trimsMenu'>\
			  <li class='menu'>Trim 1</li>\
			</ul>\
			<br><br>\
			<div id='carTrim'>\
				<img class='vehicle-image' src='images/noimage.png' style='float:left;'>\
				<table class='vehicle-stats'>\
					<tbody>\
						<tr><td>Car ID:</td><td>unknown</td></tr>\
						<tr><td>Price</td><td><span>unknown</span></td></tr>\
						<tr><td>Mileage</td><td>unknown</td></tr>\
						<tr><td>Body Style</td><td>unknown</td></tr>\
						<tr><td>Exterior Color</td><td>unknown</td></tr>\
						<tr><td>Engine</td><td>unknown</td></tr>\
						<tr><td>Drive Type</td><td>unknown</td></tr>\
						<tr><td>Fuel Type</td><td>unknown</td></tr>\
						<tr><td>Doors</td><td>unknown</td></tr>\
						<tr><td>Stock No.</td><td>unknown</td></tr>\
						<tr><td>VIN</td><td>unknown</td></tr>\
					</tbody>\
				</table>\
			</div>\
		";
	}
}

function selectTrim(event) {
	var num;
	if (event.target == document.getElementById("trim1")) {
		num = 1;
	} else if (event.target == document.getElementById("trim2")) {
		num = 2;
	} else if (event.target == document.getElementById("trim3")) {
		num = 3;
	}
	var trim = document.getElementById("carTrim");
	if (model==1 && ((row==1 && col==1) || (row==2 && col==3))) {
		trim.innerHTML = "<img class='vehicle-image' src='images/jeep_wrangler.png' style='float:left;'>";
		if (num==1) {
			trim.innerHTML += "\
				<table class='vehicle-stats'>\
					<tbody>\
						<tr><td>Car ID:</td><td>15D3975D</td></tr>\
						<tr><td>Price</td><td><span>$25,254</span></td></tr>\
						<tr><td>Mileage</td><td>35,824</td></tr>\
						<tr><td>Body Style</td><td>Sport Utility</td></tr>\
						<tr><td>Exterior Color</td><td>Silve</td></tr>\
						<tr><td>Engine</td><td>6 Cylinder</td></tr>\
						<tr><td>Drive Type</td><td>4 wheel drive - rear</td></tr>\
						<tr><td>Fuel Type</td><td>Gasoline</td></tr>\
						<tr><td>Doors</td><td>Four Door</td></tr>\
						<tr><td>Stock No.</td><td>00ABC9953</td></tr>\
						<tr><td>VIN</td><td>1ABC1234567890PPP</td></tr>\
					</tbody>\
				</table>\
			";
		} else if (num==2) {
			trim.innerHTML += "\
				<table class='vehicle-stats'>\
					<tbody>\
						<tr><td>Car ID:</td><td>* * Trim 2 * *</td></tr>\
						<tr><td>Price</td><td><span>$unknown</span></td></tr>\
						<tr><td>Mileage</td><td>unknown</td></tr>\
						<tr><td>Body Style</td><td>Sport Utility</td></tr>\
						<tr><td>Exterior Color</td><td>Silve</td></tr>\
						<tr><td>Engine</td><td>6 Cylinder</td></tr>\
						<tr><td>Drive Type</td><td>4 wheel drive - rear</td></tr>\
						<tr><td>Fuel Type</td><td>Gasoline</td></tr>\
						<tr><td>Doors</td><td>Four Door</td></tr>\
						<tr><td>Stock No.</td><td>00ABC9953</td></tr>\
						<tr><td>VIN</td><td>* * Trim 2 * *</td></tr>\
					</tbody>\
				</table>\
			";
		} else if (num==3) {
			trim.innerHTML += "\
				<table class='vehicle-stats'>\
					<tbody>\
						<tr><td>Car ID:</td><td># # Trim 3 # #</td></tr>\
						<tr><td>Price</td><td><span>$unknown</span></td></tr>\
						<tr><td>Mileage</td><td>unknown</td></tr>\
						<tr><td>Body Style</td><td>Sport Utility</td></tr>\
						<tr><td>Exterior Color</td><td>Silve</td></tr>\
						<tr><td>Engine</td><td>6 Cylinder</td></tr>\
						<tr><td>Drive Type</td><td>4 wheel drive - rear</td></tr>\
						<tr><td>Fuel Type</td><td>Gasoline</td></tr>\
						<tr><td>Doors</td><td>Four Door</td></tr>\
						<tr><td>Stock No.</td><td>00ABC9953</td></tr>\
						<tr><td>VIN</td><td># # Trim 3 # #</td></tr>\
					</tbody>\
				<table>\
			";
		}
	}
}