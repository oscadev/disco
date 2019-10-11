import React from 'react';
import { InView } from 'react-intersection-observer'
import './App.css';
import Header from './header';
import Panel1 from './panel1';
import Video from './video';
import Panel2 from './panel2';
import Marquee from './marquee';



function App() {
  
  return (
    <div className="App">
     <Header/>
     <Panel1/>
     <Video/>
     
      <Panel2 
      
      title="EASILY INTERACTIVE" 
      body="No Photo Booth attendant needed. Simple yet Modern design, suitable for all guests"
      pic1="https://cdn.shopify.com/s/files/1/0187/3877/4067/files/Screen_Shot_2019-09-30_at_11.54.01_PM_360x.png?v=1569912876"
      pic2="https://cdn.shopify.com/s/files/1/0187/3877/4067/files/Screen_Shot_2019-09-30_at_11.55.38_PM_360x.png?v=1569912957"
      />
   
  
     
     <Panel2 
     flip={true}
     title="OPEN DESIGN" 
     body="Capture the most of your guests while complementing your venue"
     pic1="https://cdn.shopify.com/s/files/1/0187/3877/4067/files/Screen_Shot_2019-10-01_at_12.02.48_AM_360x.png?v=1569913382"
     pic2="https://cdn.shopify.com/s/files/1/0187/3877/4067/files/Screen_Shot_2019-10-01_at_12.01.56_AM_360x.png?v=1569913400"
     />
     <Panel2 
     flip={false}
     title="DIGITAL CONTENT" 
     body="Receive all your Gifs, Pictures, Boomerangs, and Videos directly via text"
     pic1="https://cdn.shopify.com/s/files/1/0187/3877/4067/files/Screen_Shot_2019-10-01_at_12.11.11_AM_360x.png?v=1569913972"
     pic2="https://cdn.shopify.com/s/files/1/0187/3877/4067/files/Screen_Shot_2019-10-01_at_12.11.20_AM_360x.png?v=1569913952"
     />
     <Marquee/>
     
                    <div className="panel2-title" style={{marginTop:'400px'}}>@DISCOBOOTH</div>
                    <div className="panel2-body">Send us yours <u>@youraccount</u></div>
    <Panel2/>
                
    </div>
  );
}

export default App;
