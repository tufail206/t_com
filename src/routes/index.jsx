import { Route } from "react-router-dom";
import { appPath } from "../utils/pathConstants";
import App from "../App";
import AppLayout from "../layout/AppLayout";
import AdminLayout from "../layout/AdminLayout";

import ProtectedRoute from "../components/ProtectedRoute";
import Error from "../pages/error";
import NotFound from "../pages/not_found";
import UserLayout from "../layout/UserLayout";

export const AppRoute = (
  <Route path={appPath.ROOT} element={<App />} errorElement={<Error />}>
    {/* Public Routes */}
    {/* //add not found page */}
    <Route path={"*"} element={<NotFound />} />
    <Route element={<AppLayout />}>
      <Route index path={appPath.HOME} lazy={() => import("../pages/home")} />
      <Route path={appPath.ABOUT} lazy={() => import("../pages/about")} />
      <Route path={appPath.PRODUCTS} lazy={() => import("../pages/products")} />
      <Route
        path={appPath.PRODUCTS_DETAILS}
        lazy={() => import("../pages/products_details")}
      />
      <Route
        path={appPath.PRODUCTS_CATEGORY}
        lazy={() => import("../pages/product_category")}
      />
      <Route path={appPath.CONTACT} lazy={() => import("../pages/contact")} />
      <Route path={appPath.LOGIN} lazy={() => import("../pages/login")} />
      <Route path={appPath.SIGNUP} lazy={() => import("../pages/signup")} />
      <Route path={appPath.CART} lazy={() => import("../pages/cart")} />
      <Route
        path={appPath.FORGOT_PASSWORD}
        lazy={() => import("../pages/cart")}
      />
      <Route path={appPath.CHECKOUT} lazy={() => import("../pages/checkout")} />
      <Route
        path={appPath.ORDER_SUCCESS}
        lazy={() => import("../pages/order_success")}
      />
      <Route path={appPath.FAVORITE} lazy={() => import("../pages/favorite")} />
          <Route
          path={appPath.PROFILE_VERIFY}
          lazy={() => import("../pages/verify_email")}
        />
    </Route>

    {/* User Dashboard (Protected) */}
    <Route element={<ProtectedRoute allowedRoles={["user", "admin"]} />}>
      <Route element={<UserLayout />}>
        <Route
          path={appPath.PROFILE_MANAGE}
          lazy={() => import("../layout/UserLayout/manage")}
        />
        <Route
          path={appPath.PROFILE_MANAGE}
          lazy={() => import("../layout/UserLayout/manage")}
        />
        {/* <Route
          path={appPath.PROFILE_VERIFY}
          lazy={() => import("../pages/verify_email")}
        /> */}
        <Route
          path={appPath.USER_ORDERS}
          lazy={() => import("../layout/UserLayout/Myorders")}
        />
        <Route path={"/payment"} lazy={() => import("../pages/payment")} />
        <Route
          path={appPath.USER_ORDERS_CANCELLATIONS}
          lazy={() => import("../layout/UserLayout/MyCancellations")}
        />
      </Route>
    </Route>

    {/* Admin Dashboard (Protected) */}
    <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
      <Route element={<AdminLayout />}>
        <Route path={appPath.ADMIN} element={"Admin Dashboard"} />
        <Route path={appPath.ADMIN_PRODUCTS} element={"Manage Products"} />
        <Route path={appPath.ADMIN_ORDERS} element={"Manage Orders"} />
        <Route path={appPath.ADMIN_USERS} element={"Manage Users"} />
        <Route path={appPath.ADMIN_PRODUCT_CREATE} element={"Create Product"} />
        <Route path={appPath.ADMIN_PRODUCT_DELETE} element={"Delete Product"} />
        <Route path={appPath.ADMIN_PRODUCT_EDIT} element={"Edit Product"} />
        <Route path={appPath.ADMIN_ORDER_DETAILS} element={"Order Details"} />
        <Route path={appPath.ADMIN_USER_CREATE} element={"Create User"} />
      </Route>
    </Route>
  </Route>
);
