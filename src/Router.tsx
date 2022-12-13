import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { About } from "./About/About"
import { Game } from "./Game/Game"
import { Root } from "./Root"

export enum Routes {
    GAME = "/",
    SETTINGS = "/settings",
    ABOUT = "/about",
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: Routes.GAME,
                element: <Game />,
            },
            {
                path: Routes.SETTINGS,
                element: <div>Settings view</div>,
            },
            {
                path: Routes.ABOUT,
                element: <About />,
            },
        ],
    },
])

export const Router: React.FC = () => <RouterProvider router={router} />
