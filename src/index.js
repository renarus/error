import React from "react";
import ReactDOM from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./components/routers/App";
import "./assets/sass/style.css"
import i18n from "i18next";
import {initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'
i18n
.use(initReactI18next) // passes i18n down to react-i18next
.use(LanguageDetector)
.use(HttpApi)
.init({
    supportedLngs: ['en', 'az'],
  fallbackLng: "en",
  detection: {
      order: ['cookie','htmlTag',  'localStorage', 'path', 'subdomain'],
      cashes: ['cookie',]
  },
  backend: {
      loadPath: '../../assets/locales/{{lng}}/translation.json'
  }

});
ReactDOM.render(<App/>,document.getElementById('root'));
