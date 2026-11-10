import { useState } from "react";
import items from "./Attractions.json";
import "./Attractions.css";

const types = ["Усі", ...new Set(items.map((item) => item.type))];

function Attractions() {
  const [type, setType] = useState("Усі");

  const visible = type === "Усі" ? items : items.filter((item) => item.type === type);

  return (
    <main id = "routes" className = "attractions">
      <span className = "label">Розваги</span>
      <h2>Що чекає на вас</h2>
      <p className = "subtitle">Обирайте маршрут, активність або місце для відпочинку</p>

      <div className = "filters">
        {types.map((name) => (
          <button
            key = {name}
            className = {name === type ? "filter active" : "filter"}
            onClick = {() => setType(name)}
          >
            {name}
          </button>
        ))}
      </div>

      <div className = "grid">
        {visible.map((item) => (
          <article className = "card" key = {item.id}>
            <div className = "card-image">
              <img src = {item.image} alt = {item.name} onError = {(e) => (e.target.style.display = "none")} />
              <span className = {`badge ${item.tone}`}>{item.emoji}</span>
              <span className = "card-type">{item.type}</span>
            </div>
            <div className = "card-body">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <strong className = "price">{item.price} грн</strong>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Attractions;