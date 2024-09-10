import { SideBar } from "./DashboardCards/Sidebar";
import { Navbar2 } from "./NavBars/Navbar2";




export const Dashboard = () => {

    // * Main Component of dashboard
    return (
      <>
        <div className="container text-center">
          <div className="row">
            <div className="col"><Navbar2/></div>
            <div className="col"><SideBar/></div>
            
          </div>
        </div>
      </>
    );
}