// The program will run the code when open up the index.html
window.onload = () => {

    //set attributes
     let places = staticLoadPlaces();

    //render the places "places"
     renderPlaces(places);
};

// A JavaScript function is a block of code designed to perform a particular task.
function staticLoadPlaces() {
    return [
        {
            name: 'MyModel',
            location: {
                lat: <your-latitude>,
                lng: <your-longitude>,
            }
        },
    ];
}

// A JavaScript function is a block of code designed to perform a particular task.
function renderPlaces(places) {

    //set attributes
    let scene = document.querySelector('a-scene');

    //define the attributes for each place 
    places.forEach((place) => {

        //set attributes
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        //set attributes
        let model = document.createElement('a-entity');

        //load models and postion
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('gltf-model', './assets/MyModel/scene.gltf');

        //set the rotation of the model
        model.setAttribute('rotation', '0 180 0');

        //The AnimationMixer is a player for animations on a particular object in the scene. When multiple objects in the scene are animated independently, one AnimationMixer may be used for each object.
        //Reference: https://threejs.org/docs/#api/en/animation/AnimationMixer
        model.setAttribute('animation-mixer', '');

        //set the rotation of the model
        model.setAttribute('scale', '0.5 0.5 0.5');

        //The addEventListener() method attaches an event handler to a document.
        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        //The appendChild() method appends a node (element) as the last child of an element
        scene.appendChild(model);
    });
}