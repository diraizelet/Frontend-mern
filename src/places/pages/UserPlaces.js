import React from "react";

import { useParams } from 'react-router-dom';
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [ 
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'Famous SkyScraper',
        imageUrl: 'https://imgs.search.brave.com/KNIgN3TVstsZcgbMM_3uBkZlqGv-eISTfZYggZD9Ro8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vMjQvMTUwOTI0/LTEzOC03QTU0MUJD/MC9FbXBpcmUtU3Rh/dGUtQnVpbGRpbmct/TmV3LVlvcmstQ2l0/eS5qcGc_dz04MDAm/aD00NTAmYz1jcm9w',
        address: '350 Fifth Avenue, New York, NY 10118, USA',
        location:{
            lat:  40.748817,
            lng:-73.985428
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'Famous SkyScraper',
        imageUrl: 'https://imgs.search.brave.com/KNIgN3TVstsZcgbMM_3uBkZlqGv-eISTfZYggZD9Ro8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vMjQvMTUwOTI0/LTEzOC03QTU0MUJD/MC9FbXBpcmUtU3Rh/dGUtQnVpbGRpbmct/TmV3LVlvcmstQ2l0/eS5qcGc_dz04MDAm/aD00NTAmYz1jcm9w',
        address: '350 Fifth Avenue, New York, NY 10118, USA',
        location:{
            lat:  40.748817,
            lng:-73.985428
        },
        creator: 'u2'
    }
];

const UserPlaces = props =>{

    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces}/>;

};

export default UserPlaces;