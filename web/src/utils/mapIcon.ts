import Leaflet from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,

    iconSize: [58, 68],
    //Posição que identifica o ponto
    iconAnchor: [29, 68],
    popupAnchor: [170, 2] //vai andar no eixo X 170px para a direita, e no eixo Y vai andar 2px para baixo
})

export default mapIcon;