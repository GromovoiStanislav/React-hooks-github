import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Profile } from './pages/Profile';

const App = (props) => {
  return (
    <>
      <Navbar />
      <div className="container pt-4">
        <Home />
      </div>
    </>
  );
};

export default App;
