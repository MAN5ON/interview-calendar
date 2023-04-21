import React from "react";
import {
	BackArr,
	DaysWrapper,
	ForwArr,
	HeadButton,
	MYear,
	Week,
	WeekBTN,
	WeekTH,
} from "../../style/styled";
import { useDispatch, useSelector } from "react-redux";
import { nextWeek, pickDay, prevWeek } from "../../store/calendarSlice";

export const Days = () => {
	const dispatch = useDispatch();
	const calendar = useSelector((state) => state.calendar);
	const days = [];
	const weekDays = ["M", "T", "W", "T", "F", "S", "S"];
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

	for (
		let i = -calendar.date.getDay() + 1;
		i < -calendar.date.getDay() + 8;
		i++
	) {
		const day = new Date(
			calendar.date.getFullYear(),
			calendar.date.getMonth(),
			calendar.date.getDate() + i
		);
		const isToday = day.toDateString() === calendar.today.toDateString();
		days.push(
			<WeekBTN
				onClick={() =>
					dispatch({
						type: "calendar/pickDay",
						payload: day.toISOString(),
					})
				}
				key={day.toDateString()}
				style={{
					backgroundColor: isToday ? "red" : "#e5e7eb",
					color: isToday ? "#ffffff" : "#000000",
				}}
			>
				{day.getDate()}
			</WeekBTN>
		);
	}

	return (
		<DaysWrapper>
			<Week>
				<thead>
					<tr>
						{weekDays.map((day, id) => (
							<WeekTH key={id}>{day}</WeekTH>
						))}
					</tr>
				</thead>
				<tbody>
					<tr>
						{days.map((day, id) => (
							<td key={id}>{day}</td>
						))}
					</tr>
				</tbody>
			</Week>
			<MYear>
				<HeadButton onClick={() => dispatch(prevWeek())}>
					<BackArr />
				</HeadButton>
				<p>
					{months[calendar.today.getMonth()]}{" "}
					{calendar.today.getFullYear()}
				</p>
				<HeadButton onClick={() => dispatch(nextWeek())}>
					<ForwArr />
				</HeadButton>
			</MYear>
		</DaysWrapper>
	);
};
