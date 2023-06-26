import { Routes as RoutesWrapper, Route } from "react-router-dom";
import { mainRoutes } from "../routes/const";
import MainLayout from "../layouts/MainLayout";

const Routes = () => {
  console.log(mainRoutes);
  return (
    <RoutesWrapper>
      {mainRoutes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <MainLayout>
              <Component />
            </MainLayout>
          }
        />
      ))}
    </RoutesWrapper>
  );
};

export default Routes;
