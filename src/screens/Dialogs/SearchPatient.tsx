/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Patient } from '../../integration/BackendInterfaces';
import { DeviceData } from './utils/RegisterPatientUtils';

interface SearchPatientProps {
  deviceData: DeviceData;
}

export default function SearchPatient(props: SearchPatientProps) {
	const { deviceData } = props;
	const [patients, setPatients] = useState([]);
	const [owner, setOwner] = useState<string>();

	const handleChange = (event: React.ChangeEvent<{}>, value: string | null) => {
		const foundPatient = value as keyof typeof owner;
		setOwner(foundPatient);
	}

	function findPatient() {
		const selected = patients?.find((patient: Patient) => patient.name === owner);
		deviceData.owner = selected;
	}
	
	findPatient();
	async function getPatients() {
		const response = await fetch(`/patient/all`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": 'http://127.0.0.1:3000',
				"Access-Control-Allow-Methods": 'GET',
				"Access-Control-Allow-Headers": 'Content-Type, Authorization'
			}
		});

		const data = await response.json();
		let aux: any = [];
		data.forEach((patient: Patient) => {
			aux.push(patient);
		})
		setPatients(aux);
	}

	useEffect(() => {
		getPatients();
	}, []);

	return (
		<div>
			<Autocomplete
				id="search-patients"
				freeSolo
				fullWidth
				onChange={handleChange}
				options={patients.map((option: Patient) => option.name)}
				renderInput={(params) => (
					<TextField {...params} label="Paciente" margin="normal" />
				)}
			/>
		</div>
	);
}
