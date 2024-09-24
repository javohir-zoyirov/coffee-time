import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../image/image 25.png";
import choy1 from "../image/choy1.png";
import choy2 from "../image/choy2.png";
import choy3 from "../image/choy3.png";
import choy4 from "../image/choy4.png";
import choy5 from "../image/choy5.png";
import kukun from "../image/kukun.png";
import machine from "../image/cofe-machine.png"
import { Rate } from "antd";
import { Navbar } from "../navbar";
export const Eat = () => {
  return (
    <>
     <Navbar/>
      <div
        style={{ background: "#F9B300" }}
        className="py-5 container-fluid mx-auto"
      >
        <h1 className="fw-bold text-white">Продукция для вендинга</h1>
      </div>

      <div
        style={{ marginTop: "-30px" }}
        className="row container-fluid mx-auto"
      >
        <div className="col-lg-3 mb-4">
          <div className="bg-white p-3 text-center rounded-4">
            <div>
              <img className="w-100" src={kukun} />
            </div>
            <p className="mt-3 fw-bold">Черный чай</p>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div className="bg-white p-3 text-center rounded-4">
            <div>
              <img className="w-100" src={kukun} />
            </div>
            <p className="mt-3 fw-bold">Зеленый чай</p>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div className="bg-white p-3 text-center rounded-4">
            <div>
              <img className="w-100" src={kukun} />
            </div>
            <p className="mt-3 fw-bold">Молочный улунг</p>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div className="p-3 text-center rounded-4">
            <img className="w-100" src={machine} />
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div className="bg-white p-3 text-center rounded-4">
            <div>
              <img className="w-100" src={kukun} />
            </div>
            <p className="mt-3 fw-bold">Черный чай</p>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div className="bg-white p-3 text-center rounded-4">
            <div>
              <img className="w-100" src={kukun} />
            </div>
            <p className="mt-3 fw-bold">Зеленый чай</p>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div className="bg-white p-3 text-center rounded-4">
            <div>
              <img className="w-100" src={kukun} />
            </div>
            <p className="mt-3 fw-bold">Черный чай</p>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div className="bg-white p-3 text-center rounded-4">
            <div>
              <img className="w-100" src={kukun   } />
            </div>
            <p className="mt-3 fw-bold">Зеленый чай</p>
          </div>
        </div>
      </div>
      <a className="text-black container-fluid mx-auto my-5" href="#">
        Сортировка
      </a>
      <div className="row container-fluid mx-auto mt-5">
        <div className="col-lg-3 mb-4">
          <div className="bg-white p-3 rounded-3">
            <div className="d-flex align-items-center justify-content-between">
              <Rate disabled defaultValue={4} />
              <span
                style={{ border: "1px solid #F9B300", background: "#FFF7E1" }}
                className="py-1 px-3 rounded-3"
              >
                100 г.
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
              </span>
            </div>
            <p className="text-black fs-5">
              4.0
              <span style={{ color: "#5B5B5B", fontSize: "14px" }}>
                (32 отзыва)
              </span>
            </p>

            <div className="text-center">
              <img src={kukun} className="w-75" />
            </div>
            <p className="fw-bold fs-5 mt-2">Наименование товара</p>
            <p>Гранулированный кофе</p>
            
              <button
                style={{ background: "#F9B300" }}
                className="btn fw-bold text-white w-100"
              >
                Оставить заявку
              </button>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div className="bg-white p-3 rounded-3">
            <div className="d-flex align-items-center justify-content-between">
              <Rate disabled defaultValue={4} />
              <span
                style={{ border: "1px solid #F9B300", background: "#FFF7E1" }}
                className="py-1 px-3 rounded-3"
              >
                100 г.
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
              </span>
            </div>
            <p className="text-black fs-5">
              4.0
              <span style={{ color: "#5B5B5B", fontSize: "14px" }}>
                (32 отзыва)
              </span>
            </p>

            <div className="text-center">
              <img src={kukun} className="w-75" />
            </div>
            <p className="fw-bold fs-5 mt-2">Наименование товара</p>
            <p>Гранулированный кофе</p>
            
              <button
                style={{ background: "#F9B300" }}
                className="btn fw-bold text-white w-100"
              >
                Оставить заявку
              </button>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div className="bg-white p-3 rounded-3">
            <div className="d-flex align-items-center justify-content-between">
              <Rate disabled defaultValue={4} />
              <span
                style={{ border: "1px solid #F9B300", background: "#FFF7E1" }}
                className="py-1 px-3 rounded-3"
              >
                100 г.
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
              </span>
            </div>
            <p className="text-black fs-5">
              4.0
              <span style={{ color: "#5B5B5B", fontSize: "14px" }}>
                (32 отзыва)
              </span>
            </p>

            <div className="text-center">
              <img src={kukun} className="w-75" />
            </div>
            <p className="fw-bold fs-5 mt-2">Наименование товара</p>
            <p>Гранулированный кофе</p>
            
              <button
                style={{ background: "#F9B300" }}
                className="btn fw-bold text-white w-100"
              >
                Оставить заявку
              </button>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div className="bg-white p-3 rounded-3">
            <div className="d-flex align-items-center justify-content-between">
              <Rate disabled defaultValue={4} />
              <span
                style={{ border: "1px solid #F9B300", background: "#FFF7E1" }}
                className="py-1 px-3 rounded-3"
              >
                100 г.
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
              </span>
            </div>
            <p className="text-black fs-5">
              4.0
              <span style={{ color: "#5B5B5B", fontSize: "14px" }}>
                (32 отзыва)
              </span>
            </p>

            <div className="text-center">
              <img src={kukun} className="w-75" />
            </div>
            <p className="fw-bold fs-5 mt-2">Наименование товара</p>
            <p>Гранулированный кофе</p>
            
              <button
                style={{ background: "#F9B300" }}
                className="btn fw-bold text-white w-100"
              >
                Оставить заявку
              </button>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div className="bg-white p-3 rounded-3">
            <div className="d-flex align-items-center justify-content-between">
              <Rate disabled defaultValue={4} />
              <span
                style={{ border: "1px solid #F9B300", background: "#FFF7E1" }}
                className="py-1 px-3 rounded-3"
              >
                100 г.
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
              </span>
            </div>
            <p className="text-black fs-5">
              4.0
              <span style={{ color: "#5B5B5B", fontSize: "14px" }}>
                (32 отзыва)
              </span>
            </p>

            <div className="text-center">
              <img src={kukun} className="w-75" />
            </div>
            <p className="fw-bold fs-5 mt-2">Наименование товара</p>
            <p>Гранулированный кофе</p>
            
              <button
                style={{ background: "#F9B300" }}
                className="btn fw-bold text-white w-100"
              >
                Оставить заявку
              </button>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div className="bg-white p-3 rounded-3">
            <div className="d-flex align-items-center justify-content-between">
              <Rate disabled defaultValue={4} />
              <span
                style={{ border: "1px solid #F9B300", background: "#FFF7E1" }}
                className="py-1 px-3 rounded-3"
              >
                100 г.
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
              </span>
            </div>
            <p className="text-black fs-5">
              4.0
              <span style={{ color: "#5B5B5B", fontSize: "14px" }}>
                (32 отзыва)
              </span>
            </p>

            <div className="text-center">
              <img src={kukun} className="w-75" />
            </div>
            <p className="fw-bold fs-5 mt-2">Наименование товара</p>
            <p>Гранулированный кофе</p>
            
              <button
                style={{ background: "#F9B300" }}
                className="btn fw-bold text-white w-100"
              >
                Оставить заявку
              </button>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div className="bg-white p-3 rounded-3">
            <div className="d-flex align-items-center justify-content-between">
              <Rate disabled defaultValue={4} />
              <span
                style={{ border: "1px solid #F9B300", background: "#FFF7E1" }}
                className="py-1 px-3 rounded-3"
              >
                100 г.
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
              </span>
            </div>
            <p className="text-black fs-5">
              4.0
              <span style={{ color: "#5B5B5B", fontSize: "14px" }}>
                (32 отзыва)
              </span>
            </p>

            <div className="text-center">
              <img src={kukun} className="w-75" />
            </div>
            <p className="fw-bold fs-5 mt-2">Наименование товара</p>
            <p>Гранулированный кофе</p>
            
              <button
                style={{ background: "#F9B300" }}
                className="btn fw-bold text-white w-100"
              >
                Оставить заявку
              </button>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div className="bg-white p-3 rounded-3">
            <div className="d-flex align-items-center justify-content-between">
              <Rate disabled defaultValue={4} />
              <span
                style={{ border: "1px solid #F9B300", background: "#FFF7E1" }}
                className="py-1 px-3 rounded-3"
              >
                100 г.
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
              </span>
            </div>
            <p className="text-black fs-5">
              4.0
              <span style={{ color: "#5B5B5B", fontSize: "14px" }}>
                (32 отзыва)
              </span>
            </p>

            <div className="text-center">
              <img src={kukun} className="w-75" />
            </div>
            <p className="fw-bold fs-5 mt-2">Наименование товара</p>
            <p>Гранулированный кофе</p>
            
              <button
                style={{ background: "#F9B300" }}
                className="btn fw-bold text-white w-100"
              >
                Оставить заявку
              </button>
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
