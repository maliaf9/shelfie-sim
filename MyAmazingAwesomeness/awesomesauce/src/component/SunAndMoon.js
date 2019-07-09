import React, {Component} from 'react';
import './SunAndMoon.scss';

class SunAndMoon extends Component{
    constructor(props){
        super(props);
    }






    render(){
        return (

<div className="sun-moon">
    <div className="switch">
        <div className="string"></div>
        <div className="string"></div>
        <div className="string"></div>
        <div className="handle"></div>
    </div>
    <div className="bg"></div>
    <div className="sun">
        <div className="border">
            <div id="p1" className="point"></div>
            <div id="p2" className="point"></div>
            <div id="p3"className="point"></div>
            <div id="p4"className="point"></div>
            <div id="p5"className="point"></div>
            <div id="p6"className="point"></div>
            <div id="p7"className="point"></div>
            <div id="p8"className="point"></div>
        </div>
        <div className="center"></div>
    </div>
    <div className="moon">
        <div className="center"></div>
        <div className="pattern"></div>
    </div>
    <div className="cloud">
        <div className="circle"></div>
        <div className="platform"></div>
    </div>
</div>

        )

    }
}



export default SunAndMoon;