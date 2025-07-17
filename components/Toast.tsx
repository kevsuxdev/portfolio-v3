import { CheckCheck, CircleX } from "lucide-react"
import { toast } from "sonner"

export const ErrorToast = (message: string) => {
    return toast.error("Error", {
        description: message,
        descriptionClassName: '!text-foreground',
        icon: <CircleX size={25} className="text-destructive"/>,
        className: '!bg-accent !text-destructive !border-background !gap-5'
    })
}

export const SuccessToast = (message: string) => {
    return toast.success("Success", {
        description: message,
        descriptionClassName: '!text-foreground',
        icon: <CheckCheck size={25} className="text-primary" />,
        className: '!bg-accent !text-primary !border-background !gap-5'
    })
}