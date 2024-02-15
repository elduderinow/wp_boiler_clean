//example voor google maps building
const proto = {
    position: {lat: 51.328746, lng: 4.5280663},
    map: '',
    marker: '',
    init() {
        proto.buildMaps();
    },
    buildMaps() {
        proto.map = new google.maps.Map(document.getElementById('js-map'), {
            center: proto.position,
            zoom: 15,
            disableDefaultUI: true
            // styles: [
            //     {
            //         'featureType': 'water',
            //         'elementType': 'geometry.fill',
            //         'stylers': [
            //             {
            //                 'color': '#b4b4b4'
            //             }
            //         ]
            //     },
            //     {
            //         'featureType': 'water',
            //         'elementType': 'labels.text.fill',
            //         'stylers': [{'color': '#696969'}]
            //     },
            //     {
            //         'featureType': 'transit',
            //         'stylers': [
            //             {
            //                 'color': '#808080'
            //             },
            //             {
            //                 'visibility': 'off'
            //             }
            //         ]
            //     },
            //     {
            //         'featureType': 'road.highway',
            //         'elementType': 'geometry.stroke',
            //         'stylers': [
            //             {
            //                 'visibility': 'on'
            //             },
            //             {
            //                 'color': '#c5c5c5'
            //             }
            //         ]
            //     },
            //     {
            //         'featureType': 'road.highway',
            //         'elementType': 'geometry.fill',
            //         'stylers': [
            //             {
            //                 'color': '#ffffff'
            //             }
            //         ]
            //     },
            //     {
            //         'featureType': 'road.local',
            //         'elementType': 'geometry.fill',
            //         'stylers': [
            //             {
            //                 'visibility': 'on'
            //             },
            //             {
            //                 'color': '#ffffff'
            //             },
            //             {
            //                 'weight': 1.8
            //             }
            //         ]
            //     },
            //     {
            //         'featureType': 'road.local',
            //         'elementType': 'geometry.stroke',
            //         'stylers': [
            //             {
            //                 'color': '#d7d7d7'
            //             }
            //         ]
            //     },
            //     {
            //         'featureType': 'poi',
            //         'elementType': 'geometry.fill',
            //         'stylers': [
            //             {
            //                 'visibility': 'on'
            //             },
            //             {
            //                 'color': '#ebebeb'
            //             }
            //         ]
            //     },
            //     {
            //         'featureType': 'administrative',
            //         'elementType': 'geometry',
            //         'stylers': [
            //             {
            //                 'color': '#a7a7a7'
            //             }
            //         ]
            //     },
            //     {
            //         'featureType': 'road.arterial',
            //         'elementType': 'geometry.fill',
            //         'stylers': [
            //             {
            //                 'color': '#ffffff'
            //             }
            //         ]
            //     },
            //     {
            //         'featureType': 'road.arterial',
            //         'elementType': 'geometry.fill',
            //         'stylers': [
            //             {
            //                 'color': '#ffffff'
            //             }
            //         ]
            //     },
            //     {
            //         'featureType': 'landscape',
            //         'elementType': 'geometry.fill',
            //         'stylers': [
            //             {
            //                 'visibility': 'on'
            //             },
            //             {
            //                 'color': '#efefef'
            //             }
            //         ]
            //     },
            //     {
            //         'featureType': 'road',
            //         'elementType': 'labels.text.fill',
            //         'stylers': [
            //             {
            //                 'color': '#696969'
            //             }
            //         ]
            //     },
            //     {
            //         'featureType': 'administrative',
            //         'elementType': 'labels.text.fill',
            //         'stylers': [
            //             {
            //                 'visibility': 'on'
            //             },
            //             {
            //                 'color': '#737373'
            //             }
            //         ]
            //     },
            //     {
            //         'featureType': 'poi',
            //         'elementType': 'labels.icon',
            //         'stylers': [
            //             {
            //                 'visibility': 'off'
            //             }
            //         ]
            //     },
            //     {
            //         'featureType': 'poi',
            //         'elementType': 'labels',
            //         'stylers': [
            //             {
            //                 'visibility': 'off'
            //             }
            //         ]
            //     },
            //     {
            //         'featureType': 'road.arterial',
            //         'elementType': 'geometry.stroke',
            //         'stylers': [
            //             {
            //                 'color': '#d6d6d6'
            //             }
            //         ]
            //     },
            //     {
            //         'featureType': 'road',
            //         'elementType': 'labels.icon',
            //         'stylers': [
            //             {
            //                 'visibility': 'off'
            //             }
            //         ]
            //     },
            //     {},
            //     {
            //         'featureType': 'poi',
            //         'elementType': 'geometry.fill',
            //         'stylers': [
            //             {
            //                 'color': '#dadada'
            //             }
            //         ]
            //     }
            // ]
        });

        proto.marker = new google.maps.Marker(
            {
                position: proto.position,
                icon: '../wp-content/themes/acta-theme/images/mapsicon.svg',
                map: proto.map
            }
        );
    }
};

export default Object.create(proto);
