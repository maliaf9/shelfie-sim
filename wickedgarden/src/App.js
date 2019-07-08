import React, {Component} from 'react';
import ToolBar from './component/ToolBar/ToolBar';
import SideDrawer from './component/SideDrawer/SideDrawer';
import Backdrop from './component/Backdrop/Backdrop';
import InfoCard from './component/InfoCard/InfoCard';
import Home from './component/Home/Home';
import InfoController from './server/controllers/info-controller';




class App extends Component {
  state={
    sideDrawerOpen: false
  }


  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }


  render(){
    let backdrop;

    if(this.state.sideDrawer){
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
  return (
    <div style={{height:'100%'}}>
      <ToolBar drawerClickHandler={this.drawerToggleClickHandler}/>
      <SideDrawer show= {this.state.sideDrawerOpen}/>
      {backdrop}
      <div className="title">
        <Home>Wicked</Home> 
      
        <body>
          <InfoCard />     

        </body>
      </div>
          <InfoController />

     
    </div>
    
  );
}
}



export default App;
