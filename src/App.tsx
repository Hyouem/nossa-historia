import './App.css'

function App() {
  const startStory = () => {
    document
      .getElementById('inicio')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>
      <section className="hero">
        <div className="hero__glow hero__glow--one" />
        <div className="hero__glow hero__glow--two" />

        <div className="hero__date">
          <span>Desde</span>
          <strong>13.11.2024</strong>
        </div>

        <div className="hero__layout">
          <div className="hero__copy">
            <p className="hero__eyebrow">Maurício + Brenda</p>

            <h1>
              Nossa história
              <span>não começou</span>
              com fogos.
            </h1>

            <p className="hero__punchline">
              Mas olha a gente agora.
              <span>♥</span>
            </p>

            <div className="hero__details">
              <span>uma cantada de Harry Potter</span>
              <i />
              <span>um café</span>
              <i />
              <span>um anime chamado K</span>
            </div>

            <button onClick={startStory} className="hero__button">
              <span>Começa aqui</span>
              <span className="hero__arrow">↓</span>
            </button>
          </div>

          <div className="hero__photo-area">
            <div className="hero__scribble hero__scribble--top">
              olha esses dois...
            </div>

            <figure className="hero__photo">
              <img
                src="/images/hero.jpg"
                alt="Maurício e Brenda se beijando sob os fogos"
              />

              <figcaption>
                <span>um de muitos</span>
                <strong>momentos nossos.</strong>
              </figcaption>
            </figure>

            <div className="hero__photo-number">01</div>

            <div className="hero__scribble hero__scribble--bottom">
              ainda bem que eu mandei aquela cantada ↗
            </div>
          </div>
        </div>

        <div className="hero__scroll">
          <span>rola pra baixo</span>
          <div />
        </div>
      </section>

      <section id="inicio" className="beginning chapter-one">
        <div className="chapter-one__chapter">
          <span>capítulo</span>
          <strong>01</strong>
        </div>

        <header className="chapter-one__heading">
          <p className="section-label">13 de novembro de 2024</p>

          <h2>
            A noite em que
            <span>tudo começou.</span>
          </h2>

          <p className="chapter-one__lead">
            Naquela noite a gente ainda não fazia ideia do tamanho
            que aquilo ia tomar.
          </p>
        </header>

        <div className="night">
          <div className="night__line" />

          <article className="night__moment night__moment--left">
            <span className="night__number">01</span>

            <div>
              <small>antes do café</small>
              <h3>Harry Potter.</h3>

              <p>
                A gente se conheceu pela internet. E eu, aparentemente
                cheio de confiança, resolvi começar com algumas cantadas
                de Harry Potter.
              </p>
            </div>

            <span className="night__note">
              e não é que funcionou? ↗
            </span>
          </article>

          <article className="night__moment night__moment--right">
            <span className="night__number">02</span>

            <div>
              <small>depois</small>
              <h3>Um café.</h3>

              <p>
                O que era para ser só um primeiro encontro virou uma
                conversa que simplesmente não queria acabar.
              </p>
            </div>
          </article>

          <article className="night__moment night__moment--left">
            <span className="night__number">03</span>

            <div>
              <small>em algum momento da conversa</small>
              <h3>“Tu conhece K?”</h3>

              <p>
                Você me contou que gostava de um anime chamado
                <strong> K</strong>.
              </p>

              <p>
                De todos os animes do mundo, por algum acaso absurdo,
                eu também conhecia.
              </p>
            </div>

            <span className="night__note night__note--k">
              qual era a chance disso?
            </span>
          </article>

          <article className="night__moment night__moment--right">
            <span className="night__number">04</span>

            <div>
              <small>quando já era tarde</small>
              <h3>Fechamos a Andradas.</h3>

              <p>
                A conversa foi longe. Muito longe. E antes daquela
                noite terminar, você ainda ganhou um beijinho na testa.
              </p>
            </div>

            <span className="night__heart">♥</span>
          </article>
        </div>

        <section className="certainty">
          <p>e foi aí que eu percebi</p>

          <blockquote>
            Daquela noite em diante eu soube que
            <em>não queria mais ninguém.</em>
          </blockquote>

          <div className="certainty__date">
            <span>13</span>

            <div>
              <strong>novembro</strong>
              <small>2024</small>
            </div>
          </div>
        </section>

        <footer className="next-chapter">
          <span>mas ainda faltava uma coisa...</span>
          <strong>21.02.2025</strong>
          <small>↓</small>
        </footer>
      </section>
    </main>
  )
}

export default App
