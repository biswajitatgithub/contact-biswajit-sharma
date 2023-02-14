import './App.css';
import ContactForm from './Components/ContactForm/ContactForm';
import OwnerDetails from './Components/OwnerDetails/OwnerDetails';
function App() {
  const desc = "A Software Engineer having 2+ years of exprerience in developing Web Application using cutting edge technologies like ASP.NET Core(MVC), RESTApi, Razor Pages, HTML, CSS, JS, SCSS etc. I also have basic knowledge of MERN(MongoDB, Express, React, Node), Automation Testing using Selenium(TestNG, NUnit), Performance Testing using JMeter 5";
  return (
    <div className="contact-container">
      <OwnerDetails name="Hi, I am Biswajit Sharma" contact="biswajitsharmait@gmail.com | +91 90647-29292" description={desc} />
      <ContactForm />
    </div>
  );
}

export default App;
