import { StaggeredMenu } from './components/navigation/StaggeredMenu';
// import { Navbar } from './components/navigation/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import SplashCursor from './components/SplashCursor';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <SplashCursor />
      <StaggeredMenu />
      {/* <Navbar /> */}
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
