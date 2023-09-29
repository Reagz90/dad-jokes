import "../index.css";
import { useState } from "react";

function DadJokes() {
  const [joke, setJoke] = useState("");

  const fetchDadJoke = () => {
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const joke = data.joke; // Extract the joke from the JSON response
        setJoke(data.joke);
        console.log(joke); // You can log it to the console or use it as needed
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  return (
    <div>
      <img className="dadimage" src="/dad-laughing.jpg" alt="dad" />
      <div>
        <button className="button" onClick={fetchDadJoke}>Give me a dad joke!</button>
      </div>
      <div className="joke">{joke}</div>
    </div>
  );
}

export default DadJokes;
