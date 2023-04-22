import styled from "styled-components";
import { ArrowIosBackOutline } from "styled-icons/evaicons-outline";

export const AppWrapper = styled.div`
	position: relative;
	max-width: 740px;
	height: 95vh;
	margin: 15px auto;
	display: flex;
	flex-direction: column;
	align-self: center;
	align-items: center;
	background: #f9fafb;
	box-shadow: 0px 0px 10px black;
	border-radius: 5px;
	@media (max-width: 740px) {
	   	width: 100%;
  	}
	
`

export const AppHeader = styled.div`
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;
export const HeadButton = styled.button`
	height: 2.5rem;
	width: 2.5rem;
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

export const HeadH2 = styled.header`
	font-weight: 200;
	font-size: 24px;
	padding: 25px;
`;

export const MainWrapper = styled.div`
	width: 100%;
	overflow: auto;
`;

export const DaysWrapper = styled.nav`
	position: sticky;
	top: 0px;
	text-align: center;
	background-color: #e5e7eb;
	padding-left: 10%;
`;

export const Week = styled.table`
	font-weight: 600;
	width: 100%;
`;

export const WeekTH = styled.th`
	padding: 5px;
	font-size: 12px;
`

export const DayNumber = styled.p`
	height: 2rem;
	width: 2rem;
	margin: 0 auto;
	line-height: 2;
	align-items: center;
	font-size: 18px;
	font-weight: 400;
	border: none;
	border-radius: 1.5rem;
	background: none;
`

export const MYear = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const BackArr = styled(ArrowIosBackOutline)`
	width: 25px;
	height: 25px;
	color: red;
`;

export const ForwArr = styled(BackArr)`
	transform: rotate(180deg);
`;

export const HoursWrapper = styled.main`
	width: 100%;
	display: flex;
	flex-direction: row;
	font-size: 14px;
	`;
export const FirstCol = styled.nav`
	width: 10%;
	& p {
		margin: 0.5rem 0 2.5rem 0;
		text-align: center;
		font-weight: 500;
		color: #9ca3af;
		line-height: 0;
	}
`;
export const HoursTable = styled.table`
	table-layout: fixed;
	width: 90%;
	background-color: #f3f4f6;
	& td {
		padding: 1rem;
	};
	& #empty {
		background-color: white;
	}
	& #edle {
		background-color: #e0e7ff;
	}
	& #active {
		background-color: #c7d2fe;
	}
`;

export const Footer = styled.footer`
	position: sticky;
	bottom: 0px;
	width: 100%;
	padding: 5px 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	background-color: #e5e7eb;
`;
export const FooterButton = styled(HeadButton)`
	font-size: 20px;
	border-radius: 15px;
	height: 2.5rem;
	width: 5rem;
`;