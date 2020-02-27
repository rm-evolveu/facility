import { City } from "./city.js";

test ( "Basic city functions", () => {

    // expect("").toEqual("");
    // City should receive: name, population, longitude, latitude
    const myTestCity = new City("Steve", 100, 5, 10);
    expect(myTestCity.getName()).toEqual("Steve");
    expect(myTestCity.getPopulation()).toEqual(100);
    expect(myTestCity.getLongitude()).toEqual(5);
    expect(myTestCity.getLatitude()).toEqual(10);
    expect(myTestCity.whichHemisphere()).toEqual("Northern Hemisphere");


    const myTestCity2 = new City("Nelson", 200, 11, -6);
    expect(myTestCity2.getName()).toEqual("Nelson");
    expect(myTestCity2.getPopulation()).toEqual(200);
    expect(myTestCity2.getLongitude()).toEqual(11);
    expect(myTestCity2.getLatitude()).toEqual(-6);
    expect(myTestCity2.whichHemisphere()).toEqual("Southern Hemisphere");

    const myTestCity3 = new City("Toronto", -200, -1100, 0);
    expect(myTestCity3.whichHemisphere()).toEqual("Equator");
    expect(myTestCity3.getPopulation()).toEqual(0);
    expect(myTestCity3.getLongitude()).toEqual(-180);


    const myTestCity4 = new City("Bogota", -200, 1100, 100);
    expect(myTestCity4.getLongitude()).toEqual(180);
    expect(myTestCity4.getLatitude()).toEqual(90);

    const startingPopulation5 = 10;
    const myTestCity5 = new City("Beijing", startingPopulation5, 1100, -200);
    let expectedPopulation5 = startingPopulation5;
    expect(myTestCity5.getLatitude()).toEqual(-90);
    expect(myTestCity5.getPopulation()).toEqual(expectedPopulation5);
    
    let howManyMovedIn = 100;
    myTestCity5.moveIn(howManyMovedIn);
    expectedPopulation5 = expectedPopulation5 + howManyMovedIn;
    expect(myTestCity5.getPopulation()).toEqual(expectedPopulation5);

    howManyMovedIn = 200;
    myTestCity5.moveIn(howManyMovedIn);
    expectedPopulation5 = expectedPopulation5 + howManyMovedIn;
    expect(myTestCity5.getPopulation()).toEqual(expectedPopulation5);

    // trying to move in negative, so population does not change
    howManyMovedIn = -1;
    myTestCity5.moveIn(howManyMovedIn);
    expect(myTestCity5.getPopulation()).toEqual(expectedPopulation5);

    let howManyMovedOut = 5
    myTestCity5.moveOut(howManyMovedOut);
    expectedPopulation5 = expectedPopulation5 - howManyMovedOut;
    expect(myTestCity5.getPopulation()).toEqual(expectedPopulation5);

    howManyMovedOut = 1000
    myTestCity5.moveOut(howManyMovedOut);
    // expectedPopulation5 should stay the same;
    expect(myTestCity5.getPopulation()).toEqual(expectedPopulation5);

    // moving out everyone exactly;
    howManyMovedOut = myTestCity5.getPopulation();
    myTestCity5.moveOut(howManyMovedOut);
    expect(myTestCity5.getPopulation()).toEqual(0);

})
    // City – a population > 100,000
    // Large town – 20,001 to 100,000
    // Town – 1,001 to 20,000
    // Village – 101 to 1000
    // Hamlet – population 0 - 100

test ( "How Big", () => {

    const myTestCity = new City("Mexico", 1, 0, 0);
    expect(myTestCity.howBig()).toEqual("Hamlet");
    myTestCity.moveIn(100);
    // expected population 101
    expect(myTestCity.howBig()).toEqual("Village");
    myTestCity.moveIn(899);
    // expected population 1000
    expect(myTestCity.howBig()).toEqual("Village");
    myTestCity.moveIn(1);
    // expected population 1001
    expect(myTestCity.howBig()).toEqual("Town");
    myTestCity.moveIn(18999);
    // expected population 20000
    expect(myTestCity.howBig()).toEqual("Town");

})