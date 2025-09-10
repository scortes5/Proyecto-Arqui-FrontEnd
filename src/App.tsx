import "./App.css";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import { PropertiesSection } from "./components/Property/PropertiesSection";
import { properties } from "./examples";
import useCustomHookAwaitAxios from "./hooks/useCustomHook";
import type { Property } from "./types/types";

function App() {
  return (
    <Layout>
      <Navbar></Navbar>
      <PropertiesSection properties={properties} />
    </Layout>
  );
}

export default App;
