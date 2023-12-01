import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import { useState } from 'react';
import { EXAMPLES } from './data.js';
import { PROJECTS } from './data.js';
import Project from './components/Project';
import Social from './components/Social';
import Address from './components/Address';
/**
 * By default, React components execute only once. 
 * You have to 'tell' React if a component should be executed again. 
 * 
 * Only call Hooks inside of Component Functions
 * Only call Hooks on the top level (not inside conditions/ other functions)
 */
function App() {
  //let tabContent = 'Please click a button'; -> regular variable will not update UI, we need state variables
  const [tabContent, setTabContent] = useState('components');
  const [currentProject, setCurrentProject] = useState(0);


  function handleSelect(selectedButton) {
    //selectedButton -> 'components', 'jsx', 'props', 'state
    //tabContent = selectedButton; -> will not trigger App component to re-render
    setTabContent(selectedButton) //will trigger re-render
    console.log(tabContent)
    //updated val only available after re-render (notice : will see old state val if logged immediately)
  }

  function handleProject(selectedButton) {
    //selectedButton -> '1','-1'
    let temp = currentProject;
    temp = temp + selectedButton;
    if (temp >= 0 && temp <= 3) {
      setCurrentProject(temp);
    }

    console.log(selectedButton);
  }

  console.log('APP COMPONENT RENDERING')

  return (
    <div>
      <Header />
      <main>
        <section id='about-me'>
          <p>
          BS Software Engineering | Seeking entry-level opportunities | Former software engineer @HubSpot <br></br><br></br>
          Adaptability has been a cornerstone of my journey, allowing me to navigate diverse challenges with resilience and creativity. In a team setting, I thrive, fostering collaboration and contributing my skills to achieve collective success. One of my strengths lies in effective time management, ensuring tasks are not only completed promptly but also with a focus on quality and efficiency. I have a genuine enthusiasm for acquiring new skills and insights, coupled with a rapid ability to grasp and apply information.

          </p>

        </section>
        <section id='examples'>
          <menu>
            <TabButton isSelected={tabContent === 'components'} onSelect={() => handleSelect('components')}>Education</TabButton>
            <TabButton isSelected={tabContent === 'props'} onSelect={() => handleSelect('props')}>Work Experience</TabButton>
            <TabButton isSelected={tabContent === 'skills'} onSelect={() => handleSelect('skills')}>Skills</TabButton>
          </menu>
          {
            tabContent && <div id='tab-content'>
              <pre>{EXAMPLES[tabContent].description}</pre>
            </div>
          }
        </section>
        <section id="core-concepts">
          <h2>Top 3</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => <CoreConcept key={item.title}  {...item}></CoreConcept>)}
          </ul>

        </section>
        <section id='projects'>
          <h2>Projects</h2>
          <section id='current-project'>
            <menu>
              <button onClick={() => handleProject(-1)}>Prev</button>
              <button onClick={() => handleProject(1)}>Next</button>
            </menu>
            <Project {...PROJECTS[currentProject]} />
          </section>
        </section>
        <section id='contact'>
          <section id='address'>
            <Address></Address>
          </section>
          <section id='social'>
            <Social></Social>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
