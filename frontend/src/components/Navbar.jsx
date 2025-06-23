import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const Navbar = () => {

  const {user, logout} = useUserStore();
  const isAdmin = user?.role === "admin";
  const {cart} = useCartStore();

  return (

    <header className='fixed top-0 left-0 w-full bg-gradient-to-r from-stone-50/95 to-amber-50/95 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-stone-200'>
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-wrap justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-red-900 hover:text-red-800 items-center space-x-2 flex transition-all duration-300 cursor-pointer">
          Korean E-commerce
        </Link>
        
        <nav className='flex flex-wrap items-center gap-4'>
						<Link
							to={"/"}
							className='text-red-900 hover:text-red-700 transition duration-300 ease-in-out font-medium cursor-pointer'
						>
							Home
						</Link>
						{user && (
							<Link
								to={"/cart"}
								className='relative group text-red-900 hover:text-red-700 transition duration-300 ease-in-out font-medium cursor-pointer'
							>
								<ShoppingCart className='inline-block mr-1 group-hover:text-rose-500' size={20} />
								<span className='hidden sm:inline'>Cart</span>
                {cart.length > 0 && (
				<span className="absolute -top-2 -left-2 bg-red-900 hover:bg-red-800 text-white rounded-full px-2 py-0.5 text-xs transition duration-300 ease-in-out shadow-sm"
                >
                  {cart.length}
                </span>
			)}

			</Link>
						)}

            
            {isAdmin && (
              <Link className="bg-gradient-to-r from-red-800 to-pink-700 hover:from-rose-600 hover:to-pink-500 text-white px-4 py-2 rounded-lg font-medium transition duration-300 ease-in-out flex items-center shadow-sm cursor-pointer"
								 to="/secret-dashboard">
                  <Lock className="inline-block mr-1" size={18}/>
                  <span className="hidden sm:inline">Dashboard</span>
              </Link>
            )}

            {user ? (
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-800 py-2 px-4 rounded-lg flex items-center transition duration-300 ease-in-out border border-gray-200 hover:border-gray-300"
						onClick={logout}>
              <LogOut size={18} />
							<span className='hidden sm:inline ml-2'>Log Out</span>
              </button>
            ) : (
              <>
								<Link
									to={"/signup"}
									className='border border-stone-300 text-red-900 hover:text-red-800 hover:bg-stone-50 py-2 px-4 rounded-lg flex items-center transition duration-300 ease-in-out font-medium'
								>
									<UserPlus className='mr-2' size={18} />
									Sign Up
								</Link>
								<Link
									to={"/login"}
									className='bg-gradient-to-r from-red-700 to-red-800 hover:from-rose-600 hover:to-pink-700 text-white py-2 px-4 rounded-lg flex items-center transition duration-300 ease-in-out shadow-sm hover:shadow-md transform hover:scale-105 font-medium'
								>
									<LogIn className='mr-2' size={18} />
									Login
								</Link>
							</>
            )}

        </nav>
            </div>
      </div>
    </header>

  )
}

export default Navbar