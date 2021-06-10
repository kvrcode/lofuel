//currently use browsers built in
//since it brings up a pop up asking user to enable location, some will not allow it
//need checker to see if user disabled this
//bring up form for user to enter location in following formats

// street, city, state, postal code
// street, city, state
// street, postal code
// postal code
// city, state

class Geolocation {
    constructor () {
        this.coords = [];
        this.options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        }
    }

    getCurrentLocationsCoordinates() {
        return new Promise(function(resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        })


        return this.coords
    }
}