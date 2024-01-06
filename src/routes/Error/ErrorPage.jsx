import { useRouteError } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  const error = useRouteError();

  console.error(error);

  return (
    <div>
      <h1>Ops!</h1>
      <p>We have a problem!</p>
      <p>{error.statusText}</p>
      <p>{error.error.message}</p>
    </div>
  );
};

export default ErrorPage;
