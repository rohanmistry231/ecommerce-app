import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = (prop) => {
  return (
      <div className="blog-card">
        <div className="card-image">
        <img src={prop.imgsrc} className='image-fluid w-100' alt="blog" />
        </div>
        <div className="blog-content">
            <p className='date'>1 Dec, 2024</p>
            <h5 className="title">A beutiful sunday morning renaissance</h5>
            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vitae fugiat fugit expedita repellendus officia voluptates, harum iste nisi dolores.</p>
            <Link to="/blog/:id" className='button'>Read More</Link>
        </div>
      </div>
  )
}

export default BlogCard
