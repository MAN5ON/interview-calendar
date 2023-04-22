import React, { useContext } from "react";
import { StateContext } from "../../store";
import { FirstCol, HoursTable, HoursWrapper } from "../../style/styled";

export const Hours = () => {
	const { state, dispatch } = useContext(StateContext);
	const dates = state.filteredTaskArr;
	const onRemove = state.onRemove;
	const days = state.weekArr;
	const hours = Array.from({ length: 24 }, (_, h) => h);

	// Выбираем ячейку для удаления
	const setRemove = (task) => {
		dispatch({
			type: "setRemove",
			payload: task ? task.id : "",
		});
	};

	return (
		<HoursWrapper>
			<FirstCol>
				{hours.map((hour) => (
					<p style={{ backgroundColor: "white" }} key={hour}>
						{hour < 10 ? `0${hour}` : hour}:00
					</p>
				))}
			</FirstCol>
			<HoursTable>
				<thead>
					<tr>
						{days.map((day) => (
							<th key={day}></th>
						))}
					</tr>
				</thead>
				<tbody>
					{hours.map((hour) => (
						<tr key={hour}>
							{days.map((day) => {
								const date = dates.find(
									(date) =>
										date.date === day && date.hour === hour
								);

								return (
									<td
										id={
											date && onRemove === date.id
												? "active"
												: date
												? "edle"
												: "empty"
										}
										onClick={() => setRemove(date)}
										key={`${day}-${hour}`}
										// style={{
										// 	backgroundColor: date
										// 		? "#e0e7ff"
										// 		: "white",
										// }}
									></td>
								);
							})}
						</tr>
					))}
				</tbody>
			</HoursTable>
		</HoursWrapper>
	);
};
