import React, { Component } from 'react';

import img from './Images/React-Logo.png' ;

class App extends React.Component {
    render() { 
        return <div className ="App">
            
            <h1 className ="AppText"> hello From React App and webpack  </h1>

            <div >
             
             <img src = {img} alt ="react" width ="1500"/>

            </div>
        </div>;
        
    }
}
 
export default App;