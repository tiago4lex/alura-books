import "./style.css";

function OptionsHeader() {
  
    const textOptions = ["CATEGORIAS", "MINHA ESTANTE", "FAVORITOS"];

  return (
    <ul className="options">
      {textOptions.map((text) => (
        <li className="option">
          <p>{text}</p>
        </li>
      ))}
    </ul>
  );
}

export default OptionsHeader;
