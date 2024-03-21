import "./index.css"










export default function TodoList() {
    const style={
        color:"red",

    }
    return (
      <>
        <h1 className="hText">Yash Todos</h1>
        <img
          src="https://i.imgur.com/yXOvdOSs.jpg"
          alt="Hedy Lamarr"
          className="photo"
        />
        <ul>
          <li style={style}>Invent new traffic lights</li>
          <li style={style}>Rehearse a movie scene</li>
          <li>Improve spectrum technology</li>
        </ul>
      </>
    );
  }