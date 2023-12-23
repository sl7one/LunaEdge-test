import Container from "./components/Container";
import Form from "./components/Form";
import Portal from "./components/Portal";
import { GlobalProvider } from "./context/context";

function App() {
  return (
    <GlobalProvider>
      <Container>
        <Form />
        <Portal />
      </Container>
    </GlobalProvider>
  );
}

export default App;
