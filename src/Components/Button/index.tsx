import react from 'react';
import style from './Button.module.scss';

type Props = {
  texto: string,
  type?: string,
  onClick?: () => void
};

function Button({texto, onClick}: Props) {
  return(
    <button onClick={onClick} className={style.botao}>
      {texto}
    </button>
  );
};

export default Button;