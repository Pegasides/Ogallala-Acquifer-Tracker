/*
==========================================================
MAP ENGINE 2.0


*/

const MapEngine = {
    version: "2.0",
    initialized: false,

   initialize() {console.log("Initializing Map Engine 2.0 - deployment test");

    this.layer = document.getElementById("map-engine-layer");

if (this.layer) {
    console.log("Map Engine layer found.");

    const svg = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
    );

    svg.setAttribute("id", "geographic-map");
    svg.setAttribute("viewBox", "0 0 500 500");
    svg.setAttribute("width", "500");
    svg.setAttribute("height", "500");

    this.layer.appendChild(svg);


this.drawStateBoundaries(svg);


    
       console.log("Geographic SVG layer created.");
}

  this.initialized = true;
},

async drawStateBoundaries(svg) {
    console.log("State boundary drawing method connected.");
}
};

MapEngine.initialize();
