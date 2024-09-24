import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../image/image 25.png";
import ivan from "../image/ivan.png";
import "./user.css";
import { Navbar } from "../navbar";
export const User = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState();
  const [navbarIcon, setNavbarIcon] = useState("");
  return (
    <>
     <Navbar/>
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
