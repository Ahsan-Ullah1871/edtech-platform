import React from "react";

const InputField = ({
	setFormState,
	key_name,
	title,
	formState = {},
	isRequired = false,
	type,
}) => {
	const handleValueChange = ({ value }) => {
		setFormState((prev) => ({ ...prev, [key_name]: value }));
	};
	return (
		<div className="flex flex-col gap-3">
			<label className="text-sm font-medium text-[#8D98AF] ">
				{title}
			</label>
			<input
				type={type ?? "text"}
				value={formState?.[key_name]}
				className=" w-full font-normal text-sm
                        px-2 py-3 border border-[#F1F1F5] rounded-md   shadow-sm outline-none
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "
				onChange={(e) =>
					handleValueChange({
						value: e.target.value,
					})
				}
				required={isRequired}
			/>
		</div>
	);
};

export default InputField;
