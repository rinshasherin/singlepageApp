import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <>
    <div className="container mt-3 p-3">
        <h2 className="text-center mb-3">Contact Us</h2>
        <textarea name="" id="" placeholder='Share Your Thoughts Here' className='form-control w-50'></textarea>
        <button className="btn btn-success mt-3">Send</button>
        <div className="text-center mt-3">
            <Link to={'/'} className="btn btn-secondary me-3">Home</Link>
            <Link to={'/abt'} className="btn btn-primary">More About Us</Link>
        </div>
    </div>

    </>
  )
}

export default Contact