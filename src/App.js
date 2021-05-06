import ArticleList from "./components/ArticleList";
import { Switch, Route } from "react-router-dom";
import ArticleDetails from "./components/ArticleDetails";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/articles/:id" component={ArticleDetails} />
        <Route path="/" component={ArticleList} />
      </Switch>
    </div>
  );
}

export default App;
