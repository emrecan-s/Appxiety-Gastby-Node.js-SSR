import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import 'materialize-css/dist/css/materialize.min.css'
/*import appStoreImage from './../Images/appStore.png';
import playStoreImage from './../Images/playstore.png';
import appxietyImage from './../Images/appxiety_Ynk_icon.ico';
import './../App.css';
*/

const cards = [
    {
        
        image: 'https://pbs.twimg.com/profile_images/1126625068564402176/VV114FWs_400x400.png',
        imgAltText:'null',
        content: 'Instagram',
        alttext:'Contact Us',
        link:'https://www.instagram.com/appxiety/'
    },
    {
        
        image: 'data:image/png;base64,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',
        imgAltText:'null',
        content: 'Twitter',
        alttext:'Contact Us',
        link:'https://twitter.com/appxiety?lang=en'
    }
];


//Main SPA Navigation

const header1 = <h1>
Contact Us</h1>;
function mainPage(props) {
    return (
      <Layout>
        <React.Fragment>          
                {header1}

                  <div className="row"> 
         
           {cards.map((card,index)=>(
        <div className="col m6">    
      <div className="card">
        <div className="card-image">
          <img  alt={card.imgAltText} src={card.image}/>
        </div>
        <div className="card-content">
          <p>{card.content}</p>
        </div>
        <div className="card-action">
          <a href={card.link}>{card.alttext}</a>
        </div>
      </div>
 
 </div>
   ))}
             
  </div> 

               

        </React.Fragment>
        </Layout>
    );
}


export default mainPage;



