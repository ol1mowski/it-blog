import s from './Validation.module.scss';

const Validation = ({message, resoult}) => {

  return (
    <p className={resoult === 'fail' ? s.fail : s.pass}>
        {message}
    </p>
  );
};

export default Validation;
