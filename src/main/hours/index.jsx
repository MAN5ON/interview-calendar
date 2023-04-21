import React, { useContext } from "react";
import styled from "styled-components";
import { StateContext } from "../../store/stateContext";

export const Hours = () => {
	const Hours = styled.div``;
	const { state, dispatch } = useContext(StateContext);
	return (
		<Hours>
			{state.weekArr.map((day) => (
				<div>{day}</div>
			))}
		</Hours>
	);
};
