//loading function

const loadGoogleMaps = (googleApiKey) => {
    let scriptTag = document.createElement('script');
    let scripts = document.getElementsByTagName('script');
    let s = '';

    for (let i = 0; i < scripts.length; i++) {
        if (scripts[i].src.indexOf('main') > -1) {
            s = scripts[i];
        }
    }

    scriptTag.setAttribute('type', 'text/javascript');
    scriptTag.async = true;
    scriptTag.defer = true;
    scriptTag.setAttribute('src', `http://maps.google.com/maps/api/js?key=${googleApiKey}&callback=initMap`);
    s.parentNode.insertBefore(scriptTag, s);
};

export {loadGoogleMaps};
