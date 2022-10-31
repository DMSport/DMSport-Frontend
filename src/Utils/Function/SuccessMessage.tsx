import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export default function ToastSuccess (text: string | null) {
    toast.success(`${text}`, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}