import data from "./Header.json";
import "./Extra.css";

const hide = (e) => {
    e.target.style.display = "none";
};

function Extra() {
    return (
        <div className = "extra">
            <section className = "stats">
                {data.stats.map((stat) => (
                <div className = "stat" key = {stat.id}>
                    <strong>{stat.value}</strong>
                <span>{stat.label}</span>
                </div>
                ))}
            </section>

            <section id = "about" className = "about">
                <div className = "about-image">
                    <img src = {data.aboutImage} alt = {data.aboutTitle} onError = {hide} />
                </div>

                <div className = "about-text">
                    <span className = "label">Знайомство</span>
                    <h2>{data.aboutTitle}</h2>
                    <p>{data.aboutText}</p>
                </div>
            </section>
        </div>
    );
}

export default Extra;