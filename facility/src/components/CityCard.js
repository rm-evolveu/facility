import React from 'react';

class CityCard extends React.Component {



    render () {

        return <div>HOWDY CITY CARD: {this.props.cityName} {this.props.cityPopulation}</div>

    }

}

export { CityCard } ;