import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import cls from "./styles/styles.module.css";

function App() {
  return (
    <div className={cls.container}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
