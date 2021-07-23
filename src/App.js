import "./App.scss";
import { useState } from "react";
import Line from "./Components/Line";
import Footer from "./Components/Footer";
import emojisList from "./assets/emoji-list.json";

import Search from "./Components/Search";

function App() {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  const emojisListFiltered = emojisList.filter(
    (element) => element.keywords.indexOf(search) > 0
  );

  return (
    <div className="App">
      <div className="container">
        <Search value={search} onChange={handleSearch} />
        {search.length > 0 ? (
          emojisListFiltered.length > 0 ? (
            emojisListFiltered
              .slice(0, 20)
              .map((item, index) => (
                <Line key={index} symbol={item.symbol} text={item.title} />
              ))
          ) : (
            <Line text="😰 Oups... No match found" />
          )
        ) : (
          emojisList
            .slice(0, 20)
            .map((item, index) => (
              <Line key={index} symbol={item.symbol} text={item.title} />
            ))
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
