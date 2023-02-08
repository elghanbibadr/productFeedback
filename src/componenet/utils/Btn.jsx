const Btn=(props)=>{
    return <button className={`${props.className} py-3 px-6 rounded-xl cursor-pointer text-white text-center font-bold text-xs md:text-sm`}>{props.text}</button>
}


export default Btn;