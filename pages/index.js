import Head from "next/head"
import styles from "../styles/Home.module.scss"
import { useState, useEffect } from "react"

export default function Home({ data }) {
  const [inputValue, setInputValue] = useState("")
  const [imgUrl, setImgUrl] = useState("")

  function handleChange(event) {
    setInputValue(event.target.value)
  }

  function redirect() {
    document.location.href = imgUrl
  }

  useEffect(() => {
    const preUrl = inputValue.substr(0, inputValue.lastIndexOf("/") + 1)
    setImgUrl(preUrl + "media/?size=l")
  }, [inputValue])

  return (
    <div className={styles.container}>
      <Head>
        <title>Alastory</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1>Alastory</h1>
          <span className={styles.slogan}>Volvé a compartir ✈</span>
        </header>
        <section className={styles.intro}>
          <p>
            <ol>
              <li>Pegá el link del post</li>
              <li>Presioná "Alastory"</li>
              <li>
                Elegí abrir con Chrome, o el navegador que uses.
                <br />
                <img src="/images/paso_chrome.png" />
              </li>
              <li>Mantené presionada la imagen.</li>
              <li>
                Elegí "Compartir imagen" y luego "Stories".
                <br />
                <img src="/images/paso_compartir.png" />
                <br />
                <img src="/images/paso_stories.png" />
              </li>
              <li>Etiquetá a la cuenta.</li>
            </ol>
            <iframe src={imgUrl} />
            <img src={imgUrl} />
          </p>
        </section>

        <section className={styles.bar}>
          <div>
            <input
              placeholder="Link del post de Instagram"
              type="text"
              value={inputValue}
              onChange={handleChange}
            />
            <a
              onClick={() => redirect()}
              className={!inputValue && styles.disabled}
            >
              Alastory
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://www.instagram.com/p/CLE0R9ELjao/media/?size=l`
  )
  const data = await res.text()
  return {
    props: { data }, // will be passed to the page component as props
  }
}
