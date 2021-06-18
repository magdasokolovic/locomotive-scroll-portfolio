import React, {useState, useEffect} from "react";
import Loadable from "react-loadable";
import "../styles/home.scss";

const loader = () => <div>Loading.</div>;
//
const HomeLazy = Loadable({
  loader: () => import("../containers/Home"), 
  loading: loader,
});

function Telefon() {
  return (
      <div className="telefon">
          <h1>Prosiłam otworzyć tylko na laptopie lub komputerze! 
            Żadnych telefonów :)</h1>
      </div>
  )
}


const Index = () => {

  // let width = window.innerWidth
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 966;

  useEffect(() => {
    /* Inside of a "useEffect" hook add an event listener that updates
       the "width" state variable when the window size changes */
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    /* passing an empty array as the dependencies of the effect will cause this
       effect to only run when the component mounts, and not each time it updates.
       We only want the listener to be added once */
  }, []);

  return width < breakpoint ? <Telefon/> : <HomeLazy />;
  
};

export default Index;
