const messages_zh_CN = {
    CityInfoDisplay: {
        render: {
            mostNorthernCity: "最北端的城市：",
            mostSouthernCity: "最南端的城市：",
            totalPopulation: "总人口："
        }
    },
    CityCard: {
        render: {
            cityID: "城市编号：",
            cityName: "城市名称：",
            population: "人口：",
            location: "位置：",
            size: "城市规模:",
            moveIn: "迁入",
            moveOut: "迁出",
            pandemize: "消失",
        }
    },
    CityController: {
        render: {
            name: "姓名：",
            population: "人口：",
            longitude: "经度：",
            latitude: "纬度：",
            randomize: "随机",
            genesize: "诞生"    
        }
    },
    CityComponent: {
        constructor: {
            tryingToLoadCities: "组建城市中。。。",
        },
        fetchAll: {
            citiesLoadedOK: "城市已组建好。",
            couldNotLoadCities: "无法组建城市。",    
        },
        addCityHandler: {
            cityHasBeenCreated: "城市%s1已经创建。",
            weNeedValidCoordinates: "需要给出合理的地理坐标。",
            weNeedValidPopulation: "人口数量不能是负数，也不能是分数。",
            weNeedCityName: "城市需要有名字标识。",    
        },
        moveInHandler: {
            tryingToEmerge: "正在向%s2名人口的居民中迁入%s1名居民。",
            emerged: "已经向拥有%s2名人口的居民中迁入了%s1名居民。",
            couldNotEmerge: "无法向拥有%s2名人口的居民中迁入了%s1名居民。",
            noFractions: "无法处理分数人口。",
            noNegatives: "只能迁入正数人口。"    
        },
        moveOutHandler: {
            tryingToVanish: "正在从%s2名人口的居民中迁出%s1名居民。",
            vanished: "已经从%s2名人口的居民中迁出了%s1名的居民。",
            couldNotVanish: "无法从%s2名人口中令%s1名居民消失。",
            noGhostCities: "不欢迎鬼城哦！",
            noFractions: "无法处理分数数量的居民。",
            noNegatives: "只能令正数数量的居民迁出。"    
        },
        pandemizeHandler: {
            tryingToPandemize: "正在毁灭城市%s1。。。",
            pandemized: "城市%s1已经消失。",
            couldNotPandemize: "无法令城市%s1消失。"    
        }
    }
}
export default messages_zh_CN;