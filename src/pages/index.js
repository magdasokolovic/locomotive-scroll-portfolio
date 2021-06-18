import React from "react";
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
          <h1>Przecież prosiłam otworzyć tylko na laptopie lub komputerze! :)</h1>
      </div>
  )
}


const Index = () => {
  let width = window.innerWidth;

  return (
    <> 
      {width < 1200 ? (
          <Telefon/>
        )
        :
        (
          <HomeLazy />
        )
      }
    </>
  );
};

export default Index;
