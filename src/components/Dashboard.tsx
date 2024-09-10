import { MainDash } from "./DashboardCards/MainDash";
import { Navbar2 } from "./NavBars/Navbar2";



export const Dashboard = () => {

    // * Main Component of dashboard

    // * aside, navbar, main
    return (
      <>
        <div className="container-lg">
            <div className="row">
                <div className="col">
                    <Navbar2/>
                </div>
                <div className="col">
                    <aside/>
                </div>
                <div className="col">
                  <MainDash/>
                </div>
            </div>
        </div>
      </>
    );
}