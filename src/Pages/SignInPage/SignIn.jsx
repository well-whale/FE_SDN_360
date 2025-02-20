/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import BlurText from '../../components/ReactBits/BlurText';
import { SwapRightOutlined } from '@ant-design/icons';
import { useState } from 'react';
import CryptoJS from 'crypto-js';
import background from '../../assets/images/loginBackground.jpg';
import SignInInputs from './Input/SignInInput';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [seePassword, setSeePassword] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate('/register');
    };

    const toggleSeePassword = () => {
        setSeePassword(!seePassword);
    };

    const encryptPassword = (password) => {
        return CryptoJS.AES.encrypt(password, 'secret key 123').toString();
    };

    return (
        <div 
            style={{
                userSelect: 'none',
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center', 
                backdropFilter: 'blur(10px)'
            }} 
            className="flex h-screen pt-16"
        >
            <motion.div 
                className='bg-white/10 backdrop-blur-md w-full h-full flex justify-center items-center'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <motion.div
                    className='bg-white/60 backdrop-blur-xl flex flex-col gap-4 items-center p-20 rounded-lg shadow-lg w-fit h-[33vw]'
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: 1, type: 'spring', stiffness: 120 }}
                >
                    <div className='flex justify-center '>
                        <BlurText
                            text="SDN392 STORE"
                            delay={150}
                            animateBy="letters"
                            direction="bottom"
                            className="text-5xl mb-8 text-center"
                        />
                    </div>

                    {/* Input Section */}
                    <SignInInputs 
                        seePassword={seePassword} 
                        toggleSeePassword={toggleSeePassword} 
                        encryptPassword={encryptPassword} 
                    />

                    {/* Sign In Button */}
                    <div className='pr-10 pl-10 w-full'>
                        <motion.button
                            className='w-full mt-4 p-2 text-white bg-gradient-to-tr from-teal-200 to-teal-500 text-xl rounded-4xl'
                            whileHover={{ scale: 1.1, color: 'black' }}
                            whileTap={{ scale: 0.9, color: 'white' }}
                        >
                            Sign In <SwapRightOutlined />
                        </motion.button>
                    </div>

                    {/* Sign Up Link */}
                    <motion.div
                        whileHover={{ scale: 1.1, color: 'black' }}
                        whileTap={{ scale: 0.9 }}
                        className='text-xs mt-2.5 text-emerald-500 underline'
                        onClick={handleSignUp}
                    >
                        Don't have an account? Sign Up    
                    </motion.div>
                    
                </motion.div>
            </motion.div>
        </div>
    );
}

export default SignIn;
