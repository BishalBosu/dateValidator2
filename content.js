const url = window.location.href;
const currentURL = new URL(url);
const baseUrl = currentURL.origin + currentURL.pathname;

console.log("base_url ", baseUrl)

if(baseUrl == 'http://10.24.1.208/'){
	run208()
}
else if(baseUrl == 'http://10.24.1.71/')
{
	run71()
}

function run71() {
	/********** */

	async function waitForElement(timeout) {
		const start = Date.now()

		while (Date.now() - start < timeout) {
			const el = document.querySelector("button.btn.btn-primary.sc-dnqmqq.bDsesi")
			if (el) {
				return el
			}
			await new Promise((resolve) => setTimeout(resolve, 1000))
			//console.log("mailstart")
			main1()
		}

		return null
	}

	function main1() {
		//button
		var submit_button = document.querySelector(
			"button.btn.btn-primary.sc-dnqmqq.bDsesi"
		)

		if (submit_button) {
			main()
		}
		//console.log(submit_button)


	}

	function main() {

		alert("Button Disabled untill Correct Input")
		document.body.addEventListener("mousemove", main2);
		document.body.addEventListener("keyup", main2);

	}


	function main2() {
		//console.log("started main2")



		//button
		var submit_button = document.querySelector(
			"button.btn.btn-primary.sc-dnqmqq.bDsesi"
		)

		//console.log("submit: ", submit_button)

		//shelf life MONTHS
		var shelf_life_integer = -1

		const liTags = document.getElementsByTagName("li")

		for (let i = 0; i < liTags.length; i++) {
			if (liTags[i].outerText.search("max_shelf_life_value:") != -1) {
				shelf_life_integer = liTags[i].outerText.replace(/[^0-9]/g, "") * 1
				break
			}
		}

		//localStorage.setItem("max_self", shelf_life_integer);

		var integer_price = -1

		for (let i = 0; i < liTags.length; i++) {
			if (liTags[i].outerText.search("mrp:") != -1) {
				integer_price = liTags[i].outerText.replace(/[^0-9]/g, "") * 1
				break
			}
		}

		//start processing
		submit_button.disabled = true
		//alert("submit button disabled.!")

		//starting date generation
		let currentdate = new Date()

		let starting_date = new Date()
		//setting starting date
		starting_date.setDate(starting_date.getDate() - ((shelf_life_integer * 30.4) * 0.4))

		var integer_mrp_input = document.getElementById("mrp").value * 1

		//entered date
		var dateInput0 = document.querySelector(
			"div.react-datepicker__input-container"
		).firstElementChild.value

		//parse to date
		var arr = dateInput0.split("-")

		let day = arr[0]
		let month = arr[1]
		let year = arr[2]

		let dateInput1 = year + "-" + month + "-" + day + " GMT"

		var dateInput = new Date(dateInput1)

		//console.log(dateInput)
		console.log(starting_date)
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
			submit_button.disabled = true;
		}
	}


	//console.log("started")
	waitForElement(15000000000)


}










function run208() {/********** */
	console.log("started the script1")
	const data_array = []

	async function waitForElement(timeout) {
		console.log("started waitForElement", "data_array: ", data_array)

		const start = Date.now()

		while (Date.now() - start < timeout) {
			if (window.location.href == "http://10.24.1.208/receive/selectProduct") {
				return 0
			}
			await new Promise((resolve) => setTimeout(resolve, 1000))
			//console.log("mailstart")
			test()
		}

		return null
	}

	function test() {
		console.log("started test", "data_array: ", data_array)

		if (window.location.href == "http://10.24.1.208/receive/selectProduct") {
			main1()
		}
	}

	//storing data
	async function main1() {
		console.log("started main1", "data_array: ", data_array)
		let len = document.getElementsByTagName("tr").length

		while (1) {
			if (len > 0) {
				break
			}
			await new Promise((resolve) => setTimeout(resolve, 500))
			len = document.getElementsByTagName("tr").length
		}

		console.log("between-1 main1: ", " len: ", len)

		for (let i = 0; i < len; i++) {
			console.log("between0 main1 for loop: ", " i: ", i)

			let inner_array = []

			console.log("between1 main1: ", " inner_array: ", inner_array)
			// pushing shelf life
			document
				.getElementsByTagName("tr")
			[i].childNodes[1].childNodes.forEach((element) => {
				if (element.innerText.search("Max Shelf Life Value:") != -1) {
					let shelf_life = element.innerText.replace(/[^0-9]/g, "") * 1
					inner_array.push(shelf_life)
				}
			})

			console.log("between2 main1: ", " inner_array: ", inner_array)
			//pushing mrp
			document
				.getElementsByTagName("tr")
			[i].childNodes[1].childNodes.forEach((element) => {
				if (element.innerText.search("Mrp:") != -1) {
					let mrp = element.innerText.replace(/[^0-9]/g, "") * 1
					inner_array.push(mrp)
				}
			})

			console.log("between3 main1: ", " inner_array: ", inner_array)

			//pushing the inner_array
			data_array.push(inner_array)

			console.log("between4 main1: ", " data_array: ", data_array)

			//adding event listners
			let length =
				document.getElementsByTagName("tr")[i].childNodes[1].childNodes.length

			let manage_lot_button =
				document.getElementsByTagName("tr")[i].childNodes[1].childNodes[
				length - 1
				]

			console.log("between5 main1: ", " manage_lot_button: ", manage_lot_button)

			manage_lot_button.addEventListener("click", (e) => {
				forwardWith(i)
			})
		}
	}

	async function forwardWith(id) {
		console.log("started forwardWith", "id: ", id)
		main(id)
	}

	function main(id) {
		console.log("started main", "id: ", id)

		//alert("Button Disabled untill Correct Input")
		document.body.addEventListener("mousemove", (e) => {
			main2(id)
		})
		document.body.addEventListener("keyup", (e) => {
			main2(id)
		})
	}

	function main2(id) {
		console.log("started main2", "id: ", id)

		//button
		var submit_button = document.querySelector(
			".mdl-button.mdl-js-button.mdl-button--raised.mdl-js-ripple-effect.btn-danger"
		)

		//shelf life MONTHS
		var shelf_life_integer = data_array[id][0]

		var integer_price = data_array[id][1]

		//start processing
		submit_button.disabled = true
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
		var dateInput0 = document.querySelector('[data-item_index="2"]').value
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
}