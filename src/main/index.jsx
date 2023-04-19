import React from "react";
import { Days } from "./days";
import { Hours } from "./hours";
import { MainWrapper } from "../style/styled";
import { MainFooter } from "./footer";

export const Calendar = () => {
	return (
		<MainWrapper>
			<Days />
			<Hours />
			<MainFooter />
		</MainWrapper>
	);
};
