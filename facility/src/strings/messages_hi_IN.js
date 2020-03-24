const messages_hi_IN = {
    languageLabel: "हिंदी",

    pojoStrings: {
        "Hamlet": "छोटा गांव",
        "Village": "गाँव",
        "Town": "नगर",
        "Large town": "बड़ा नगर",
        "City": "शहर",

        "Equator": "भूमध्य रेखा",
        "Northern Hemisphere": "उत्तरी गोलार्द्ध",
        "Southern Hemisphere": "दक्षिणी गोलार्द्ध",
    },

    CityInfoDisplay: {
        render: {
            mostNorthernCity: "सबसे उत्तरी शहर:",
            mostSouthernCity: "सबसे दक्षिणी श:",
            totalPopulation: "कुल जनसंख्या:"
        }
    },
    CityCard: {
        render: {
            cityID: "शहर की आईडी:",
            cityName: "शहर का नाम:",
            population: "आबादी:",
            location: "स्थान:",
            size: "आकार:",
            moveIn: "शामिल करें",
            moveOut: "निकालें",
            pandemize: "महामारी करते हैं",
        }
    },
    CityController: {
        render: {
            name: "नाम:",
            population: "आबादी:",
            longitude: "देशान्तर:",
            latitude: "अक्षांश:",
            randomize: "यादृच्छिक करें",
            genesize: "उत्पन्न"    
        }
    },
    CityComponent: {
        constructor: {
            tryingToLoadCities: "शहरों को लोड करने की कोशिश कर रहा है ...",
        },
        fetchAll: {
            citiesLoadedOK: "शहरों ने लोड किया",
            couldNotLoadCities: "शहरों को लोड नहीं कर सका",    
        },
        addCityHandler: {
            cityHasBeenCreated: "%s1 बनाया गया है",
            weNeedValidCoordinates: "हमें वैध निर्देशांक चाहिए.",
            weNeedValidPopulation: "हम एक गैर-नकारात्मक, गैर-आंशिक जनसंख्या चाहते हैं.",
            weNeedCityName: "हम चाहते हैं कि हमारे शहरों के नाम हों",    
        },
        moveInHandler: {
            tryingToEmerge: "% S2 में% s1 नागरिकों को उभरने की कोशिश कर रहा है...",
            emerged: "%s1 नागरिक %s2 में उभरे।",
            couldNotEmerge: "%s1 में %s1 नागरिक नहीं उभर सके।",
            noFractions: "हम नागरिकों की आंशिक संख्या नहीं करते हैं।",
            noNegatives: "हम केवल नागरिकों की एक सकारात्मक संख्या ही निकाल सकते हैं।"    
        },
        moveOutHandler: {
            tryingToVanish: "%s2 से % s1 नागरिकों को गायब करने की कोशिश की जा रही है...",
            vanished: "%s1 नागरिक %s2 से गायब हो गए । ",
            couldNotVanish: "%s2 से %s1 नागरिकों को गायब नहीं किया जा सका।",
            noGhostCities: "हम भूत शहरों की कल्पना नहीं करते।",
            noFractions: "हम नागरिकों की आंशिक संख्या से नहीं निपटते हैं।",
            noNegatives: "हम केवल एक सकारात्मक संख्या वाले नागरिकों को ही गायब कर सकते हैं।"    
        },
        pandemizeHandler: {
            tryingToPandemize: "%s1 को महामारी करने की कोशिश कर रहे हैं...",
            pandemized: "%s1 को महामारी बना दिया गया है.",
            couldNotPandemize: "%s1 की महामारी नहीं हो सकी."    
        }
    }
}
export default messages_hi_IN;