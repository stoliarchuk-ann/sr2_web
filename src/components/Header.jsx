import { useEffect, useState } from "react";
import data from "./Header.json";
import "./Header.css";

const hide = (e) => {
  e.target.style.display = "none";
};

function Header() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % data.slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = data.slides[current];

  return (
    <header id = "top">
      <nav className = "menu">
        <div className = "logo">🌿 {data.logo}</div>
        <ul>
          {data.menu.map((item, index) => (
            <li key = {item}>
              <a href = {data.links[index]}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className = "hero" key = {current}>
        <img className = "hero-img" src = {slide.image} alt = {slide.title} onError = {hide} />
        <div className = "overlay" />
        <div className = "hero-content">
          <span className = "tag">{slide.emoji} {slide.tag}</span>
          <h1>{slide.title}</h1>
          <p>{slide.text}</p>
          <a href = "#routes" className = "button">Обрати розвагу</a>
        </div>
        <div className = "dots">
          {data.slides.map((item, index) => (
            <button
              key = {item.title}
              className = {index === current ? "dot active" : "dot"}
              onClick = {() => setCurrent(index)}
              aria-label = {item.title}
            />
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header;