import Layout from "./components/Layout";
import Navbar from "./components/Navbar/Navbar";

import { Routes, Route, Outlet } from "react-router-dom";
import { BuyRequests } from "./pages/BuyRequests";
import { ProtectedRoute } from "./pages/ProtectedRoute";
import { LandingPage } from "./pages/LandingPage";
import { Properties } from "./pages/Properties";

function App() {
  return (
    <Layout>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          element={
            <ProtectedRoute>
              <Outlet />
            </ProtectedRoute>
          }
        >
          <Route path="/properties" element={<Properties />} />
          <Route path="/buyrequests" element={<BuyRequests />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
