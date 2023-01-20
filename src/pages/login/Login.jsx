import { useState } from "react";
import './login.scss';
const Login = ( { onSubmitHandler }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const submitHandler = () => {
        onSubmitHandler(
            username,
            password,
        );
        setUsername('');
        setPassword('');
    }

    return (
        <div className="login_container">
            <div className="wrapper">
                <div className="form">
                    <form action="">
                        <h1 className="header">
                            ĐĂNG NHẬP:
                        </h1>
                        <div>
                            <label htmlFor="username" className="block">
                                Tài khoản:
                            </label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block">
                                Mật khẩu:
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" onClick={submitHandler}>Đăng nhập</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
