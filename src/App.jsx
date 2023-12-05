import AppLayout from './layout/AppLayout';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Main from './layout/Main';

function App() {
  return (
    <AppLayout>
      <Header />
      <Sidebar />
      <Main />
    </AppLayout>
  );
}

export default App;
