import { Login } from "../Components/Login";
import { Navbar } from "../Components/Navbar";

export const AuthLogin = () => {
    return (
        <>
            <Navbar />
            <main className="flex justify-center items-center mt-32">
                <div className=" justify-center">
                    <Login />
                </div>
            </main>
        </>
    );
};
