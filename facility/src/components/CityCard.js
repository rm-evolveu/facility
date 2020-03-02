import React from 'react';
import './Cities.css';

class CityCard extends React.Component {


    constructor (props) {
        super(props);
        this.myRef = React.createRef();
    }



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
                            <input type="number" ref={this.myRef}/>
                        </div>
                        <div className="cityCardCell">
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
                        <div className="cityCardCell">
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
                    </div>
                    <div className="cityCardHeader">
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