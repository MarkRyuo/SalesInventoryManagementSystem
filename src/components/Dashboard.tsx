import { SideBar } from "./DashboardCards/Sidebar";
import { Navbar2 } from "./NavBars/Navbar2";



export const Dashboard = () => {

    // * Main Component of dashboard
    return (

        <>
        <div className="container-lg">
            <Navbar2/>
            <SideBar/>
        </div>
        
        </>
    ) ;
}