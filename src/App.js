import "./App.css";
import Header from "./header";
import BookList from "./books";
import Footer from "./footer";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <BookList />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
