//<reference path='babylon.d.ts'/>

//Create our canvas
const canvas = document.getElementById("render-canvas");

//Create our engine

const engine = new BABYLON.Engine(canvas,true);


const createScene=()=>{
    //Create our scene
    const scene = new BABYLON.Scene(engine);
    //Create our camera
    const camera = new BABYLON.FreeCamera('camera',new BABYLON.Vector3(0,0,-5),scene);
    //Create a light
    const light = new BABYLON.HemisphericLight('light',new BABYLON.Vector3(0,1,0),scene);
    //Create a Box
    const box = new BABYLON.MeshBuilder.CreateBox('box',{
        size:2.4
    },scene);
    return scene;
    
}


//Create our scene
const mainScene = createScene();
engine.runRenderLoop(()=>{
    mainScene.render();
})
