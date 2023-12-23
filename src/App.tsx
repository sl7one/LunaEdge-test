import Container from "./components/Container";
import Form from "./components/Form";
import { GlobalProvider } from "./context/context";

function App() {
  return (
    <GlobalProvider>
      <Container>
        <Form />
      </Container>
    </GlobalProvider>
  );
}

export default App;
