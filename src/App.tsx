import { RouterProvider } from "react-router-dom";
import { router } from "./route/router";
import AuthContextProvider from "./provider/AuthContextProvider";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </div>
  );
}

export default App;
