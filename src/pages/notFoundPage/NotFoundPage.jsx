import { Link } from "react-router";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" style={{ color: "#007bff", textDecoration: "underline" }}>
        Go Back Home
      </Link>
    </div>
  );
}