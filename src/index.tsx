import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import reportWebVitals from "./reportWebVitals"
import * as serviceWorker from "./serviceWorker"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Store from "./cms/pages/home"
import { Navbar } from "./website/components/navbar"
import {
  ChakraProvider,
} from "@chakra-ui/react"
import { extendTheme } from '@chakra-ui/react'
import Home from "./website/pages/home";
import Products from "./cms/pages/products"
import Collections from "./cms/pages/collections"
import Settings from "./cms/pages/settings"
import Account from "./cms/pages/account"

// example theme
const theme = extendTheme({
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
});

const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <ColorModeScript />

    <ChakraProvider theme={theme}>
     <BrowserRouter>
      <Routes>
          <Route path="/" element={
            <>
              <Navbar/>
              <Home />
            </>
          } />
          <Route path="learn" element={
            <>
              <Navbar/>
              <Home />
            </>
          } />
          <Route path="documentation" element={
            <>
              <Navbar/>
              <Home />
            </>
          } />
          <Route path="examples" element={
            <>
              <Navbar/>
              <Home />
            </>
          } />
        <Route path="store" element={<Store />} />
        <Route path="store/products" element={<Products />} />
        <Route path="store/collections" element={<Collections />} />
        <Route path="store/settings" element={<Settings />} />
        <Route path="store/account" element={<Account />} />
      </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

