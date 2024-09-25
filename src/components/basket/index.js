import { useNavigate } from "react-router-dom";
import logo from "../image/image 25.png";
import { useState } from "react";
import { Table } from "antd";
import "./basket.css";
import image5 from "../image/image 5.png";
import visa from "../image/image 27.png";
import mastercard from "../image/image 28.png";
import { Navbar } from "../navbar";

export const Basket = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(1);
 const [radio, setRadio] = useState('');
 console.log(radio,"radio");
 
 const plus = () => {
  setCount(count + 1);
 }
 const minus = () => {
  if (count>1) {
   return  setCount(count-1);
  } else {
   return count;
  }
 }
 const plus2 = () => {
  setCount2(count2 + 1);
 }
 const minus2 = () => {
  if (count2>1) {
   return  setCount2(count2-1);
  } else {
   return count2;
  }
 }
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
      address: `${count * 270} $`,
      quantity: (
        <div
          style={{
            border: "1px solid #E4E4E4",
            background: "#F6F6F6",
            boxShadow: "0px 0px 50px 0px #A3A3A340",
            display: "block",
            color: "black",
          }}
          className="d-flex align-items-center justify-content-between gap-3 rounded"
        >
          <button onClick={() => {minus()}} className="btn rounded-0 border-0">-</button>
          <span>{count}</span>
          <button onClick={() => {plus()}} className="btn rounded-0 border-0">+</button>
        </div>
      ),
      sale: "27 ₽ ",
      itogo: `${count * 270 - 27} $`,
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
      address: `${count2 * 270} $`,
      quantity: (
        <div
          style={{
            border: "1px solid #E4E4E4",
            background: "#F6F6F6",
            boxShadow: "0px 0px 50px 0px #A3A3A340",
            display: "block",
            color: "black",
          }}
          className="d-flex align-items-center  justify-content-between gap-3 rounded"
        >
          <button onClick={() =>{minus2()}} className="btn rounded-0 border-0">-</button>
          <span >{count2}</span>
          <button onClick={() =>{plus2()}} className="btn rounded-0 border-0">+</button>
        </div>
      ),
      sale: "27 ₽ ",
      itogo: `${count2   * 270 - 27} $`,
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
      <Navbar/>
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
