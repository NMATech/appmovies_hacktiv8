import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { Provider } from "react-redux";
import store from "../store/store";

const Layout = () => {
  return (
    <>
      <Navbar />

      <main className="bg-main-bg_primary min-h-[30em] text-white p-2">
        <Provider store={store}>
          <Outlet />
        </Provider>
      </main>
    </>
  );
};

export default Layout;
