import { Header } from "./header";
import { Calendar } from "./main";
import { AppWrapper } from "./style/styled";

function App() {
  return (
    <AppWrapper className="App">
      <Header />
      <Calendar />
    </AppWrapper>
  );
}

export default App;
