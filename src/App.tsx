import "./App.css";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import { PropertiesSection } from "./components/Property/PropertiesSection";
import { PropertiesProvider } from "./components/providers/PropertiesProvider";

function App() {
  return (
    <PropertiesProvider>
      <Layout>
        <Navbar></Navbar>
        <PropertiesSection />
      </Layout>
    </PropertiesProvider>
  );
}

export default App;
