import ContactCards from '@/Components/ContactCards'
import ContactForm from '@/Components/ContactForm'

const ContactPage = () => {
  return (
    <div className='min-h-screen flex flex-col items-center gap-4 md:justify-between'>
      <ContactForm />
      <ContactCards />
    </div>
  )
}

export default ContactPage