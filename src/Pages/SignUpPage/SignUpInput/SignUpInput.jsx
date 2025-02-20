/* eslint-disable react/prop-types */
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined, UserOutlined } from '@ant-design/icons';

const SignUpInputs = ({ seePassword, toggleSeePassword, encryptPassword }) => {
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
                <div className='flex justify-between  w-full'>
                    <span>Password</span>
                    
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
                />
                <Input
                    className='mt-4'  
                    size='large'
                    type={seePassword ? 'text' : 'password'}
                    placeholder="Confirmed password"
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

export default SignUpInputs;
