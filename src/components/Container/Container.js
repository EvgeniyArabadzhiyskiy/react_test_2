import stl from "./Container.module.css";

function Container({ children }) {
  return <div className={stl.container}>{children}</div>;
}

export default Container;
