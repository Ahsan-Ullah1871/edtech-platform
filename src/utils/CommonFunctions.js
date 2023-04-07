import { userLoggedOut } from "../features/auth/authSlice";

export const handleFormValueChange = ({ setFormState, key_name, value }) => {
	setFormState((prev) => ({ ...prev, [key_name]: value }));
};

export const handleLogout = (dispatch) => {
	dispatch(userLoggedOut());
	localStorage.clear();
};
