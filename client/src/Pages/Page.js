import React, { Component } from 'react';
import API from '../utils/Api';
import CustomGrid from '../Components/Grid/Grid.js';
import Stepper from '../Components/Stepper/Stepper.js';
import Table from '../Components/Table/Table.js';
import AppBar from '../Components/AppBar/AppBar.js';
import City from '../Components/City/City.js';
import Description from '../Components/Description/Description.js';
import Grid from "@material-ui/core/Grid";
import './Page.css';

class Page extends Component {
    state = {
        search: "",
        city: "",
        main: "",
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
        if(this.state.search === "") {
            city = 'austin';
        } 

        API.hitAPI('austin')
        .then(res => {
            console.log(res.data);
            this.setState({
                city: res.data.name,
                main: res.data.weather[0].main,
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

    // checkMain = this.state.main => {
    //     var main = this.state.main;
    //     if(main === "Thunderstorm") {

    //     }
    // };

    render() {
        return(
            <div>
                <AppBar />
                <CustomGrid>
                    <Grid
                        container
                        direction="row">
                        <City 
                            city={this.state.city} 
                        />
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={1}
                    >
                        <Description 
                            description={this.state.description}
                            icon={this.state.icon}
                        />
                        <Stepper
                        humidity={this.state.humidity}
                        visibility={this.state.visibility}
                        low={this.state.low}
                        high={this.state.high}
                        />
                    </Grid>
                    <Table 
                    sunrise={this.state.sunrise}
                    sunset={this.state.sunset}
                    />
                </CustomGrid>
            </div>
        );
    };
}

export default Page;