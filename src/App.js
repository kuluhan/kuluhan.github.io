import logo from './logo.svg';
import './App.css';
import Background from './kuluhan_200.png'

var circle_style = {
  height: "170px",
  width: "170px",
  backgroundImage: `url(${Background})`,
  margin: "0 auto",
  position: "relative",
  backgroundSize: "170px 170px",
  backgroundColor: "#cccccc",
  borderRadius: "50%",
  marginTop: "15px"
};

var publications_link = {
  float: "right", 
  color: "black"
}

var resume_link = {
  textAlign: "center", 
  color: "black"
}

/*
class MyMenu extends React.Component {
  constructor(props) {
      super(props);
      this.addActiveClass= this.addActiveClass.bind(this);
      this.state = {
          active: false,
      };
  }
  toggleClass() {
      const currentState = this.state.active;
      this.setState({ active: !currentState });
  };

  render() {
      return (
        <div className={this.state.active ? 'topnav responsive': 'topnav'}>
          <a href="#home" class="active">Home</a>
          <a href="#publications">Publications</a>
          <a href="#CV">CV</a>
          <a href="#" style={test} class="icon" onClick={this.toggleClass}>&#9776;</a>
        </div>
      )
  }
}*/

/*
<div class="topnav" id="myTopnav">
        <a href="#home" class="active">Home</a>
        <a href="#publications">Publications</a>
        <a href="#CV">CV</a>
        <a href="#" style={test} class="icon">&#9776;</a>
      </div>
*/
function App() {
  return (
    <div>
      <div>
          <div class="square">
            <div style={circle_style}></div>
            <div id="name_text">
              <p>Kuluhan Binici</p>
              <p>Ph.D. Student @ SoC, NUS</p>

              <div class="social_media">
                <i class="fab fa-linkedin"></i>
                <span>
                  <a href="https://www.linkedin.com/in/kuluhan-binici/">/in/kuluhan-binici</a>
                </span>
              </div>
              <div class="social_media">
                <i class="fab fa-github"></i>
                <span>
                  <a href="https://github.com/kuluhan">kuluhan</a>
                </span>
              </div>
              <div class="social_media">
                <i class="far fa-envelope"></i>
                <span id="email">
                  kuluhan.binici[at]gmail.com
                </span>
              </div>
            </div>
          </div>
          <div class="sections">
              <div>
                <h2>About</h2>
                <hr></hr>
                <p>
                  Computer Science PhD student at National University of Singapore. I am passionate about Machine learning and Computer Vision, skilled in problem solving with a strong basis in mathematics, communication and self-learning.
                </p>
              </div>
              <div>
                  <h2>Selected Publications</h2>
                  <hr></hr>
                  <ul>
                    <li>
                      <p><b>Preventing Catastrophic Forgetting and Distribution Mismatch in Knowledge Distillation via Synthetic Data (WACV 2022)</b></p>
                      <p> Kuluhan Binici, Nam Trung Pham, Tulika Mitra, Leman Karianto</p>
                    </li>
                    <li>
                      <p><b>Towards Democratization of Data-Free Knowledge Distillation (AAAI 2022 - hopefully)</b></p>
                      <p> Kuluhan Binici, Nam Trung Pham, Tulika Mitra, Leman Karianto</p>
                    </li>
                    <li>
                      <p><b>Catastrophic Forgetting and Distribution Mismatch in Knowledge Distillation via Synthetic Data (WACV2022)</b></p>
                      <p> Kuluhan Binici, Nam Trung Pham, Tulika Mitra, Leman Karianto</p>
                    </li>
                  </ul>
                  <a href="#publications" style={publications_link}>see all</a>
                  <br></br>
              </div>
              <div>
                  <h2>Download Resume</h2>
                  <hr></hr>
                  <a href="#publications" style={resume_link}>CV / Resume</a>
              </div>
          </div>
      </div>
    </div>
  );
}


/*
<div class="sections">
                <div>
                  <h2>About</h2>
                  <hr></hr>
                  <p>
                    Computer Science PhD student at National University of Singapore. I am passionate about Machine learning and Computer Vision, skilled in problem solving with a strong basis in mathematics, communication and self-learning.
                  </p>
                </div>
                <div>
                  <h2>Selected Publications</h2>
                  <hr></hr>
                  <ul>
                    <li>
                      <p><b>Preventing Catastrophic Forgetting and Distribution Mismatch in Knowledge Distillation via Synthetic Data (WACV 2022)</b></p>
                      <p> Kuluhan Binici, Nam Trung Pham, Tulika Mitra, Leman Karianto</p>
                    </li>
                    <li>
                      <p><b>Towards Democratization of Data-Free Knowledge Distillation (AAAI 2022 - hopefully)</b></p>
                      <p> Kuluhan Binici, Nam Trung Pham, Tulika Mitra, Leman Karianto</p>
                    </li>
                    <li>
                      <p><b>Catastrophic Forgetting and Distribution Mismatch in Knowledge Distillation via Synthetic Data (WACV2022)</b></p>
                      <p> Kuluhan Binici, Nam Trung Pham, Tulika Mitra, Leman Karianto</p>
                    </li>
                  </ul>
                  <a href="#publications" style="float: right; color: black;">see all</a>
                  <br></br>
                </div>
                <div>
                  <h2>Download Resume</h2>
                  <hr></hr>
                  <a href="#publications" style="text-align: center; color: black;">CV / Resume</a>
                </div>
            </div>
*/

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/


/*
function App() {
  return (
    <div classname="topnav" id="myTopnav">
      <a href="#home" class="active">Home</a>
      <a href="#publications">Publications</a>
      <a href="#CV">CV</a>
    </div>
  );
}
*/

export default App;
