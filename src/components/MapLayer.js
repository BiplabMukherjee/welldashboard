import React from 'react';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
//import {Icon} from 'leaflet';
import './MapLayer.css'
//Imported Array of coordinates have to be reversed so that its in the form of Lat and Long.

const MapLayer =(props)=>{
    var pos = props.props;
    var wellname = props.wellname;
    
    return(
        <Map center={[pos[0][1],pos[0][0]]} zoom={15}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {pos.map((item,i) =>(
                <Marker key= {i} position={[item[1],item[0]]}>
                    <Popup>
                        <h3>{wellname[i]}</h3>
                    </Popup>
                </Marker>
            ))}
        </Map>
    );
}

export default MapLayer;