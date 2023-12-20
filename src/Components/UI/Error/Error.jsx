import s from './Error.module.scss';

const Error = ({message}) => {
  return (
    <section className={s.errorContainer}>
        <h2>[-] Error {message}</h2>
    </section>
  )
}

export default Error
