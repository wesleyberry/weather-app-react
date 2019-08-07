import React, { Component } from 'react';
import API from '../utils/Api';
import Grid from '@material-ui/core/Grid';
import Stepper from '../Components/Stepper/Stepper.js';
import Table from '../Components/Table/Table.js';

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

    componentWillMount() {
        this.hitAPI();
    };

    // componentDidMount() {
    //     this.hitAPI();
    // };

    checkState() {
        // console.log(this.state);
    };

    hitAPI = city => {
        API.hitAPI('austin')
        .then(res => {
            console.log(res.data);
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
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <div>Hello World</div>
                <div>{this.state.city}</div>
                <div>{this.state.description}</div>
                <div>{this.state.icon}</div>
                <div>{this.state.temperature}</div>
                <div>{this.state.windSpeed}</div>
                <Stepper
                humidity={this.state.humidity}
                visibility={this.state.visibility}
                low={this.state.low}
                high={this.state.high}
                />
                <Table 
                sunrise={this.state.sunrise}
                sunset={this.state.sunset}
                />
            </Grid>
        );
    };
}

export default Page;