import {Navigate, Route , Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import Navbar from './components/Navbar'
import  AdminPage  from './pages/AdminPage'
import  CategoryPage  from './pages/CategoryPage.jsx'
import CartPage from './pages/CartPage.jsx'
import PurchaseSuccessPage from './pages/PurchaseSuccessPage.jsx'
import PurchaseCancelPage from './pages/PurchaseCancelPage.jsx'


import { Toaster } from 'react-hot-toast'
import { useUserStore } from './stores/useUserStore'
import { useEffect } from 'react'
import LoadingSpinner from './components/LoadingSpinner'
import { useCartStore } from './stores/useCartStore.js'





function App() { 

  const {user, checkAuth, checkingAuth} = useUserStore();
  const {getCartItems} = useCartStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
		if (!user) return;

		getCartItems();
	}, [getCartItems, user]);


  if (checkingAuth) return <LoadingSpinner/>;

  return (
   <div className='min-h-screen bg-gradient-to-br from-stone-50 to-amber-50 relative overflow-hidden'>  
   {/* Background gradient */}
			<div className='absolute inset-0 overflow-hidden'>
				<div className='absolute inset-0'>
					<div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.1)_0%,rgba(217,119,6,0.05)_45%,rgba(255,255,255,0.1)_100%)]' />
				</div>
			</div>  
    <div className='relative z-50 pt-20'>
    <Navbar />
    <Routes>  
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={!user ? <SignUpPage /> : <Navigate to="/" />} />
			<Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/" />} />
      <Route
						path='/secret-dashboard'
						element={user?.role === "admin" ? <AdminPage /> : <Navigate to='/login' />}
			/>
      <Route path='/category/:category' element={<CategoryPage />} />
      <Route path='/cart' element={user ? <CartPage /> : <Navigate to='/login' />} />
      <Route
						path='/purchase-success'
						element={user ? <PurchaseSuccessPage /> : <Navigate to='/login' />}
					/>
      <Route path='/purchase-cancel' element={user ? <PurchaseCancelPage /> : <Navigate to='/login' />} />    
    </Routes>
    </div>
    <Toaster />
   </div>
  );
}

export default App
