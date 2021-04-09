import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { IconButton } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
		},
		heading: {
			fontSize: theme.typography.pxToRem(15),
			fontWeight: theme.typography.fontWeightRegular,
		},
		summary: {
			display: 'contents'
		}
	}),
);

interface DocumentsProps {
	openDialog: boolean;
	onClose: any;
}

export default function DocumentsDialog(props: DocumentsProps) {
	const classes = useStyles();
	const { openDialog, onClose } = props;

	function download(filename: string, text: any) {
		var element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		element.setAttribute('download', filename);

		element.style.display = 'none';
		document.body.appendChild(element);

		element.click();

		document.body.removeChild(element);
	}

	const onDownloadDoc = () => {
		var text = document.getElementById('text-val')?.textContent
		var filename = "hello.txt";

		download(filename, text);
	}
	return (
		<Dialog open={openDialog} onClose={onClose} aria-labelledby="form-dialog-title">
			<DialogTitle id="form-dialog-title">Cadastrar dispositivo</DialogTitle>
			<DialogContent>
				<div className={classes.root}>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header">
							<Typography className={classes.heading}>Política de Privacidade</Typography>
							<IconButton aria-label="delete" onClick={onDownloadDoc}>
  							<GetAppIcon />
							</IconButton>
						</AccordionSummary>
						<AccordionDetails>
							<Typography id="text-val">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
								sit amet blandit leo lobortis eget.
          		</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel2a-content"
							id="panel2a-header"
						>
							<Typography className={classes.heading}>Direitos de uso da imagem</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
								sit amet blandit leo lobortis eget.
          </Typography>
						</AccordionDetails>
					</Accordion>
				</div>
			</DialogContent>
		</Dialog>
	);
}