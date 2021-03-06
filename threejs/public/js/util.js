import * as THREE from '../build/three.module.js';
import { GLTFLoader } from '../jsm/loaders/GLTFLoader.js';
export var moveForward = false;
export var moveBackward = false;
export var moveLeft = false;
export var moveRight = false;

export function loadgltfModel(modelURL,scene) {
    var loader = new GLTFLoader();
    loader.load(
        // resource URL
        modelURL,
        // called when the resource is loaded
        function ( gltf ) {
            scene.add( gltf.scene );
            },
            // called while loading is progressing
            function ( xhr ) {
                
                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
                
            },
            // called when loading has errors
            function ( error ) {
                console.log( 'An error happened' + error);
            }
    );
}

    // A key has been pressed
export function onKeyDown(event) {

    switch (event.keyCode) {

    case 38: // up
    case 87: // w
        moveForward = true;
        break;

    case 37: // left
    case 65: // a
        moveLeft = true;
        break;

    case 40: // down
    case 83: // s
        moveBackward = true;
        break;

    case 39: // right
    case 68: // d
        moveRight = true;
        break;
    }
}


// A key has been released
export function onKeyUp(event) {

        switch (event.keyCode) {

        case 38: // up
        case 87: // w
            moveForward = false;
            break;

        case 37: // left
        case 65: // a
            moveLeft = false;
            break;

        case 40: // down
        case 83: // s
            moveBackward = false;
            break;

        case 39: // right
        case 68: // d
            moveRight = false;
            break;
        }
    }

export function dumpObject(obj, lines = [], isLast = true, prefix = '') {
    const localPrefix = isLast ? '└─' : '├─';
    lines.push(`${prefix}${prefix ? localPrefix : ''}${obj.name || '*no-name*'} [${obj.type}]`);
    const newPrefix = prefix + (isLast ? '  ' : '│ ');
    const lastNdx = obj.children.length - 1;
    obj.children.forEach((child, ndx) => {
        const isLast = ndx === lastNdx;
        dumpObject(child, lines, isLast, newPrefix);
    });
    return lines;
}

