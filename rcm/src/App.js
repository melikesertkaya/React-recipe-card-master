import "./App.css"
import Card from "./components/Card";
import food from "./Image/food.jpg";

function App(){
  const recipeAuthor="melike";
  const recipeItem={
    title:"Dolmabiber",
    date:"18 Mart 2021",
    image:food,
    description:"Geleneksel Türk lezzeti"

  };
  const likeCount=185;
  const isLiked=false;
  return(
    <div className ="App">
      <header className="AppHeader">
        <Card
        author={recipeAuthor}
        />
      </header>
    </div>
  );
}


export default App;