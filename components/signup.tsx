import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: "Marry Doe",
    phoneNumber: "1234567890",
    email: "Marry Doe",
    companyName: "Marry Doe",
    isAgency: "yes",
  });
  const navTo = useNavigate();

  const handleSubmit = () => {
    for (const key in formData) {
      if (formData[key as keyof typeof formData] === "") {
        alert(`Please fill in the ${key} field.`);
        return;
      }
    }
    alert("Form submitted successfully!");
    console.log(formData);
    navTo("/account");
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className=" bg-gray-100/50 h-[80%] w-[80%] max-w-3xl md:w-full flex sm:justify-center justify-between gap-4 flex-col md:p-8 p-4 rounded-md">
        <div className="space-y-2">
          <h1 className="text-xl sm:text-3xl font-bold text-gray-900 mb-2">
            Create your PopX account
          </h1>

          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          {inputBox({
            type: "text",
            value: formData.fullName,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              setFormData({ ...formData, fullName: e.target.value });
            },

            id: "fullName",
            label: "Full Name",
            required: true,
          })}

          {inputBox({
            type: "number",
            value: formData.phoneNumber,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              setFormData({ ...formData, phoneNumber: e.target.value });
            },
            id: "phoneNumber",
            label: "Phone Number",
            required: true,
          })}

          {inputBox({
            type: "email",
            id: "email",
            value: formData.email,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              setFormData({ ...formData, email: e.target.value });
            },
            label: "Email Address",
            required: true,
          })}

          {inputBox({
            type: "text",
            value: formData.companyName,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              setFormData({ ...formData, companyName: e.target.value });
            },
            id: "companyName",
            label: "Company Name",
            required: false,
          })}

          <div className="px-2 space-y-2">
            <p className="text-sm">
              Are you an Agency?
              <span className="text-red-500">*</span>
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <label className="flex items-center">
                <input
                  checked={formData.isAgency === "yes"}
                  onChange={(e) => {
                    setFormData({ ...formData, isAgency: e.target.value });
                  }}
                  type="radio"
                  name="isAgency"
                  value="yes"
                  className="mr-2 accent-purple-500"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  checked={formData.isAgency === "no"}
                  type="radio"
                  name="isAgency"
                  value="no"
                  className="mr-2"
                  onChange={(e) => {
                    setFormData({ ...formData, isAgency: e.target.value });
                  }}
                />
                No
              </label>
            </div>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-purple-700 text-white p-2 rounded-md w-full cursor-pointer hover:bg-purple-800 transition duration-200 ease-in-out">
          Create Account
        </button>
      </div>
    </div>
  );
}

function inputBox({
  className,
  value,
  onChange,
  type,
  id,
  label,
  required = false,
}: {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type: string;
  id: string;
  label: string;
  required?: boolean;
}) {
  return (
    <div className="mb-6 relative text-xs sm:text-sm">
      <label
        htmlFor={id}
        className={`absolute text-purple-500 text-sm -top-2.5 left-3 bg-gray-100 pr-4 pl-1 z-10 ${className}`}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        id={id}
        placeholder="Marry Doe"
        className="w-full px-3 py-3 border border-gray-300 rounded-md text-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
      />
    </div>
  );
}
