// const heading = React.createElement("h1",{class:"head"},"Hello World from React!");
    //  this is a core react code

const head = React.createElement("div",{id:"head"},
    [React.createElement("div",{id:"childhead"},
        [React.createElement("h1",{},"Hello from react!"),
            React.createElement("h2",{},"Hello h2")
        ]),React.createElement("div",{id:"secondchild"},
            [React.createElement("h2",{},"Hello from React2"),
                React.createElement("h3",{},"Hello h3")
            ]
        )]);

const root = ReactDOM.createRoot(document.getElementById("root"));
     // this is something that has to do with DOM so we used reactDOM 

// const head = React.createElement("div",{id:"roothead"},ReactDOM.createRoot(document.getElementById("root")));

root.render(head);
 