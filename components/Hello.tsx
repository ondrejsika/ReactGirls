import React, { FunctionComponent } from "react";

type HelloProps = {
  name?: string;
};
const Hello: FunctionComponent<HelloProps> = ({ name }) => (
  <div style={{ color: "green" }}>
    <h1>Hello {name}</h1>
  </div>
);

export default Hello;
