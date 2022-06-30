import Button from "./Button";

function App(){
  const botao = [
    {
      tit: "PREVIOUS",
      sub: "JQUERY: DETECT UPDATE OF HTML ELEMENT",
    },
    {
      tit2: "NEXT",
      sub2: "RAILS + DEVISE WORKING WITH MULTIPLE MODELS"
    },
  ];

  return (
    <div>
      {botao.map((button) => {
        return <Button 
                titulo={button.tit}
                subtitulo={button.sub}
                titulo2={button.tit2}
                subtitulo2={button.sub2}
                />;
      })
      }
    </div>
  )
}
export default App;