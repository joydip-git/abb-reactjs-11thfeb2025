import DashBoard from "../shared/dashboard/DashBoard";
import AppRoutes from "../../routes/AppRoutes";

export function App() {
  return (
    <div>
      <DashBoard />
      <br />
      <div className="container container-fluid">
        <AppRoutes />
      </div>
    </div>
  )
}