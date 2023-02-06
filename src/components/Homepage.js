export default function Homepage() {
  const homePageStyle = {
    minHeight: '100vh',
    width: '100%',
  };
  return (
    <div style={homePageStyle}>
      <header className="text-center">
        <h1>Welcome to planet RandomItems!</h1>
      </header>

      <main className="text-center">
        <p className="fs-3 mt-2 text-center">
          We sell all sorts of items from the magical planet RandomItems.
          <br /> Head on over to the shop to browse our collection!
        </p>
      </main>
    </div>
  );
}
