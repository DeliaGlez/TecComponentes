import logo from './logo.svg';
import './App.css';
import SearchBar from "./SearchBar";
import Card from './Card';
import './Card.css';
import './SearchBar.css';

const cardData = [
  { 
    url: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/B14814AD-D75A-4929-9FFF-93EE927143E5/Derivates/01b4e2de-1238-42a4-95ed-1c32ba82c814.jpg', 
    title: 'Tacos de Pollo', 
    description: 'Deliciosos tacos de pollo con salsa fresca y guarniciones variadas.', 
    txtBtn: 'Ver Receta' 
  },
  { 
    url: 'https://www.gourmet.cl/wp-content/uploads/2016/09/Ensalada_C%C3%A9sar-web-553x458.jpg', 
    title: 'Ensalada César', 
    description: 'Ensalada fresca con lechuga, pollo a la parrilla, crutones y aderezo César.', 
    txtBtn: 'Ver Receta' 
  },
  { 
    url: 'https://imag.bonviveur.com/pizza-margarita.jpg', 
    title: 'Pizza Margarita', 
    description: 'Pizza clásica con tomate, mozzarella fresca, albahaca y un toque de aceite de oliva.', 
    txtBtn: 'Ver Receta' 
  },
  { 
    url: 'https://t1.uc.ltmcdn.com/es/posts/3/0/9/como_hacer_sopa_de_tomate_casera_25903_orig.jpg', 
    title: 'Sopa de Tomate', 
    description: 'Sopa reconfortante de tomate con hierbas frescas y crutones crujientes.', 
    txtBtn: 'Ver Receta' 
  },
  { 
    url: 'https://pronacatqma.com/images/com_yoorecipe/banner_superior/16391_1.jpg', 
    title: 'Pasta Alfredo', 
    description: 'Pasta cremosa Alfredo con salsa de queso parmesano y pollo tierno.', 
    txtBtn: 'Ver Receta' 
  },
  { 
    url: 'https://cdn2.cocinadelirante.com/sites/default/files/images/2023/08/como-hacer-hamburguesa-de-atun.jpg', 
    title: 'Hamburguesa Clásica', 
    description: 'Hamburguesa jugosa con queso, lechuga, tomate y cebolla en un pan suave.', 
    txtBtn: 'Ver Receta' 
  },
  { 
    url: 'https://www.eltiempo.com/files/article_main_1200/uploads/2023/03/09/640a0d80008f8.jpeg', 
    title: 'Tarta de Manzana', 
    description: 'Tarta dulce de manzana con una cobertura crujiente y relleno de canela.', 
    txtBtn: 'Ver Receta' 
  },
  { 
    url: 'https://imag.bonviveur.com/smoothie-de-fresa.jpg', 
    title: 'Smoothie de Frutas', 
    description: 'Smoothie refrescante con una mezcla de frutas tropicales y yogur natural.', 
    txtBtn: 'Ver Receta' 
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://i.pinimg.com/originals/95/f3/4e/95f34e9bc588226a8c91a1be5bbebd67.png"  width="45px" height="45px"></img>
        <h1>Recetas de Cocina</h1>
      </header>
      <SearchBar label={"Nombre de la receta"}/>
      <div className="Cards">
        {cardData.map((card, index) => (
          <Card
            key={index}
            url={card.url}
            title={card.title}
            description={card.description}
            txtBtn={card.txtBtn}
          />
        ))}
      </div>
    </div>

  );
}

export default App;
