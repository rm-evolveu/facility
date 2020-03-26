import React from 'react';
import './Cities.css';

class CityCard extends React.Component {


    constructor (props) {
        super(props);
        this.myRef = React.createRef();
    }

    render () {

        return <div className="card two-column cityCard">
            <div>
                {this.props.messages.CityCard.render.cityID}
            </div>
            <div>
                {this.props.counter.substring(0,8)}
            </div>
            <div>
                {this.props.messages.CityCard.render.cityName}
            </div>
            <div>
                {this.props.cityName}
            </div>
            <div>
                {this.props.messages.CityCard.render.population}
            </div>
            <div>
                {this.props.cityPopulation}
            </div>
            <div>
                {this.props.messages.CityCard.render.location}
            </div>
            <div>
                {this.props.messages.pojoStrings[this.props.cityHemisphere]}
            </div>
            <div>
                {this.props.messages.CityCard.render.size}
            </div>
            <div>
                {this.props.messages.pojoStrings[this.props.cityHowBig]}
            </div>
            <div className="centered">
                <input type="number" ref={this.myRef}/>
            </div>
            <div className="centered">
                <button 
                    onClick={
                        () => { 
                            this.props.moveInHandler(this.props.counter, Number(this.myRef.current.value));
                        }
                    }>
                    {this.props.messages.CityCard.render.moveIn}
                </button>
            </div>
            <div className="centered">
                <button 
                    onClick={
                        () => { 
                            this.props.moveOutHandler(this.props.counter, Number(this.myRef.current.value));
                        }
                    }>
                    {this.props.messages.CityCard.render.moveOut}
                </button>
            </div>
            <div className="centered">
                <div className="cityCardCell">
                    <button 
                        onClick={
                            () => { 
                                this.props.pandemizeHandler(this.props.counter) 
                            }
                        }>
                        {this.props.messages.CityCard.render.pandemize}
                    </button>
                </div>
            </div>
        </div>
    }
}

export { CityCard } ;