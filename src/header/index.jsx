import React from "react";
import styled from "styled-components";

export const Header = () => {
	const AppHeader = styled.div`
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	`;
	const HeadButton = styled.button`
		height: 3rem;
		width: 3rem;
		margin: 0 30px;
		text-align: center;
		font-weight: 100;
		font-size: 36px;
		line-height: 0;
		color: red;
		background: none;
		cursor: pointer;
		border: none;
		border-radius: 1.5rem;
		&:hover {
			background-color: #e2e8f0;
		}
		&:active {
			background-color: #cbd5e1;
		}
	`;
	const HeadH2 = styled.h2`
		font-weight: 200;
		padding: 0 30px;
	`;

	return (
		<AppHeader>
			<HeadH2>Interview Calendar</HeadH2>
			<HeadButton>+</HeadButton>
		</AppHeader>
	);
};
