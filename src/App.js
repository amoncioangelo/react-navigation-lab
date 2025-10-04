import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';

function Home() {
  return (
    <div className="text-center">
      <h2 className="text-center">Welcome to the Home Page</h2>

      <p className="text-center">
        <a className="btn btn-primary m-2" href="https://react.dev" target="_blank" rel="noreferrer">React Docs</a>
        <a className="btn btn-success m-2" href="/files/guide.pdf" target="_blank">Download Guide (PDF)</a>
        <a className="btn btn-secondary m-2" href="/files/manual.docx" target="_blank">Download Manual (DOCX)</a>
      </p>

      <div className="alert alert-info mt-3 text-center">Jump to sections below</div>

      <p className="text-center">
        <a className="btn btn-link" href="#section1">Jump to Section 1</a>
        <a className="btn btn-link" href="#section2">Jump to Section 2</a>
      </p>

      <div style={{ marginTop: "200px" }} id="section1">
        <h3>Section 1</h3>
        <p>This is a specific point in the page.</p>
      </div>

      <div style={{ marginTop: "200px" }} id="section2">
        <h3>Section 2</h3>
        <p>This is a new section.</p>
      </div>
    </div>
  );
}

function About() {
  return <h2 className="text-center">About Page</h2>;
}

function Contact() {
  return <h2 className="text-center">Contact Page</h2>;
}

function Services() {
  return <h2 className="text-center">Services Page</h2>;
}

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">My React Lab</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
