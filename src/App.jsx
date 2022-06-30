import Menu from "./Menu.jsx";

function App(){
  const lista_menu = [
    {
      tit: "Tools",
    },
    {
      tit: "Pricing",
    },
    {
      tit: "Blog",
    },
    {
      tit: "About",
    },
    {
      tit: "Customers",
    },
  ];

  return (
    <div>
      {lista_menu.map((menu) => {
        return <Menu 
                titulo={menu.tit}
                />
      })
      }
    </div>
  )
}
export default App;