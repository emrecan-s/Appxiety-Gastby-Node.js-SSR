import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import 'materialize-css/dist/css/materialize.min.css'
/*import appStoreImage from './../Images/appStore.png';
import playStoreImage from './../Images/playstore.png';
import appxietyImage from './../Images/appxiety_Ynk_icon.ico';
import './../App.css';
*/



//Main SPA Navigation

const header1 = <h1>
Who We Are</h1>;

function mainPage(props) {
    return (
      <Layout>
        <React.Fragment>          
                {header1}

  <div class="section">
    <h5>Let me tell you the story of how Appxiety began...</h5>
    <p>It was a time long before the chaos of humanity. There were only "The First Stars" in the night sky and our planet was in its infancy.<br />At this time, Earth was populated by a race of beings not quite human but not quite godly. A gateway between the two.<br /></p>
  </div>
  <div class="divider"></div>
  <div class="section">
    <h5>We shall call them "The Anxions"... </h5>
    <p>Of this race of super powered and highly intelligent people, a small group got together and etched their fate into being.</p>
  </div>
  <div class="divider"></div>
  <div class="section">
    <h5>They decided that in 2018 they....</h5>
    <p>OK none of this happened but we just FEEL like maybe it did in some alternate universe perhaps.</p>
     <div class="divider"></div>
             <h5>What happened was...</h5>
    <p>A group of kinda nerdy, kinda cool, kinda fantastic, kinda awesome as sh*t individuals felt it was about time there was an anxiety app out there that could help people.</p>
    </div>
    <div class="divider"></div>
  <div class="section">
    <h5>An app that really made a difference to people's lives.</h5>
    <p>So for years and years (read: months) they worked away without sleep, food and water (read: maybe a little of each but not much!</p>
         <p>Now they present to you...</p>
             <p>"Appxiety" in all its glory, greatness, grandeur and other "g" words like this. </p>
  </div>
        
                 
        </React.Fragment>
        </Layout>
    );
}


export default mainPage;



