import React, { useState } from "react";
import {
	BackArr,
	DaysWrapper,
	ForwArr,
	HeadButton,
	MYear,
	Week,
	WeekBTN,
	WeekTD,
	WeekTH,
} from "../../style/styled";
import styled from "styled-components";

export const Days = () => {
	const MonthDays = styled(Week);
	const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"];
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const [date, setDate] = useState(new Date());
	const today = new Date(date);

	function prevWeek() {
		setDate((prevDate) => {
			const newDate = new Date(prevDate);
			newDate.setDate(prevDate.getDate() - 7);
			return newDate;
		});
	}

	function nextWeek() {
		setDate((prevDate) => {
			const newDate = new Date(prevDate);
			newDate.setDate(prevDate.getDate() + 7);
			return newDate;
		});
	}

	const weekStart = new Date(
		today.getFullYear(),
		today.getMonth(),
		today.getDate() - today.getDay() + 1
	);
	const weekEnd = new Date(
		today.getFullYear(),
		today.getMonth(),
		today.getDate() - today.getDay() + 7
	);

	const days = [];
	for (
		let i = new Date(weekStart);
		i <= weekEnd;
		i.setDate(i.getDate() + 1)
	) {
		days.push(<WeekBTN key={i}>{i.getDate()}</WeekBTN>);
	}

	return (
		<DaysWrapper>
			<Week>
				<thead>
					<tr>
						{daysOfWeek.map((day) => (
							<WeekTH>{day}</WeekTH>
						))}
					</tr>
				</thead>
				<tbody>
					{days.map((day) => (
						<td>{day}</td>
					))}
				</tbody>
			</Week>
			<MYear>
				<HeadButton onClick={prevWeek}>
					<BackArr />
				</HeadButton>
				<p>
					{months[weekEnd.getMonth()]} {weekEnd.getFullYear()}
				</p>
				<HeadButton onClick={nextWeek}>
					<ForwArr />
				</HeadButton>
			</MYear>
		</DaysWrapper>
	);
};
