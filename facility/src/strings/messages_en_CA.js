const messages_en_CA = {
    languageLabel: "English",

    pojoStrings: {
        "Hamlet": "Hamlet",
        "Village": "Village",
        "Town": "Town",
        "Large town": "Large town",
        "City": "City",

        "Equator": "Equator",
        "Northern Hemisphere": "Northern",
        "Southern Hemisphere": "Southern",
    },

    CityInfoDisplay: {
        render: {
            mostNorthernCity: "Most Northern City:",
            mostSouthernCity: "Most Southern City:",
            totalPopulation: "Total Population:"
        }
    },
    CityCard: {
        render: {
            cityID: "City ID:",
            cityName: "City Name:",
            population: "Population:",
            location: "Location:",
            size: "Size:",
            moveIn: "Move In",
            moveOut: "Move Out",
            pandemize: "Pandemize",
        }
    },
    CityController: {
        render: {
            name: "Name:",
            population: "Population:",
            longitude: "Longitude:",
            latitude: "Latitude:",
            randomize: "Randomize",
            genesize: "Genesize"    
        }
    },
    CityComponent: {
        constructor: {
            tryingToLoadCities: "Trying to load cities...",
        },
        fetchAll: {
            citiesLoadedOK: "Cities loaded ok",
            couldNotLoadCities: "Could not load cities",    
        },
        addCityHandler: {
            cityHasBeenCreated: "%s1 has been created",
            weNeedValidCoordinates: "We need valid coordinates.",
            weNeedValidPopulation: "We want a non-negative, non-fractional population.",
            weNeedCityName: "We want our cities to have names",    
        },
        moveInHandler: {
            tryingToEmerge: "Trying to emerge %s1 citizens in %s2...",
            emerged: "%s1 citizens emerged in %s2.",
            couldNotEmerge: "Could not emerge %s1 citizens in %s2.",
            noFractions: "We don't deal with fractions of citizens.",
            noNegatives: "We can only emerge a positive number of citizens."    
        },
        moveOutHandler: {
            tryingToVanish: "Trying to vanish %s1 citizens from %s2...",
            vanished: "%s1 citizens vanished from %s2.",
            couldNotVanish: "Could not vanish %s1 citizens from %s2.",
            noGhostCities: "We don't fancy ghost cities.",
            noFractions: "We don't deal with fractions of citizens.",
            noNegatives: "We can only vanish a positive number of citizens."    
        },
        pandemizeHandler: {
            tryingToPandemize: "Trying to pandemize %s1...",
            pandemized: "%s1 has been pandemized.",
            couldNotPandemize: "Could not pandemize %s1."    
        }
    }    
}
export default messages_en_CA;