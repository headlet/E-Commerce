import "./App.css";
import Footer from "./public/components/layout/footer";
import NavBar from "./public/components/layout/NavBar";
import AppRoutes from "./public/components/routes/AppRoutes";


function App() {
  return (
    <div className='bg-gray-200'>
    <NavBar />
    <AppRoutes />
    <Footer />
    </div>
  );
}

export default App;
