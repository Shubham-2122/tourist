import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Aheader from '../Acomo_compo/Aheader';
import Afooter from '../Acomo_compo/Afooter';
import axios from 'axios';

function PackMange() {

    const [data, setdata] = useState([])


    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/packages")
        console.log(res.data)
        setdata(res.data)
    }
    return (
        <div>
            <Aheader desc="Manage Package data" />
            <div className="container">
                <h1>Manage Package data</h1>
                <MDBTable>
                    <MDBTableHead>
                        <tr className='text-center'>
                            <th scope='col'>#id</th>
                            <th scope='col'>City</th>
                            <th scope='col'>Days</th>
                            <th scope='col'>Person</th>
                            <th scope='col'>Price</th>
                            <th scope='col'  colSpan={3} >Action</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {
                            data && data.map((item) => {
                                return (
                                    <tr className='text-center' key={item.id}>
                                        <th scope='row'>{item.id}</th>
                                        <td>{item.city}</td>
                                        <td>{item.days}</td>
                                        <td>{item.person}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <button className='btn btn-primary'>View</button>
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </MDBTableBody>
                </MDBTable>
            </div>
            <Afooter />
        </div>
    )
}

export default PackMange
