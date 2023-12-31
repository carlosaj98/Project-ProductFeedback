import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function useToastify(message) {
  return (
    toast.error((message || "You must log in to access this feature"), {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "colored",
    })
  )
}
export default useToastify