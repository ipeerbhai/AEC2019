import React from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import { Entity, Scene } from 'aframe-react';

const BoomView = (props) => {
    return (
        <Scene>
            <Entity obj-model="obj: url('/static/img/monkey.obj')"></Entity>
        </Scene>
    );
}

export default BoomView;