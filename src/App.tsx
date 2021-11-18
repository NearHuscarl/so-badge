function App() {
  return (
    <div className="App">
      <a
        href="/help/badges/5357/reactjs"
        title="gold badge: Earn at least 1000 total score for at least 200 non-community wiki answers in the reactjs tag"
        className="badge-tag"
        style={{
          // a
          verticalAlign: "baseline",
          userSelect: "auto",
          cursor: "pointer",

          // .badge, .badge-tag
          padding: ".4em .8em .4em .4em",
          lineHeight: 1,
          textDecoration: "none",
          whiteSpace: "nowrap",
          fontSize: 12,
          border: "1px solid transparent",
          display: "inline-block",
          borderRadius: 4,

          // .badge-tag
          backgroundColor: "hsl(210,8%,5%)",
          color: "hsl(210,7%,78.5%)",
          borderColor: "hsl(210,4.5%,30.5%)",
        }}
      >
        <span
          className="badge1"
          style={{
            backgroundPosition: "-102px -398px",
            marginRight: 3,
            marginLeft: 2,
            width: 6,
            backgroundImage:
              "url(https://cdn.sstatic.net/Img/unified/sprites.svg?v=fcc0ea44ba27),none",
            backgroundSize: "initial",
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
            display: "inline-block",
            lineHeight: "inherit",
            verticalAlign: "text-bottom",
            height: 14,
          }}
        ></span>
        &nbsp;reactjs
      </a>
    </div>
  );
}

export default App;
