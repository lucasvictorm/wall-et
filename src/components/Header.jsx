import logo from '../assets/logo-wallet.png'

function Header({titulo}){
    return(
        <div className='bg-linear-to-t from-green-900 to-green-700 p-6'>

            <div className="w-full flex space-x-2 items-center p-2">
                <img className='h-10' src={logo} alt="" />
                <h1 className='text-white font-bold text-3xl'>wall-et</h1>

            </div>
            <h2 className='text-slate-200 pt-3'>{titulo}</h2>
        </div>
        
    )
}

export default Header