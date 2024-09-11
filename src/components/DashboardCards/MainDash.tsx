import { Graph1 } from "../Graphs/Graph1";
import { Graph2 } from "../Graphs/Graph2";


//* Element main 
export const MainDash = () => {

    return (

        <>

        <div>
            <div className="container-lg m-2" style={{width: "1069px",  height: "80vh",}}>
                <div className="row text-center">
                    <div className="col-12 col-lg-6 g-1 ms-1">
                        <div>
                            <Graph1/>
                        </div>
                    </div>

                    <div className="col-12 g-1 ms-1">
                        <div>
                            <Graph2/>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>

        </>
    ) ;
}