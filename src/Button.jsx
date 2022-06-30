import "./Button.css";

function Button({titulo, subtitulo, titulo2, subtitulo2}){
    return(

        <button className="container">
            <div className="primeiro">
            <strong><div className="titulo">{titulo}</div></strong>
            <div className="subtitulo">{subtitulo}</div>
            </div>
        
            <div className="segundo">
            <strong><div className="titulo2">{titulo2}</div></strong>
            <div className="subtitulo2">{subtitulo2}</div>
            </div>
        </button>
    );
}
export default Button;