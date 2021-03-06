import { confidant } from './confidant.js';

// ## CHARACTER.HTML PAGE ##
// Creates the character choices table for the character.html page
function confidantName(name) {
	// retrieves character name
	let characterName = document.getElementById('character-name')
	characterName.innerHTML = ""
	characterName.innerHTML = name
	// retrieves character arcana
	let characterArcana = document.getElementById('character-arcana')
	characterArcana.innerHTML = ""
	characterArcana.innerHTML = "Arcana: " + confidant["confidant"][name]["arcana"]
	// retrieves character requirements for rank 1
	let characterRequirement = document.getElementById('character-requirement')
	characterRequirement.innerHTML = ""
	document.getElementById('character-requirement-heading').innerHTML = "Start Event / Requirement"
	characterRequirement.innerHTML = confidant["confidant"][name]["rank"]["rank_1"]["requirement"]
	// retrieves confidant data and loops over it
	let confidantTable = document.getElementById('confidant-table')
	confidantTable.innerHTML = ""
	for (let item in confidant["confidant"][name]["rank"]) {
		let confidantDate = confidant["confidant"][name]["rank"][item]["date"]
		let confidantRequirement = confidant["confidant"][name]["rank"][item]["requirement"]
		let confidantSkillUnlock = confidant["confidant"][name]["rank"][item]["skills_unlock"]
		let confidantChoice1 = confidant["confidant"][name]["rank"][item]["choice_1"]["answer"]
		let confidantChoice2 = confidant["confidant"][name]["rank"][item]["choice_2"]["answer"]
		let confidantChoice3 = confidant["confidant"][name]["rank"][item]["choice_3"]["answer"]
		let confidantChoice4 = confidant["confidant"][name]["rank"][item]["choice_4"]["answer"]
		let confidantChoice5 = confidant["confidant"][name]["rank"][item]["choice_5"]["answer"]
		// checks to see if data is empty, replaces empty data with "N/A" to better fit the table
		if (confidantRequirement == "") {
			confidantRequirement = "N/A"
		}
		if (confidantDate == "") {
			confidantDate = "N/A"
		}
		if (confidantSkillUnlock == "") {
			confidantSkillUnlock = "N/A"
		}
		if (confidantChoice1 == "") {
			confidantChoice1 = "N/A"
		}
		if (confidantChoice2 == "") {
			confidantChoice2 = "N/A"
		}
		if (confidantChoice3 == "") {
			confidantChoice3 = "N/A"
		}
		if (confidantChoice4 == "") {
			confidantChoice4 = "N/A"
		}
		if (confidantChoice5 == "") {
			confidantChoice5 = "N/A"
		}


		let div = document.createElement('div')

		// removes the rank 1 requirement if its the same as the start event requirement
		if (confidantRequirement == confidant["confidant"][name]["rank"]["rank_1"]["requirement"]) {
			confidantRequirement = "Start Event"
		}

		div.innerHTML = `
		  <table class="table table-warning">
		  <thead>
		    <tr>
		      <th scope="col">Rank: ${item.replace(/[rank_]/gi, '')}</span></th>
		      <th scope="col">Date:<span class="table-header-span">  ${confidantDate}</span></th>
		      <th scope="col">Requirement:<span class="table-header-span">  ${confidantRequirement}</span></th>
		      <th scope="col">Skill Unlock: <span class="table-header-span"> ${confidantSkillUnlock}</span></th>
		    </tr>
		  </thead>
		  </table>
		  <table class="table table-hover">
		  <tbody id="character-tablebody">
		    <tr>
		      <td scope="col"><strong>Choice 1: </strong>${confidantChoice1}</td>
		    </tr>
		    <tr>
		      <td scope="col"><strong>Choice 2: </strong> ${confidantChoice2}</td>
		    </tr>
		    <tr>
		      <td scope="col"><strong>Choice 3: </strong> ${confidantChoice3}</td>
		    </tr>
		    <tr>
		      <td scope="col"><strong>Choice 4: </strong> ${confidantChoice4}</td>
		    </tr>
		    <tr>
		      <td scope="col"><strong>Choice 5: </strong> ${confidantChoice5}</td>
		    </tr>
		  </tbody>
		</table> `
		confidantTable.appendChild(div)

	}	
}
// Hides the character images for the character.html page
function hideCharacterImages() {
	let characterDiv = document.getElementById("character-div")
	if (characterDiv.style.display == "") {
		characterDiv.style.display = "none"
		document.getElementById("character-img-hidden-btn").innerHTML = "Show Characters"

	} else {
		characterDiv.style.display = ""
		document.getElementById("character-img-hidden-btn").innerHTML = "Hide Characters"
	}
}
// Events: Character selection 
Object.keys(confidant["confidant"]).forEach(element => {
	document.getElementById(element).addEventListener('click', () => {
		confidantName(element)
	})
})
// Events: Character hidden button/show button
document.getElementById("character-img-hidden-btn").addEventListener('click', () => {
	hideCharacterImages()
})

