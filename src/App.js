import logo from './logo.svg';
import './App.css';
// import StudentDetails from './StudentFunct/StudentDeta';
// import Cars from './cars/Cars.jsx'
import CarNew from './cars/Cars2props'

function App() {
  return (
    <div className="App">
      
    {/* <Employee/>      for functional components */}
    {/* <StudentDetails sid="10" sname="Manish"/> */}
    {/* <Cars Brand="Hyundai" color="Black" Price="2500000" Model="2022" Engine="3liter"/> */}
    <CarNew Brand="Hyundai" color="Black" Price="2500000" Model="2022" Engine="3liter" />

    </div>
  );
}

export default App;
