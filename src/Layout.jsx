import { Outlet, useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Slide, ToastContainer } from "react-toastify";
import "../src/style.css/Home.css";
export const Layout = () => {
  const loading = false;

  return (
    <>
      <ToastContainer
        transition={Slide}
        position="top-center"
        autoClose={1700}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />
      {!loading ? (
        <>
          <div className="layout">
            <Outlet />
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};
