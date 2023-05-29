export default function Homepage() {
  const mainStyle = {
    textAlign: 'center',
    padding: '30px',
    fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
  };

  const titleStyle = {
    fontSize: '10vw',
    padding: '15px',
  };

  const alienLogoStyle = {
    maxWidth: '250px',
  };

  return (
    <div>
      <main style={mainStyle}>
        <h1 style={titleStyle}>Welcome to PlanetRandomItems!</h1>
        <img
          src="https://cdn-icons-png.flaticon.com/512/620/620899.png"
          alt="alien inside a ufo"
          style={alienLogoStyle}
        ></img>
      </main>
    </div>
  );
}
