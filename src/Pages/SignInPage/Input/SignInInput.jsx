/* eslint-disable react/prop-types */
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined, UserOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const SignInInputs = ({ seePassword, toggleSeePassword, encryptPassword }) => {
    return (
        <div className='flex flex-col w-full pr-10 pl-10 justify-center gap-4'>
            {/* Username Input */}
            <div>
                <div>Username</div>
                <Input  
                    size='large'
                    placeholder="Enter your username"
                    prefix={
                        <UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                />
            </div>
            
            {/* Password Input */}
            <div>
                <div className='flex justify-between w-full'>
                    <span>Password</span>
                    <motion.span
                        whileHover={{ scale: 1.1, color: 'blue' }}
                        whileTap={{ scale: 0.9 }} 
                        className='text-xs text-emerald-500 underline'
                    >
                        Forgot Password?
                    </motion.span>
                </div>
                <Input  
                    size='large'
                    type={seePassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    prefix={
                        <UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    suffix={
                        seePassword ? (
                            <EyeOutlined 
                                style={{ color: 'rgba(0,0,0,.45)' }}
                                onClick={toggleSeePassword}
                            />
                        ) : (
                            <EyeInvisibleOutlined 
                                style={{ color: 'rgba(0,0,0,.45)' }}
                                onClick={toggleSeePassword}
                            />
                        )
                    }
                    onChange={(e) => {
                        const encryptedPassword = encryptPassword(e.target.value);
                        console.log('Encrypted Password:', encryptedPassword);
                    }}
                />
            </div>
        </div>
    );
};

export default SignInInputs;
