import { useState } from "react";
import logo from "../image/image 25.png";
import { useNavigate } from "react-router-dom";
import GoogleMapReact from 'google-map-react';
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
      <nav
        class="navbar navbar-expand-lg"
        style={{
          background: "#FFFFFF",
          boxShadow: "0px 5px 20px 0px #9D9D9D40",
          position: "sticky",
          top: "0",
          zIndex: "3 ",
        }}
      >
        <div class="container-fluid">
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/");
            }}
            class="navbar-brand"
          >
            <img style={{ width: "150px", height: "70px" }} src={logo} />
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            {navbarIcon === "search" ? (
              <div className="w-100 px-4 d-flex align-items-center justify-content-between gap-3">
                <input
                  style={{
                    boxShadow: "0px 0px 20px 0px #9D9D9D40",
                    color: "#C4C4C4",
                  }}
                  className="form-control rounded-5"
                  placeholder="Поиск по товарам"
                />
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-list"
                    viewBox="0 0 16 16"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setNavbarIcon("");
                    }}
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                    />
                  </svg>
                </span>
              </div>
            ) : (
              <div className="w-100">
                <ul className="d-flex align-items-center p-0 m-0 gap-5 justify-content-center">
                  <li
                    onClick={() => {
                      setClick(1);
                    }}
                  >
                    <a
                      style={
                        click === 1 ? { borderBottom: "3px solid #F9B300" } : {}
                      }
                      href="#"
                    >
                      Каталог товаров
                    </a>
                  </li>
                  <li
                    onClick={() => {
                      setClick(2);
                    }}
                  >
                    <a
                      style={
                        click === 2 ? { borderBottom: "3px solid #F9B300" } : {}
                      }
                      href="#"
                    >
                      Блог
                    </a>
                  </li>
                  <li
                    onClick={() => {
                      setClick(3);
                    }}
                  >
                    <a
                      style={
                        click === 3 ? { borderBottom: "3px solid #F9B300" } : {}
                      }
                      href="#"
                    >
                      Контакты
                    </a>
                  </li>
                </ul>
              </div>
            )}
            <div className="d-flex align-items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setNavbarIcon("search");
                }}
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-cart3"
                viewBox="0 0 16 16"
                style={{ cursor: "pointer" }}
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-person"
                viewBox="0 0 16 16"
                style={{ cursor: "pointer" }}
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
            </div>
          </div>
        </div>
      </nav>

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
          style={{
            background: "#F6F6F6",
            border: "1px solid #C9C9C9",
            color: "#F9B300",
          }}
        >
          <button className="btn w-100">Наши магазины</button>
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
        bootstrapURLKeys={{ key: "" }}
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
