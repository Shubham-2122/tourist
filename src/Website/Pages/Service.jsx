import React, { useEffect, useState } from 'react'
import Header from '../Coman_compo/Header'
import Footer from '../Coman_compo/Footer'
import axios from 'axios'

function Service() {

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
            <div>
                <Header desc="Service" />
                {/* Service Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="section-title bg-white text-center text-primary px-3">Services</h6>
                            <h1 className="mb-5">Our Services</h1>
                        </div>
                        <div className="row g-4">
                            {
                                data.map((item) => {
                                    return (
                                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                                            <div className="service-item rounded pt-3">
                                                <div className="p-4">
                                                    <img src={item.icon} width="100px" alt="" />
                                                    <h5>{item.title}</h5>
                                                    <p>{item.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                {/* Service End */}
                {/* Testimonial Start */}
                <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container">
                        <div className="text-center">
                            <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
                            <h1 className="mb-5">Our Clients Say!!!</h1>
                        </div>
                        <div className="owl-carousel testimonial-carousel position-relative">
                            <div className="testimonial-item bg-white text-center border p-4">
                                <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="img/testimonial-1.jpg" style={{ width: 80, height: 80 }} />
                                <h5 className="mb-0">John Doe</h5>
                                <p>New York, USA</p>
                                <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                            </div>
                            <div className="testimonial-item bg-white text-center border p-4">
                                <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="img/testimonial-2.jpg" style={{ width: 80, height: 80 }} />
                                <h5 className="mb-0">John Doe</h5>
                                <p>New York, USA</p>
                                <p className="mt-2 mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                            </div>
                            <div className="testimonial-item bg-white text-center border p-4">
                                <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="img/testimonial-3.jpg" style={{ width: 80, height: 80 }} />
                                <h5 className="mb-0">John Doe</h5>
                                <p>New York, USA</p>
                                <p className="mt-2 mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                            </div>
                            <div className="testimonial-item bg-white text-center border p-4">
                                <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="img/testimonial-4.jpg" style={{ width: 80, height: 80 }} />
                                <h5 className="mb-0">John Doe</h5>
                                <p>New York, USA</p>
                                <p className="mt-2 mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Testimonial End */}
                <Footer />
            </div>

        </div>
    )
}

export default Service
