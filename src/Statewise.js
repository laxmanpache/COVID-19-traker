import React,{useState,useEffect} from 'react';
import '../src/State.css';

const Statewise = () => {


     const [data, setstate] = useState([]);
    const getCovidData = async()=>{
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise);
        setstate(actualData.statewise)

    }
    useEffect(() => {
       
        getCovidData();
    }, [])
    return (
        <>
            
           
            <div className="container-fluid mt-5">
                    <div className="main-heading">
                    <h1 className="mt-5 text-center"> <span className="font-weight-bold " className="india"> INDIA &nbsp;</span>  covid 19 tracker App</h1>
                    </div>
                    <div className="table-responsive">
                       <table className="table table-hover">
                           <thead className="table-dark ">
                               <tr>
                                   <th> State</th>
                                   <th> Confirmed</th>
                                   <th> recovered</th>
                                   <th>deaths</th>
                                   <th>actie</th>
                                   <th>update</th>
                               </tr>
                           </thead>
                           <tbody>

                           {
                               data.map((curele,ind)=>{
                                   return(
                                         <tr key={ind}>
                                            <td> {curele.state}</td>
                                            <td> {curele.confirmed}</td>
                                            <td> {curele.recovered}</td>
                                            <td className="daths">{curele.deaths}</td>
                                            <td>{curele.active}</td>
                                            <td>{curele.lastupdatedtime}</td> 
                                        </tr>
                                   );
                               })
                           }
                               
                               
                           </tbody>
                       </table>

                    </div>
             
            
            </div>
        </>
    )
}

export default Statewise
