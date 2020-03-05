import React from 'react';

class CityInfoDisplay extends React.Component {

    constructor (props) {
        super (props);
        this.state = {
            blink: true
        }

    }

    componentDidMount () {

        setTimeout( 
            () => { 
                this.setState( {blink: false } )
            } ,
            2000)

    }

    render () {

        const messageClass = this.state.blink ? "widestColumn infoMessageEntryAnimation" : "widestColumn infoMessage" 

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
                        <button onClick={this.props.fetchHandler}>Fetch</button> 
                    </div>                    
                    <div className={messageClass}>
                        {this.props.message}
                    </div>
                </div>

    }

}

export { CityInfoDisplay } ;