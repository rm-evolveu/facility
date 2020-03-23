import React from 'react';

class CitySettings extends React.Component {

    render () {

        return <div className="card controllerCard">
                    Settings
                    <div className="wideColumn1">
                        <input id="en_CA" type="radio" name="language" 
                                value="en_CA" onClick={this.props.languageHandler} />

                        <label htmlFor="en_CA">English</label><br></br>
                    </div>
                    <div className="wideColumn2">
                        <input id="es_LA" type="radio" name="language" 
                                value="es_LA" onClick={this.props.languageHandler} />
                        <label htmlFor="es_LA">Spanish</label><br></br>
                    </div>

                    <div className="wideColumn1">
                        <input id="hi_IN" type="radio" name="language" 
                                value="hi_IN" onClick={this.props.languageHandler} />
                        <label htmlFor="hi_IN">Hindi</label><br></br>
                    </div>
                    <div className="wideColumn2">
                        <input id="it_IT" type="radio" name="language" 
                                value="it_IT" onClick={this.props.languageHandler} />
                        <label htmlFor="it_IT">Italian</label><br></br>
                    </div>

                    <div className="wideColumn1">
                        <input id="so_SO" type="radio" name="language" 
                                value="so_SO" onClick={this.props.languageHandler} />
                        <label htmlFor="so_SO">Somali</label><br></br>
                    </div>

                    <div className="wideColumn2">
                        <input id="zh_CN" type="radio" name="language" 
                                value="zh_CN" onClick={this.props.languageHandler} />
                        <label htmlFor="zh_CN">Chinese</label><br></br>
                    </div>
                </div>

    }

}

export { CitySettings } ;