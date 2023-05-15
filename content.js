/********** */
const data_array = []

async function waitForElement(timeout) {
	const start = Date.now()

	while (Date.now() - start < timeout) {
		if ((window.location.href = "http://10.24.1.208/receive/selectProduct")) {
			return 0
		}
		await new Promise((resolve) => setTimeout(resolve, 1000))
		//console.log("mailstart")
		main1()
	}

	return null
}

//storing data
function main1() {
	

	//button
	var table_rows = document.getElementsByTagName("tr")
	var len = table_rows.length

	for (var i = 0; i < len; i++) {
		let inner_array = []

		// pushing shelf life
		document
			.getElementsByTagName("tr")
			[i].childNodes[1].childNodes.forEach((element) => {
				if (element.innerText.search("Max Shelf Life Value:") != -1) {
					let shelf_life = element.innerText.replace(/[^0-9]/g, "") * 1
					inner_array.push(shelf_life)
				}
			})
		//pushing mrp
		document
			.getElementsByTagName("tr")
			[i].childNodes[1].childNodes.forEach((element) => {
				if (element.innerText.search("Mrp:") != -1) {
					let mrp = element.innerText.replace(/[^0-9]/g, "") * 1
					inner_array.push(mrp)
				}
			})

		//pushing the inner_array
		data_array.push(inner_array)

		//adding event listners
		let length = document
			.getElementsByTagName("tr")
			[i].childNodes[1].childNodes

			document
			.getElementsByTagName("tr")
			[i].childNodes[1].childNodes[length - 1].addEventListener("click", ()=>{
				forwardWith(i);
			})
		
	}

	
}

function forwardWith(id){
	main(id)

}





function main(id) {
	alert("Button Disabled untill Correct Input")
	document.body.addEventListener("mousemove", (e)=>{
		main2(id);
	})
	document.body.addEventListener("keyup", (e)=>{
		main2(id);
	})
}

function main2(id) {
	//console.log("started main2")

	//button
	var submit_button = document.querySelector(
		".mdl-button.mdl-js-button.mdl-button--raised.mdl-js-ripple-effect.btn-danger"
	)

	

	//shelf life MONTHS
	var shelf_life_integer = data_array[id][0]
	


	var integer_price = data_array[id][1];

	
	//start processing
	submit_button.disabled = true;
	//alert("submit button disabled.!")


	//starting date generation
	let currentdate = new Date()

	let starting_date = new Date()
	//setting starting date
	starting_date.setDate(
		starting_date.getDate() - shelf_life_integer * 30.4 * 0.4
	)

	var integer_mrp_input = document.getElementById("mrp").value * 1

	//entered date
	var dateInput0 = document.getElementsByName("mfg_date")[0].value;

	//parse to date
	var arr = dateInput0.split("-")

	let day = arr[2]
	let month = arr[1]
	let year = arr[0]

	let dateInput1 = year + "-" + month + "-" + day + " GMT"

	var dateInput = new Date(dateInput1)

	//console.log(dateInput)
	//console.log(starting_date)
	//console.log(currentdate)
	//console.log(integer_mrp_input)
	//console.log(integer_price)

	if (
		dateInput <= currentdate &&
		dateInput >= starting_date &&
		integer_price * 0.7 <= integer_mrp_input &&
		integer_price * 1.3 >= integer_mrp_input
	) {
		submit_button.disabled = false
	} else {
		//console.log("submit button disabled. Untill correct date and mrp entered!");
		submit_button.disabled = true
	}
}

//console.log("started")
waitForElement(15000000000)
