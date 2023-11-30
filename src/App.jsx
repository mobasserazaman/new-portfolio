import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import { useState } from 'react';
import { EXAMPLES } from './data.js';
/**
 * By default, React components execute only once. 
 * You have to 'tell' React if a component should be executed again. 
 * 
 * Only call Hooks inside of Component Functions
 * Only call Hooks on the top level (not inside conditions/ other functions)
 */
function App() {
  //let tabContent = 'Please click a button'; -> regular variable will not update UI, we need state variables
  const [tabContent, setTabContent] = useState();


  function handleSelect(selectedButton) {
    //selectedButton -> 'components', 'jsx', 'props', 'state
    //tabContent = selectedButton; -> will not trigger App component to re-render
    setTabContent(selectedButton) //will trigger re-render
    console.log(tabContent)
    //updated val only available after re-render (notice : will see old state val if logged immediately)
  }

  console.log('APP COMPONENT RENDERING')

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => <CoreConcept key={item.title}  {...item}></CoreConcept>)}
            {/**
             * <CoreConcept
              title='Components'
              description='The core UI building block.'
              image={componentsImg}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image} />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcept {...CORE_CONCEPTS[3]} />
             */}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={tabContent === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={tabContent === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={tabContent === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={tabContent === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {/*!tabContent ?
            <p>Please select a topic.</p>
            :
            <div id='tab-content'>
              <h3>{EXAMPLES[tabContent].title}</h3>
              <p>{EXAMPLES[tabContent].description}</p>
              <pre>{EXAMPLES[tabContent].code}</pre>
            </div>
          */}
          {
            !tabContent && <p>Please select a topic.</p>
          }
          {
            tabContent && <div id='tab-content'>
              <h3>{EXAMPLES[tabContent].title}</h3>
              <p>{EXAMPLES[tabContent].description}</p>
              <pre>{EXAMPLES[tabContent].code}</pre>
            </div>
          }
        </section>
      </main>
    </div>
  );
}

export default App;
