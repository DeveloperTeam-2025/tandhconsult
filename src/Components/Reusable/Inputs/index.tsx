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
      const [selectedOption, setSelectedOption] = useState();     
      const options = !option ? [""] : option;
    
      const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };
    
      const selectOption = (option: any) => {
        setSelectedOption(option);
        setIsOpen(false);
      };


      const [phoneNumber, setPhoneNumber] = useState("");

      const formatPhoneNumber = (value: string) => {
        // Remove all non-numeric characters except "+"
        const sanitizedValue = value.replace(/[^0-9+]/g, "");
    
        // If the user deletes back to "+", keep it as is
        if (sanitizedValue === "+") return "+";
    
        // Ensure the number starts with "+" if it's not empty
        if (!sanitizedValue.startsWith("+") && sanitizedValue.length > 0) {
          return `+${sanitizedValue}`;
        }
    
        // Apply formatting
        const match = sanitizedValue.match(
          /^(\+\d{1,3})?(\d{1,3})?(\d{1,3})?(\d{1,4})?(\d{1,2})?$/
        );
    
        if (!match) return sanitizedValue; // Return sanitized value if it doesn't match the format
    
        const [, countryCode, areaCode, firstPart, secondPart, extension] = match;
    
        let formatted = "";
        if (countryCode) formatted += `${countryCode} `;
        if (areaCode) formatted += `(${areaCode}) `;
        if (firstPart) formatted += `${firstPart}-`;
        if (secondPart) formatted += `${secondPart}`;
        if (extension) formatted += `-${extension}`;
    
        return formatted.trim();
      };
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value;
    
        // Only format if it's not just the plus sign "+"
        if (rawValue !== "+") {
          const formattedValue = formatPhoneNumber(rawValue);
          setPhoneNumber(formattedValue);
        } else {
          // Keep it as just "+"
          setPhoneNumber(rawValue);
        }
      };
    
      const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // Allow clearing the entire input when Backspace is pressed and the input is empty
        if (e.key === "Backspace") {
          // setPhoneNumber(""); 
          const pop_value = phoneNumber.split('')
          const text_value = pop_value.filter((data,indx) => data && indx !== pop_value.length -1 )
          console.log(text_value)
          setPhoneNumber(text_value.join())
        }
      };
    
    
  return (
    <>
    {
        type === 'text' || type === 'textarea' ? 
        <input type={type} className={`${classess}`} name={name} placeholder={placeholder} />
        :
        type === 'number' ? 
        <input type='text' className={`${classess}`} name={name} value={phoneNumber} onChange={handleChange} onKeyDown={handleKeyDown} placeholder={placeholder} /> 
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
