import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Patient } from '../../integration/BackendInterfaces';
import { useHistory } from 'react-router-dom';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import IconButton from '@material-ui/core/IconButton';

interface Column {
	id: 'name' | 'prontuary' | 'pathologicalCondition';
	label: string;
	minWidth?: number;
	align?: 'right';
	format?: (value: number) => string;
}

const columns: Column[] = [
	{ id: 'name', label: 'Nome', minWidth: 170 },
	{ id: 'prontuary', label: 'Prontuário', minWidth: 170 },
	{
		id: 'pathologicalCondition',
		label: 'Condição patológica',
		minWidth: 170,
	}
];

const useStyles = makeStyles({
	root: {
		width: '90%',
		marginLeft: '3rem',
		marginTop: '5rem'
	},
	container: {
		maxHeight: 440,
	},
	head: {
		background: '#9e3abd',
		color: 'white',
	},
});

export default function StickyHeadTable() {
	const classes = useStyles();
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const [patients, setPatients] = useState([]);
	const [owner, setOwner] = useState<string>();
	let history = useHistory();

	const openPatientDetails = (event: React.ChangeEvent<{}>, value: string | null) => {
		const foundPatient = value as keyof typeof owner;
		setOwner(foundPatient);
	}

	const onPatientClick = (patient: Patient) => {
		history.push('/patient' + patient.patientId)
	}

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

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<Paper className={classes.root}>
			<TableContainer className={classes.container}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead className={classes.head}>
						<TableRow>
							{columns.map((column) => (
								<TableCell
									className={classes.head}
									key={column.id}
									align={column.align}
									style={{ minWidth: column.minWidth }}>
									{column.label}
								</TableCell>
							))}
							<TableCell
								className={classes.head}>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{patients.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((patient: Patient) => {
							return (
								<TableRow hover role="checkbox" tabIndex={-1} key={patient.prontuary}>
									{columns.map((column) => {
										const value = patient[column.id];
										return (
											<TableCell key={column.id} align={column.align}>
												{column.format && typeof value === 'number' ? column.format(value) : value}
											</TableCell>
										);
									})}
									<TableCell>
										<IconButton aria-label="delete">
											<NavigateNextIcon />
										</IconButton>
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[10, 25, 100]}
				component="div"
				count={patients.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
		</Paper>
	);
}
