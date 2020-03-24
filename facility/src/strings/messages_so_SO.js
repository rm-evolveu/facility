const messages_so_SO = {
	languageLabel: "Af-Soomaali",

	pojoStrings: {
        "Hamlet": "Hamlet",
        "Village": "Tuulo",
        "Town": "Magaalo",
        "Large town": "Magaalada weyn",
        "City": "City",

        "Equator": "Caadi",
        "Northern Hemisphere": "Hemisphere waqooyiga",
        "Southern Hemisphere": "Hemisphere koonfurta",
    },

	CityInfoDisplay: {
		render: {
			mostNorthernCity: "Inta badan Waqooyiga Magaalada:",
			mostSouthernCity: "Inta badan Koonfurta Magaalada:",
			totalPopulation: "Wadarta Dadka:"
		}
	},
	CityCard: {
		render: {
			cityID: "Aqoonsiga Magaalada:",
			cityName: "Magaca Magaalada:",
			population: "Dadweynaha:",
			location: "Goobta:",
			size: "Cabbirka:",
			moveIn: "Soo gal",
			moveOut: "Dhaq dhaqaaq",
			pandemize: "Tirtir",
		}
	},
	CityController: {
		render: {
			name: "Magac:",
			population: "Tirada dadka magaalada:",
			longitude: "Dhigaha:",
			latitude: "Lool:",
			randomize: "Isdiyaar",
			genesize: "Abuur"
		}
	},
	CityComponent: {
		constructor: {
			tryingToLoadCities: "Isku dayaya in magaalooyinka la raro..."
		},
		fetchAll: {
			citiesLoadedOK: "Magaalooyinku way raran yihiin ok",
			couldNotLoadCities: "Lama wareejin karo magaalooyinkaas"
		},
		addCityHandler: {
			cityHasBeenCreated: "%s1 Ayaa la abuuray",
			weNeedValidCoordinates: "Waxaan u baahanahay isku-duwayaal ansax ah.",
			weNeedValidPopulation: "Waxaan rabnaa bulsho aan tabanayn, oo aan jajabnayn.",
			weNeedCityName: "Waxaan rabnaa magaalooyinkeenna inay lahaadaan magacyo"
		},
		moveInHandler: {
			tryingToEmerge: "Iskuday inaad soo baxdo %s1 muwaadiniinta jooga %s2...",
			emerged: "%s1 Muwaadiniintu way soo baxeen %s2.",
			couldNotEmerge: "Soo bixi kari waayey %s1 muwaadiniinta jooga %s2.",
			noFractions: "Kama hawlgalinno jajabyada muwaadiniinta.",
			noNegatives: "Waxaan soo saari karnaa tiro muwaadiniin ah oo togan."
		},
		moveOutHandler: {
			tryingToVanish: "Isku dayga in la baabi'iyo %s1 muwaadiniinta ka timid %s2...",
			vanished: "%s1 Muwaadiniintii way lumeen %s2.",
			couldNotVanish: "Kama eryi karo %s1 muwaadiniinta ka timid %s2.",
			noGhostCities: "Kama helno magaalooyingka cidiba daganeyn.",
			noFractions: "Kama hawlgalinno jajabyada muwaadiniinta.",
			noNegatives: "Waxaan baabi'in karnaa tiro muwaadin ah oo togan."
		},
		pandemizeHandler: {
			tryingToPandemize: "Iskudayeynaa inaanu baabino %s1...",
			pandemized: "%s1 laga baabiiyey.",
			couldNotPandemize: "Ma baabiin karo %s1."
		}
	}
}
export default messages_so_SO;