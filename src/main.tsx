import React from "react";
import ReactDOM from "react-dom/client";

class Main extends React.Component {
  render(): React.ReactNode {
    return <div>Hello World</div>;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(<Main />);
