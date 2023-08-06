import Navigation from './components/Navigation';
import Main from './components/Main';
import More from './components/More';
import Contact from './components/Contact';
import { useState } from 'react';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === 0 && <Main />}
      {activeTab === 1 && (
        <More activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
      {activeTab === 2 && (
        <Contact activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
      <Footer />
    </div>
  );
}

export default App;
