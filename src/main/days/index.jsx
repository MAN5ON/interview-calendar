import React, { useEffect, useContext, useState } from "react";
import { StateContext } from "../../store";

import {
	BackArr,
	DayNumber,
	DaysWrapper,
	ForwArr,
	HeadButton,
	MYear,
	Week,
	WeekTH,
} from "../../style/styled";

export const Days = () => {
	const { state, dispatch } = useContext(StateContext);
	const [date, setDate] = useState(new Date());
	const today = state.today;
	const tasks = state.tasksArr;
	const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"];
	const monthsOfYear = [
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
	const weekObjects = [];
	const weekDates = [];

	useEffect(() => {
		dispatch({
			type: "changeWeek",
			payload: weekDates,
		});

		dispatch({
			type: "filterTasks",
			payload: tasks.filter((task) => weekDates.includes(task.date)),
		});
		if (today) {
			setDate(new Date());
			dispatch({
				type: "setToday",
				payload: 0,
			});
		}
	}, [date, today, tasks]);

	// Функция для переключения на предыдущую неделю
	const prevWeek = () => {
		setDate(
			new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7)
		);
	};

	// Функция для переключения на следующую неделю
	const nextWeek = () => {
		setDate(
			new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7)
		);
	};

	// Находим понедельник
	let weekStart = new Date(date);
	weekStart.setDate(
		weekStart.getDate() -
			weekStart.getDay() +
			(weekStart.getDay() === 0 ? -6 : 1)
	);
	// Добавляем в массив дни недели
	for (let i = 0; i < daysOfWeek.length; i++) {
		const day = new Date(weekStart);
		const isToday = day.toDateString() === new Date().toDateString();
		weekDates.push(day.toDateString());
		weekObjects.push(
			<DayNumber
				key={day}
				onClick={() => console.log(weekDates)}
				style={{
					backgroundColor: isToday ? "red" : "#e5e7eb",
					color: isToday ? "#ffffff" : "#000000",
				}}
			>
				{day.getDate()}
			</DayNumber>
		);

		weekStart.setDate(weekStart.getDate() + 1);
	}

	return (
		<DaysWrapper>
			<Week>
				<thead>
					<tr>
						{daysOfWeek.map((day, id) => (
							<WeekTH key={id}>{day}</WeekTH>
						))}
					</tr>
				</thead>
				<tbody>
					<tr>
						{weekObjects.map((day, id) => (
							<td key={id}>{day}</td>
						))}
					</tr>
				</tbody>
			</Week>
			<MYear>
				<HeadButton onClick={prevWeek}>
					<BackArr />
				</HeadButton>
				<p>
					{monthsOfYear[date.getMonth()]} {date.getFullYear()}
				</p>
				<HeadButton onClick={nextWeek}>
					<ForwArr />
				</HeadButton>
			</MYear>
		</DaysWrapper>
	);
};
