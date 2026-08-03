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


const testCircle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
);

testCircle.setAttribute("cx", "250");
testCircle.setAttribute("cy", "250");
testCircle.setAttribute("r", "20");
testCircle.setAttribute("fill", "#ffff00");

svg.appendChild(testCircle);
    
    const stateIds = [
        "08",
        "20",
        "31",
        "35",
        "40",
        "46",
        "48",
        "56"
    ];

    try {
        const usa = await d3.json(
            "https://cdn.jsdelivr.net/npm/us-atlas@3.0.1/states-10m.json"
        );

        const allStates = topojson.feature(
            usa,
            usa.objects.states
        );

        const selectedStates = {
            type: "FeatureCollection",
            features: allStates.features.filter((state) =>
                stateIds.includes(
                    String(state.id).padStart(2, "0")
                )
            )
        };
const projection = d3.geoMercator()
    .fitExtent(
        [[20, 20], [480, 480]],
        selectedStates
    );

this.projection = projection;

const path = d3.geoPath(projection);

        d3.select(svg)
            .selectAll(".geographic-state")
            .data(selectedStates.features)
            .join("path")
            .attr("class", "geographic-state")
            .attr("d", path)
            .attr("fill", "rgba(255,255,255,0.06)")
            .attr("stroke", "#ffffff")
            .attr("stroke-width", "1.5");

        console.log("Eight geographic state boundaries drawn.");

window.dispatchEvent(
    new CustomEvent("mapengine:geography-ready")
);
        
    } catch (error) {
        console.error(
            "Unable to draw state boundaries:",
            error
        );
    }
}
   
};

MapEngine.initialize();
