
 const SuggestionTypeIcon = (props) => {
  return (
    <span className={`${props.className} text-blue text-[.8rem] duration-500 cursor-pointer  transition-colors ${props.isHover ? "hover:bg-greyHover" :""} font-semibold bg-grey py-2 px-3 w-fit h-fit rounded-lg md:text-[1rem]`}>{props.text}</span>
  )
}


export default SuggestionTypeIcon