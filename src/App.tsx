import Container from "./components/Container";
import Form from "./components/Form";
import Portal from "./components/Portal";
import { GlobalProvider } from "./context/context";
import { Icon } from "./stories/Icons/Icon";

function App() {
  return (
    <GlobalProvider>
      <Container>
        <h1 className="capitalize font-bold text-5xl mt-[100px] inline-flex gap-4 items-center"><Icon name="star" fill="blue"/> Gather your Pokemon team</h1>
        <Form />
        <Portal />
      </Container>
    </GlobalProvider>
  );
}

export default App;
