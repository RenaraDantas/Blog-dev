import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
    return (
       <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, este é o meu blog pessoal!
                </h1>

                <p className={styles.paragrafo}>
                Boas vindas ao meu espaço pessoal! Eu sou Renara Dantas, estudante de engenharia de software. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
                </p>
            </div>

            <div className={styles.imagem}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido} 
                    aria-hidden={true} alt="Imagem decorativa de um círculo colorido"
                />

                <img
                    className={styles.minhaFoto} src={minhaFoto}  alt="Foto do autor"
                    style={{ width: '300px', height: '300px', borderRadius: '80%', objectFit: 'cover' }}
                />
           </div>
       </div> 
    )
}