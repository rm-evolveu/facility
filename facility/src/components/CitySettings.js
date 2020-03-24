import React from 'react';

class CityLanguageLabel extends React.Component {
    render () {
        return <div className="wideColumn">
                    <input id={this.props.language} type="radio" name="language" 
                        value={this.props.language} onClick={this.props.languageHandler}
                        defaultChecked={this.props.currentLanguage === this.props.language}
                    />
                    <label htmlFor={this.props.language}>{this.props.languageLabel}</label><br></br>
                </div>
    }
}

class CitySettings extends React.Component {

    render () {

        return <div className="card controllerCard">
                    <div className="widestColumn">Settings</div>

                    { Object.keys(this.props.messages).map (value => {
                            return <CityLanguageLabel language={value} 
                            languageLabel={this.props.messages[value].languageLabel}
                            languageHandler={this.props.languageHandler} key={value}
                            currentLanguage={this.props.currentLanguage} />
                        })
                    }
                </div>
    }
}

export { CitySettings } ;