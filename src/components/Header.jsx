
import logo from '../assets/logo-wallet.png'

function Header({children}){
    return(
        <div className='bg-linear-to-t from-green-900 to-green-700 p-6'>

            <div className="w-full p-2">
                <img className='h-10' src={logo} alt="" />

            </div>
            <div className="w-full p-6 border-b border-gray-300">
                
                {children}

            </div>
        </div>
        
    )
}

export default Header