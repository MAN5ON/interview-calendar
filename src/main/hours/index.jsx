import React, { useContext } from "react";
import { StateContext } from "../../store";
import styled from "styled-components";

export const Hours = () => {
	const Hours = styled.main``;
	const { state, dispatch } = useContext(StateContext);
	const setRemove = (task) => {
		dispatch({
			type: "setRemove",
			payload: task.id,
		});
	};

	return (
		<Hours>
			{state.filteredTaskArr.map((task) => (
				<div onClick={() => setRemove(task)}>
					{task.date}+{task.hour}+{task.id}
				</div>
			))}
		</Hours>
	);
};
