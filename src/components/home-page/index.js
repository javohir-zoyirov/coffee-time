import logo from "../image/image 25.png";
import coffee1 from "../image/kisspng-cafe-chocolate-covered-coffee-bean-espresso-5aeee25cddd876 1.png";
import coffee2 from "../image/kisspng-coffee-espresso-cappuccino-cafe-breakfast-coffee-5abb12d39e9a33 1.png";
import vector from "../image/Vector.png";
import vector2 from "../image/Vector2.png";
import cofe from "../image/cofe.png";
import cofemachine from "../image/cofe-machine.png";
import tea from "../image/tea.png";
import ovqat from "../image/ovqat.png";
import image5 from "../image/image 5.png";
import torabika from "../image/torabika.png";
import cofe2 from "../image//pngwing 2.png";
import tarobika from "../image/kisspng-coffee-bean-tea-cafe-coffee-beans-5abbc29114b2e2 1.png";
import tanzania from "../image/image 6.png";
import "./home-page.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Rate } from "antd";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="position-relative">
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
          <div class="navbar-brand">
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
            <div className="w-100 px-4">
              <input
                style={{
                  boxShadow: "0px 0px 20px 0px #9D9D9D40",
                  color: "#C4C4C4",
                }}
                className="form-control rounded-5"
                placeholder="Поиск по товарам"
              />
            </div>
            <div className="d-flex align-items-center gap-3 mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24" 
                fill="currentColor"
                class="bi bi-cart3"
                viewBox="0 0 16 16"
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
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <img
        className="w-25"
        style={{ position: "absolute", top: "0", right: "0", zIndex: "-1" }}
        src={vector}
      />
      <img
        className="w-25"
        style={{ position: "absolute", top: "30%", left: "0", zIndex: "-1" }}
        src={vector2}
      />
      <div className="row container-fluid mx-auto mt-5">
        <div className="col-lg-6">
          <div className="">
            <h1 style={{ fontSize: "38px" }} className="fw-bold">
              Свежеобжаренный кофе
            </h1>
            <div className="my-5">
              <p className="fs-5">
                Кофе Калининградской обжарки из разных стран произрастания c
                доставкой на дом.{" "}
              </p>
              <p>
                Мы обжариваем кофе{" "}
                <span className="fw-bold">каждые выходные.</span>
              </p>
            </div>
            <button
              style={{ background: "#F9B300" }}
              className="btn text-white fw-bold rounded-1"
            >
              Посмотреть каталог
            </button>
          </div>
        </div>
        <div className="col-lg-6">
          <div style={{ position: "relative" }}>
            <img
              style={{ zIndex: 1, position: "absolute" }}
              className="w-75"
              src={coffee1}
              alt="First Coffee"
            />
            <img
              style={{ zIndex: 2, position: "absolute" }}
              className="w-75"
              src={coffee2}
              alt="Second Coffee"
            />
          </div>
        </div>
      </div>

      <div className="container-fluid mx-auto mt-5 pt-5">
        <h1 className="fw-bold my-5">Каталоги нашей продукции</h1>
        <div className="row mb-5">
          <div className="col-lg-3">
            <div
              style={{
                background: "#FFFFFF",
                boxShadow: "0px 0px 30px 0px #92929233",
                maxWidth: "250px",
                cursor: "pointer",
              }}
              className="rounded text-center mx-auto p-2 d-flex align-items-center justify-content-between cofe-card flex-column"
            >
              <div className="p-4 image">
                <img style={{ maxHeight: "150px" }} className="" src={cofe} />
              </div>
              <p className="fw-bold">Чай и кофейные напитки</p>
              <button
                style={{ background: "#F9B300" }}
                className="btn rounded-1 text-white w-75 mb-3 fw-bold cofebtn"
              >
                Купить
              </button>
            </div>
          </div>
          <div className="col-lg-3">
            <div
              style={{
                background: "#FFFFFF",
                boxShadow: "0px 0px 30px 0px #92929233",
                maxWidth: "250px",
                cursor: "pointer",
              }}
              className="rounded text-center mx-auto p-2 d-flex align-items-center justify-content-between cofe-card flex-column"
            >
              <div className="p-4 image">
                <img style={{ maxHeight: "150px" }} className="" src={tea} />
              </div>
              <p className="fw-bold">Продукция для вендинга</p>
              <button
                style={{ background: "#F9B300" }}
                className="btn rounded-1 text-white w-75 mb-3 fw-bold cofebtn"
              >
                Купить
              </button>
            </div>
          </div>
          <div className="col-lg-3">
            <div
              style={{
                background: "#FFFFFF",
                boxShadow: "0px 0px 30px 0px #92929233",
                maxWidth: "250px",
                cursor: "pointer",
              }}
              className="rounded text-center mx-auto p-2 d-flex align-items-center justify-content-between cofe-card flex-column"
            >
              <div className="p-4 image">
                <img
                  style={{ maxHeight: "150px" }}
                  className=""
                  src={cofemachine}
                />
              </div>
              <p className="fw-bold">Здоровое питание</p>
              <button
                style={{ background: "#F9B300" }}
                className="btn rounded-1 text-white w-75 mb-3 fw-bold cofebtn"
              >
                Купить
              </button>
            </div>
          </div>
          <div className="col-lg-3">
            <div
              style={{
                background: "#FFFFFF",
                boxShadow: "0px 0px 30px 0px #92929233",
                maxWidth: "250px",
                cursor: "pointer",
              }}
              className="rounded text-center p-2 mx-auto d-flex align-items-center justify-content-between cofe-card flex-column"
            >
              <div className="p-4 image">
                <img style={{ maxHeight: "150px" }} className="" src={ovqat} />
              </div>
              <p className="fw-bold">Свежеобжаренный кофе</p>
              <button
                style={{ background: "#F9B300" }}
                className="btn rounded-1 text-white w-75 mb-3 fw-bold cofebtn"
              >
                Купить
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mx-auto text-end">
        <h3 className="fw-bold">Товары co скидкой</h3>
        <p className="">
          Наша компания предлагает покупать товар co скидкой не только в дни
          распродаж или в течение действия ограниченных предложений, но и
          пользоваться скидками постоянно!
        </p>
      </div>

      <div className="container mx-auto mt-5">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          width={1100}
          className="mySwiper"
        >
          <SwiperSlide
            style={{ boxShadow: "0px 0px 20px 0px #92929240" }}
            className="rounded-3 position-relative"
            onClick={()=>{navigate('/about-product')}}
          >
            <div className="p-3">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <span
                    className="p-3"
                    style={{ background: "#F9B300", borderRadius: "50%" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-percent text-black"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0M4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                    </svg>
                  </span>
                  <p style={{ color: "#F9B300" }} className="fw-bold mt-4">
                    Скидки
                  </p>
                </div>
                <div
                  style={{
                    border: "1px solid #F9B300",
                    background: "#FFF7E1",
                    display: "inline",
                  }}
                  className="py-1 px-3 rounded"
                >
                  250 г.{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                  </svg>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3">
                <div>
                  <img className="w-100" src={image5} alt="#" />
                </div>
                <div className="">
                  <Rate disabled defaultValue={4} />
                  <p>
                    <span className="fw-bold">4.0</span>
                    <span style={{ color: "#5B5B5B" }} className="ms-2">
                      (32 отзыва)
                    </span>
                  </p>
                  <div className="d-flex align-items-center justify-content-between">
                    <img
                      style={{ width: "19px" }}
                      className=""
                      src={torabika}
                    />
                    <img
                      style={{ width: "19px" }}
                      className=""
                      src={torabika}
                    />
                    <img
                      style={{ width: "19px" }}
                      className=""
                      src={torabika}
                    />
                    <img
                      style={{ width: "19px" }}
                      className=""
                      src={torabika}
                    />
                    <img
                      style={{ width: "19px" }}
                      className=""
                      src={torabika}
                    />
                    <img
                      style={{ width: "19px" }}
                      className=""
                      src={torabika}
                    />
                  </div>
                  <p>Кислинка</p>
                  <div className="d-flex align-items-center gap-1">
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>
                  <p className="mt-2">Горчинка</p>
                  <div className="d-flex align-items-center gap-1">
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>
                  <p className="mt-2">Насыщенность</p>
                  <div className="d-flex align-items-center gap-1">
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 style={{ color: "#222222" }} className="fw-bold">
                  Colombia Supremo
                </h3>
                <p style={{ color: "#222222" }}>
                  Свежеобжаренный кофе - описание товара, вкус, аромат
                </p>
                <h3 className="" style={{ color: "#C6C6C6" }}>
                  350 ₽
                </h3>
                <div className="d-flex align-items-center justify-content-between">
                  <h3 className="fw-bold" style={{ color: "#222222" }}>
                    250 ₽
                  </h3>
                  <button
                    style={{ background: "#F9B300" }}
                    className="btn fw-bold text-white"
                  >
                    В корзину
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{ boxShadow: "0px 0px 20px 0px #92929240" }}
            className="rounded-3 position-relative"
            onClick={()=>{navigate('/about-product')}}

          >
            <div className="p-3">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <span
                    className="p-3"
                    style={{ background: "#F9B300", borderRadius: "50%" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-percent text-black"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0M4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                    </svg>
                  </span>
                  <p style={{ color: "#F9B300" }} className="fw-bold mt-4">
                    Скидки
                  </p>
                </div>
                <div
                  style={{
                    border: "1px solid #F9B300",
                    background: "#FFF7E1",
                    display: "inline",
                  }}
                  className="py-1 px-3 rounded"
                >
                  250 г.{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                  </svg>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3">
                <div>
                  <img className="w-100" src={image5} alt="#" />
                </div>
                <div className="">
                  <Rate disabled defaultValue={4} />
                  <p>
                    <span className="fw-bold">4.0</span>
                    <span style={{ color: "#5B5B5B" }} className="ms-2">
                      (32 отзыва)
                    </span>
                  </p>
                  <div className="d-flex align-items-center justify-content-between">
                    <img
                      style={{ width: "19px" }}
                      className=""
                      src={torabika}
                    />
                    <img
                      style={{ width: "19px" }}
                      className=""
                      src={torabika}
                    />
                    <img
                      style={{ width: "19px" }}
                      className=""
                      src={torabika}
                    />
                    <img
                      style={{ width: "19px" }}
                      className=""
                      src={torabika}
                    />
                    <img
                      style={{ width: "19px" }}
                      className=""
                      src={torabika}
                    />
                    <img
                      style={{ width: "19px" }}
                      className=""
                      src={torabika}
                    />
                  </div>
                  <p>Кислинка</p>
                  <div className="d-flex align-items-center gap-1">
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>
                  <p className="mt-2">Горчинка</p>
                  <div className="d-flex align-items-center gap-1">
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>
                  <p className="mt-2">Насыщенность</p>
                  <div className="d-flex align-items-center gap-1">
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 style={{ color: "#222222" }} className="fw-bold">
                  Colombia Supremo
                </h3>
                <p style={{ color: "#222222" }}>
                  Свежеобжаренный кофе - описание товара, вкус, аромат
                </p>
                <h3 className="" style={{ color: "#C6C6C6" }}>
                  350 ₽
                </h3>
                <div className="d-flex align-items-center justify-content-between">
                  <h3 className="fw-bold" style={{ color: "#222222" }}>
                    250 ₽
                  </h3>
                  <button
                    style={{ background: "#F9B300" }}
                    className="btn fw-bold text-white"
                  >
                    В корзину
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{ boxShadow: "0px 0px 20px 0px #92929240" }}
            className="rounded-3 position-relative"
            onClick={()=>{navigate('/about-product')}}

          >
            <div className="p-3">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <span
                    className="p-3"
                    style={{ background: "#F9B300", borderRadius: "50%" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-percent text-black"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0M4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                    </svg>
                  </span>
                  <p style={{ color: "#F9B300" }} className="fw-bold mt-4">
                    Скидки
                  </p>
                </div>
                <div
                  style={{
                    border: "1px solid #F9B300",
                    background: "#FFF7E1",
                    display: "inline",
                  }}
                  className="py-1 px-3 rounded"
                >
                  250 г.{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                  </svg>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3">
                <div>
                  <img className="w-100" src={image5} alt="#" />
                </div>
                <div className="">
                  <Rate disabled defaultValue={4} />
                  <p>
                    <span className="fw-bold">4.0</span>
                    <span style={{ color: "#5B5B5B" }} className="ms-2">
                      (32 отзыва)
                    </span>
                  </p>
                  <div className="d-flex align-items-center justify-content-between">
                    <img
                      style={{ width: "19px" }}
                      className=""
                      src={torabika}
                    />
                    <img
                      style={{ width: "19px" }}
                      className=""
                      src={torabika}
                    />
                    <img
                      style={{ width: "19px" }}
                      className=""
                      src={torabika}
                    />
                    <img
                      style={{ width: "19px" }}
                      className=""
                      src={torabika}
                    />
                    <img
                      style={{ width: "19px" }}
                      className=""
                      src={torabika}
                    />
                    <img
                      style={{ width: "19px" }}
                      className=""
                      src={torabika}
                    />
                  </div>
                  <p>Кислинка</p>
                  <div className="d-flex align-items-center gap-1">
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>
                  <p className="mt-2">Горчинка</p>
                  <div className="d-flex align-items-center gap-1">
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>
                  <p className="mt-2">Насыщенность</p>
                  <div className="d-flex align-items-center gap-1">
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 style={{ color: "#222222" }} className="fw-bold">
                  Colombia Supremo
                </h3>
                <p style={{ color: "#222222" }}>
                  Свежеобжаренный кофе - описание товара, вкус, аромат
                </p>
                <h3 className="" style={{ color: "#C6C6C6" }}>
                  350 ₽
                </h3>
                <div className="d-flex align-items-center justify-content-between">
                  <h3 className="fw-bold" style={{ color: "#222222" }}>
                    250 ₽
                  </h3>
                  <button
                    style={{ background: "#F9B300" }}
                    className="btn fw-bold text-white"
                  >
                    В корзину
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{ boxShadow: "0px 0px 20px 0px #92929240" }}
            className="rounded-3 position-relative"
            onClick={()=>{navigate('/about-product')}}

          >
            <div className="p-3">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <span
                    className="p-3"
                    style={{ background: "#F9B300", borderRadius: "50%" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-percent text-black"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0M4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                    </svg>
                  </span>
                  <p style={{ color: "#F9B300" }} className="fw-bold mt-4">
                    Скидки
                  </p>
                </div>
                <div
                  style={{
                    border: "1px solid #F9B300",
                    background: "#FFF7E1",
                    display: "inline",
                  }}
                  className="py-1 px-3 rounded"
                >
                  250 г.{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                  </svg>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3">
                <div>
                  <img className="w-100" src={image5} alt="#" />
                </div>
                <div className="">
                  <Rate disabled defaultValue={4} />
                  <p>
                    <span className="fw-bold">4.0</span>
                    <span style={{ color: "#5B5B5B" }} className="ms-2">
                      (32 отзыва)
                    </span>
                  </p>
                  <div className="d-flex align-items-center justify-content-between">
                    <img
                      style={{ width: "19px" }}
                      className=""
                      src={torabika}
                    />
                    <img
                      style={{ width: "19px" }}
                      className=""
                      src={torabika}
                    />
                    <img
                      style={{ width: "19px" }}
                      className=""
                      src={torabika}
                    />
                    <img
                      style={{ width: "19px" }}
                      className=""
                      src={torabika}
                    />
                    <img
                      style={{ width: "19px" }}
                      className=""
                      src={torabika}
                    />
                    <img
                      style={{ width: "19px" }}
                      className=""
                      src={torabika}
                    />
                  </div>
                  <p>Кислинка</p>
                  <div className="d-flex align-items-center gap-1">
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>
                  <p className="mt-2">Горчинка</p>
                  <div className="d-flex align-items-center gap-1">
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>
                  <p className="mt-2">Насыщенность</p>
                  <div className="d-flex align-items-center gap-1">
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 style={{ color: "#222222" }} className="fw-bold">
                  Colombia Supremo
                </h3>
                <p style={{ color: "#222222" }}>
                  Свежеобжаренный кофе - описание товара, вкус, аромат
                </p>
                <h3 className="" style={{ color: "#C6C6C6" }}>
                  350 ₽
                </h3>
                <div className="d-flex align-items-center justify-content-between">
                  <h3 className="fw-bold" style={{ color: "#222222" }}>
                    250 ₽
                  </h3>
                  <button
                    style={{ background: "#F9B300" }}
                    className="btn fw-bold text-white"
                  >
                    В корзину
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{ boxShadow: "0px 0px 20px 0px #92929240" }}
            className="rounded-3 position-relative"
            onClick={()=>{navigate('/about-product')}}

          >
            <div className="p-3">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <span
                    className="p-3"
                    style={{ background: "#F9B300", borderRadius: "50%" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-percent text-black"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0M4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                    </svg>
                  </span>
                  <p style={{ color: "#F9B300" }} className="fw-bold mt-4">
                    Скидки
                  </p>
                </div>
                <div
                  style={{
                    border: "1px solid #F9B300",
                    background: "#FFF7E1",
                    display: "inline",
                  }}
                  className="py-1 px-3 rounded"
                >
                  250 г.{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                  </svg>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3">
                <div>
                  <img className="w-100" src={image5} alt="#" />
                </div>
                <div className="">
                  <Rate disabled defaultValue={4} />
                  <p>
                    <span className="fw-bold">4.0</span>
                    <span style={{ color: "#5B5B5B" }} className="ms-2">
                      (32 отзыва)
                    </span>
                  </p>
                  <div className="d-flex align-items-center justify-content-between">
                    <img
                      style={{ width: "19px" }}
                      className=""
                      src={torabika}
                    />
                    <img
                      style={{ width: "19px" }}
                      className=""
                      src={torabika}
                    />
                    <img
                      style={{ width: "19px" }}
                      className=""
                      src={torabika}
                    />
                    <img
                      style={{ width: "19px" }}
                      className=""
                      src={torabika}
                    />
                    <img
                      style={{ width: "19px" }}
                      className=""
                      src={torabika}
                    />
                    <img
                      style={{ width: "19px" }}
                      className=""
                      src={torabika}
                    />
                  </div>
                  <p>Кислинка</p>
                  <div className="d-flex align-items-center gap-1">
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>
                  <p className="mt-2">Горчинка</p>
                  <div className="d-flex align-items-center gap-1">
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>
                  <p className="mt-2">Насыщенность</p>
                  <div className="d-flex align-items-center gap-1">
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F9B300",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F0F0F0",
                        width: "13px",
                        height: "13px",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 style={{ color: "#222222" }} className="fw-bold">
                  Colombia Supremo
                </h3>
                <p style={{ color: "#222222" }}>
                  Свежеобжаренный кофе - описание товара, вкус, аромат
                </p>
                <h3 className="" style={{ color: "#C6C6C6" }}>
                  350 ₽
                </h3>
                <div className="d-flex align-items-center justify-content-between">
                  <h3 className="fw-bold" style={{ color: "#222222" }}>
                    250 ₽
                  </h3>
                  <button
                    style={{ background: "#F9B300" }}
                    className="btn fw-bold text-white"
                  >
                    В корзину
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="cofe-tarobika">
        <div className="container-fluid mx-auto mt-5 pt-5">
          <div className="d-flex align-items-center justify-content-between">
            <div className="w-50">
              <img className="w-100" src={tarobika} />
              <img
                style={{ marginTop: "-260px" }}
                className="w-100"
                src={cofe2}
              />
            </div>
            <div>
              <h2 className="fw-bold mb-5 pe-5" style={{ color: "#222222" }}>
                Почему стоит работать именно c нами?
              </h2>
              <div className="d-flex align-items-center">
                <span
                  className="p-3"
                  style={{ background: "#F9B300", borderRadius: "50%" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-cup-hot text-white"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6zM13 12.5a2 2 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5M2.64 13.825 1.123 7h11.754l-1.517 6.825A1.5 1.5 0 0 1 9.896 15H4.104a1.5 1.5 0 0 1-1.464-1.175"
                    />
                    <path d="m4.4.8-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 3.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 6.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 9.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8" />
                  </svg>
                </span>
                <div className="px-5">
                  <h3 className="text-black">Всегда свежая обжарка</h3>
                  <p>
                    Подбор степени обжарки под каждый сорт кофе. Всегда свежая
                    обжарка
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <span
                  className="p-3"
                  style={{ background: "#F9B300", borderRadius: "50%" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-tag text-white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0" />
                    <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1m0 5.586 7 7L13.586 9l-7-7H2z" />
                  </svg>
                </span>
                <div className="px-5">
                  <h3 className="text-black">Всегда свежая обжарка</h3>
                  <p>
                    Подбор степени обжарки под каждый сорт кофе. Всегда свежая
                    обжарка
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <span
                  className="p-3"
                  style={{ background: "#F9B300", borderRadius: "50%" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-person-check-fill text-white"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"
                    />
                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>
                </span>
                <div className="px-5">
                  <h3 className="text-black">Всегда свежая обжарка</h3>
                  <p>
                    Подбор степени обжарки под каждый сорт кофе. Всегда свежая
                    обжарка
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="machine">
        <div className="container-fluid mx-auto text-white">
          <h2>Как мы обжариваем наш кофе:</h2>
          <p>
            Компания Нью Рефайнинг Груп находится в г. Калининграде и имеет свой
            склад и представительство в Москве. Завод работает на рынке
            свежеобжаренного кофе и растворимой продукции более 15 лет. Завод
            имеет немецкое оборудование марки Probat по обжарке кофе и
            итальянские агломераторы для производства растворимой продукции.
          </p>
          <p>
            Кофе поставляется в контейнерах напрямую с плантаций по всему миру.
            Компания имеет долгосрочные контракты по поставке продукции. Каждая
            партия проходит строгий контроль на заводе для проверки зерна.
            Зеленое зерно обжаривается, проходит процесс дегазации и тут же
            отправляется клиентам. Наши обжарщики прошли обучение в России и за
            рубежом. У нас свой подход к каждой партии зерна.
          </p>
          <p> Мы раскрываем вкус каждого сорта кофе.</p>
          <button
            style={{ background: "#F9B300" }}
            className="btn text-white fw-bold"
          >
            Перейти в каталог
          </button>
        </div>
      </div>

      <div className="tanzania">
        <div className="container-fluid mx-auto my-5">
          <h2 className="fw-bold pt-5">Новости компании</h2>
          <div className="row">
            <div className="col-lg-8 col-12">
              <div
                className="d-flex align-items-stretch justify-content-between"
                style={{
                  boxShadow: "0px 0px 30px 0px #92929233",
                  borderRadius: "10px",
                }}
              >
                <div className="">
                  <img
                    className="w-100 h-100"
                    src={tanzania}
                    alt="#"
                    style={{
                      objectFit: "cover",
                      borderRadius: "10px 0 0 10px",
                    }}
                  />
                </div>
                <div
                  className="p-5 bg-white"
                  style={{ objectFit: "cover", borderRadius: "0 10px 10px 0" }}
                >
                  <h5 className="fw-bold">
                    Танзанийский кофе. Откуда он взялся и почему мы его так
                    любим?
                  </h5>
                  <p>
                    Танзания – красивая африканская страна. Именно здесь
                    расположены легендарные географические объекты – вулкан
                    Килиманджаро и озеро Виктория.
                  </p>
                  <p>
                    Но наш интерес вызван не столько природными красотами,
                    сколько кофе...
                  </p>
                  <a
                    style={{ color: "#F9B300", textDecoration: "none" }}
                    href="#"
                  >
                    Подробнее{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div
                className="p-5 bg-white"
                style={{
                  boxShadow: "0px 0px 30px 0px #92929233",
                  borderRadius: "10px",
                }}
              >
                <h5>Африканский кофе Кения АА</h5>
                <p>
                  Кения АА – у этого кофе, из африканской страны, репутация
                  одного из самых вкусных и ярких сортов в мире. Многие
                  обжарщики высоко оценивают местные разновидности высокогорной
                  арабики.
                </p>
                <a
                  style={{ color: "#F9B300", textDecoration: "none" }}
                  href="#"
                >
                  Подробнее{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-4 col-12">
              <div
                className="p-5 bg-white"
                style={{
                  boxShadow: "0px 0px 30px 0px #92929233",
                  borderRadius: "10px",
                }}
              >
                <h5>Африканский кофе Кения АА</h5>
                <p>
                  Кения АА – у этого кофе, из африканской страны, репутация
                  одного из самых вкусных и ярких сортов в мире. Многие
                  обжарщики высоко оценивают местные разновидности высокогорной
                  арабики.
                </p>
                <a
                  style={{ color: "#F9B300", textDecoration: "none" }}
                  href="#"
                >
                  Подробнее{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-12">
              <div
                className="d-flex align-items-stretch justify-content-between"
                style={{
                  boxShadow: "0px 0px 30px 0px #92929233",
                  borderRadius: "10px",
                }}
              >
                <div className="">
                  <img
                    className="w-100 h-100"
                    src={tanzania}
                    alt="#"
                    style={{
                      objectFit: "cover",
                      borderRadius: "10px 0 0 10px",
                    }}
                  />
                </div>
                <div
                  className="p-5 bg-white"
                  style={{ objectFit: "cover", borderRadius: "0 10px 10px 0" }}
                >
                  <h5 className="fw-bold">
                    Танзанийский кофе. Откуда он взялся и почему мы его так
                    любим?
                  </h5>
                  <p>
                    Танзания – красивая африканская страна. Именно здесь
                    расположены легендарные географические объекты – вулкан
                    Килиманджаро и озеро Виктория.
                  </p>
                  <p>
                    Но наш интерес вызван не столько природными красотами,
                    сколько кофе...
                  </p>
                  <a
                    style={{ color: "#F9B300", textDecoration: "none" }}
                    href="#"
                  >
                    Подробнее{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mx-auto">
        <h2>Подписка на новости и рассылку</h2>
        <p>
          Подпишитесь на нашу рассылку прямо сейчас и будьте в курсе новых
          поставок, скидок и эксклюзивных предложений.
        </p>
        <div className="position-relative w-75 my-3">
          <input
            className="form-control w-100 rounded-5"
            style={{ paddingRight: "120px", background:"#F3F3F3" }}
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
          <span style={{ color: "#F9B300" }}>пользовательского соглашения</span>
        </p>
      </div>

      <div className="d-flex align-items-center justify-content-between flex-wrap container-fluid mx-auto my-5">
        <img src={logo} alt="#"/>
        <ul className="d-flex align-items-center flex-wrap gap-5 fw-bold">
          <li style={{listStyle:"none"}}>
            <a style={{textDecoration:"none",color:"black"}} href="#">Каталог товаров</a>
          </li>
          <li style={{listStyle:"none"}}>
            <a style={{textDecoration:"none", color:"black"}} href="#">Блог</a>
          </li>
          <li style={{listStyle:"none"}}>
            <a style={{textDecoration:"none",color:"black"}} href="#">Контакты</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
