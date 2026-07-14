import "./App.css";
import Footer from "./pages/public/layout/footer";
import NavBar from "./pages/public/layout/NavBar";
import AppRoutes from "./routes/AppRoutes";


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
