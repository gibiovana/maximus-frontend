import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			maxWidth: 360,
			backgroundColor: theme.palette.background.paper,
		},
	}),
);

interface DoctorListDialogProps {
	openDialog: boolean;
	onClose: any;
}

export default function DoctorListDialog(props: DoctorListDialogProps) {
	const { openDialog, onClose } = props;
	const classes = useStyles();
	const [checked, setChecked] = React.useState([1]);
	const handleToggle = (value: number) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};

	return (
		<Dialog open={openDialog} onClose={onClose} fullWidth>
			<DialogTitle id="form-dialog-title">Vincular médicos</DialogTitle>
			<DialogContent>
				<List dense className={classes.root}>
					{[0, 1, 2, 3].map((value: any) => {
						const labelId = `checkbox-list-secondary-label-${value}`;
						return (
							<ListItem key={value} button>
								<ListItemAvatar>
									<Avatar
										alt={`Avatar n°${value + 1}`}
										src={`/static/images/avatar/${value + 1}.jpg`}
									/>
								</ListItemAvatar>
								<ListItemText id={labelId} primary={`Line item ${value + 1}`} />
								<ListItemSecondaryAction>
									<Checkbox
										edge="end"
										onChange={handleToggle(value)}
										checked={checked.indexOf(value) !== -1}
										inputProps={{ 'aria-labelledby': labelId }}
									/>
								</ListItemSecondaryAction>
							</ListItem>
						);
					})}
				</List>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose} color="primary">
					Cancelar
          </Button>
				<Button onClick={onClose} color="primary" variant="contained">
					Cadastrar
          </Button>
			</DialogActions>
		</Dialog>
	);
}
