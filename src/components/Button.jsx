
const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center
     items-center mt-5 gap-2 px-7 py-4
     border font-montserrat
     text-lg leading-non bg-sky-500/50
     rounded-full
     text-white border-sky-500/50">
        {label}

        <img 
        src={iconURL}
        alt="arrow right icon"
        className="ml-2 rounded-full
        w-5 h-5"
        />
    </button>
  )
}

export default Button