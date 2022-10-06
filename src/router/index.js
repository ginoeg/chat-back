import { UserRouter } from "../components";

const listRoutes = [
    ["/user", UserRouter],
];

export const routes = (app) => {
    listRoutes.forEach(([path, controller]) => {
        app.use(path, controller);
    });
}; 