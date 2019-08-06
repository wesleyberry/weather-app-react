import React, { Component } from 'react';
import API from '../utils/Api';

class Page extends Component {
    state = {
        city: "",
        description: "",
        icon: "",
        temperature: "",
        windSpeed: "",
        humidity: "",
        visibility: "",
        high: "",
        low: "",
        sunrise: "",
        sunset: ""
    };

    componentDidMount() {
        this.hitAPI();
    };

    checkState() {
        // console.log(this.state);
    };

    hitAPI = city => {
        API.hitAPI('austin')
        .then(res => {
            this.setState({
                city: res.data.name,
                description: res.data.weather[0].description,
                icon: res.data.weather[0].icon,
                temperature: res.data.main.temp,
                windSpeed: res.data.wind.speed,
                humidity: res.data.main.humidity,
                visibility: res.data.visibility,
                high: res.data.main.temp_max,
                low: res.data.main.temp_min,
                sunrise: res.data.sys.sunrise,
                sunset: res.data.sys.sunset
            });
            this.checkState();
        }).catch(err => console.log(err));
    };

    render() {
        return(
            <div>
                <div>Hello World</div>
                <div>{this.state.city}</div>
                <div>{this.state.description}</div>
                <div>{this.state.icon}</div>
                <div>{this.state.temperature}</div>
                <div>{this.state.windSpeed}</div>
                <div>{this.state.humidity}</div>
                <div>{this.state.visibility}</div>
                <div>{this.state.high}</div>
                <div>{this.state.low}</div>
                <div>{this.state.sunrise}</div>
                <div>{this.state.sunset}</div>
            </div>
        );
    };
}

export default Page;