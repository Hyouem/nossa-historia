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

      <section id="inicio" className="beginning">
        <div className="beginning__rail">
          <span>01</span>
          <div />
          <small>13.11.24</small>
        </div>

        <div className="beginning__story">
          <p className="section-label">O começo</p>

          <h2>
            Tudo por causa
            <span>de um café.</span>
          </h2>

          <div className="beginning__text">
            <p>
              A gente se conheceu na internet. Eu mandei algumas cantadas
              de Harry Potter e, de algum jeito, isso funcionou.
            </p>

            <p>
              Então veio o café. Você me contou que gostava de um anime
              chamado <strong>K</strong>. E, por algum acaso absurdo,
              eu também gostava.
            </p>

            <p>
              A gente conversou a noite toda. Você ganhou um beijinho na
              testa e ainda fechamos a Andradas.
            </p>
          </div>
        </div>

        <aside className="beginning__memory">
          <span>na minha cabeça naquela noite:</span>

          <blockquote>
            Daquela noite em diante eu soube que não queria mais ninguém.
          </blockquote>

          <div className="beginning__heart">♥</div>
        </aside>
      </section>
    </main>
  )
}

export default App
