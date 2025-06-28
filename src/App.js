import WriteReview from "./WriteReview";
import './styles.css';

function App() {
  return (
    <div>
      <h1 id="main-header">Glasshouse</h1>
      <p>Welcome to transparent reviews with proof of purchase.</p>
      <WriteReview />
      <p>Powered by Glasshouse</p>
      <footer>
        <p>© 2025 Glasshouse. All rights reserved.</p>
      </footer>
      
    </div>
  );
}

export default App;