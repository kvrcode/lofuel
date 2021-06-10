import 'regenerator-runtime/runtime';

import { NREL_KEY } from './key';
import axios from 'axios';

export default class NREL {
    constructor(){
        this.stations = [];
        this.proxy = 'https://cors-anywhere.herokuapp.com/';
    }

    async getNearbyEthanolStations(location) {
        //change state query to location once i know i am connected and everything

        let url = `https://developer.nrel.gov/api/alt-fuel-stations/v1.json?fuel_type=E85&state=CA&api_key=${NREL_KEY}`;

        if(window.location.hostname === 'localhost') {
            url = this.proxy + url;
        }

        try{

            const results = await axios.get(url);
            this.stations = results.data.fuel_stations;
            console.log(this.stations);

        } catch (error) {
            
            console.error(error);

        }

        return this.stations;
    }
}
