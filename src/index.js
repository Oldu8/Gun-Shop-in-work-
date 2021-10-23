import React from "react";
import reactDom from "react-dom";

const app = (
  <div>
    <h1>Welcome to gun shop</h1>
    <ul>
        <li>
          Kalashnikov AK-47
        </li>
        <li>
          Mauser Gewehr 98
        </li>
        <li>
          Mosin–Nagant
        </li>
        <li>
          M16
        </li>
    </ul>
  </div>
);

reactDom.render(app, document.getElementById('root'))