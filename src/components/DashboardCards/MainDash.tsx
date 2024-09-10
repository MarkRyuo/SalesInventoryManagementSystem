import { Navbar2 } from "../NavBars/Navbar2";
import { SideBar } from "./Sidebar";



export const MainDash = () => {

    return (

        <>

        <div className="container-lg">
                <div className="row">
                    <div className="col-12"><Navbar2/></div>
                    <div className="col-12"><SideBar/></div>
                </div>
            </div>

        </>
    ) ;
}