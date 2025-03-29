import { useState } from "react";
import { Button } from "react-bootstrap";

export default function ButtonTheme() {
	const [theme, setTheme] = useState<string>("dark");

	const changeTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
		document.body.setAttribute("data-bs-theme", theme);
	};

	return (
		<Button
			variant="primary"
			type="button"
			className="position-absolute top-0 end-0 m-3 py-1"
			onClick={changeTheme}
		>
			<i className="fa-solid fa-circle-half-stroke"></i>
		</Button>
	);
}
