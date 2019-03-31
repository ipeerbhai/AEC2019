import React, {Component} from 'react';

class BoomView extends Component {
    render() {
        return (
            <a-scene embedded arjs='sourceType: webcam;'>
            <a-marker preset='hiro'>
                <a-entity obj-model="obj: url('/static/img/monkey.obj'); 
                  mtl: url(/static/img/monkey.mtl)">
                </a-entity>
    
            </a-marker>
            <a-entity camera>
            </a-entity>
        </a-scene>
            );
    }
}

export default BoomView;