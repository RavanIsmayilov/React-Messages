import './App.css';
import success from "./assets/indir (1).png"
import error from "./assets/images.jpeg"
import info from "./assets/indir.png"
import AlertMessage from './components/AlertMessage';


function App() {

  const alertMessages = [
    {
      alert: "success",
      message: "Ugurlu emeliyyat",
      clas:"success"
    },
    {
      alert: "error",
      message: "Emeliyyat ugursuz oldu",
      clas:"error"
    },
    {
      alert: "info",
      message: "Emeliyyat davam edir...",
      clas:"info"
    }
  ];



  return (
    <>
    {alertMessages.map((item) => (

        <AlertMessage
        message={item.message}
        clas = {item.clas}
        foto = {item.alert === "success" ? success : item.alert === "error" ? error : info}
        />

    ))}
    </>
  );
}

export default App;
