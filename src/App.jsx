import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authServices from "./appwrite/servises/authservice";
import { login, logout } from "./store/store";
import { Hearder, Footer } from "./Component/index";
import { Outlet } from "react-router-dom";
function App() {
  const [isLoading, setisLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const user = authServices
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((err) => err)
      .finally(() => {
        setisLoading(false);
      });

    if (user) {
    }
  }, []);
  return !isLoading ? (
    <div>
      <main>
        <div>
          <Hearder />
        </div>
        <div>
          <Outlet />
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </div>
  ) : (
    <div>....loading</div>
  );
}
export default App;
