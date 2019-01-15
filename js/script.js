import { confidant } from './confidant.js';


function confidantName(Name) {
	// retrieves character name
	let characterName = document.getElementById('character-name')
	characterName.innerHTML = ""
	characterName.innerHTML = Name
	// retrieves character arcana
	let characterArcana = document.getElementById('character-arcana')
	characterArcana.innerHTML = ""
	characterArcana.innerHTML = confidant["confidant"][Name]["arcana"]
	// retrieves character requirements for rank 1
	let characterRequirement = document.getElementById('character-requirement')
	characterRequirement.innerHTML = ""
	characterRequirement.innerHTML = confidant["confidant"][Name]["rank"]["rank_1"]["requirement"]

	// retrieves confidant data and loops over it
	let confidantTable = document.getElementById('confidant-table')
	confidantTable.innerHTML = ""
	for (let item in confidant["confidant"][Name]["rank"]) {
		let confidantDate = confidant["confidant"][Name]["rank"][item]["date"]
		let confidantRequirement = confidant["confidant"][Name]["rank"][item]["requirement"]
		let confidantSkillUnlock = confidant["confidant"][Name]["rank"][item]["skills_unlock"]
		let confidantChoice1 = confidant["confidant"][Name]["rank"][item]["choice_1"]["answer"]
		let confidantChoice2 = confidant["confidant"][Name]["rank"][item]["choice_2"]["answer"]
		let confidantChoice3 = confidant["confidant"][Name]["rank"][item]["choice_3"]["answer"]
		let confidantChoice4 = confidant["confidant"][Name]["rank"][item]["choice_4"]["answer"]
		let confidantChoice5 = confidant["confidant"][Name]["rank"][item]["choice_5"]["answer"]

		let div = document.createElement('div')
		div.innerHTML = `
		  <table class="table table-hover">
		  <thead>
		    <tr>
		      <th scope="col">Rank: ${item.replace(/[rank_]/gi, '')}</th>
		      <th scope="col">Date: ${}</th>
		      <th scope="col">Requirement: ${}</th>
		      <th scope="col">Skill Unlock: ${}</th>
		    </tr>
		  </thead>
		  <tbody id="character-tablebody">
		  </tbody>
		</table>
		  <table class="table table-hover">
		  <thead>
		    <tr>
		      <th scope="col">Choice 1: ${}</th>
		    </tr>
		    <tr>
		      <th scope="col">Choice 2: ${}</th>
		    </tr>
		    <tr>
		      <th scope="col">Choice 3: ${}</th>
		    </tr>
		    <tr>
		      <th scope="col">Choice 4: ${}</th>
		    </tr>
		    <tr>
		      <th scope="col">Choice 5: ${}</th>
		    </tr>
		  </thead>
		  <tbody id="character-tablebody">
		  </tbody>
		</table> `
		confidantTable.appendChild(div)

	}	
} 





// Events: Character selection for character_generator.html
Object.keys(confidant["confidant"]).forEach(element => {
	document.getElementById(element).addEventListener('click', () => {
		confidantName(element)
	})
})



