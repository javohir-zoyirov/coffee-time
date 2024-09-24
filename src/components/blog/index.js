import { useState } from "react";
import logo from "../image/image 25.png";
import { useNavigate } from "react-router-dom";
import GoogleMapReact from 'google-map-react';
import { Navbar } from "../navbar";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export const Blog = () => {
  const [click, setClick] = useState();
  const [navbarIcon, setNavbarIcon] = useState("");
  const navigate = useNavigate();
  const defaultProps = {
    center: {
      lat: 41.2995,  
      lng: 69.2401  
    },
    zoom: 11
  };
  
  return (
    <>
    <Navbar/>
      <div className="container-fluid mx-auto row mt-5">
        <div className="col-lg-6 col-12 mb-4">
          <button
            className="btn w-100"
            style={{
              background: "#FFF7E1",
              border: " 1px solid #F9B300",
              color: "#F9B300",
            }}
          >
            Контакты
          </button>
        </div>
        <div
          className="col-lg-6 col-12 mb-4"
          
        >
          <button style={{
            background: "#F6F6F6",
            border: "1px solid #C9C9C9",
            color: "#F9B300",
          }} className="btn w-100">Наши магазины</button>
        </div>
      </div>
      <div className="container-fluid mx-auto mt-5">
        <div className="d-flex align-items-center justify-content-between">
          <div className="">
            <div>
              <h5 className="fw-bold">Связаться с нами:</h5>
              <p>+7 (401) 237 53 43</p>
              <p>Import@kldrefine.com</p>
            </div>
            <div>
              <h5 className="fw-bold">Юридический адрес:</h5>
              <p>
                Российская, Федерация, 238310, Калининградская область,
                Гурьевский район, поселок Васильково, улица Шатурская, дом 4А
              </p>
            </div>
            <div>
              <h5 className="fw-bold">Адрес склада:</h5>
              <p>
              Московская область, Балашиха, Западная промзона, Шоссе энтузиастов 1
              </p>
            </div>
          </div>

          <div style={{ height: '400px', width: '760px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCsPQb5t4WWcrLghn-uJpyqVcBs8iZtyQ8" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
        </div>
      </div>
      <div className="bg-white mt-5 pt-5">
          <div className="container-fluid mx-auto">
            <h2>Подписка на новости и рассылку</h2>
            <p>
              Подпишитесь на нашу рассылку прямо сейчас и будьте в курсе новых
              поставок, скидок и эксклюзивных предложений.
            </p>
            <div className="position-relative w-75 my-3">
              <input
                className="form-control w-100 rounded-5"
                style={{ paddingRight: "120px", background: "#F3F3F3" }}
                placeholder="Ваш email"
              />
              <button
                style={{
                  background: "#F9B300",
                  top: "0",
                  height: "100%",
                  right: "0",
                }}
                className="btn position-absolute rounded-5 text-white fw-bold"
              >
                Подписаться
              </button>
            </div>

            <p>
              Нажимая на кнопку “Подписаться”, вы принимаете правила{" "}
              <span style={{ color: "#F9B300" }}>
                пользовательского соглашения
              </span>
            </p>
          </div>

          <div className="d-flex align-items-center justify-content-between flex-wrap container-fluid mx-auto my-5">
            <img src={logo} alt="#" />
            <ul className="d-flex align-items-center flex-wrap gap-5 fw-bold">
              <li style={{ listStyle: "none" }}>
                <a style={{ textDecoration: "none", color: "black" }} href="#">
                  Каталог товаров
                </a>
              </li>
              <li style={{ listStyle: "none" }}>
                <a style={{ textDecoration: "none", color: "black" }} href="#">
                  Блог
                </a>
              </li>
              <li style={{ listStyle: "none" }}>
                <a style={{ textDecoration: "none", color: "black" }} href="#">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>  
    </>
    
  );
};
