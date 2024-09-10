import { SideBar } from "./DashboardCards/Sidebar";
import { Navbar2 } from "./NavBars/Navbar2";




export const Dashboard = () => {

    // * Main Component of dashboard
    return (
      <>
        <div className="container-lg">
          <div className="row">
            <div className="col-12"><Navbar2/></div>
            <div className="col-12"><SideBar/></div>
            
          </div>
        </div>
      </>
    );
}