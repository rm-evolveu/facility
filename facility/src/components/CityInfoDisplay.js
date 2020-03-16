import React from 'react';

class CityInfoDisplay extends React.Component {

    render () {

        return <div className="card controllerCard">
                    <div className="wideColumn1">
                        {this.props.messages.CityInfoDisplay.render.mostNorthernCity}
                    </div>
                    <div className="wideColumn2">
                        {this.props.mostNorthern}
                    </div>
                    <div className="wideColumn1">
                        {this.props.messages.CityInfoDisplay.render.mostSouthernCity}
                    </div>
                    <div className="wideColumn2">
                        {this.props.mostSouthern}
                    </div>
                    <div className="wideColumn1">
                        {this.props.messages.CityInfoDisplay.render.totalPopulation}
                    </div>
                    <div className="wideColumn2">
                        {this.props.totalPopulation}
                    </div>
                    <div className="widestColumn">
                        <button onClick={this.props.fetchHandler}>Fetch</button> 
                    </div>                    
                    <div className="widestColumn infoMessage">
                        {this.props.message}
                    </div>
                </div>

    }

}

export { CityInfoDisplay } ;