import { MainDash } from "./DashboardCards/MainDash";
import { SideBar } from "./DashboardCards/Sidebar";
import { Navbar2 } from "./NavBars/Navbar2";



export const Dashboard = () => {

    // * Main Component of dashboard

    // * aside, navbar, main
    return (
      <>
        <div className="container-lg">
            <Navbar2/>
            <div className="row">
                <div className="col-2">
                    <SideBar/>
                </div>
                <div className="col-4">
                  <MainDash/>
                </div>
            </div>
        </div>
      </>
    );
}