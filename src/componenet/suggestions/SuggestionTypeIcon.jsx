
 const SuggestionTypeIcon = (props) => {
  return (
    <span className={`text-blue text-sm duration-500 cursor-pointer transition-colors ${props.isHover ? "hover:bg-greyHover" :""} font-semibold bg-grey py-2 px-3 rounded-lg`}>{props.text}</span>
  )
}


export default SuggestionTypeIcon