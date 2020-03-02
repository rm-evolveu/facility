import React from 'react';
import './Cities.css';

class CityCard extends React.Component {



    render () {

        return <div className="cityCard">
                    <div className="cityCardRow">
                        <div className="cityCardCell">
                            City ID:
                        </div>
                        <div className="cityCardCell">
                            {this.props.counter}
                        </div>
                    </div>
                    <div className="cityCardRow">
                        <div className="cityCardCell">
                            City Name:
                        </div>
                        <div className="cityCardCell">
                            {this.props.cityName}
                        </div>
                    </div>
                    <div className="cityCardRow">
                        <div className="cityCardCell">
                            Population:
                        </div>
                        <div className="cityCardCell">
                            {this.props.cityPopulation}
                        </div>
                    </div>
                    <div className="cityCardRow">
                        <div className="cityCardCell">
                            Location:
                        </div>
                        <div className="cityCardCell">
                            {this.props.cityHemisphere}
                        </div>
                    </div>
                    <div className="cityCardRow">
                        <div className="cityCardCell">
                            Location:
                        </div>
                        <div className="cityCardCell">
                            {this.props.cityHowBig}
                        </div>
                    </div>
                    <div className="cityCardRow">
                        <div className="cityCardCell">
                            <button 
                                onClick={
                                    () => { console.log("Ou-la-la!") }
                                }>
                                Move In
                            </button>
                        </div>
                        <div className="cityCardCell">
                            <button 
                                onClick={
                                    () => { console.log("Out-la-la!") }
                                }>
                                Move Out
                            </button>
                        </div>
                        <div className="cityCardCell">
                            <button 
                                onClick={
                                    () => { console.log("Pandemize-la-la!") }
                                }>
                                Pandemize
                            </button>
                        </div>
                    </div>

                </div>

    }

}

export { CityCard } ;