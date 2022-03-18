import { useForm } from '@formspree/react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useLocalStorage } from 'react-use'
import type { UnionToIntersection } from 'type-fest'
import * as Yup from 'yup'

interface Submission {
  createdAt?: Date
  email: string
  name: string
  message: string
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  message: Yup.string().min(30).max(1000).required(),
  name: Yup.string().min(1).max(50).required(),
})

export const Contact = () => {
  // @ts-expect-error type guard ignores initialData
  const [{ createdAt, ...submission }, setSubmission] =
    useLocalStorage<Submission>(
      'contact-date',
      {
        email: '',
        message: '',
        name: '',
      },
      {
        deserializer: x => {
          const { createdAt, ...submission } = JSON.parse(x)
          return createdAt
            ? { createdAt: new Date(createdAt), ...submission }
            : submission
        },
        raw: false,
        serializer: x => JSON.stringify(x),
      }
    )

  const [, handleSubmit] = useForm('contactForm')

  return (
    <Formik
      initialValues={submission}
      validationSchema={validationSchema}
      onSubmit={async (values, { setErrors }) => {
        const { body } = await handleSubmit(values)
        const { errors } = body as Partial<UnionToIntersection<typeof body>>
        if (errors?.length)
          setErrors(
            errors
              .filter((x): x is Required<typeof x> => !!x.field)
              .reduce(
                (acc, cur) => ({
                  ...acc,
                  [cur.field]: cur.message,
                }),
                {} as Parameters<typeof setErrors>[0]
              )
          )
        else
          setSubmission({
            createdAt: new Date(),
            ...values,
          })
      }}
    >
      {({ errors, isSubmitting }) => (
        <Form className='flex flex-col space-y-4 children:not-lastmax-w-[49ch] markdown'>
          <Field
            name='name'
            autoComplete='name'
            placeholder='Name'
            disabled={createdAt}
          />
          <ErrorMessage
            component='span'
            className='text-xs text-rose-400 !mt-1'
            name='name'
          />
          <Field
            name='email'
            autoComplete='email'
            placeholder='Email address'
            disabled={createdAt}
          />
          <ErrorMessage
            component='span'
            className='text-xs text-rose-400 !mt-1'
            name='email'
          />
          <Field
            as='textarea'
            name='message'
            autoComplete='off'
            placeholder='Message'
            disabled={createdAt}
          />
          <ErrorMessage
            component='span'
            className='text-xs text-rose-400 !mt-1'
            name='message'
          />
          <div className='flex justify-between'>
            {createdAt ? (
              <p className='text-xs opacity-50'>We got your message</p>
            ) : (
              <input
                type='submit'
                disabled={
                  !!createdAt ||
                  !!Object.values(errors).filter(x => x).length ||
                  isSubmitting
                }
                value={createdAt ? 'We got your message' : 'Submit'}
              />
            )}
            <div className='flex space-x-4'>
              {/* <a
                className='transform transition-transform hover:scale-105'
                href='https://twitter.com/400_000_000'
              >
                <MdiTwitter />
              </a>
              <a
                className='transform transition-transform hover:scale-105'
                href='https://instagram.com/400_000_000'
              >
                <MdiInstagram />
              </a> */}
              <a
                className='transform transition-transform hover:scale-105'
                href='https://400000000.co'
              >
                <Icon400Million />
              </a>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}
