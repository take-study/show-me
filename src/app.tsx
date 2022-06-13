import React, { ChangeEvent, ChangeEventHandler } from "react";
import "@/styles/app.scss";

export default class App extends React.Component {
  state: Readonly<{ engine: string }>;
  constructor(props: Readonly<any>) {
    super(props);
    this.state = { engine: "google" };
  }
  handleSelect(event: ChangeEvent<HTMLSelectElement>): void {
    this.setState({ engine: event.target.value });
  }
  render(): React.ReactNode {
    return (
      <div className="app">
        <div className="sbox">
          <div className="search_box">
            <select
              onChange={this.handleSelect.bind(this)}
              defaultValue="google"
            >
              <option>google</option>
              <option>bing</option>
              <option>baidu</option>
            </select>
            <input placeholder={this.state.engine} className="search"></input>
          </div>
        </div>
      </div>
    );
  }
}
