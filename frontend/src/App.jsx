import "./App.css";
import Footer from "./public/components/layout/footer";
import NavBar from "./public/components/layout/NavBar";
import AppRoutes from "./public/components/routes/AppRoutes";

function App() {
  return (
    <>
    <NavBar />
    <AppRoutes />
    <Footer />
    </>
  );
}

export default App;
