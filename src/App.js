const App = () => {

  const getMessages = async() => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: "How are you?"
      }),
      headers: {
        "Content-Type": "application/json",
      }
    };

    try {
      const response = await fetch('https://localhost:8000/completions', options);
      const data = await response.json();
      console.log(data);
    } catch(error) {
      console.error(error);
    };
  }

  return (
    <div className="app">
      <section className="side-bar">
        <button>+ New Chat</button>
        <ul className="history">
          <li>aaaaa</li>
          <li>bbbb</li>
          <li>cccccccc</li>
        </ul>
        <nav>
          <p>Made by Echizenya</p>
        </nav>
      </section>
      <section className="main">
        <h1>EchizenyaGPT</h1>
        <ul className="feed">
          
        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input/>
            <div id="submit" onClick={getMessages}>➢</div>
          </div>
          <p className="info">
            Chat GPT Dec 29 version. Free Research Preview. Our goal is to make AI systems more natural and safe to interact with. Your feedback will help us improve.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
