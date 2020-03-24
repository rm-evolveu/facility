const messages_es_LA = {
    languageLabel: "Español",

    pojoStrings: {
        "Hamlet": "Aldea",
        "Village": "Villa",
        "Town": "Municipalidad",
        "Large town": "Ciudad",
        "City": "Gran Ciudad",

        "Equator": "Ecuador",
        "Northern Hemisphere": "Hemisferio Norte",
        "Southern Hemisphere": "Hemisferio Sur",
    },

    CityInfoDisplay: {
        render: {
            mostNorthernCity: "Ciudad más norteña:",
            mostSouthernCity: "Ciudad más sureña:",
            totalPopulation: "Población total:"
        }
    },
    CityCard: {
        render: {
            cityID: "Ciudad ID:",
            cityName: "Nombre:",
            population: "Población:",
            location: "Ubicación:",
            size: "Tamaño:",
            moveIn: "Instalarse",
            moveOut: "Mudarse",
            pandemize: "Pandemizar",
        }
    },
    CityController: {
        render: {
            name: "Nombre:",
            population: "Población:",
            longitude: "Longitud:",
            latitude: "Latitud:",
            randomize: "Aleatorio",
            genesize: "Génesis"    
        }
    },
    CityComponent: {
        constructor: {
            tryingToLoadCities: "Descargando ciudades...",
        },
        fetchAll: {
            citiesLoadedOK: "Ciudades descargadas correctamente",
            couldNotLoadCities: "Las ciudades no se pudieron descargar",    
        },
        addCityHandler: {
            cityHasBeenCreated: "%s1 han sido creadas",
            weNeedValidCoordinates: "Requerimos de coordinadas validas.",
            weNeedValidPopulation: "No utilice números negativos ni fraccionarios.",
            weNeedCityName: "Queremos que nuestras ciudades tengan nombres",    
        },
        moveInHandler: {
            tryingToEmerge: "Integrando %s1 ciudadanos en %s2...",
            emerged: "%s1 ciudadanos se han integrado a %s2.",
            couldNotEmerge: "No se pudo integrar a %s1 ciudadanos en %s2.",
            noFractions: "No podemos integrar fracciones de ciudadanos.",
            noNegatives: "Podemos integrar ciudadanos únicamente en numeros positivos."    
        },
        moveOutHandler: {
            tryingToVanish: "Desalojando %s1 ciudadanos de %s2...",
            vanished: "Se han desalojado %s1 ciudadanos de %s2.",
            couldNotVanish: "No se pudo deasalojar %s1 ciudadanos de %s2.",
            noGhostCities: "No nos gustan las ciudades fantasma.",
            noFractions: "No podemos desalojar fracciones de ciudadanos.",
            noNegatives: "Podemos desalojar ciudadanos únicamente en numeros positivos."    
        },
        pandemizeHandler: {
            tryingToPandemize: "Pandemizando %s1...",
            pandemized: "%s1 han sido pandemizados.",
            couldNotPandemize: "No se pudieron pandemizar %s1."    
        }
    }
}
export default messages_es_LA;