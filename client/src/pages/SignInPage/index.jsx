import * as React from 'react'

import { Stack, Typography } from '@mui/material'
import Form from '../../components/Form'
import { formFields, validationSchema } from './form-fields'

function SignInPage() {
	// const onSubmit = (data) => {
	// 	customerService.create(data)
	// 		.then(console.log(data))
	// 		.catch(console.log(data))
	// }
	return (
		<Stack spacing={3}>
			<Stack direction="row" justifyContent="space-between">
				<Form
					heading="Login"
					buttonLabel="Sign In"
					formFields={formFields}
					// onSubmit={onSubmit}
					validationSchema={validationSchema}
				/>
			</Stack>
		</Stack>
	)
}
export default SignInPage