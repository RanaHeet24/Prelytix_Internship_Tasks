import { useEffect, useState } from "react";

function QuoteWidget() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="card bg-primary text-primary-content mb-6 shadow-lg">
      <div className="card-body">
        <h2 className="card-title">Daily Motivation</h2>

        {
          loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <p>{quote}</p>
          )
        }
      </div>
    </div>
  );
}

export default QuoteWidget;