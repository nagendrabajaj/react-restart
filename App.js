import React from 'react';
import {createRoot} from 'react-dom/client';

const parent = React.createElement("div", {id:"parent"},[
    React.createElement("div", {id:"child"},
                [React.createElement("h1",{id:"heading"},"I am h1 tag"),
                React.createElement("h2",{id:"heading2"},"I am h2 tag")]),
                React.createElement("div", {id:"child"},
                [React.createElement("h1",{id:"heading"},"I am h1 tag"),
                React.createElement("h2",{id:"heading2"},"I am h2 tag")])
]);


// const heading = React.createElement("h1",{id:"heading"},"Hello World from REACT!");
const root = createRoot(document.getElementById("root"));
root.render(parent);