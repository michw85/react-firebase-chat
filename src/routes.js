import Chat from "./components/Chat";
import Login from "./components/Login";
import { LOGIN_ROUTE, CHAT_ROUTE } from "./utils/consts";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Element: Login
    }
]

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        Element: Chat
    }
]