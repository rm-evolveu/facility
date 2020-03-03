import React from 'react';
import './Cities.css';

class CityCard extends React.Component {


    constructor (props) {
        super(props);
        this.myRef = React.createRef();
    }

    render () {

        return <div className="cityCard">
            <div className="wideColumn1">
                City ID:
            </div>
            <div className="wideColumn2">
                {this.props.counter}
            </div>
            <div className="wideColumn1">
                City Name:
            </div>
            <div className="wideColumn2">
                {this.props.cityName}
            </div>
            <div className="wideColumn1">
                Population:
            </div>
            <div className="wideColumn2">
                {this.props.cityPopulation}
            </div>
            <div className="wideColumn1">
                Location:
            </div>
            <div className="wideColumn2">
                {this.props.cityHemisphere}
            </div>
            <div className="wideColumn1">
                Size:
            </div>
            <div className="wideColumn2">
                {this.props.cityHowBig}
            </div>
            <div className="normalColumn">
                <input type="number" ref={this.myRef}/>
            </div>
            <div className="normalColumn">
                <button 
                    onClick={
                        () => { 
                            console.log("Ou-la-la!",this.myRef.current.value);
                            this.props.moveInHandler(this.props.counter, Number(this.myRef.current.value));
                        }
                    }>
                    Move In
                </button>
            </div>
            <div className="normalColumn">
                <button 
                    onClick={
                        () => { 
                            console.log("Out-la-la!",this.myRef.current.value);
                            this.props.moveOutHandler(this.props.counter, Number(this.myRef.current.value));
                        }
                    }>
                    Move Out
                </button>
            </div>
            <div className="normalColumn">
                <div className="cityCardCell">
                    <button 
                        onClick={
                            () => { 
                                this.props.pandemizeHandler(this.props.counter) 
                            }
                        }>
                        Pandemize
                    </button>
                </div>
            </div>
        </div>
    }
}

export { CityCard } ;