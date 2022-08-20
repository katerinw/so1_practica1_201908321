import React, { Component } from "react";

// Components
import Headerr from '../Components/Header'
import Navbar from '../Components/Navbar'
import DataAuto from "./DataAuto";
import AddAuto from './AddAuto';


export default class Auto extends Component {
    render(){
        const estiloCargar= {
            position: 'absolute',
            margin: '1% 0 0 0',
            top: '200px',
            width: '400px',
            left: '35%', 
        };
        return(
            <div>
                <Headerr/>
                <Navbar 
                />

                <div className='ui two buttons' style={estiloCargar} >
                    <AddAuto/>
                </div>
                <div>
                    <DataAuto/>
                </div>
            </div>
        )
    }
}