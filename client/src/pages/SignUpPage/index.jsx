import * as React from 'react'

import { Stack, Typography } from '@mui/material'
import Form from '../../components/Form'
import { formFields, validationSchema } from './form-fields'

function SignUpPage() {
	const onSubmit = (data) => {
        for (const pair of  data.entries()) {
			console.log(pair)
		}
	}
	return (
		<Stack spacing={3}>
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