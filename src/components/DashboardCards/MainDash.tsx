

//* Element main 
export const MainDash = () => {

    return (

        <>

        <div>
            <div className="m-2 container-lg" style={{width: "1069px",  height: "80vh",}}>
                <div className="row text-center">
                    <div className="col-12 col-lg-3 ">
                        <div style={{height: "150px", width:"250px", border: "1px solid"}}>
                            col-1
                        </div>
                    </div>

                    <div className="col-12 col-lg-3">
                        <div style={{height: "150px", width:"250px", border: "1px solid"}}>
                            col-2
                        </div>
                    </div>

                    <div className="col-12 col-lg-3">
                        <div style={{height: "150px", width:"250px", border: "1px solid"}}>
                            col-3
                        </div>
                    </div>

                    <div className="col-12 col-lg-3 m-2">
                        <div style={{height: "150px", width:"250px", border: "1px solid"}}>
                            col-4
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        </>
    ) ;
}