import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function useToastifyInfo(message) {
  return (
    toast.info(message, {
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
export default useToastifyInfo