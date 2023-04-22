import React, { useContext } from "react";
import { StateContext } from "../store";
import { AppHeader, HeadButton, HeadH2 } from "../style/styled";

export const Header = () => {
	const { state, dispatch } = useContext(StateContext);
	const tasks = state.tasksArr;
	const newTaskHandler = () => {
		const newTask = prompt("Enter event time: YYYY-MM-DD HH:MM", "");
		const newDate = new Date(newTask).toDateString();
		const newHour = new Date(newTask).getHours();
		if (newDate === "Invalid Date" || newTask.length !== 16) {
			return alert("Something Wrong with your date! PLS try again!");
		}
		dispatch({
			type: "addTask",
			payload: [
				...tasks,
				{
					id: `${new Date().toISOString()}${Math.random()}`,
					date: newDate,
					hour: newHour,
				},
			],
		});
	};
	return (
		<AppHeader>
			<HeadH2>Interview Calendar</HeadH2>
			<HeadButton onClick={newTaskHandler}>+</HeadButton>
		</AppHeader>
	);
};
