import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs } from "./formSource";
import "./style/dark.scss";
import { useContext, useState } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import ListItem from "./pages/listItem/ListItem";
import ListDish from "./pages/listDish/ListDish";

function App() {
    const { darkMode } = useContext(DarkModeContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const submitHandler = (username, password) => {
        if (username === "admin" && password === "matkhauadmin") {
            console.log("Login success");
            setIsLoggedIn(true);
        } else {
            alert("Login failed");
        }
    };
    return (
        <div>
            {isLoggedIn ? (
                <div className={darkMode ? "app dark" : "app"}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/">
                                <Route index element={<Home />} />
                                <Route path="login" element={<Login />} />
                                <Route path="products">
                                    <Route index element={<List />} />
                                    <Route
                                        path=":itemId"
                                        element={<ListItem />}
                                    />
                                    <Route
                                        path="items/dishes"
                                        element={<ListDish />}
                                    />
                                    <Route
                                        path="items/dishes/dish"
                                        element={<Single />}
                                    />
                                    <Route
                                        path="new"
                                        element={
                                            <New
                                                inputs={productInputs}
                                                title="Thêm danh mục mới"
                                            />
                                        }
                                    />
                                    <Route
                                        path="newItem"
                                        element={
                                            <New
                                                inputs={productInputs}
                                                title="Thêm thành phần danh mục mới"
                                            />
                                        }
                                    />
                                    <Route
                                        path="newDish"
                                        element={
                                            <New
                                                inputs={productInputs}
                                                title="Thêm món ăn mới"
                                            />
                                        }
                                    />
                                </Route>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </div>
            ) : (
                <Login onSubmitHandler={submitHandler} />
            )}
        </div>
    );
}

export default App;
