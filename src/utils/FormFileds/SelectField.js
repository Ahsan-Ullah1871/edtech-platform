import React from "react";

const SelectField = ({
	setFormState,
	key_name,
	title,
	formState = {},
	isRequired = false,
	options = [],
	handleValueChange,
}) => {
	console.log("====================================");
	console.log(formState);
	console.log("====================================");
	return (
		<div className="flex flex-col gap-3">
			<label className="text-sm font-medium text-[#8D98AF] ">
				{title}
			</label>
			<select
				name={key_name}
				className=" w-full font-normal text-sm
                        px-2 py-3 border border-[#F1F1F5] rounded-md   shadow-sm outline-none
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "
				required={isRequired}
				onChange={(e) => {
					handleValueChange(e.target?.value);
				}}
			>
				<option value="" hidden selected>
					Select
				</option>
				{options?.length == 0 && (
					<option value="" disabled>
						Videos not available
					</option>
				)}
				{options?.map((option) => {
					return (
						<option
							value={option.value}
							selected={
								formState?.[key_name] ==
								option.value
							}
						>
							{option.label}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default SelectField;
