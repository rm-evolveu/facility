import React from 'react';

class CityInfoDisplay extends React.Component {


    render () {

        return <div className="cityCard">
                    <div className="wideColumn1">
                            Most Northern City:
                    </div>
                    <div className="wideColumn2">
                        {this.props.mostNorthern}
                    </div>
                    <div className="wideColumn1">
                            Most Southern City:
                    </div>
                    <div className="wideColumn2">
                        {this.props.mostSouthern}
                    </div>
                    <div className="wideColumn1">
                            Total Population:
                    </div>
                    <div className="wideColumn2">
                        {this.props.totalPopulation}
                    </div>
                    <div className="widestColumn">
                        
                    </div>                    
                    <div className="widestColumn infoMessage">
                        {this.props.message}
                    </div>
                </div>

    }

}

export { CityInfoDisplay } ;