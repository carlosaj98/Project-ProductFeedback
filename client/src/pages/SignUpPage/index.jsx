import * as React from 'react'
import { Link } from 'react-router-dom'
import { Stack, Typography, Button } from '@mui/material'
import Form from '../../components/Form'
import { formFields, validationSchema } from './form-fields'

function SignUpPage() {
	const onSubmit = (data) => {
        for (const pair of  data.entries()) {
			console.log(pair)
		}
	}
	return (
        <Stack spacing={3} alignItems="flex-start">
        <Button variant="outlined" component={Link} to="/">Back</Button>
			<Stack direction="row" justifyContent="space-between">
				<Form
					heading="Register"
					buttonLabel="Sign Up"
					formFields={formFields}
					onSubmit={onSubmit}
					validationSchema={validationSchema}
				/>
			</Stack>
		</Stack>
	)
}
export default SignUpPage