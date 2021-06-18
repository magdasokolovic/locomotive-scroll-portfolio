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

  // const hasWindow = typeof window !== 'undefined';

  // function getWidth() {
  //   const width = hasWindow ? window.innerWidth : null;
  //   return width
  // }
  
  // const [newWidth, setWidth] = useState(getWidth());
  // const breakpoint = 966;

  // useEffect(() => {
  //  if (hasWindow) {
     
  //  }
  //   window.addEventListener("resize", () => setWidth(window.innerWidth));
  //   return () => {
  //     window.removeEventListener('resize', () => setWidth(window.innerWidth))
  //   }

  // }, []);

  return (
  <HomeLazy />
  )
  // width < breakpoint ? <Telefon/> : 
  
};

export default Index;
