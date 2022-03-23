// the program will run the code when open up the index.html
window.onload = () => {
  render();
};

// This is the code that handle a model's scale and rotation
// I can add more models here {...}
const models = [
  {
    url: './assets/myModel/scene.gltf',
    scale: '0.5 0.5 0.5',
    rotation: '0 225 0'
  },
];

//define the attribute
let modelIndex = 0;

//define the attribute
const setModel = (model, entity) => {

  //If Conditional Statements
  if (model.position) {
    entity.setAttribute('position', model.position);
  }

  entity.setAttribute('gltf-model', model.url);
};

//function is a block of code designed to perform a particular task
function render() {
  //define scene = 'a-scene'
  const scene = document.querySelector('a-scene');

  navigator.geolocation.getCurrentPosition(function (position) {

    //set attributes
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    //define model = 'a-entity' /set attributes
    const model = document.createElement('a-entity');
    model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

    //set the model
    setModel(models[modelIndex], model);

    //The AnimationMixer is a player for animations on a particular object in the scene. When multiple objects in the scene are animated independently, one AnimationMixer may be used for each object.
    //Reference: https://threejs.org/docs/#api/en/animation/AnimationMixer
    model.setAttribute('animation-mixer', '');

    //The appendChild() method appends a node (element) as the last child of an element
    scene.appendChild(model);
  });
}
