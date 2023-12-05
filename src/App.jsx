import LayoutContainer from './layout/LayoutContainer';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import MainSection from './layout/MainSection';

function App() {
  return (
    <LayoutContainer>
      <Header />
      <Sidebar />
      <MainSection />
    </LayoutContainer>
  );
}

export default App;
