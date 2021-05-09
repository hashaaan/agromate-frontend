import React from "react";
import { Carousel } from "react-bootstrap";
import CustomNavbar from "./layouts/CustomNavbar";
import cr_01 from "../../assets/img/cr_03.jpg";
import cr_02 from "../../assets/img/cr_04.jpg";
import cr_03 from "../../assets/img/cr_02.jpg";

function Home() {
  return (
    <div id="home">
      <CustomNavbar />
      <div className="container home-carousel mt-3">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={cr_01} alt="First slide" />
            <Carousel.Caption>
              <h3>Support and Guidance</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={cr_02} alt="Second slide" />

            <Carousel.Caption>
              <h3>Online Conversations</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={cr_03} alt="Third slide" />

            <Carousel.Caption>
              <h3>Crop and Fertilizer Recommendations</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container mt-3" id="posts">
        <h5 className="mb-3">Recent Blog Posts</h5>
        <div className="row">
          <div className="col-md-6">
            <div className="card border-primary flex-md-row mb-4 shadow-sm h-md-250">
              <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 text-primary">
                  World
                </strong>
                <h6 className="mb-0">
                  <a className="text-dark" href="#">
                    40 Percent of People Can’t Afford Basics
                  </a>
                </h6>
                <div className="mb-1 text-muted small">Nov 12</div>
                <p className="card-text mb-auto">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <a
                  className="btn btn-outline-primary btn-sm"
                  role="button"
                  href="http://www.jquery2dotnet.com/"
                >
                  Continue reading
                </a>
              </div>
              <img
                className="card-img-right flex-auto d-none d-lg-block"
                alt="Thumbnail [200x250]"
                src="//placeimg.com/250/250/arch"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-success flex-md-row mb-4 shadow-sm h-md-250">
              <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 text-success">
                  Health
                </strong>
                <h6 className="mb-0">
                  <a className="text-dark" href="#">
                    Food for Thought: Diet and Brain Health
                  </a>
                </h6>
                <div className="mb-1 text-muted small">Nov 11</div>
                <p className="card-text mb-auto">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <a
                  className="btn btn-outline-success btn-sm"
                  href="http://www.jquery2dotnet.com/"
                >
                  Continue reading
                </a>
              </div>
              <img
                className="card-img-right flex-auto d-none d-lg-block"
                alt="Thumbnail [200x250]"
                src="//placeimg.com/250/250/nature"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-success flex-md-row mb-4 shadow-sm h-md-250">
              <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 text-success">
                  Health
                </strong>
                <h6 className="mb-0">
                  <a className="text-dark" href="#">
                    Food for Thought: Diet and Brain Health
                  </a>
                </h6>
                <div className="mb-1 text-muted small">Nov 11</div>
                <p className="card-text mb-auto">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <a
                  className="btn btn-outline-success btn-sm"
                  href="http://www.jquery2dotnet.com/"
                >
                  Continue reading
                </a>
              </div>
              <img
                className="card-img-right flex-auto d-none d-lg-block"
                alt="Thumbnail [200x250]"
                src="//placeimg.com/250/250/nature"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-primary flex-md-row mb-4 shadow-sm h-md-250">
              <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 text-primary">
                  World
                </strong>
                <h6 className="mb-0">
                  <a className="text-dark" href="#">
                    40 Percent of People Can’t Afford Basics
                  </a>
                </h6>
                <div className="mb-1 text-muted small">Nov 12</div>
                <p className="card-text mb-auto">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <a
                  className="btn btn-outline-primary btn-sm"
                  role="button"
                  href="http://www.jquery2dotnet.com/"
                >
                  Continue reading
                </a>
              </div>
              <img
                className="card-img-right flex-auto d-none d-lg-block"
                alt="Thumbnail [200x250]"
                src="//placeimg.com/250/250/arch"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
