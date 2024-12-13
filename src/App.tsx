import { ThemeProvider } from "@/components/theme-provider"
import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/home"
import Layouts from "./layouts/main-layouts";

export default function App() {
    return (
        <BrowserRouter>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Layouts>
                    <NavRoute path="/" component={Home} />
                </Layouts>
            </ThemeProvider>
        </BrowserRouter>
    )
}

interface NavRoute {
    path: string;
    component: React.ComponentType;
}

export function NavRoute({ path, component: Component }: NavRoute) {
    return (
        <Routes>
            <Route path={path} element={<Component />} />
        </Routes>
    );
}
