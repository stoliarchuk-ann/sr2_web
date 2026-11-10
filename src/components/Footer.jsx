import data from "./Footer.json";
import "./Footer.css";

function Footer() {
  return (
    <footer id = "contacts" className = "footer">
      <div className = "footer-content">
        <div>
          <h3>{data.name}</h3>
          <p>Бережемо природу разом з вами</p>
        </div>
        <div>
          <h4>Контакти</h4>
          <p>📍 {data.address}</p>
          <p>📞 {data.phone}</p>
          <p>✉️ {data.email}</p>
          <p>🕘 {data.hours}</p>
        </div>
        <div>
          <h4>Ми в соцмережах</h4>
          <div className = "socials">
            {data.socials.map((social) => (
              <a key = {social.id} href = {social.url} target = "_blank" rel = "noreferrer">
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className = "copyright">© 2026 {data.name}</p>
    </footer>
  );
}

export default Footer;