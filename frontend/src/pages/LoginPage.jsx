
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LogIn, Mail, Lock, ArrowRight, Loader } from "lucide-react";
import { useUserStore } from "../stores/useUserStore";


const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

  const { login, loading} = useUserStore();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email, password);
    login(email,password);
	};

	return (
		<div className='flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
			<motion.div
				className='sm:mx-auto sm:w-full sm:max-w-md'
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<h2 className='mt-6 text-center text-3xl font-extrabold text-red-900'>Create your account</h2>
				<p className='mt-2 text-center text-sm text-stone-600'>
					Welcome back to our K-Beauty store
				</p>
			</motion.div>

			<motion.div
				className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
			>
				<div className='bg-white/80 backdrop-blur-sm py-8 px-4 shadow-xl border border-stone-200 rounded-2xl sm:px-10'>
					<form onSubmit={handleSubmit} className='space-y-6'>
						<div>
							<label htmlFor='email' className='block text-sm font-medium text-red-900 mb-1'>
								Email address
							</label>
							<div className='mt-1 relative rounded-md shadow-sm'>
								<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
									<Mail className='h-5 w-5 text-gray-700' aria-hidden='true' />
								</div>
								<input
									id='email'
									type='email'
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className=' block w-full px-3 py-3 pl-10 bg-stone-50 border border-stone-300 
									rounded-xl shadow-sm placeholder-stone-400 focus:outline-none focus:ring-2 
									focus:ring-red-800 focus:border-red-800 text-sm transition-all duration-200'
									placeholder=' you@example.com'
								/>
							</div>
						</div>


						<div>
							<label htmlFor='password' className='block text-sm font-medium text-red-900 mb-1'>
								Password
							</label>
							<div className='mt-1 relative rounded-md shadow-sm'>
								<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
									<Lock className='h-5 w-5 text-gray-400' aria-hidden='true' />
								</div>
								<input
									id='password'
									type='password'
									required
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className=' block w-full px-3 py-3 pl-10 bg-stone-50 border border-stone-300 
									rounded-xl shadow-sm placeholder-stone-400 focus:outline-none focus:ring-2 
									focus:ring-red-800 focus:border-red-800 text-sm transition-all duration-200'
									placeholder='••••••••'
								/>
							</div>
						</div>

						<button
							type='submit'
							className='w-full flex justify-center py-3 px-4 border border-transparent 
							rounded-xl shadow-sm text-sm font-semibold text-white bg-red-900
							hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2
							focus:ring-red-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
							transform hover:scale-[1.02] active:scale-[0.98]'
							disabled={loading}
						>
							{loading ? (
								<>
									<Loader className='mr-2 h-5 w-5 animate-spin' aria-hidden='true' />
									Loading...
								</>
							) : (
								<>
									<LogIn className='mr-2 h-5 w-5' aria-hidden='true' />
									Login
								</>
							)}
						</button>
					</form>

					<p className='mt-8 text-center text-sm text-gray-400'>
						Not a member?{" "}
						<Link to='/signup' className='font-medium text-red-900 hover:text-red-800'>
							Sign up now <ArrowRight className='inline h-4 w-4' />
						</Link>
					</p>
				</div>
			</motion.div>
			
		</div>
	);
};
export default LoginPage;