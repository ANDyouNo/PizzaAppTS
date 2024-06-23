import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

function App() {

  return (
    <div className="bg-slate-500 w-full h-96 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold underline text-rose-300">
        Hello world!
      </h1>
      <Button appearence="small">
        Button
      </Button>
      <Button appearence="big">
        Button
      </Button>
      <Input placeholder="E-mail"></Input>
    </div>
  );
}

export default App;
