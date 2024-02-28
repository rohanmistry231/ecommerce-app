import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import blog from "../images/blog-1.jpg";
import Container from "../components/Container";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <HiOutlineArrowLeft className="fs-4" />
                  Go Back to Blogs
                </Link>
                <h3 className="title">
                  A Beautiful Sundav Mornina Renaissance
                </h3>
                <img src={blog} alt="blog" />
                <p>
                  You're only as good as your last collection, which iS an
                  enormous pressure. think there is something about luxury -
                  it's not something people need. but it'S what they want. It
                  really pulls at their heart. I have a fantastic relationship
                  with moneyScelerlsque sociosqu ullamcorper urna niSl molllS
                  vestibulum pretlum commodo inceptos cum condimentum placerat
                  diam venenatis blandit hac eget dis lacus a parturient a
                  accumsan njsl ante vestibulum.
                </p>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default SingleBlog;
