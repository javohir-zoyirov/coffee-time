import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../image/image 25.png";
import ivan from "../image/ivan.png";
import "./user.css";
export const User = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState();
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

      <div style={{ background: "#FFF7E1" }} className="py-4">
        <div className="container-fluid mx-uto p-0 rounded-4 bg-white">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center flex-wrap">
              <div className="p-3">
                <div>
                  <img src={ivan} style={{ height: "95px", width: "95px" }} />
                </div>
                <button
                  style={{
                    background: "#FFF7E1",
                    border: "1px solid #F9B300",
                    color: "#F9B300",
                  }}
                  className="btn mt-3 py-0"
                >
                  Изменить
                </button>
              </div>
              <div className="">
                <h4 className="fw-bold p-0 m-1">Иван Иванов, здравствуйте!</h4>
                <p className="p-0 m-1">ivan.ivanov@gmail.com</p>
                <p className="p-0 m-1">+ 7 (909) 909 99 99</p>
                <p className="p-0 m-1">Пароль: **************</p>
              </div>
            </div>
            <div className="p-3 rounded-4" style={{ background: "#F9B300" }}>
              <h5>Ваша скидка: 10%</h5>
              <p>Сумма заказов: 5675 ₽*</p>
              <p>*До скидки 15% не хватает покупок на сумму: 1255 ₽ </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mx-auto bg-white p-3 mt-5 rounded-4">
        <div>
          <h3 className="fw-bold">Мои заказы</h3>
          <div className="d-flex align-items-center gap-4 mt-3">
              <button style={{
                    background: "#FFF7E1",
                    border: "1px solid #F9B300",
                    color: "#F9B300",
                  }} className="btn py-0">Текущие заказы</button>
              <button style={{
                    background: "#F6F6F6",
                    border: "1px solid #F0F0F0",
                    color: "#F9B300",
                  }} className="btn py-0">Завершенные</button>
          </div>
          <div className="d-flex align-items-center justify-content-between mt-4">
            <p style={{color:"#222222"}}>01.08.2021 12:24:00 - оплачено</p>
            <p style={{color:"#222222"}}>Дата доставки: 03.08.2021</p>
          </div>
          <table style={{background:"#FCFCFC", padding:"10px"}} className="w-100">
            <tr >
                <th className="p-2">Товаров:</th>
                <th className="p-2">Сумма заказа:</th>
                <th className="p-2">Скидка (10%):</th>
                <th className="p-2">Сумма заказа:</th>
            </tr>
            <tr>
                <td className="p-2">2 х Columbia Supremo, 250 г.</td>
                <td className="p-2">480 ₽</td>
                <td className="p-2">48 ₽ </td>
                <td className="p-2">432 ₽ </td>
            </tr>
            <tr>
                <td className="p-2">1 х Напиток ячменый Millor, 250 г.</td>
                <td className="p-2">480 ₽</td>
                <td className="p-2">48 ₽ </td>
                <td className="p-2">432 ₽ </td>
            </tr>
          </table>
          <div className="text-end">
            <p style={{color:"#747474"}} className="p-0 m-0">Сумма заказа: 864 ₽</p>
            <p style={{color:"#747474"}} className="p-0 m-0">Доставка: 350 ₽ </p>
          </div>
        </div>
      </div> 

      <div className="container-fluid mt-5" >
        <h3 className="fw-bold">
        Персональные акции
        </h3>

        <div className="row mt-5">
           <div className="col-lg-3 mb-4">
            <div className="cofe3">
               <div className="mt-5">
               <h3>Купи 3 пачки кофе 
               и получи 4-ую в подарок!</h3>
               <p>Срок акции: до 31.08.2021</p>
               </div>
            </div>
           </div>
           <div className="col-lg-3 mb-4">
            <div className="cofe3">
               <div className="mt-5">
               <h3>Купи 3 пачки кофе 
               и получи 4-ую в подарок!</h3>
               <p>Срок акции: до 31.08.2021</p>
               </div>
            </div>
           </div>
           <div className="col-lg-3 mb-4">
            <div className="cofe3">
               <div className="mt-5">
               <h3>Купи 3 пачки кофе 
               и получи 4-ую в подарок!</h3>
               <p>Срок акции: до 31.08.2021</p>
               </div>
            </div>
           </div>
           <div className="col-lg-3 mb-4">
            <div className="cofe3">
               <div className="mt-5">
               <h3>Купи 3 пачки кофе 
               и получи 4-ую в подарок!</h3>
               <p>Срок акции: до 31.08.2021</p>
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
