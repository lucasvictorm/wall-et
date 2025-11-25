function Input({name, placeholder, label, type}){
    return(

        <div className="space-y-2">
            <label className="block font-medium text-sm" htmlFor={name}>{label}</label>
            <input className="w-full rounded-lg border focus:outline-green-800 border-slate-200 p-2" type={type} name={name} id={name} placeholder={placeholder} />
        </div>
    )
    
}

export default Input