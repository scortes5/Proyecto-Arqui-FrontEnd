import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import { PropertiesSection } from "./components/Property/PropertiesSection";
import { Routes, Route, Outlet } from "react-router-dom";
import { ProfilePage } from "./pages/ProfilePage";
import { BuyRequests } from "./pages/BuyRequests";
import { ProtectedRoute } from "./pages/ProtectedRoute";

function App() {
  return (
    <Layout>
      <Navbar />
      <Routes>
        <Route path="/" element={<PropertiesSection />} />
        <Route
          element={
            <ProtectedRoute>
              <Outlet />
            </ProtectedRoute>
          }
        >
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/buyrequests" element={<BuyRequests />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
