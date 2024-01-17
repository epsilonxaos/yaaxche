import React, { useEffect, useState } from "react";
import { IButton } from "../types/Button";

export default function Button({ children, className = "", type = "button", theme = "verde", onClick = () => {} }: IButton) {
	const [themeClass, setThemeClass] = useState<string>();
	const objectThemeClass = {
		verde: "bg-verde text-crema",
		crema: "bg-crema text-verde",
	};

	useEffect(() => {
		setThemeClass(objectThemeClass[theme]);
	}, [theme]);

	return (
		<button type={type} onClick={onClick} className={`py-2 px-6 rounded-[30px] text-paragraph min-w-[150px] ${themeClass} ${className}`}>
			{children}
		</button>
	);
}
