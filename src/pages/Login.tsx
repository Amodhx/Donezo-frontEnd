 import logo from '../assets/logo.png'
import { Button, Input } from "antd";
import { GoogleOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
 import {useNavigate} from "react-router-dom";
function Login(){
    const navigate = useNavigate();
    function onLoginBtnClick(){
        navigate('form')
    }
    return(
        <>
            <div className="flex items-center justify-center min-h-screen bg-white relative overflow-hidden">
                {/* Angled Gradient Bar */}
                <div style={{ top: '56vh' }}
                    className="absolute bottom-0  left-0 w-full h-2/3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transform -skew-y-6 origin-bottom-left rounded-t-4xl"
                ></div>

                {/* Logo */}
                <div className="absolute top-4 left-4">
                    <img src={logo} alt="Logo" className="h-11"/>
                </div>

                {/* Sign Up Button */}
                <div className="absolute top-4 right-4 flex">
                    <h5 className={'mx-4 mt-1 text-neutral-500'}>Don't have an account?</h5>
                    <Button type="default" className="bg-purple-500 hover:bg-purple-600 text-white rounded-lg">
                        Sign up
                    </Button>
                </div>

                {/* Login Form Container */}
                <div   style={{ boxShadow :'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}
                    className="bg-white rounded-2xl p-8 w-96 relative z-10">
                    <h2 className="text-center text-2xl font-semibold mb-4">Welcome back!</h2>

                    {/* Continue with Google Button */}
                    <Button
                        type="default"
                        className="w-full flex items-center justify-center mb-4 border-gray-300"
                    >
                        <GoogleOutlined className="mr-2"/> Continue with Google
                    </Button>

                    {/* OR Divider */}
                    <div className="text-center text-gray-500 mb-4">OR</div>

                    {/* Work Email Input */}
                    <div className="mb-4">
                        <Input
                            size="large"
                            prefix={<MailOutlined/>}
                            placeholder="Enter your work email"
                            className="rounded-lg"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <Input.Password
                            size="large"
                            prefix={<LockOutlined/>}
                            placeholder="Enter password"
                            className="rounded-lg"
                        />
                        <div className="text-right mt-1">
                            <a href="#" className="text-purple-500 text-sm">
                                Forgot Password?
                            </a>
                        </div>
                    </div>

                    {/* Log In Button */}
                    <Button
                        type="primary"
                        className="w-full bg-purple-500 hover:bg-purple-600 border-none rounded-lg"
                        onClick={onLoginBtnClick}
                    >
                        Log In
                    </Button>
                </div>
            </div>
        </>
    )
}

 export default Login