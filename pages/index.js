export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        The heading and button have different margins between v2 and v3 of
        USWDS, due to the import order of _normalize.scss (I think?).
      </p>
      <button className="usa-button">Button</button>
    </div>
  );
}
