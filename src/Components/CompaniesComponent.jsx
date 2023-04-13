import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SpeedoMeter from './SpeedoMeter';

const CompaniesComponent = () => {
    const [data, setData] = useState([])

    const fetchData = () => {
        fetch("http://localhost:5000/machinelisting")

            .then(response => {
                console.log(response);
                return response.json()
            })
            .then(data => {
                setData(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>    

            <div className="blog-area mt-75 mb-55">
                <div className="container">
                    <div className="row">
                        {data.length > 0 && (
                            <div className="col-xl-12 col-lg-12">
                                <div className="row">
                                    {
                                        data.map((detail) => (
                                         detail.logo &&  detail.company_name  ? (                                            
                                                <div className="col-xl-3">
                                                    <div className="single-smblog mb-30 boxbr">
                                                        <div className="smblog-thum">
                                                            <div className="blog-image w-img">
                                                                {/* <Link to={`http://localhost:3000/companies/${detail._id}`}>
                                                                    <img src={`http://localhost:5001/${detail.logo}`} alt />
                                                                </Link> */}
                                                                 <Link to="http://localhost:3000/companiesDetails" state={{id:`${detail._id}`}} >
                                                                    <img src={`http://localhost:5001/${detail.logo}`} alt />
                                                                </Link> 
                                                                
                                                            </div>
                                                            {/* <div className="blog-tag blog-tag-2">
                        <Link to="/gymEquipment">Gym Equipment</Link>
                      </div> */}
                                                            <p className='pdec'>{detail.company_name}</p>
                                                        </div>
                                                    </div>
                                                </div>                                            
                                        ) : ""
                                        ))

                                    }
                                </div>
                            </div>

                        )
                        }
                    </div>
                </div>
            </div>
        </>
    )};


 export default CompaniesComponent