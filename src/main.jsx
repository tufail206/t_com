import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import { AppRoute } from "./routes";
import Loading from "./components/Loading"; // Fallback loading component
import { Provider } from "react-redux";
import { store } from "./redux/store";
import {ToastContainer} from 'react-toastify'
const router = createBrowserRouter(createRoutesFromElements(AppRoute), {
  future: {
      v7_relativeSplatPath: true, // ✅ Opts into new relative route resolution for splat routes
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer /> 
      <Suspense fallback={<Loading />}>
        <RouterProvider
          router={router}
          future={{
            v7_startTransition: true,
          }}
        />
      </Suspense>
    </Provider>
  </StrictMode>
);
