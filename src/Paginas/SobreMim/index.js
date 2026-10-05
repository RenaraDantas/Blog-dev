import PostModelo from "componentes/PostModelo"
import styles from './SobreMim.module.css'
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobre_mim_foto.png"

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre Mim"
        > 
         
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Renara!
            </h3>

            <img className={styles.fotoSobreMim}
                src={fotoSobreMim}
                alt="Foto da Renara" 
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou estudante de engenharia de software e estou feliz de te ver por aqui.
            </p>           
            <p className={styles.paragrafo}> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor repellendus incididunt voluptate tempor anim. Doloribus dolore dolorum, accusamus enim quas hic velit eligendi quas. Sed eiusmod aliquip reprehenderit asperiores cupidatat dolore, similique esse reprehenderit blanditiis perferendis sint ex. Sunt excepteur dolores facilis cum voluptate.
            </p>
            <p className={styles.paragrafo}>
                Tenetur molestias repellendus laboris officiis libero, consectetur est, occaecati provident et ipsum. Fugiat voluptas incididunt magna et. At proident alias hic tempor voluptate debitis nostrud quis soluta consectetur voluptatum. Recusandae do optio itaque praesentium labore itaque labore, elit est exercitation quas eos. Fuga earum est voluptate sed velit.
            </p>
            <p className={styles.paragrafo}>
                Com isso tive minha experiência de dev mais próxima da realidade, com prazos de implementação para o site, e aprendi muito enquanto codificava.
            </p>                   
            <p className={styles.paragrafo}>
                Magna nobis omnis, sed ut corrupti deserunt voluptas ad mollitia. Quibusdam quos tempor in ducimus. Velit omnis repellat, animi excepteur nisi corrupti voluptate id dolor. Ea minus quidem eos ad asperiores cumque nisi blanditiis. Lorem vero sit, iusto quidem saepe deleniti dignissimos temporibus placeat mollit ducimus ea.
            </p>
            <p className={styles.paragrafo}>
                Tenetur molestias repellendus laboris officiis libero, consectetur est, occaecati provident et ipsum. Fugiat voluptas incididunt magna et. At proident alias hic tempor voluptate debitis nostrud quis soluta consectetur voluptatum. Recusandae do optio itaque praesentium labore itaque labore, elit est exercitation quas eos. Fuga earum est voluptate sed velit.
            </p>
                
        </PostModelo>
    )
}