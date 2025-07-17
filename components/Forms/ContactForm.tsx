'use client'
import React from 'react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { contactSchema, contactType } from '@/validation/contact.validation'
import { zodResolver } from '@hookform/resolvers/zod'
import DefaultButton from '../Buttons/DefaultButton'
import { Textarea } from '../ui/textarea'
import { SendHorizontal, Smile } from 'lucide-react'
import { motion } from 'framer-motion'
import { animateOnClick } from '@/constant/animation'
import { sendContactFormEmail } from '@/actions/contact.action'
import { ErrorToast, SuccessToast } from '@/components/Toast'

const ContactForm = () => {
  const form = useForm<contactType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      companyName: '',
      email: '',
      message: '',
    },
  })

  const handleSubmit = async (values: contactType) => {
    const { success, message } = await sendContactFormEmail(values)

    if (!success) return ErrorToast(message)

    form.reset()
    return SuccessToast(message)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className='space-y-8 w-2/3'
      >
        <article className='flex items-center justify-between gap-5'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder='ex. John Doe' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='companyName'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Business/Company Name</FormLabel>
                <FormControl>
                  <Input placeholder='ex. Google Incorporation' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </article>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder='ex. johndoe@domain.com' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder='Looking for a collaboration, freelance work, or just want to say hi? Type away!' {...field} className='resize-none' maxLength={250}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <motion.div variants={animateOnClick} initial="initial" whileTap='animate' className='w-fit'>
          <DefaultButton disabled={form.formState.isSubmitting || form.formState.isSubmitSuccessful} type='submit'>
            {form.formState.isSubmitting ? 'Sending...' : form.formState.isSubmitSuccessful ? 'Thank you ' : 'Send Message'}
            <motion.span variants={animateOnClick} >
              {form.formState.isSubmitSuccessful ? <Smile size={20}/> : <SendHorizontal size={20} />}
            </motion.span>
          </DefaultButton>
        </motion.div>
      </form>
    </Form>
  )
}

export default ContactForm
