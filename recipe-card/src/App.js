import "./App.css";
import Card from "./components/Card/Card";
import food from "./assets/food.jpg"; // Tell webpack this JS file uses this image

function App() {
  const recipeAuthor = "Kodluyoruz";
  const recipeItem = {
    title: "Baklava",
    date: "14 Haziran 2021 Pazartesi",
    image: "https://im.haberturk.com/2021/04/05/ver1617625289/3029334_620x410.jpg",
    description:
      "Pideli Köfte, Bursa`ya özgü lezzetlerden.İskender Kebap`tan esinlenerek oluşturulduğu söylenmektedir. Pideli Köfte, pide üzerindeki küçük köftelerin üzerine kızgın tereyağı ve domates sosu dökülerek yapılıyor, yanında yoğurt ile servis ediliyor. İskenderden tek farkı pide üzerinde döner yerine köfte olması.",
  };

  const likeCount = 193;
  const isLiked = false;

  return (
    <div className="App">
      <header className="App-header">
        <Card
          /* prop ismi = { değişken } */
          author={recipeAuthor}
          author={recipeAuthor}
          title={recipeItem.title}
          date={recipeItem.date}
          image={recipeItem.image}
          description={recipeItem.description}
          likeCount={likeCount}
          isLiked={isLiked}
        />
      </header>
    </div>
  );
}

export default App;