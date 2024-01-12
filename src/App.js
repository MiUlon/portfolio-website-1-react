import Icons from "./components/icons/icons.component";

const App = () => {
  return (
    <div className="main-content">
      <div className="header section sec1 active">
      </div>
      <div>
        <div className="section sec2 about"></div>
        <div className="section sec3 portfolio"></div>
        <div className="section sec4 blogs"></div>
        <div className="section sec1 contact"></div>
      </div>
      <Icons />
    </div>
  );
}

export default App;
