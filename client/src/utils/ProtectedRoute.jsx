import { useAuth } from '../hooks/auth'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ page, role }) {
	const [user] = useAuth()
	const Page = page


	if (user[role]) return <Page />
	if (role === 'anonymous' && !user.isAuth) return <Page />

	return <Navigate to="/" replace />
}
export default ProtectedRoute