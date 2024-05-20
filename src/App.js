import logo from './logo.svg';
import './App.css';
const images = require.context('../gallery', true);
var gallery = images.keys().map(image => images(image));;

function App() {
  return (
  <div className="App">
    <link href='https://fonts.googleapis.com/css?family=Jersey 15' rel='stylesheet'></link>
    <h1>Battle Mapper <span style={{fontSize:"30px"}} > &nbsp;&nbsp;&nbsp;&nbsp;  RPG generative AI and a failed idea</span></h1>
    <div id="writing">
        <div id="explanation" class="panel">
        This whole project started with the very simple desire to automate some of the things in my DND 5e campaign that I thought generative AI could help with. 
            The first iteration of this project generated magic items before chatGPT-3.0 changed the AI landscape. That project eventually led to this one. 
            <br />
            <br />
            
            This version is an image generator for battle maps and a text generator for DND 5e monsters. Despite considerable efforts to make a viable website running ads to fund the compute I could not get a video card for 
            cheap enough to run this project. While the map generator is actually fairly handy the monster generator is not helpful in comparison to current generation LLM. 
            In its current state you can run the models yourself or use google collab to run it. 
            <br />
            <br />
            <b>Please use this tool responsibly and with respect.</b> <br />
            
    
        </div>
        <div id="about" class="panel">
          Use the map generator in collab here: <a href="https://colab.research.google.com/drive/1A150Qco-q7ZrDkkel_CIPNvP1c3aBD1E?usp=sharing">Collab</a><br />
          Model used is here: <a href="https://huggingface.co/Angry-Wizard/sd-maps"> Model </a><br />
          Dataset is here: <a href="https://huggingface.co/datasets/Angry-Wizard/rpg_grid_maps"> Dataset </a> <br />
          Looking to reach out for some reason? send an email here: <a href="mailto:schedule.solver@gmail.com">📧</a>
          <br /><br /><br /><br />

          Apreciate the tool and want to contribute to upgrades? <br />
            Want better maps now? Further map resources here: <a href="https://www.kassoon.com/dnd/battle-maps/">Kasson</a>, <a href="https://dicegrimorium.com/free-rpg-map-library/">DG</a>, 
            <a href="https://2minutetabletop.com/product-category/free/">2min</a>, <a href="https://www.reddit.com/r/battlemaps/">Reddit</a>, or considering commissioning an artist
        </div>
  </div>
    

        
    <div id="gallery">
        {/*<span>A RANDOM PROMPT HERE</span><img src="images/test.jpg" alt="AI GENERATED MAP" width="256" height="256">*/}
        {gallery.map((image, index) => (
          <div>
            <span>{ image.split("-")[0].split("/")[3] }</span>
        <img key={index} src={image} alt={"AI GENERATED MAP"} width="256" height="256" />
          </div>
      ))}
    </div>



  </div>

  );
}

export default App;
