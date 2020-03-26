import React from 'react';

class CityInfoDisplay extends React.Component {

    render () {

        return <div className="card two-column controllerCard">
                    <div>
                        {this.props.messages.CityInfoDisplay.render.mostNorthernCity}
                    </div>
                    <div>
                        {this.props.mostNorthern}
                    </div>
                    <div>
                        {this.props.messages.CityInfoDisplay.render.mostSouthernCity}
                    </div>
                    <div>
                        {this.props.mostSouthern}
                    </div>
                    <div>
                        {this.props.messages.CityInfoDisplay.render.totalPopulation}
                    </div>
                    <div>
                        {this.props.totalPopulation}
                    </div>
                    {/* <div>
                        <button onClick={this.props.fetchHandler}>Fetch</button> 
                    </div>                     */}
                    <div className="wideColumnCentered infoMessage">
                        {this.props.message}
                    </div>
                </div>

    }

}

export { CityInfoDisplay } ;