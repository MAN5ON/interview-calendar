import React from "react";
import { AppHeader, HeadButton, HeadH2 } from "../style/styled";

export const Header = () => {
	return (
		<AppHeader>
			<HeadH2>Interview Calendar</HeadH2>
			<HeadButton>+</HeadButton>
		</AppHeader>
	);
};
