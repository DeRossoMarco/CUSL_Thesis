"use client";

import Button from "@mui/joy/Button";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Option from "@mui/joy/Option";
import Select from "@mui/joy/Select";
import Stack from "@mui/joy/Stack";
import Switch from "@mui/joy/Switch";
import { useState } from "react";

const FormInfo = () => {
	const [checked, setChecked] = useState(false);

	return (
		<div>
			<p>Calcola il preventivo per la tua tesi!</p>
			<form
			// onSubmit={(event) => {
			// 	event.preventDefault();
			// 	const formData = new FormData(event.currentTarget);
			// 	const formJson = Object.fromEntries((formData as any).entries());
			// 	alert(JSON.stringify(formJson));
			// }}
			>
				<Stack spacing={3}>
					<div className="flex flex-col gap-1">
						<FormLabel>Numero di Volumi</FormLabel>
						<Input
							required
							type="number"
							defaultValue={1}
							slotProps={{
								input: {
									min: 1,
									max: 10,
									step: 1,
								},
							}}
						/>
					</div>

					<div className="flex flex-col gap-1">
						<FormLabel>Materiale</FormLabel>
						<Select
							color="neutral"
							disabled={false}
							placeholder="Scegli..."
							size="sm"
							variant="outlined"
							required
							className="min-w-[300px]"
						>
							<Option value={"carta"}>
								Carta - Similpelle - Similseta - Tela
							</Option>
							<Option value={"seta"}>Seta - Canapa - Velluto</Option>
						</Select>
					</div>

					<div className="flex flex-row items-center justify-between">
						<FormLabel>Logo Università</FormLabel>
						<Switch
							color={checked ? "success" : "neutral"}
							checked={checked}
							onChange={(event) => setChecked(event.target.checked)}
						/>
					</div>

					<div className="flex flex-col gap-1">
						<FormLabel>Grammatura</FormLabel>
						<Select
							color="neutral"
							disabled={false}
							placeholder="Scegli..."
							size="sm"
							variant="outlined"
							required
							className="min-w-[300px]"
						>
							<Option value={"75g"}>
								75 g/m&#178;
							</Option>
							<Option value={"100g"}>
								100 g/m&#178;
							</Option>
						</Select>
					</div>

					<Button type="submit">Submit</Button>
				</Stack>
			</form>
		</div>
	);
};

export default FormInfo;
