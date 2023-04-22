import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./Routes/Home";
import { Login } from "./Routes/Login/Login";
import { UserStorage } from "./Context/userContext";
import { User } from "./Routes/Conta/User";
import { ProtectedRoutes } from "./Services/ProtectedRoutes";
import { Photo } from "./components/Photo/Photo";
import { UserProfile } from "./Routes/Conta/UserProfile";
import { NotFound } from "./Routes/NotFound";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route
                path="conta/*"
                element={
                  <ProtectedRoutes>
                    <User />
                  </ProtectedRoutes>
                }
              />
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};
export default App;
