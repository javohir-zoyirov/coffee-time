import { useNavigate } from "react-router-dom";
import logo from "../image/image 25.png";
import { useState } from "react";
import { Table } from "antd";
import "./basket.css";
import image5 from "../image/image 5.png";
import visa from "../image/image 27.png";
import mastercard from "../image/image 28.png";

export const Basket = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(1);
  const [navbarIcon, setNavbarIcon] = useState("");
  const dataSource = [
    {
      key: "1",
      name: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x-lg "
            viewBox="0 0 16 16"
            style={{ color: "#F9B300" }}
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </>
      ),
      age: (
        <div className="d-flex align-items-center gap-5">
          <img style={{ width: "50px", height: "80px" }} src={image5} alt="#" />
          <div>
            <p className="p-0 m-0 fw-bold">Columbia Supremo</p>
            <p className="p-0 m-0">Мытая, натуральная, смесь 250 г.</p>
          </div>
        </div>
      ),
      address: "270 ₽ ",
      quantity: (
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
      ),
      sale: "27 ₽ ",
      itogo: "243 ₽ ",
    },
    {
      key: "2",
      name: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x-lg "
            viewBox="0 0 16 16"
            style={{ color: "#F9B300" }}
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </>
      ),
      age: (
        <div className="d-flex align-items-center gap-5">
          <img style={{ width: "50px", height: "80px" }} src={image5} alt="#" />
          <div>
            <p className="p-0 m-0 fw-bold">Columbia Supremo</p>
            <p className="p-0 m-0">Мытая, натуральная, смесь 250 г.</p>
          </div>
        </div>
      ),
      address: "270 ₽ ",
      quantity: (
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
      ),
      sale: "27 ₽ ",
      itogo: "243 ₽ ",
    },
  ];

  const columns = [
    {
      title: "Удалить товар",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Наименование товара",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Цена",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Количество",
      dataIndex: "quantity",
      key: "address",
    },
    {
      title: "Скидка (10%)",
      dataIndex: "sale",
      key: "address",
    },
    {
      title: "Итого",
      dataIndex: "itogo",
      key: "address",
    },
  ];

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

      <div style={{ background: "#FFF7E1" }} className="py-5">
        <div className="container bg-white p-5 rounded-4">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h3 className="fw-bold p-0 m-0">2 товара в корзине</h3>
            <button
              style={{ border: "1px solid #F9B300", background: "#FFF7E1" }}
              className="btn py-1 "
            >
              Удалить все
            </button>
          </div>
          <Table
            style={{ overflowX: "scroll" }}
            dataSource={dataSource}
            columns={columns}
          />
        </div>
      </div>

      <div className="vector">
        <div className="container bg-white p-5 rounded-4">
          <h4 className="fw-bold p-0 m-0">Доставка</h4>
          <div className="row mt-5">
            <div className="col-lg-6 col-12 mb-4">
              <div>
                <input
                  style={{
                    background: "#FCFCFC",
                    border: "1px solid #F6F6F6",
                    color: "#C4C4C4",
                  }}
                  placeholder="Имя"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-lg-6 col-12 mb-4">
              <div>
                <input
                  style={{
                    background: "#FCFCFC",
                    border: "1px solid #F6F6F6",
                    color: "#C4C4C4",
                  }}
                  placeholder="Страна"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-lg-6 col-12 mb-4">
              <div>
                <input
                  style={{
                    background: "#FCFCFC",
                    border: "1px solid #F6F6F6",
                    color: "#C4C4C4",
                  }}
                  placeholder="Фамилия"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-lg-6 col-12 mb-4">
              <div>
                <input
                  style={{
                    background: "#FCFCFC",
                    border: "1px solid #F6F6F6",
                    color: "#C4C4C4",
                  }}
                  placeholder="Город"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-lg-6 col-12 mb-4">
              <div>
                <input
                  style={{
                    background: "#FCFCFC",
                    border: "1px solid #F6F6F6",
                    color: "#C4C4C4",
                  }}
                  placeholder="Телефон"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-lg-6 col-12 mb-4">
              <div>
                <input
                  style={{
                    background: "#FCFCFC",
                    border: "1px solid #F6F6F6",
                    color: "#C4C4C4",
                  }}
                  placeholder="Улица, дом"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-lg-6 col-12 mb-4">
              <div>
                <input
                  style={{
                    background: "#FCFCFC",
                    border: "1px solid #F6F6F6",
                    color: "#C4C4C4",
                  }}
                  placeholder="Email"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-lg-6 col-12 mb-4">
              <div>
                <input
                  style={{
                    background: "#FCFCFC",
                    border: "1px solid #F6F6F6",
                    color: "#C4C4C4",
                  }}
                  placeholder="Почтовый индекс"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-lg-6 col-12 mb-4">
              <div>
                <input
                  style={{
                    background: "#FCFCFC",
                    border: "1px solid #F6F6F6",
                    color: "#C4C4C4",
                  }}
                  placeholder="Название компании (необязательно)"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-lg-6 col-12 mb-4">
              <div>
                <input
                  style={{
                    background: "#FCFCFC",
                    border: "1px solid #F6F6F6",
                    color: "#C4C4C4",
                  }}
                  placeholder="Комментарий к заказу (необязательно)"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <button
            style={{ background: "#FFF7E1", border: "1px solid #F9B300" }}
            className="btn w-100 mt-3 fw-bold"
          >
            Рассчитать доставку
          </button>
        </div>
      </div>
      <div className="container rounded-4 mt-5">
        <div className="row">
          <div className="col-lg-7">
            <div className="bg-white p-5 rounded-4 h-100">
              <h4 className="fw-bold">Промокод</h4>
              <p className="py-3">
                Введите подарочный промокод в поле ниже и получите скидку на
                заказ до 20%. Скидка не распространяется на доставку
              </p>
              <input
                style={{
                  background: "#FCFCFC",
                  border: "1px solid #F6F6F6",
                  color: "#C4C4C4",
                }}
                placeholder="Введите промокод"  
                className="form-control"
              />
              <button
                style={{ background: "#FFF7E1", border: "1px solid #F9B300" }}
                className="btn w-100 mt-4 fw-bold"
              >
                Ввести промокод
              </button>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="bg-white p-5 rounded-4">
              <div className="d-flex align-items-center justify-content-between">
                <h4 className="fw-bold">Итог: 486 ₽</h4>
                <div className="d-flex align-items-center gap-3">
                  <img style={{width:"50px",height:"30px"}} src={mastercard} alt="#" />
                  <img style={{width:"50px",height:"30px"}} src={visa} alt="#" />
                </div>
              </div>
              <p style={{ color: "#747474" }}>Подытог: 540 ₽</p>
              <p style={{ color: "#747474" }}>Скидка: 54 ₽ (10%)</p>
              <div className="d-flex gap-3">
                <p>Доставка: </p>
                <div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      СДЭК - до двери 390 ₽
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Почта России 300 ₽
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      DPD - курьер, 3 дн 427 ₽
                    </label>
                  </div>
                </div>
              </div>
              <button
                style={{ background: "#FFF7E1", border: "1px solid #F9B300" }}
                className="btn w-100 mt-4 fw-bold"
              >
                Оплатить заказ
              </button>
              <p className="mt-4">
                Ваши персональные данные будут использоваться для управления
                доступом к вашей учетной записи и для других целей, описанных в
                нашем документе политика конфиденциальности.
              </p>
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

          <div className="d-flex align-items-center flex-wrap justify-content-between container-fluid mx-auto my-5">
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
