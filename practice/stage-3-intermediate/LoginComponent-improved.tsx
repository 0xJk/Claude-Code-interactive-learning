import React, { useState, useCallback, memo } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

// 样式常量提取
const STYLES = {
  container: "min-h-screen flex",
  brandPanel: "flex-1 relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-700 to-blue-600",
  formPanel: "flex-1 bg-gray-50 flex items-center justify-center p-12",
  inputBase: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors",
  buttonPrimary: "w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors focus:ring-2 focus:ring-gray-500 focus:ring-offset-2",
  buttonSecondary: "w-full flex items-center justify-center py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
} as const;

interface LoginComponentProps {
  onLogin?: (credentials: LoginCredentials) => void;
  onGoogleSignIn?: () => void;
  onSignUp?: () => void;
  isLoading?: boolean;
}

interface LoginCredentials {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface FormErrors {
  email?: string;
  password?: string;
}

// 验证函数
const validateEmail = (email: string): string | undefined => {
  if (!email) return 'Email is required';
  if (!/\S+@\S+\.\S+/.test(email)) return 'Email is invalid';
  return undefined;
};

const validatePassword = (password: string): string | undefined => {
  if (!password) return 'Password is required';
  if (password.length < 6) return 'Password must be at least 6 characters';
  return undefined;
};

// 子组件：品牌面板
const BrandPanel = memo(() => (
  <div className={STYLES.brandPanel}>
    {/* Gradient Background Effects */}
    <div className="absolute inset-0 opacity-30">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-400 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
    </div>
    
    {/* Content */}
    <div className="relative z-10 flex flex-col justify-between h-full p-12 text-white">
      <div>
        <p className="text-sm font-medium tracking-wider uppercase opacity-80">
          A WISE QUOTE
        </p>
      </div>
      
      <div className="space-y-6">
        <h1 className="text-6xl font-bold leading-tight">
          Get<br />
          Everything<br />
          You Want
        </h1>
        <p className="text-lg opacity-90 max-w-md">
          You can get everything you want if you work hard, 
          trust the process, and stick to the plan.
        </p>
      </div>
      
      <div></div>
    </div>
  </div>
));

BrandPanel.displayName = 'BrandPanel';

// 子组件：Google图标
const GoogleIcon = memo(() => (
  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
));

GoogleIcon.displayName = 'GoogleIcon';

// 主组件
const LoginComponent: React.FC<LoginComponentProps> = ({
  onLogin,
  onGoogleSignIn,
  onSignUp,
  isLoading = false
}) => {
  const [formData, setFormData] = useState<LoginCredentials>({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  // 优化：使用 useCallback 防止不必要的重渲染
  const handleInputChange = useCallback((field: keyof LoginCredentials) => 
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = field === 'rememberMe' ? e.target.checked : e.target.value;
      
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));

      // 清除对应字段的错误
      if (errors[field as keyof FormErrors]) {
        setErrors(prev => ({
          ...prev,
          [field]: undefined
        }));
      }
    }, [errors]);

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword(prev => !prev);
  }, []);

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    
    if (emailError) newErrors.email = emailError;
    if (passwordError) newErrors.password = passwordError;
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData.email, formData.password]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    onLogin?.(formData);
  }, [formData, onLogin, validateForm]);

  return (
    <div className={STYLES.container}>
      <BrandPanel />

      {/* Right Panel - Login Form */}
      <div className={STYLES.formPanel}>
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">C</span>
              </div>
              <span className="ml-2 text-gray-900 font-medium">Cogie</span>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
            <p className="mt-2 text-gray-600">
              Enter your email and password to access your account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange('email')}
                placeholder="Enter your email"
                className={`${STYLES.inputBase} ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                required
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-600">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleInputChange('password')}
                  placeholder="Enter your password"
                  className={`${STYLES.inputBase} pr-12 ${errors.password ? 'border-red-500 focus:ring-red-500' : ''}`}
                  aria-invalid={!!errors.password}
                  aria-describedby={errors.password ? 'password-error' : undefined}
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="w-5 h-5" />
                  ) : (
                    <EyeIcon className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p id="password-error" className="mt-1 text-sm text-red-600">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleInputChange('rememberMe')}
                  className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
                <span className="ml-2 text-sm text-gray-700">Remember me</span>
              </label>
              <button
                type="button"
                className="text-sm text-purple-600 hover:text-purple-500 font-medium"
              >
                Forgot Password
              </button>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`${STYLES.buttonPrimary} ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>

            {/* Google Sign In */}
            <button
              type="button"
              onClick={onGoogleSignIn}
              disabled={isLoading}
              className={`${STYLES.buttonSecondary} ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <GoogleIcon />
              Sign in with Google
            </button>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={onSignUp}
                className="font-medium text-purple-600 hover:text-purple-500"
              >
                Sign Up
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;