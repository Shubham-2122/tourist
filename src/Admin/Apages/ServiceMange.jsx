import React, { useEffect, useState } from 'react'
import Aheader from '../Acomo_compo/Aheader'
import Afooter from '../Acomo_compo/Afooter';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';

function ServiceMange() {


    const [data, setdata] = useState([])


    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/service")
        console.log(res.data)
        setdata(res.data)
    }


  return (
    <div>
        <Aheader desc="Service manage data" />
        <div className="container">
                <h1>Manage Service data</h1>
                <MDBTable>
                    <MDBTableHead>
                        <tr className='text-center'>
                            <th scope='col'>#id</th>
                            {/* <th scope='col'>Icon</th> */}
                            <th scope='col'>Title</th>
                            <th scope='col'>Desc</th>
                            <th scope='col'  colSpan={3} >Action</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {
                            data && data.map((item) => {
                                return (
                                    <tr className='text-center' key={item.id}>
                                        <th scope='row'>{item.id}</th>
                                        {/* <td>{item.icon}</td> */}
                                        <td>{item.title}</td>
                                        <td>{item.desc}</td>
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

export default ServiceMange
