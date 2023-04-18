import styled from "styled-components";
import { Header } from "./header";
import { Calendar } from "./main";

const AppWrapper = styled.div`
max-width: 740px;
min-height: 95vh;
margin: 15px auto;
display: flex;
flex-direction: column;

align-self: center;
align-items: center;

background: #f9fafb;
box-shadow: 0px 0px 10px black;
border-radius: 5px;
@media (max-width: 740px) {
    width: 100%;
  }
`

function App() {
  return (
    <AppWrapper className="App">
      <Header />
      <Calendar />
    </AppWrapper>
  );
}

export default App;
