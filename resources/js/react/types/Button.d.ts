import { ReactNode } from "react";

type TTypeButton = "submit" | "button";
type TBgTheme = "verde" | "crema";
interface IButton {
	type: TTypeButton;
	children: ReactNode;
	className: string;
	theme: TBgTheme;
	onClick: () => void;
}
