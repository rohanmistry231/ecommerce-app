import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = (props) => {
  return (
    <div className='breadcrumb py-4 mb-0'>
      <div className="container-xxl">
        <div className="row">
            <div className="col-12">
                <p className='text-center mb-0'>
                    <Link to="/" className='text-dark'>Home &nbsp; </Link>/ {props.title}
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BreadCrumb
