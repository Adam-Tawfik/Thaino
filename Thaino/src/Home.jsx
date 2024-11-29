import Header from './Header.jsx';
import './Home.css';
function Home(){
  return (
    <div class="main">
    <div class="container">
      <script type="module" src="/src/main.jsx"></script>
    </div>
    <div class="content">
      <img class="pic" src="public/brain.png" alt="image of brain" />
      <h4 class="h2">Thaino is an AI software that specializes in helping students become better learners and students. Thaino aims to better student grades and help students to have a better experience in high school and beyond.</h4>
    </div>
    
    <div class="reverse-content">
      <div class="picture">
        <img class="pic2" src="public/fun.png" alt="A girl having fun" />
      </div>
      <div class="s">
        <h4 class="para2">Thaino aims to improve student attention spans as well as make school more interesting.</h4>
      </div>
    </div>
    <Header />
  </div>
  );
}

export default Home;