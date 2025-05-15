import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./Components/UserLogin";
import Dashboard from "./Components/Dashboard";
// import Transaction from "./Components/Transaction";
// import TransactionAccount from "./Components/TransactionAccount";
import Accounts from "./Components/Accounts";
import Transaction from "./Components/Transaction";
import MainLayout from "./Layouts/MainLayout";
import PrivateRoute from "./Services/PrivateRoute";
import { useState, useEffect } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("user"));

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("user"));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Login Route */}
        <Route path="/" element={<UserLogin setIsLoggedIn={setIsLoggedIn} />} />

        {/* Protected Routes under Layout */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/transaction"
          element={
            <PrivateRoute>
              <MainLayout>
                <Transaction />
              </MainLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/account"
          element={
            <PrivateRoute>
              <MainLayout>
                <Accounts />
              </MainLayout>
            </PrivateRoute>
          }
        /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
