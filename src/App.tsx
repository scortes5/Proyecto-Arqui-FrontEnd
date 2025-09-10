import "./App.css";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import { PropertiesSection } from "./components/PropertiesSection";

function App() {
  return (
    <Layout>
      <Navbar></Navbar>
      <PropertiesSection />
    </Layout>
  );
}

export default App;
