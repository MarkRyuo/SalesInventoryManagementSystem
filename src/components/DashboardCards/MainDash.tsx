import { Graph1 } from "../Graphs/Graph1";


//* Element main 
export const MainDash = () => {

    return (

        <>

        <div>
            <div className="container-lg m-2" style={{width: "1069px",  height: "80vh",}}>
                <div className="row text-center">
                    <div className="col-12 g-1">
                        <div>
                            <Graph1/>
                        </div>
                    </div>

                    <div className="col-12 g-1">
                        <div>
                        
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>

        </>
    ) ;
}