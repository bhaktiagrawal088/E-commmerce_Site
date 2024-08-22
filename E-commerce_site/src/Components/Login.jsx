import { useLogin } from "../context/LoginContext";
import { userLogin } from "../API/auth";

export const Login = () => {
    const { loginDispatch , email, password } = useLogin();

    const onFormSubmit = async (e) => {
        e.preventDefault(); // Stop reloading the page
        const data = useLogin(email, password)

        console.log({data})
        loginDispatch({
            type : "TOKEN", payload: {token : data}
        })
    };

    const onEmailChange = (e) => {
        loginDispatch({
            type: "EMAIL",
            payload: { value: e.target.value },
        });
    };

    const onPasswordChange = (e) => {
        loginDispatch({
            type: "PASSWORD",
            payload: { value: e.target.value },
        });
    };

    return (
        <div className="flex items-center justify-center w-[400px]">
            <form 
                onSubmit={onFormSubmit} 
                className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full"
            >
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Login to Your Account
                </h2>
                <div className="flex flex-col gap-4 mb-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-700">Email *</label>
                        <input 
                            onChange={onEmailChange} 
                            type="email" 
                            required 
                            placeholder="Enter your email" 
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-700">Password *</label>
                        <input 
                            onChange={onPasswordChange} 
                            type="password" 
                            required 
                            placeholder="Enter your password" 
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Login
                </button>
                {/* <p className="text-center text-sm text-gray-600 mt-4">
                    Don't have an account? 
                    <a href="#" className="text-blue-500 hover:underline ml-1">Sign up</a>
                </p> */}
            </form>
        </div>
    );
};
