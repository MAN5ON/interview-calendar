import React from "react";
import { Days } from "./days";
import { Hours } from "./hours";
import styled from "styled-components";

export const Calendar = () => {
	const MainWrapper = styled.div`
		width: 100%;
	`;
	return (
		<MainWrapper>
			<Days />
			<Hours />
		</MainWrapper>
	);
};
