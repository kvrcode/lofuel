// fix npm package issues***

//e85 stations
//first get user location
//find nearest stations within user specified radius
//display each station in a card ----
//card has small img of map view location along with station details

//create react app later with ability to create trip planner similar to Tesla Trip Planner thing

//design similar to google, make super simple and easy to use

//find corn gif to use as data loader animation

// mvc and render all html via js

//init/home view
//hash router?

//nearlocation model --> home view

//searchlocation model --> search view

//e85 or eXX mix calculator model --> calc view

// due to npm issues did not want to upload before issues were addressed?

import 'regenerator-runtime/runtime';
import './app.css';

// model
import NREL from './js/model/NREL';

//view
// import { renderNearbyEthanolStations } from './js/view/'

document.addEventListener('DOMContentLoaded', async () => {
    console.log('app loaded');
    const nrel = new NREL();
    await nrel.getNearbyEthanolStations();
    renderNearbyEthanolStations();
});