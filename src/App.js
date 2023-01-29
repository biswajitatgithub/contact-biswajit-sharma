import './App.css';
import ContactForm from './Components/ContactForm/ContactForm';
import OwnerDetails from './Components/OwnerDetails/OwnerDetails';
function App() {
  const desc = "A Software Engineer having 2+ years of exprerience in building Full-Stack Web Application using cutting edge technologies like MERN(MongoDB, Express, React, Node), HTML5, CSS3. I do also have knowledge of ASP.NET WebForms, ASP.NET Framework, Automation Testing using Selenium(TestNG, NUnit), Performance Testing using JMeter 5.";
  return (
    <div className="contact-container">
      <OwnerDetails name="Hi, I am Biswajit Sharma" contact="biswajitsharmait@gmail.com | +91 90647-29292" description={desc} />
      <ContactForm />
    </div>
  );
}

export default App;
