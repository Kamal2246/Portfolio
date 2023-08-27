import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [110, 20, 10],
        center: [-60, 80],
        scale: 250,
      }}
    >
      <Geographies
        geography="/features.json"
        fill="#eccb98"
        stroke="#363636"
        strokeWidth={0.8}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-123, 49]}
        dx={-20}
        dy={10}
        connectorProps={{
          stroke: "	#eb1f1f",
          strokeWidth: 3,
          strokeLinecap: "round",
        }}
      >
        <text
          x="-8"
          textAnchor="end"
          alignmentBaseline="middle"
          fill="	
#eb1f1f"
        >
          {"Surrey BC, Canada"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
