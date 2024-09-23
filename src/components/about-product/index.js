import { useNavigate } from "react-router-dom";
import logo from "../image/image 25.png";
import { useState } from "react";
import image5 from "../image/image 5.png";
import torabika from "../image/torabika.png";
import kettle3 from "../image/kettle3.png";
import cofe from "../image/vs0tzSHVcac.png";
import kettle1 from "../image/kettle1.png";
import kettle2 from "../image/kettle2.png";
import kettle4 from "../image/kettle4.png";
import kettle5 from "../image/kettle5.png";
import kettle6 from "../image/kettle6.png";
import kettle7 from "../image/kettle7.png";
import kettle8 from "../image/kettle8.png";
import image1 from "../image/6VhPY27jdps.png";
import image2 from "../image/pnmRtTHWqDM.png";
import image3 from "../image/6ZJVY27jdps.png";
import ellipse43 from "../image/Ellipse 43.png";
import { Rate } from "antd";
export const AboutProduct = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(1);
  const [navbarIcon, setNavbarIcon] = useState("");
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

      <div style={{ background: "#FFF7E1" }} className="p-5">
        <div className="container mx-auto bg-white p-5 rounded-4">
          <div className="row">
            <div className="col-lg-6 mb-3 text-center">
              <img className="w-50" src={image5} />
            </div>
            <div className="col-lg-6 mb-3">
              <div className="">
                <div className="d-flex align-items-center gap-2 mb-4">
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <h3>Colombia Supremo</h3>
                    <p>Мытая, натуральная, смесь</p>
                  </div>
                  <div style={{ color: "#F9B300" }} className="fw-bold">
                    <p>Популярное</p>
                    <p>Новый урожай</p>
                  </div>
                </div>
                <div>
                  <Rate disabled defaultValue={4} />
                  <p className="text-black fs-5">
                    4.0
                    <span
                      className="ps-2"
                      style={{ color: "#5B5B5B", fontSize: "14px" }}
                    >
                      (32 отзыва)
                    </span>
                  </p>
                </div>

                <p>
                  Компания Нью Рефайнинг Груп находится в г. Калининграде и
                  имеет свой склад и представительство в Москве. Завод работает
                  на рынке свежеобжаренного кофе и растворимой продукции более
                  15 лет. Завод имеет немецкое оборудование марки Probat по
                  обжарке кофе и итальянские агломераторы для производства
                  растворимой продукции.
                </p>

                <div className="d-flex align-items-center justify-content-between flex-wrap">
                  <div>
                    <p className="fw-bold">Кислинка</p>
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

                  <div>
                    <p className="mt-2 fw-bold">Горчинка</p>
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

                  <div>
                    <p className="mt-2 fw-bold">Насыщенность</p>
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

                <div className="d-flex align-items-center gap-4 mt-5">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label fw-bold"
                      for="flexRadioDefault1"
                    >
                      250 г.
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label
                      class="form-check-label fw-bold"
                      for="flexRadioDefault2"
                    >
                      1000 г.
                    </label>
                  </div>
                </div>

                <div className="d-flex align-items-center flex-wrap mt-4 gap-3">
                  <div
                    style={{
                      border: "1px solid #E4E4E4",
                      background: "#F6F6F6",
                      boxShadow: "0px 0px 50px 0px #A3A3A340",
                      display: "block",
                      color: "black",
                    }}
                    className="d-flex align-items-center gap-3 rounded"
                  >
                    <button className="btn rounded-0 border-0">-</button>
                    <span>15</span>
                    <button className="btn rounded-0 border-0">+</button>
                  </div>
                  <button
                    style={{ background: "#F9B300" }}
                    className="btn text-white"
                  >
                    Купить за 250 ₽{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <div className="row container-fluid mx-auto mt-5">
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
          <button
            className="btn w-100 fw-bold"
            style={{
              background: "#F6F6F6",
              color: "#F9B300",
              border: "1px solid #C9C9C9",
            }}
          >
            Описание
          </button>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
          <button
            className="btn w-100 fw-bold"
            style={{
              background: "#F6F6F6",
              color: "#F9B300",
              border: "1px solid #C9C9C9",
            }}
          >
            Как готовить?
          </button>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
          <button
            className="btn w-100 fw-bold"
            style={{
              background: "#F6F6F6",
              color: "#F9B300",
              border: "1px solid #C9C9C9",
            }}
          >
            Дополнительно
          </button>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
          <button
            className="btn w-100 fw-bold"
            style={{
              background: "#F6F6F6",
              color: "#F9B300",
              border: "1px solid #C9C9C9",
            }}
          >
            Отзывы
          </button>
        </div>
      </div>

      <div className="row container-fluid mx-auto my-5">
        <div className="col-lg-4 mb-4">
          <div
            style={{ boxShadow: "0px 0px 30px 0px #95959540" }}
            className="bg-white rounded-4 p-4"
          >
            <h5 className="mb-4">Вкус</h5>
            <div className="d-flex align-items-center mb-3 gap-3">
              <span
                style={{ background: "#F9B300" }}
                className="p-3 rounded-pill"
              >
                <img
                  style={{ width: "30px", height: "30px", color: "black" }}
                  src={kettle3}
                />
              </span>
              <p className="p-0 m-0 fs-5">Шоколад</p>
            </div>

            <div className="d-flex align-items-center mb-3 gap-3">
              <span
                style={{ background: "#F9B300" }}
                className="p-3 rounded-pill"
              >
                <img
                  style={{ width: "30px", height: "30px", color: "black" }}
                  src={kettle3}
                />
              </span>
              <p className="p-0 m-0 fs-5">Шоколад</p>
            </div>
            <div className="d-flex align-items-center mb-3 gap-3">
              <span
                style={{ background: "#F9B300" }}
                className="p-3 rounded-pill"
              >
                <img
                  style={{ width: "30px", height: "30px", color: "black" }}
                  src={kettle3}
                />
              </span>
              <p className="p-0 m-0 fs-5">Шоколад</p>
            </div>
          </div>
        </div>
        <div className="col-lg-8 mb-4">
          <div
            style={{ boxShadow: "0px 0px 30px 0px #95959540" }}
            className="bg-white rounded-4 p-4"
          >
            <h5>Характеристики</h5>
            <div className="d-flex align-items-center border-bottom justify-content-between mb-4">
              <p className="fw-bold">Арабика: </p>
              <p>
                Кот Бразилио, Перу гр.2, Эфиопия Сидамогр.4 Премиум Амхара Айеху
              </p>
            </div>

            <div className="d-flex align-items-center border-bottom justify-content-between mb-4">
              <p className="fw-bold">Робуста:</p>
              <p>мытая Индия, сухой Вьетнам</p>
            </div>

            <div className="d-flex align-items-center border-bottom justify-content-between mb-4">
              <p className="fw-bold">Способ обработки: </p>
              <p>мытая, сухая</p>
            </div>

            <div className="d-flex align-items-center border-bottom justify-content-between mb-4">
              <p className="fw-bold">Вид кофе: </p>
              <p>cмесь арабика/робуста</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row container-fluid mx-auto">
        <div className="col-lg-8">
          <div className="fs-5">
            <p>
              Разнообразный и богатый опыт новая модель организационной
              деятельности позволяет оценить значение позиций, занимаемых
              участниками в отношении поставленных задач. Значимость этих
              проблем настолько очевидна, что дальнейшее развитие различных форм
              деятельности в значительной степени обуславливает создание модели
              развития.
            </p>

            <p>
              Задача организации, в особенности же рамки и место обучения кадров
              способствует подготовки и реализации систем массового участия.
              Таким образом укрепление и развитие структуры способствует
              подготовки и реализации направлений прогрессивного развития.
            </p>
            <p>
              Товарищи! реализация намеченных плановых заданий обеспечивает
              широкому кругу (специалистов) участие в формировании
              соответствующий условий активизации. С другой стороны реализация
              намеченных плановых заданий требуют от нас анализа существенных
              финансовых и административных условий.
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div>
            <img
              className="w-100 object-fit-cover rounded"
              src={cofe}
              alt="#"
            />
          </div>
        </div>
      </div>
      <h2 className="fw-bold container-fluid mx-auto my-5">Как готовить?</h2>
      <div className="container-fluid mx-auto flex-wrap d-flex gap-3 justify-content-between align-items-center mt-5">
        <div
          className="text-center p-4 bg-white rounded-4 mb-4"
          style={{ boxShadow: "0px 0px 30px 0px #95959540" }}
        >
          <p>Турка</p>
          <div>
            <img
              style={{ width: "80px", height: "80px" }}
              className="w-100"
              src={kettle1}
              alt="#"
            />
          </div>
        </div>
        <div
          className="text-center p-4 bg-white rounded-4 mb-4"
          style={{ boxShadow: "0px 0px 30px 0px #95959540" }}
        >
          <p>Френч-пресс</p>
          <div>
            <img
              style={{ width: "80px", height: "80px" }}
              className="w-100"
              src={kettle2}
              alt="#"
            />
          </div>
        </div>
        <div
          className="text-center p-4 bg-white rounded-4 mb-4"
          style={{ boxShadow: "0px 0px 30px 0px #95959540" }}
        >
          <p>Мока</p>
          <div>
            <img
              style={{ width: "80px", height: "80px" }}
              className="w-100"
              src={kettle3}
              alt="#"
            />
          </div>
        </div>
        <div
          className="text-center p-4 bg-white rounded-4 mb-4"
          style={{ boxShadow: "0px 0px 30px 0px #95959540" }}
        >
          <p>Эспрессо</p>
          <div>
            <img
              style={{ width: "80px", height: "80px" }}
              className="w-100"
              src={kettle4}
              alt="#"
            />
          </div>
        </div>
        <div
          className="text-center p-4 bg-white rounded-4 mb-4"
          style={{ boxShadow: "0px 0px 30px 0px #95959540" }}
        >
          <p>Воронка</p>
          <div>
            <img
              style={{ width: "80px", height: "80px" }}
              className="w-100"
              src={kettle5}
              alt="#"
            />
          </div>
        </div>
        <div
          className="text-center p-4 bg-white rounded-4 mb-4"
          style={{ boxShadow: "0px 0px 30px 0px #95959540" }}
        >
          <p>Аэропресс</p>
          <div>
            <img
              style={{ width: "80px", height: "80px" }}
              className="w-100"
              src={kettle6}
              alt="#"
            />
          </div>
        </div>
        <div
          className="text-center p-4 bg-white rounded-4 mb-4"
          style={{ boxShadow: "0px 0px 30px 0px #95959540" }}
        >
          <p>Чашка</p>
          <div>
            <img
              style={{ width: "80px", height: "80px" }}
              className="w-100"
              src={kettle7}
              alt="#"
            />
          </div>
        </div>
        <div
          className="text-center p-4 bg-white rounded-4 mb-4"
          style={{ boxShadow: "0px 0px 30px 0px #95959540" }}
        >
          <p>Автомат</p>
          <div>
            <img
              style={{ width: "80px", height: "80px" }}
              className="w-100"
              src={kettle8}
              alt="#"
            />
          </div>
        </div>
      </div>

      <div className="container-fluid mx-auto my-5">
        <h2 className="fw-bold">Дополнительно</h2>
        <div className="mt-4 pe-5 fs-5">
          <p>
            Разнообразный и богатый опыт новая модель организационной
            деятельности позволяет оценить значение позиций, занимаемых
            участниками в отношении поставленных задач. Значимость этих проблем
            настолько очевидна, что дальнейшее развитие различных форм
            деятельности в значительной степени обуславливает создание модели
            развития.
          </p>

          <p>
            Задача организации, в особенности же рамки и место обучения кадров
            способствует подготовки и реализации систем массового участия. Таким
            образом укрепление и развитие структуры способствует подготовки и
            реализации направлений прогрессивного развития.
          </p>
          <p>
            Товарищи! реализация намеченных плановых заданий обеспечивает
            широкому кругу (специалистов) участие в формировании соответствующий
            условий активизации. С другой стороны реализация намеченных плановых
            заданий требуют от нас анализа существенных финансовых и
            административных условий.
          </p>
        </div>
        <div className="mt-5">
          <img className="w-100" src={image1} />
        </div>
      </div>
      <div className="container-fluid mx-auto my-5">
        <h2 className="fw-bold">Название темы</h2>
        <div className="mt-4 pe-5 fs-5">
          <p>
            Разнообразный и богатый опыт новая модель организационной
            деятельности позволяет оценить значение позиций, занимаемых
            участниками в отношении поставленных задач. Значимость этих проблем
            настолько очевидна, что дальнейшее развитие различных форм
            деятельности в значительной степени обуславливает создание модели
            развития.
          </p>

          <p>
            Задача организации, в особенности же рамки и место обучения кадров
            способствует подготовки и реализации систем массового участия. Таким
            образом укрепление и развитие структуры способствует подготовки и
            реализации направлений прогрессивного развития.
          </p>
          <p>
            Товарищи! реализация намеченных плановых заданий обеспечивает
            широкому кругу (специалистов) участие в формировании соответствующий
            условий активизации. С другой стороны реализация намеченных плановых
            заданий требуют от нас анализа существенных финансовых и
            административных условий.
          </p>
        </div>
        <div className="mt-5">
          <img className="w-100" src={image2} />
        </div>
      </div>
      <div className="container-fluid mx-auto my-5">
        <h2 className="fw-bold">Название темы</h2>
        <div className="mt-4 pe-5 fs-5">
          <p>
            Разнообразный и богатый опыт новая модель организационной
            деятельности позволяет оценить значение позиций, занимаемых
            участниками в отношении поставленных задач. Значимость этих проблем
            настолько очевидна, что дальнейшее развитие различных форм
            деятельности в значительной степени обуславливает создание модели
            развития.
          </p>

          <p>
            Задача организации, в особенности же рамки и место обучения кадров
            способствует подготовки и реализации систем массового участия. Таким
            образом укрепление и развитие структуры способствует подготовки и
            реализации направлений прогрессивного развития.
          </p>
          <p>
            Товарищи! реализация намеченных плановых заданий обеспечивает
            широкому кругу (специалистов) участие в формировании соответствующий
            условий активизации. С другой стороны реализация намеченных плановых
            заданий требуют от нас анализа существенных финансовых и
            административных условий.
          </p>
        </div>
        <div className="mt-5">
          <img className="w-100" src={image3} />
        </div>
      </div>
      <div className="container-fluid mx-auto mt-5">
        <h2 className="fw-bold mt-5 mb-4 pt-5">Отзывы</h2>
        <div className="rounded-4 bg-white pt-3 mb-3">
          <p className="fw-bold px-3 text-black fs-2">""</p>
          <div className="d-flex align-items-center justify-content-between px-3">
            <p className="fw-bold">Отличный вкус!</p>
            <p>21.12.2020</p>
          </div>
          <Rate className="px-3" disabled defaultValue={4} />
          <p className="px-3">
            Товарищи! реализация намеченных плановых заданий обеспечивает
            широкому кругу (специалистов) участие в формировании соответствующий
            условий активизации.
          </p>

          <div
            style={{ background: "#FFF7E1" }}
            className="d-flex align-items-center rounded-bottom-4 gap-4 px-3 py-1"
          >
            <img style={{ width: "40px", height: "40px" }} src={ellipse43} />
            <div>
              <p className="fw-bold p-0 m-0">Ирина</p>
              <p className="p-0 m-0">г. Москва</p>
            </div>
          </div>
        </div>

        <div className="rounded-4 bg-white pt-3 mb-3">
          <p className="fw-bold px-3 text-black fs-2">""</p>
          <div className="d-flex align-items-center justify-content-between px-3">
            <p className="fw-bold">Отличный вкус!</p>
            <p>21.12.2020</p>
          </div>
          <Rate className="px-3" disabled defaultValue={4} />
          <p className="px-3">
            Товарищи! реализация намеченных плановых заданий обеспечивает
            широкому кругу (специалистов) участие в формировании соответствующий
            условий активизации.
          </p>

          <div
            style={{ background: "#FFF7E1" }}
            className="d-flex align-items-center rounded-bottom-4 gap-4 px-3 py-1"
          >
            <img style={{ width: "40px", height: "40px" }} src={ellipse43} />
            <div>
              <p className="fw-bold p-0 m-0">Ирина</p>
              <p className="p-0 m-0">г. Москва</p>
            </div>
          </div>
        </div>


        <div className="rounded-4 bg-white pt-3 mb-3">
          <p className="fw-bold px-3 text-black fs-2">""</p>
          <div className="d-flex align-items-center justify-content-between px-3">
            <p className="fw-bold">Отличный вкус!</p>
            <p>21.12.2020</p>
          </div>
          <Rate className="px-3" disabled defaultValue={4} />
          <p className="px-3">
            Товарищи! реализация намеченных плановых заданий обеспечивает
            широкому кругу (специалистов) участие в формировании соответствующий
            условий активизации.
          </p>

          <div
            style={{ background: "#FFF7E1" }}
            className="d-flex align-items-center rounded-bottom-4 gap-4 px-3 py-1"
          >
            <img style={{ width: "40px", height: "40px" }} src={ellipse43} />
            <div>
              <p className="fw-bold p-0 m-0">Ирина</p>
              <p className="p-0 m-0">г. Москва</p>
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
      </div>
    </>
  );
};
