import React, {useState} from 'react'

interface InputType{
    type: string;
    name: string;
    placeholder: string;
    option?: string[];
    classess: string;
}

const index: React.FC<InputType> = ({type, name, placeholder, option, classess}) => {
      const [isOpen, setIsOpen] = useState(false);
      const [selectedOption, setSelectedOption] = useState("");
      const options = !option ? [""] : option;
    
      const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };
    
      const selectOption = (option: any) => {
        setSelectedOption(option);
        setIsOpen(false);
      };
  return (
    <>
    {
        type === 'text' || type === 'textarea' ? 
        <input type={type} className={`${classess}`} name={name} placeholder={placeholder} />
        :
        <div className="relative w-full">
            <input
            type="text"
            value={selectedOption}
            placeholder={placeholder}
            className={classess}
            onClick={toggleDropdown}
            readOnly
            />
            {isOpen && (
            <ul className="absolute left-0 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10 h-80 overflow-y-auto">
                {options.map((option, index) => (
                <li
                    key={index}
                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                    onClick={() => selectOption(option)}
                >
                    {option}
                </li>
                ))}
            </ul>
            )}
        </div>

    }
    </>
  )
}

export default index
