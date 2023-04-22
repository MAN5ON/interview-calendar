import React, { useContext } from "react";
import { Footer, FooterButton } from "../../style/styled";
import { StateContext } from "../../store";

export const MainFooter = () => {
	const { state, dispatch } = useContext(StateContext);
	const picked = state.onRemove;
	const tasksArr = state.tasksArr;

	const currentWeek = () => {
		dispatch({
			type: "setToday",
			payload: 1,
		});
	};

	const removeItem = () => {
		dispatch({
			type: "removeTask",
			payload: tasksArr.filter((task) => task.id !== picked),
		});
	};
	return (
		<Footer>
			<FooterButton onClick={currentWeek}>Today</FooterButton>
			{picked && <FooterButton onClick={removeItem}>Delete</FooterButton>}
		</Footer>
	);
};
