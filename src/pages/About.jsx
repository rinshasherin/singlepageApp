import React from 'react'
import { Link } from 'react-router-dom'

function About() {
    return (
        <>
            <div className="container mt-5">
                <h1 className='text-center mb-4'>About Us</h1>
                <img src="https://img.freepik.com/free-psd/flat-design-portfolio-banner-template_23-2149096813.jpg" alt="" className="img-fluid w-50 mb-4" />
                <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis tenetur explicabo iste, cupiditate incidunt neque quos dolor hic assumenda maiores eveniet! Temporibus magni, quaerat maxime ratione minus repudiandae possimus corrupti. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero dolor quibusdam dolorem obcaecati, cum, aliquam repellendus ipsam quae consequuntur dicta illo perspiciatis itaque vel facilis. Iusto vel quas architecto repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolore unde voluptatem expedita debitis in qui itaque enim corrupti maiores, nulla, numquam veniam? Suscipit officiis possimus iste sint, dignissimos cum!</p>
                <div className='text-center mt-4'>
                    <Link to={'/'} className="btn btn-info me-3">Home</Link>
                    <Link to={'/cnt'} className="btn btn-primary">Contact Us</Link>
                </div>
            </div>

        </>

    )
}

export default About