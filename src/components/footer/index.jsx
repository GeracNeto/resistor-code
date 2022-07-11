// Footer da página

import './style.css'

export const Footer = () => {
    
    return(
        <footer>
            <h3>Desenvolvido por Geraldo Pereira da Costa Neto</h3>
            <div className='sociais'>
                <a href='https://github.com/GeracNeto' target='_blank'><img src='/placa-do-github.png' id='git-img'></img></a>
                <a href='https://www.linkedin.com/in/geraldo-costa-5568a8152/' target='_blank'><img src='/linkedin.png'></img></a>
            </div>
        </footer>
    );
}