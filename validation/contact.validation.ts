import { z } from 'zod'

export const contactSchema = z.object({
    name: z.string().nonempty("Please enter your name."),
    companyName: z.string().nonempty("Please enter your company or business name."),
    email: z.email("Please enter a valid email address."),
    message: z.string().max(250).nonempty("Please enter a short/long message for me.")
})

export type contactType = z.infer<typeof contactSchema>