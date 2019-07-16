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
        
        image: 'https://freeiconshop.com/wp-content/uploads/edd/google-play-badge.png',
        imgAltText:'null',
        content: '#AppxietyHero Google play store',
        alttext:'link',
        link:'www.google.com'
    },
    {
        
        image: 'https://freeiconshop.com/wp-content/uploads/edd/google-play-badge.png',
        imgAltText:'null',
        content: '#AppxietyHero App store',
        alttext:'link',
        link:'www.google.com'
    }
];

//Main SPA Navigation

const header1 = <h1>
#Appxiety</h1>;

function mainPage(props) {
    return (
      <Layout>
        <React.Fragment>
          
                {header1}
                <p>
                    "Hey everybody! For a while now I've suffered from anxiety
                    and what really helps me is talking to other people. Not
                    always necessarily about the anxiety per se, just any
                    conversation takes my mind off of it. Sometimes just knowing
                    somebody is there, is all I need. The problem is... somebody
                    isn't always there.
                </p>
                <p>
                    People have work, family, other friends (how dare they lol)
                    so they're not always available when I'm feeling anxious or
                    having a panic attack. <br /> This is why I created
                    "Appxiety".
                </p>
                <p>
                    The way that it work is, you turn yourself online and you
                    can call or message other people on the app when you're
                    feeling anxious or having a panic attack. In the same way,
                    if you feel like helping out others, you can take an
                    incoming call or message from somebody else and be a true
                    #AppxietyHero".
                </p>
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



