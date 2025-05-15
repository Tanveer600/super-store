// Layout/MainLayout.js
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";
import "../App.css";

const MainLayout = ({ children }) => {
  return (
    <div id="layout-wrapper">
      <Header />
      <div className="layout-body">
        <Sidebar />
         <div className="main-content">

            <div className="page-content">
            
        <main className="container-fluid">{children}</main>
      </div>
       </div>
        </div>
        
      <Footer />
    </div>
  );
};

export default MainLayout;
