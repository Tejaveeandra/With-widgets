import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import StudentProfile from './components/StudenntProfiilewithAlerts/StudentProfile/StudentProfile';
import Alerts from './components/StudenntProfiilewithAlerts/Alerts/Alerts'

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
          <Alerts />

        </section>
      </main>
    </div>
  );
}

export default App;