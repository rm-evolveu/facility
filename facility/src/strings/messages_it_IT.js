const messages_it_IT = {
    languageLabel: "Italiano",

	CityInfoDisplay: {
		render: {
			mostNorthernCity: "Città più settentrionale:",
			mostSouthernCity: "Città più meridionale:",
			totalPopulation: "Popolazione totale:"
		}
	},
	CityCard: {
		render: {
			cityID: "ID città:",
			cityName: "Nome della città:",
			population: "Popolazione:",
			location: "Posizione:",
			size: "Taglia:",
			moveIn: "Sposta dentro",
			moveOut: "Sposta fuori",
			pandemize: "Elimina",
		}
	},
	CityController: {
		render: {
			name: "Nome:",
			population: "Popolazione:",
			longitude: "Longitudine:",
			latitude: "Latitudine:",
			randomize: "Rendi casuale",
			genesize: "Creare"
		}
	},
	CityComponent: {
		constructor: {
			tryingToLoadCities: "Tentativo di caricare città ...",
		},
		fetchAll: {
			citiesLoadedOK: "Città caricate ok",
			couldNotLoadCities: "Impossibile caricare le città",
		},
		addCityHandler: {
			cityHasBeenCreated: "%s1 è stato creato",
			weNeedValidCoordinates: "Abbiamo bisogno di coordinate valide.",
			weNeedValidPopulation: "Vogliamo una popolazione non negativa, non frazionaria.",
			weNeedCityName: "Vogliamo che le nostre città abbiano nomi",
		},
		moveInHandler: {
			tryingToEmerge: "Cercando di emergere %s1 cittadini in %s2 ....",
			emerged: "%s1 cittadini emersi in %s2.",
			couldNotEmerge: "Impossibile emergere %s1 cittadini in %s2.",
			noFractions: "Non ci occupiamo di frazioni di cittadini.",
			noNegatives: "Possiamo solo emergere un numero positivo di cittadini"
		},
		moveOutHandler: {
			tryingToVanish: "Sto cercando di sparire %s1 cittadini di %s2...",
			vanished: "Sto cercando di far scomparire %s1 cittadini da %s2 ..",
			couldNotVanish: "Impossibile svanire %s1 cittadini da %s2",
			noGhostCities: "Non ci piacciono le città fantasma.",
			noFractions: "Non ci occupiamo di frazioni di cittadini.",
			noNegatives: "Possiamo solo svanire un numero positivo di cittadini."
		},
		pandemizeHandler: {
			tryingToPandemize: "Prova di cancellare %s1...",
			pandemized: "%s1 è stato cancellato.",
			couldNotPandemize: "Non è stato possibile cancellarlo."
		}
	}
}
export default messages_it_IT;