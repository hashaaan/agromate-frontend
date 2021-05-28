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
              <p>
                Now farmers can have instant support and guidance through
                Agromate.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={cr_02} alt="Second slide" />

            <Carousel.Caption>
              <h3>Online Conversations</h3>
              <p>
                Agromate allows for real-time conversations with your
                instrutors.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={cr_03} alt="Third slide" />

            <Carousel.Caption>
              <h3>Crop and Fertilizer Recommendations</h3>
              <p>Agromate provide recommendations based on your interest.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container mt-3" id="posts">
        <h5 className="mb-3">Recent Blogs</h5>
        <div className="row">
          <div className="col-md-6">
            <div className="card border-primary flex-md-row mb-4 shadow-sm h-md-250">
              <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 text-primary">
                  Paddy Cultivation
                </strong>
                <h6 className="mb-0">
                  <a className="text-dark" href="#">
                    Modern Technologies in Paddy Cultivation
                  </a>
                </h6>
                <div className="mb-1 text-muted small">Nov 12</div>
                <p className="card-text mb-auto">
                  Travel anywhere in Sri Lanka, anytime of the year, and you
                  will see beautiful sights of lush green paddy fields
                  everywhere.
                </p>
                <a
                  className="btn btn-outline-primary btn-sm"
                  role="button"
                  href="/"
                >
                  Continue reading
                </a>
              </div>
              <img
                className="card-img-right flex-auto d-none d-lg-block"
                alt="Thumbnail [200x250]"
                src="/paddy.jpeg"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-success flex-md-row mb-4 shadow-sm h-md-250">
              <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 text-success">
                  Home Grown Foods
                </strong>
                <h6 className="mb-0">
                  <a className="text-dark" href="#">
                    Fresh Vegetables: Diet and Brain Health
                  </a>
                </h6>
                <div className="mb-1 text-muted small">Nov 11</div>
                <p className="card-text mb-auto">
                  Healthy, nutrient-rich soil improves the nutritional value in
                  your fruits and veggies.
                </p>
                <a className="btn btn-outline-success btn-sm" href="/">
                  Continue reading
                </a>
              </div>
              <img
                className="card-img-right flex-auto d-none d-lg-block"
                alt="Thumbnail [200x250]"
                src="/vegetables.jpeg"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-success flex-md-row mb-4 shadow-sm h-md-250">
              <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 text-success">
                  How to use Pesticides
                </strong>
                <h6 className="mb-0">
                  <a className="text-dark" href="#">
                    Food for Thought: Diet and Brain Health
                  </a>
                </h6>
                <div className="mb-1 text-muted small">Nov 11</div>
                <p className="card-text mb-auto">
                  A new study adds to the growing evidence linking pesticides to
                  harmful effects on organisms that are critically...
                </p>
                <a className="btn btn-outline-success btn-sm" href="/">
                  Continue reading
                </a>
              </div>
              <img
                className="card-img-right flex-auto d-none d-lg-block"
                alt="Pesticides"
                src="/pesticides.jpeg"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-primary flex-md-row mb-4 shadow-sm h-md-250">
              <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 text-primary">
                  Coconut Harvest
                </strong>
                <h6 className="mb-0">
                  <a className="text-dark" href="#">
                    Sri Lanka Coconut Cultivation
                  </a>
                </h6>
                <div className="mb-1 text-muted small">Nov 12</div>
                <p className="card-text mb-auto">
                  Growing more than one crop at the same time and on the same
                  land can be a great advantage and benefit for the farmers.
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
                alt="Coconut"
                src="/coconut.jpeg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
