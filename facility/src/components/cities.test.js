import { City } from "./city.js";
import { Cities } from "./cities.js";

test ( "Testing Basic City Functions", () => {

    // expect("").toEqual("");

    const testCities = new Cities;

    const mogadisho = new City("Mogadisho", 100, 5, 10);
    const mogadishoCounter = testCities.addCity(mogadisho);
    expect(testCities.howManyCities()).toEqual(1);
    expect(mogadishoCounter).toEqual(1);
    
    const ouagadougou = new City("Ouagadougou", 100, 5, 10);
    const ouagadougouCounter = testCities.addCity(ouagadougou);
    expect(testCities.howManyCities()).toEqual(2);
    expect(ouagadougouCounter).toEqual(2);

    testCities.deleteCity(mogadishoCounter);
    expect(testCities.howManyCities()).toEqual(1);

    testCities.deleteCity(mogadishoCounter);
    expect(testCities.howManyCities()).toEqual(1);

    testCities.deleteCity(ouagadougouCounter);
    expect(testCities.howManyCities()).toEqual(0);

    testCities.deleteCity(ouagadougouCounter);
    expect(testCities.howManyCities()).toEqual(0);

    const ouagadougouCounter2 = testCities.addCity(ouagadougou);
    expect(testCities.howManyCities()).toEqual(1);
    expect(ouagadougouCounter2).toEqual(3);

    const taipei = new City("Taipei", 50, 40, 30)
    const tainan = new City("Tainan", 20, 10, 0)
    const taipeiCounter = testCities.addCity(taipei)
    const tainanCounter = testCities.addCity(tainan)

    expect(testCities.getName(taipeiCounter)).toEqual("Taipei");
    expect(testCities.getPopulation(taipeiCounter)).toEqual(50);
    expect(testCities.getLongitude(taipeiCounter)).toEqual(40);
    expect(testCities.getLatitude(taipeiCounter)).toEqual(30);
    expect(testCities.whichHemisphere(taipeiCounter)).toEqual("Northern Hemisphere");
    testCities.moveIn(taipeiCounter,1);
    expect(testCities.getPopulation(taipeiCounter)).toEqual(51);
    testCities.moveOut(taipeiCounter,2);
    expect(testCities.getPopulation(taipeiCounter)).toEqual(49);
    expect(testCities.howBig(taipeiCounter)).toEqual("Hamlet");

    expect(testCities.getName(tainanCounter)).toEqual("Tainan");
    expect(testCities.getPopulation(tainanCounter)).toEqual(20);
    expect(testCities.getLongitude(tainanCounter)).toEqual(10);
    expect(testCities.getLatitude(tainanCounter)).toEqual(0);
    expect(testCities.whichHemisphere(tainanCounter)).toEqual("Equator");
    testCities.moveIn(tainanCounter,100);
    expect(testCities.getPopulation(tainanCounter)).toEqual(120);
    testCities.moveOut(tainanCounter,3);
    expect(testCities.getPopulation(tainanCounter)).toEqual(117);
    expect(testCities.howBig(tainanCounter)).toEqual("Village");

})

test ( "Testing Most Northern and Most Southern", () => {

    const testCities = new Cities;

    const mogadisho = new City("Mogadisho", 100, 5, 40);
    const mogadishoCounter = testCities.addCity(mogadisho);

    const saigon = new City("Saigon", 100, 5, -30);
    const saigonCounter = testCities.addCity(saigon);

    expect(testCities.getMostNorthern()).toEqual(mogadishoCounter);
    expect(testCities.getMostSouthern()).toEqual(saigonCounter);

})

test ( "Testing City Roster and total population", () => {

    const testCities = new Cities;

    const mogadisho = new City("Mogadisho", 100, 5, 40);
    const mogadishoCounter = testCities.addCity(mogadisho);

    const fakeTanjavur = new City("Tanjavur", 100, 5, -30);
    testCities.addCity(fakeTanjavur);

    const tanjavur = new City("Tanjavur", 100, 5, -30);
    testCities.addCity(tanjavur);

    testCities.deleteCity(mogadishoCounter);
    expect(testCities.howManyCities()).toEqual(2);
    expect(testCities.getCityList()).toEqual([2, 3]);

    expect(testCities.getTotalPopulation()).toEqual(200);

})
