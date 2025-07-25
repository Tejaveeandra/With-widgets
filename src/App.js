import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import StudentProfile from './components/StudentProfile/StudentProfile';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <Header />
      </header>

      <main className="app-main">
        <aside className="app-sidebar">
          <Sidebar />
        </aside>
        <section className="app-content">
          <StudentProfile />
        </section>
      </main>
    </div>
  );
}

export default App;