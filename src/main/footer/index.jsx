import React, { useContext } from "react";
import { Footer, FooterButton } from "../../style/styled";
import { StateContext } from "../../store/stateContext";

export const MainFooter = () => {
	const { dispatch } = useContext(StateContext);
	const currentWeek = () => {
		dispatch({
			type: "setToday",
			payload: 1,
		});
	};
	return (
		<Footer>
			<FooterButton onClick={currentWeek}>Today</FooterButton>
			<FooterButton>Delete</FooterButton>
		</Footer>
	);
};
