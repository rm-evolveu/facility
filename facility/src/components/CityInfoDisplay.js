import React from 'react';

class CityInfoDisplay extends React.Component {


    render () {

        return <div className="cityCard">
                    <div className="cityCardRow">
                        <div className="cityCardCell">
                            Most Northern City:
                        </div>
                        <div className="cityCardCell">
                            {this.props.mostNorthern}
                        </div>
                    </div>
                    <div className="cityCardRow">
                        <div className="cityCardCell">
                            Most Southern City:
                        </div>
                        <div className="cityCardCell">
                            {this.props.mostSouthern}
                        </div>
                    </div>
                    <div className="cityCardRow">
                        <div className="cityCardCell">
                            Total Population:
                        </div>
                        <div className="cityCardCell">
                            {this.props.totalPopulation}
                        </div>
                    </div>
                </div>

    }

}

export { CityInfoDisplay } ;