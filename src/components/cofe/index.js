import { useNavigate } from "react-router-dom";
import logo from "../image/image 25.png";
import coffee1 from "../image/kisspng-cafe-chocolate-covered-coffee-bean-espresso-5aeee25cddd876 1.png";
import coffee2 from "../image/kisspng-coffee-espresso-cappuccino-cafe-breakfast-coffee-5abb12d39e9a33 1.png";
import torabika from "../image/torabika.png";
import kettle1 from "../image/kettle1.png";
import kettle2 from "../image/kettle2.png";
import kettle3 from "../image/kettle3.png";
import kettle4 from "../image/kettle4.png";
import kettle5 from "../image/kettle5.png";
import kettle6 from "../image/kettle6.png";
import kettle7 from "../image/kettle7.png";
import kettle8 from "../image/kettle8.png";
import image5 from "../image/image 5.png";
import "./coffee.css";
import { useState } from "react";
import { Rate } from "antd";
import { Navbar } from "../navbar";
export const Cofe = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(1);
  const [navbarIcon, setNavbarIcon] = useState("");
  return (
    <>
     <Navbar/>
      <div
        className="row container-fluid mx-auto pt-5 header"
        style={{ position: "relative", zIndex: "-1" }}
      >
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="">
            <h1 style={{ fontSize: "40px" }} className="fw-bold text-white">
              Свежеобжаренный кофе
            </h1>
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="d-flex align-items-end justify-content-end"
            style={{ position: "relative", height: "340px" }}
          >
            {" "}
            <img
              style={{ zIndex: 1, position: "absolute", top: 0, left: 0 }}
              className="w-75"
              src={coffee1}
              alt="First Coffee"
            />
            <img
              style={{ zIndex: 2, position: "absolute", top: 0, left: 0 }}
              className="w-75"
              src={coffee2}
              alt="Second Coffee"
            />
          </div>
        </div>
      </div>
      <div
        style={{ marginTop: "-30px", zIndex: "1" }}
        className="row container-fluid mx-auto"
      >
        <div style={{}} className="col-lg-3 col-12 mb-5">
          <div
            className="p-3 bg-white h-100"
            style={{
              // borderLeft: "5px solid #F9B300",
              boxShadow: "0px 0px 30px 0px #95959540",
              borderRadius: "15px",
            }}
          >
            <div
              style={{
                borderLeft: "5px solid #F9B300",
                // boxShadow: "0px 0px 30px 0px #95959540",
                // borderRadius: "15px",
              }}
              className="p-3 bg-white"
            >
              <div className="ps-3">
                <h5 className="fw-bold">Степень обжарки</h5>
                <div>
                  <div class="form-check my-4">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label d-flex align-items-center gap-2"
                      for="flexRadioDefault1"
                    >
                      <img
                        style={{ width: "18px", height: "18px" }}
                        src={torabika}
                        alt="#"
                      />
                      <img
                        style={{ width: "18px", height: "18px" }}
                        src={torabika}
                        alt="#"
                      />
                      <img
                        style={{ width: "18px", height: "18px" }}
                        src={torabika}
                        alt="#"
                      />
                      <img
                        style={{ width: "18px", height: "18px" }}
                        src={torabika}
                        alt="#"
                      />
                      <img
                        style={{ width: "18px", height: "18px" }}
                        src={torabika}
                        alt="#"
                      />
                    </label>
                  </div>
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label d-flex align-items-center gap-2"
                      for="flexRadioDefault1"
                    >
                      <img
                        style={{ width: "18px", height: "18px" }}
                        src={torabika}
                        alt="#"
                      />
                      <img
                        style={{ width: "18px", height: "18px" }}
                        src={torabika}
                        alt="#"
                      />
                      <img
                        style={{ width: "18px", height: "18px" }}
                        src={torabika}
                        alt="#"
                      />
                      <img
                        style={{ width: "18px", height: "18px" }}
                        src={torabika}
                        alt="#"
                      />
                    </label>
                  </div>
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label d-flex align-items-center gap-2"
                      for="flexRadioDefault1"
                    >
                      <img
                        style={{ width: "18px", height: "18px" }}
                        src={torabika}
                        alt="#"
                      />
                      <img
                        style={{ width: "18px", height: "18px" }}
                        src={torabika}
                        alt="#"
                      />
                      <img
                        style={{ width: "18px", height: "18px" }}
                        src={torabika}
                        alt="#"
                      />
                    </label>
                  </div>
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label d-flex align-items-center gap-2"
                      for="flexRadioDefault1"
                    >
                      <img
                        style={{ width: "18px", height: "18px" }}
                        src={torabika}
                        alt="#"
                      />
                      <img
                        style={{ width: "18px", height: "18px" }}
                        src={torabika}
                        alt="#"
                      />
                    </label>
                  </div>
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label d-flex align-items-center gap-2"
                      for="flexRadioDefault1"
                    >
                      <img
                        style={{ width: "18px", height: "18px" }}
                        src={torabika}
                        alt="#"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{}} className="col-lg-9 col-12 mb-5">
          <div
            style={{
              borderRadius: "15px",
              boxShadow: "0px 0px 30px 0px #95959540",
            }}
            className="p-3 bg-white "
          >
            <div
              style={{
                borderTop: "5px solid #F9B300",
              }}
              className="d-flex justify-content-between flex-wrap bg-white p-3"
            >
              <ul>
                <li className="fw-bold">География</li>
                <li>
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label d-flex align-items-center gap-2"
                      for="flexRadioDefault1"
                    >
                      Африка
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label d-flex align-items-center gap-2"
                      for="flexRadioDefault1"
                    >
                      Йемен
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label d-flex align-items-center gap-2"
                      for="flexRadioDefault1"
                    >
                      Уганда
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label d-flex align-items-center gap-2"
                      for="flexRadioDefault1"
                    >
                      Эфиопия
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label d-flex align-items-center gap-2"
                      for="flexRadioDefault1"
                    >
                      Азия
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label d-flex align-items-center gap-2"
                      for="flexRadioDefault1"
                    >
                      Центр. Америка
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label d-flex align-items-center gap-2"
                      for="flexRadioDefault1"
                    >
                      Лат. Америка
                    </label>
                  </div>
                </li>
              </ul>
              <div>
                <ul>
                  <li className="fw-bold">Кислинка</li>
                  <li>
                    <div class="form-check mb-3">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        class="form-check-label d-flex align-items-center gap-2"
                        for="flexRadioDefault1"
                      >
                        Низкая
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="form-check mb-3">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        class="form-check-label d-flex align-items-center gap-2"
                        for="flexRadioDefault1"
                      >
                        Средняя
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="form-check mb-3">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        class="form-check-label d-flex align-items-center gap-2"
                        for="flexRadioDefault1"
                      >
                        Высокая
                      </label>
                    </div>
                  </li>
                </ul>
                <ul>
                  <li className="fw-bold">Способ обработки</li>
                  <li>
                    <div class="form-check mb-3">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        class="form-check-label d-flex align-items-center gap-2"
                        for="flexRadioDefault1"
                      >
                        Сухая
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="form-check mb-3">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        class="form-check-label d-flex align-items-center gap-2"
                        for="flexRadioDefault1"
                      >
                        Мытая
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="form-check mb-3">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        class="form-check-label d-flex align-items-center gap-2"
                        for="flexRadioDefault1"
                      >
                        Прочие
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
              <ul>
                <li className="fw-bold">Особые</li>
                <li>
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label d-flex align-items-center gap-2"
                      for="flexRadioDefault1"
                    >
                      Популярное
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label d-flex align-items-center gap-2"
                      for="flexRadioDefault1"
                    >
                      Новый урожай
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label d-flex align-items-center gap-2"
                      for="flexRadioDefault1"
                    >
                      Ваш выбор
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label d-flex align-items-center gap-2"
                      for="flexRadioDefault1"
                    >
                      Эфиопия
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label d-flex align-items-center gap-2"
                      for="flexRadioDefault1"
                    >
                      Сорт недели
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label d-flex align-items-center gap-2"
                      for="flexRadioDefault1"
                    >
                      Скидки
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label d-flex align-items-center gap-2"
                      for="flexRadioDefault1"
                    >
                      Новинка
                    </label>
                  </div>
                </li>
              </ul>
              <ul>
                <li className="fw-bold">Вид кофе</li>
                <li>
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label d-flex align-items-center gap-2"
                      for="flexRadioDefault1"
                    >
                      Арабика
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label d-flex align-items-center gap-2"
                      for="flexRadioDefault1"
                    >
                      Робуста
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label d-flex align-items-center gap-2"
                      for="flexRadioDefault1"
                    >
                      Смесь арабик
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      class="form-check-label d-flex align-items-center gap-2"
                      for="flexRadioDefault1"
                    >
                      Смесь арабика/робуста
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mx-auto flex-wrap d-flex gap-3 justify-content-between align-items-center">
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
      <a className="text-black container-fluid mx-auto " href="#">
        Сортировка
      </a>
      <div className="row  container-fluid mx-auto mt-5">
        <div className="col-lg-3 mb-4 col-md-4 col-12">
          <div className="p-3 bg-white rounded-4" onClick={() => {navigate("/about-product")}}>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                {/* <span
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
                  </span> */}
                <p style={{ color: "#F9B300" }} className="fw-bold">
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
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
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
              {/* <h3 className="" style={{ color: "#C6C6C6" }}>
                  350 ₽
                </h3> */}
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
        </div>
        <div className="col-lg-3 mb-4 col-md-4 col-12">
          <div className="p-3 bg-white rounded-4" onClick={() => {navigate("/about-product")}}>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                {/* <span
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
                  </span> */}
                <p style={{ color: "#F9B300" }} className="fw-bold">
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
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
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
              {/* <h3 className="" style={{ color: "#C6C6C6" }}>
                  350 ₽
                </h3> */}
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
        </div>
        <div className="col-lg-3 mb-4 col-md-4 col-12">
          <div className="p-3 bg-white rounded-4" onClick={() => {navigate("/about-product")}}>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                {/* <span
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
                  </span> */}
                <p style={{ color: "#F9B300" }} className="fw-bold">
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
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
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
              {/* <h3 className="" style={{ color: "#C6C6C6" }}>
                  350 ₽
                </h3> */}
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
        </div>
        <div className="col-lg-3 mb-4 col-md-4 col-12">
          <div className="p-3 bg-white rounded-4" onClick={() => {navigate("/about-product")}}>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                {/* <span
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
                  </span> */}
                <p style={{ color: "#F9B300" }} className="fw-bold">
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
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
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
              {/* <h3 className="" style={{ color: "#C6C6C6" }}>
                  350 ₽
                </h3> */}
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
        </div>
        <div className="col-lg-3 mb-4 col-md-4 col-12">
          <div className="p-3 bg-white rounded-4" onClick={() => {navigate("/about-product")}}>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                {/* <span
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
                  </span> */}
                <p style={{ color: "#F9B300" }} className="fw-bold">
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
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
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
              {/* <h3 className="" style={{ color: "#C6C6C6" }}>
                  350 ₽
                </h3> */}
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
        </div>
        <div className="col-lg-3 mb-4 col-md-4 col-12">
          <div className="p-3 bg-white rounded-4" onClick={() => {navigate("/about-product")}}>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                {/* <span
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
                  </span> */}
                <p style={{ color: "#F9B300" }} className="fw-bold">
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
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
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
              {/* <h3 className="" style={{ color: "#C6C6C6" }}>
                  350 ₽
                </h3> */}
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
        </div>
        <div className="col-lg-3 mb-4 col-md-4 col-12">
          <div className="p-3 bg-white rounded-4" onClick={() => {navigate("/about-product")}}>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                {/* <span
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
                  </span> */}
                <p style={{ color: "#F9B300" }} className="fw-bold">
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
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
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
              {/* <h3 className="" style={{ color: "#C6C6C6" }}>
                  350 ₽
                </h3> */}
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
        </div>
        <div className="col-lg-3 mb-4 col-md-4 col-12">
          <div className="p-3 bg-white rounded-4" onClick={() => {navigate("/about-product")}}>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                {/* <span
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
                  </span> */}
                <p style={{ color: "#F9B300" }} className="fw-bold">
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
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
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
              {/* <h3 className="" style={{ color: "#C6C6C6" }}>
                  350 ₽
                </h3> */}
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
        </div>
        <div className="col-lg-3 mb-4 col-md-4 col-12">
          <div className="p-3 bg-white rounded-4" onClick={() => {navigate("/about-product")}}>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                {/* <span
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
                  </span> */}
                <p style={{ color: "#F9B300" }} className="fw-bold">
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
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
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
              {/* <h3 className="" style={{ color: "#C6C6C6" }}>
                  350 ₽
                </h3> */}
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
        </div>
        <div className="col-lg-3 mb-4 col-md-4 col-12">
          <div className="p-3 bg-white rounded-4" onClick={() => {navigate("/about-product")}}>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                {/* <span
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
                  </span> */}
                <p style={{ color: "#F9B300" }} className="fw-bold">
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
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
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
              {/* <h3 className="" style={{ color: "#C6C6C6" }}>
                  350 ₽
                </h3> */}
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
        </div>
        <div className="col-lg-3 mb-4 col-md-4 col-12">
          <div className="p-3 bg-white rounded-4" onClick={() => {navigate("/about-product")}}>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                {/* <span
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
                  </span> */}
                <p style={{ color: "#F9B300" }} className="fw-bold">
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
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
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
              {/* <h3 className="" style={{ color: "#C6C6C6" }}>
                  350 ₽
                </h3> */}
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
        </div>
        <div className="col-lg-3 mb-4 col-md-4 col-12">
          <div className="p-3 bg-white rounded-4" onClick={() => {navigate("/about-product")}}>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                {/* <span
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
                  </span> */}
                <p style={{ color: "#F9B300" }} className="fw-bold">
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
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
                  <img style={{ width: "19px" }} className="" src={torabika} />
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
              {/* <h3 className="" style={{ color: "#C6C6C6" }}>
                  350 ₽
                </h3> */}
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
