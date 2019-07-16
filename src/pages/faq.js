import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import 'materialize-css/dist/css/materialize.min.css';
import UserLicence from './../pdfs/Appxiety-End-User-License-Agreement-EULA.pdf'
import PrivacyPolicy from './../pdfs/appxiety-privacy-policy.pdf'
import TermsConditions from './../pdfs/Appxiety-Terms-Conditions.pdf'
/*import appStoreImage from './../Images/appStore.png';
import playStoreImage from './../Images/playstore.png';
import appxietyImage from './../Images/appxiety_Ynk_icon.ico';
import './../App.css';
*/



//Main SPA Navigation

const header1 = <h1>
Frequently Asked Questions</h1>;

function mainPage(props) {

    return (
      <Layout>
        <React.Fragment>          
                {header1}
<body>
<div class="faq">
   <ul>
   <li><a href="#question1"><i class="material-icons">lightbulb_outline</i> How does Appxiety work?</a>   
   <div id="question1">When you log into the app, you will be presented with two fires. One is for if you feel a panic attack coming along. The other for when you're in the midst of a panic attack.

Pressing either fire will connect you with other users on the app that you can speak to. The fires just let the person on the other end know what you are currently feeling. </div>
   </li>
   <li><a href="#question2"><i class="material-icons">lightbulb_outline</i> Where can I find the Appxiety app?</a>   
   <div id="question2"><p>Appxiety can currently be downloaded from the Apple App Store on all iOS devices with updated software. Android and Windows users we apologise, we will be with you soon! #SoonCome</p></div>
   </li>
    <li><a href="#question3"><i class="material-icons">lightbulb_outline</i> How is Appxiety different to other apps that deal with mental health?</a>   
   <div id="question3"><p>Glad you asked! We felt who better to talk to about what you're going through than somebody who is also going through the same thing. There is something powerful in empathy and we wanted to use that as a stepping stone for helping individuals with anxiety.</p></div>
   </li>
    <li><a href="#question4"><i class="material-icons">lightbulb_outline</i> Why are you all so damn awesome?!</a>   
   <div id="question4"><p>Ugh, I know right?! Such a burden at times. I mean, we didn't know we'd grow up to be THIS awesome. We thought, maybe like, awesome-awesome but not like WTF-SUPER-AWESOME. I guess it's just something we will have to live with #OhTheBurdensOfLife </p></div>
   </li>
    <li><a href="#question5"><i class="material-icons">lightbulb_outline</i> Where can I find your Privacy Policy, T&C's and EULA?</a>   
   <div id="question5"><p>Glad you asked! You can find them just below in PDF format :)</p>
    <a href= {UserLicence} class="waves-effect waves-light btn"><i class="material-icons left">picture_as_pdf</i>User Licence (EULA)</a>
    <a href= {PrivacyPolicy} class="waves-effect waves-light btn"><i class="material-icons left">picture_as_pdf</i>Privacy Policy</a>
    <a href= {TermsConditions} class="waves-effect waves-light btn"><i class="material-icons left">picture_as_pdf</i>T&C</a></div>
   </li>
   </ul>  
</div>
  
             </body>    
        </React.Fragment>
        </Layout>
    
    );

}


export default mainPage;



