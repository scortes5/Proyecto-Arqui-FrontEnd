import "./App.css";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import { PropertiesSection } from "./components/PropertiesSection";
import { properties } from "./examples";

function App() {
  return (
    <Layout>
      <Navbar></Navbar>
      <PropertiesSection properties={properties} />
    </Layout>
  );
}

export default App;
