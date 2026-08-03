GEOGRAPHY.JS
Ogallala Aquifer Impact Project

Purpose:
- Official Ogallala Aquifer boundary
- Eight-state boundary definitions
- Verified community database
- AI Data Center locations
- Geographic projection utilities

Beginning with Commit #217.
==========================================================
*/

const Geography = {};
/*
==========================================================
PROJECT COORDINATE SYSTEM
==========================================================
*/

Geography.map = {
    width: 500,
    height: 500,

    north: 43.60,
    south: 32.50,
    west: -105.30,
    east: -95.00
};
Geography.project = function (lat, lon) {
    const map = Geography.map;

    const x =
        ((lon - map.west) / (map.east - map.west)) *
        map.width;

    const y =
        ((map.north - lat) / (map.north - map.south)) *
        map.height;

    return { x, y };
};
