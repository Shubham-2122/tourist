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

    // view
    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/packages")
        console.log(res.data)
        setdata(res.data)
    }

    const [fromvalue, setfromvalue] = useState({
        id: "",
        url: "",
        price: "",
        city: "",
        days: "",
        person: "",
        desc: ""
    })
    // delete
    const handledelete = async (id) => {
        const res = await axios.delete(`http://localhost:3000/packages/${id}`)
        console.log(res.data)
        fetchdata();
    }

    const handleview = async (id) => {
        const res = await axios.get(`http://localhost:3000/packages/${id}`)
        console.log(res.data)
        setfromvalue(res.data)
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
                            <th scope='col' colSpan={3} >Action</th>
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
                                            <button className='btn btn-primary' onClick={() => handleview(item.id)} data-bs-toggle="modal" data-bs-target="#exampleModal">View</button>
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger' onClick={() => handledelete(item.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </MDBTableBody>
                </MDBTable>
            </div>
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Package details</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <table className='table'>
                                <tr className='text-center'>
                                    <th scope='col'>#id</th>
                                    <th scope='col'>City</th>
                                    <th scope='col'>Days</th>
                                    <th scope='col'>Person</th>
                                    <th scope='col'>Price</th>
                                    <th scope='col' colSpan={3} >Action</th>
                                </tr>
                                <tr className='text-center'>
                                    <td scope='col'>{fromvalue.id}</td>
                                    <td scope='col'>{fromvalue.city}</td>
                                    <td scope='col'>{fromvalue.days}</td>
                                    <td scope='col'>{fromvalue.person}</td>
                                    <td scope='col'>{fromvalue.price}</td>
                                    <td className="btn btn-secondary" data-bs-dismiss="modal">close</td>
                                </tr>
                            </table>
                        </div>
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        </div> */}
                    </div>
                </div>
            </div>

            <Afooter />
        </div>
    )
}

export default PackMange
