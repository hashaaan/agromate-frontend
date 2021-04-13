import React from "react";
import { Carousel } from "react-bootstrap";
import CustomNavbar from "../layouts/CustomNavbar";
import cr_01 from "../../assets/img/cr_03.jpg";
import cr_02 from "../../assets/img/cr_04.jpg";
import cr_03 from "../../assets/img/cr_02.jpg";

function Home() {
  return (
    <>
      <CustomNavbar />
      <div className="home-carousel">
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
    </>
  );
}

export default Home;
