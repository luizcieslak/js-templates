import React, { useState, useEffect } from 'react'

import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'
import Collapse from '@material-ui/core/Collapse'
import Snackbar from '@material-ui/core/Snackbar'

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ShoppingCart from '@material-ui/icons/ShoppingCart'

import { useStoreState, useStoreActions } from '../reducers/store'

import clsx from 'clsx'

import { RouteComponentProps } from '@reach/router'

import ProductPrice from '../commons/ProductPrice'
import Layout from '../commons/Layout'

function Alert(props: AlertProps) {
	return <MuiAlert elevation={6} variant='filled' {...props} />
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		modalWrapper: {
			maxWidth: '1024px',
			padding: theme.spacing(2, 4, 3),
			margin: '0 auto',
			marginTop: theme.spacing(2)
		},
		modalData: {
			display: 'flex',

			'@media (max-width: 1024px)': {
				alignItems: 'center'
			},

			alignItems: 'flex-start',

			'@media (max-width: 768px)': {
				flexWrap: 'wrap'
			}
		},
		productInfo: {
			marginLeft: theme.spacing(2),
			width: '70%',
			'@media (max-width: 1024px)': {
				width: '50%'
			},
			'@media (max-width: 768px)': {
				width: '100%'
			},
			'& > *': {
				marginBottom: theme.spacing(2)
			}
		},
		productImage: {
			width: '30%',
			'@media (max-width: 1024px)': {
				width: '50%'
			},
			'@media (max-width: 600px)': {
				width: '80%'
			},
			margin: '0 auto'
		},
		title: {
			textAlign: 'start'
		},
		chipBox: {
			display: 'flex',
			justifyContent: 'flex-start',
			'& > *': {
				marginRight: theme.spacing(0.5)
			}
		},
		expand: {
			transform: 'rotate(0deg)',
			marginLeft: 'auto',
			transition: theme.transitions.create('transform', {
				duration: theme.transitions.duration.shortest
			})
		},
		expandOpen: {
			transform: 'rotate(180deg)'
		},
		cartButton: {
			display: 'flex'
		}
	})
)

interface ProductDetailProps extends RouteComponentProps {
	id?: string
}

const ProductDetail = (props: ProductDetailProps) => {
	const [expanded, setExpanded] = useState(false)

	const [snackbarOpen, setSnackbarOpen] = React.useState(false)

	const classes = useStyles()
	const product = useStoreState(state => state.products.productSelected)
	const loadById = useStoreActions(actions => actions.products.loadProductDetail)
	const add = useStoreActions(actions => actions.cart.tryIncrementQuantity)

	const products = useStoreState(state => state.products.items)
	const loadAllFromAPI = useStoreActions(actions => actions.products.loadAllFromAPI)

	useEffect(() => {
		// If user enter in this page directly, the products wont be loaded
		if (products.length === 0) {
			loadAllFromAPI()
		}
		if (props.id) {
			loadById(props.id)
		}
	}, [])

	const handleSnackbarClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
		if (reason === 'clickaway') {
			return
		}

		setSnackbarOpen(false)
	}

	const addToCart = () => {
		add(product.id)
		setSnackbarOpen(true)
	}

	return (
		<Layout>
			<Box className={classes.modalWrapper}>
				<Box className={classes.modalData}>
					<img src={product.picture} alt={`Imagem do produto ${product.title}`} className={classes.productImage} />
					<Box className={classes.productInfo}>
						<Typography variant='h6'>{product.title}</Typography>
						<Box className={classes.chipBox}>
							<Chip label={product.brand} />
							<Chip label={product.memory} />
							<Chip label={product.chipType} />
						</Box>
						<ProductPrice price={product.price} quantity={product.quantity} />

						<Button
							variant='contained'
							color='primary'
							onClick={addToCart}
							startIcon={<ShoppingCart />}
							className={classes.cartButton}
							disabled={product.quantity === 0}
							data-testid='button-addtocart'
						>
							Adicionar ao Carrinho
						</Button>
						<Button
							color='primary'
							onClick={() => setExpanded(!expanded)}
							aria-expanded={expanded}
							aria-label='Ver descrição'
							data-testid='button-seedescription'
							startIcon={
								<ExpandMoreIcon
									className={clsx(classes.expand, {
										[classes.expandOpen]: expanded
									})}
								/>
							}
						>
							Ver descrição
						</Button>
					</Box>
				</Box>
				<Collapse in={expanded} timeout='auto' unmountOnExit data-testid='collapsed-text'>
					<Typography variant='body2'>{product.description}</Typography>
				</Collapse>
			</Box>
			<Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose} data-testid='snackbar'>
				<Alert onClose={handleSnackbarClose} severity='success'>
					Adicionado ao carrinho com sucesso!
				</Alert>
			</Snackbar>
		</Layout>
	)
}

export default ProductDetail
