import React,{useState,useEffect} from 'react'
import "./data.css";

const State = () => {
    const [data , setData] = useState([]);

    const getCovidData =async () =>{
       const resp =await fetch("https://api.covid19india.org/data.json");
       const data = await resp.json();; 
       console.log(data.statewise);
       setData(data.statewise);
    }

    useEffect(() => {
        getCovidData();
    }, []);



    return (
        <>
            
            <div className="container-fluid">
                <div className = "main_heading">
                <h1 className="head"><span className="span">COVID</span>  STATEWISE <span className="span">DATA</span></h1>
            
                <div className = "table-responsive">
                    <table className ="table" >
                        <thead className = "table_head">
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Last Updated</th>
                            </tr>
                        </thead>
                        <tbody className="table_body">
                        {
                            // eslint-disable-next-line array-callback-return
                            data.map((curEle, ind) => {

                                if(curEle.confirmed == 0){}
                                else{
                                    return(
                                        <tr>
                                            <th>{curEle.state}</th>
                                            <td>{curEle.confirmed}</td>
                                            <td>{curEle.recovered}</td>
                                            <td className="deaths">{curEle.deaths}</td>
                                            <td className="active">{curEle.active}</td>
                                            <td>{curEle.lastupdatedtime}</td>
                                        </tr> 
                                    )
                                }
                                
                            })
                        }
                         
                        
                        </tbody>
                    </table>
                </div>   
                </div>
            </div>
        </>
    )
}

export default State
