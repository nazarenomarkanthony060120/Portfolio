import React from 'react'
import Header from '../Header'
import LandingPage from '../../images/Minimart_Inventory_System/Minimart_Inventory_System_1.png'
import Contact from '../../images/Minimart_Inventory_System/Minimart_Inventory_System_2.png'
import Login from '../../images/Minimart_Inventory_System/Minimart_Inventory_System_3.png'
import Register from '../../images/Minimart_Inventory_System/Minimart_Inventory_System_4.png'
import ForgotPassword from '../../images/Minimart_Inventory_System/Minimart_Inventory_System_5.png'
import ResetForgotPasswordLink from '../../images/Minimart_Inventory_System/Minimart_Inventory_System_6.png'
import ResetPassword from '../../images/Minimart_Inventory_System/Minimart_Inventory_System_7.png'
import Dashboard from '../../images/Minimart_Inventory_System/Minimart_Inventory_System_8.png'
import AddProduct from '../../images/Minimart_Inventory_System/Minimart_Inventory_System_9.png'
import UpdateProduct from '../../images/Minimart_Inventory_System/Minimart_Inventory_System_10.png'
import DeleteProduct from '../../images/Minimart_Inventory_System/Minimart_Inventory_System_11.png'
import Stocks from '../../images/Minimart_Inventory_System/Minimart_Inventory_System_12.png'
import BuyStocks from '../../images/Minimart_Inventory_System/Minimart_Inventory_System_13.png'
import Cash from '../../images/Minimart_Inventory_System/Minimart_Inventory_System_14.png'
import CashIn from '../../images/Minimart_Inventory_System/Minimart_Inventory_System_15.png'
import CashOut from '../../images/Minimart_Inventory_System/Minimart_Inventory_System_16.png'
import Reports from '../../images/Minimart_Inventory_System/Minimart_Inventory_System_17.png'
import Activities from '../../images/Minimart_Inventory_System/Minimart_Inventory_System_18.png'
import DarkLightMode from '../../images/Minimart_Inventory_System/Minimart_Inventory_System_19.png'
import SuccessfulResetPassword from '../../images/Minimart_Inventory_System/Minimart_Inventory_System_20.png'


function Minimart() {
    return (
        <>
            <Header />
            <div className=" bg-gray-800 h-fit py-10" >
                <div className="flex flex-col mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-white h-fit max-xl:h-fit max-sm:px-7 max-md:grid-cols-1 gap-14">
                    <div className="flex flex-col gap-10">
                        <div className="text-center">
                            <span className='text-2xl font-bold uppercase tracking-widest'>Minimart Inventory System</span>
                        </div>
                        <div className="flex italic text-yellow-500 gap-3">
                            <span className='text-lg tracking-widest'>Definition: </span>
                            <span className='text-lg tracking-widest'>Inventory system is to control and manage all products in the minimart in real time and integrated to make it easier to develop your business.</span>
                        </div>
                        <div className="flex flex-col text-start text-yellow-500 gap-1">
                            <span className='text-lg uppercase tracking-widest'>Tech Stack Used:</span>
                            <div className="flex gap-3">
                                <span className='text-lg tracking-widest'>Front End:</span>
                                <div className="flex gap-3">
                                    <span className='text-lg tracking-widest'>ReactJS, TailwindCSS </span>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <span className='text-lg tracking-widest'>Back End:</span>
                                <div className="flex gap-3">
                                    <span className='text-lg tracking-widest'>ExpressJS, Nodejs, NodeMailer </span>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <span className='text-lg tracking-widest'>Database:</span>
                                <div className="flex gap-3">
                                    <span className='text-lg tracking-widest'>MySQL </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>1. Landing Page</span>
                                <img src={LandingPage} alt="Landing Page" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>2. Contact Developer</span>
                                <img src={Contact} alt="Landing Page" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>3. Login Account</span>
                                <img src={Login} alt="Landing Page" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>4. Register Account</span>
                                <img src={Register} alt="Landing Page" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>5. Forgot Password</span>
                                <img src={ForgotPassword} alt="Landing Page" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>6. Reset Forgot Password Link</span>
                                <img src={ResetForgotPasswordLink} alt="Landing Page" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>7. Reset Password</span>
                                <img src={ResetPassword} alt="Landing Page" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>8. Successful Reset Password</span>
                                <img src={SuccessfulResetPassword} alt="Landing Page" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>9. Dashboard</span>
                                <img src={Dashboard} alt="Landing Page" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>10. Add Products</span>
                                <img src={AddProduct} alt="Landing Page" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>11. Update Product</span>
                                <img src={UpdateProduct} alt="Landing Page" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>12. Delete Product</span>
                                <img src={DeleteProduct} alt="Landing Page" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>13. Stocks</span>
                                <img src={Stocks} alt="Landing Page" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>14. Buy Stocks</span>
                                <img src={BuyStocks} alt="Landing Page" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>15. Cash and Cash History</span>
                                <img src={Cash} alt="Landing Page" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>16. Cash In</span>
                                <img src={CashIn} alt="Landing Page" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>17. Cash Out</span>
                                <img src={CashOut} alt="Landing Page" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>18. Reports</span>
                                <img src={Reports} alt="Landing Page" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>19. Activities</span>
                                <img src={Activities} alt="Landing Page" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>20. Dark Mode | Light Mode</span>
                                <img src={DarkLightMode} alt="Landing Page" className=' h-96 w-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Minimart