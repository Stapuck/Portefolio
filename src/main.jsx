import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import i18n from "i18next";
import { initReactI18next } from "react-i18next"
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend';

import App from './App.jsx'
import './index.css'

// import 'flag-icon-css/css/flag-icon.min.css'

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    supportedLngs: ['en', 'fr','ar'],
    detection: {
        order: ['htmlTag', 'cookie', 'localStorage', 'path', 'subdomain'],
        caches : ['cookie'],
    },
    backend:{
        loadPath: 'public/assets/locales/{{lng}}/translation.json',
    }

  });


const loadingMarkup =(
        <div className="py-4 text-center">
                <h2>Loading... </h2>
        </div>
)


ReactDOM.createRoot(document.getElementById('root')).render(
// <Suspense fallback={loadingMarkup}>
        <React.StrictMode>
                <App />
        </React.StrictMode>
// </Suspense>
);

