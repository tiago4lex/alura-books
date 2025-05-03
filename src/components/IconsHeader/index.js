import profile from "../../images/perfil.svg";
import cart from "../../images/sacola.svg";
import "./style.css";

const icons = [profile, cart];

function IconsHeader() {
  return (
    <ul className="icons">
      {icons.map((icon) => (
        <li className="icon">
          <img src={icon} alt="icon" />
        </li>
      ))}
    </ul>
  );
}

export default IconsHeader;
