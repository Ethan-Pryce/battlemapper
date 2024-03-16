import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div className="App">
    <div id="generation">
      <div id="output"><img src= "placeholder" alt="A battlemap" ></img></div>
      
      <div id="entry">
        <form method="POST" action="/create">
          <input type="text" placeholder="A battlemap of" id="prompt" name="prompt" ></input>
          <button type="submit">Generate a map</button>
          <button>Add the current map to archive</button>
        </form>
      </div>

      <div id="guide">
        <div id="darules">
          This is a stable diffusion model for generating battlemaps for Fantasy Tabletop Roleplaying Games. It is still a work in progress so please be patient with it. 
          The prompt is automatically set for you so just enter the elements you want. <br />
          <span style={{textAlign:"left"}}>Some useful keywords </span>
            <ul>
              <li>North, South, West, East, Center</li>
              <li>Interior</li>
              <li>Arcane</li>
              <li>Temple</li>
              <li>Magma</li>
              <li>Ornate</li>
              <li>+More</li>
            </ul>
            Please use this tool responsibly and with respect. <br />
            Apreciate the tool and want to contribute to upgrades? Support me here: <a>KOFI</a><br />
            Want better maps now? Further map resources here: <a href="https://www.kassoon.com/dnd/battle-maps/">Kasson</a>, <a href="https://dicegrimorium.com/free-rpg-map-library/">DG</a>, 
            <a href="https://2minutetabletop.com/product-category/free/">2min</a>, <a href="https://www.reddit.com/r/battlemaps/">Reddit</a>, or considering commissioning an artist
        </div>
      </div>

    </div>
    
    <div id="gallery">
        {/*<span>A RANDOM PROMPT HERE</span><img src="images/test.jpg" alt="AI GENERATED MAP" width="256" height="256">*/}
        <div><span>A dark and forboding magma chamber</span><img src="A dark and forboding magma chamber-38228.jpg" alt="AI GENERATED MAP" width="256" height="256"></img></div>
        <div><span>dark lair of a dragon</span><img src="dark lair of a dragon-97757.jpg" alt="AI GENERATED MAP" width="256" height="256"></img></div>
        <div><span>test0</span><img src="test0-52562.jpg" alt="AI GENERATED MAP" width="256" height="256"></img></div>
        <div><span>A pink castle interior sparkly</span><img src="A pink castle interior sparkly-67603.jpg" alt="AI GENERATED MAP" width="256" height="256"></img></div>
        <div><span>""</span><img src="-98797.jpg" alt="AI GENERATED MAP" width="256" height="256"></img></div>
        
    </div>
        


  </div>

  );
}

export default App;
