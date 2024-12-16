import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <div className='mt-5 container '>
                <div className="row mb-5">

                    <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                        <h1>Portfolio</h1>
                        <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, est! Vel, exercitationem facere nisi vitae ad magni. Placeat praesentium minima minus, dignissimos reprehenderit quaerat aliquam id quisquam iste inventore ut.</p>
                    </div>
                    <div className="col-6">
                        <img src="https://www.swic.edu/wp-content/uploads/2021/05/portfolio.png" alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="text-center">
                    <Link to={'/abt'} className='btn btn-info me-3'>More About Us</Link>
                    <Link to={'/cnt'} className='btn btn-secondary'>Contact Us</Link>
                </div>
            </div>
        </>
    )
}

export default Home