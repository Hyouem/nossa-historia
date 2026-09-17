import { useRef, useState } from 'react'
import './App.css'

function App() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const formatTime = (seconds: number) => {
    if (!Number.isFinite(seconds)) return '0:00'

    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)

    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  const toggleIris = async () => {
    const audio = audioRef.current

    if (!audio) return

    if (audio.paused) {
      try {
        await audio.play()
      } catch (error) {
        console.error('Não foi possível reproduzir Iris.', error)
      }
    } else {
      audio.pause()
    }
  }

  const seekIris = (event: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current

    if (!audio || !duration) return

    const rect = event.currentTarget.getBoundingClientRect()
    const position = Math.min(
      Math.max((event.clientX - rect.left) / rect.width, 0),
      1,
    )

    audio.currentTime = position * duration
    setCurrentTime(audio.currentTime)
  }

  const restartIris = () => {
    const audio = audioRef.current

    if (!audio) return

    audio.currentTime = 0
    setCurrentTime(0)
  }

  const finishIris = () => {
    const audio = audioRef.current

    if (!audio) return

    audio.currentTime = audio.duration
    setCurrentTime(audio.duration)
    setIsPlaying(false)
  }
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

      <section className="together">
        <header className="together__intro">
          <div className="together__chapter">
            <span>capítulo</span>
            <strong>02</strong>
          </div>

          <p className="section-label">21 de fevereiro de 2025</p>

          <h2>
            E então
            <span>virou nós.</span>
          </h2>

          <div className="together__intro-text">
            <p>
              Até ali, a gente estava se conhecendo.
            </p>

            <p>
              A partir daqui, deixou de ser só você e eu.
              Tinha começado o nosso <strong>nós.</strong>
            </p>
          </div>
        </header>

        <div className="together__opening">
          <figure className="memory memory--opening">
            <img
              src="/images/02-nos/01-nos.jpg"
              alt="Maurício e Brenda juntos olhando a cidade"
            />

            <figcaption>
              <span>21.02.2025</span>
              <strong>oficialmente nós.</strong>
            </figcaption>
          </figure>

          <div className="together__opening-note">
            <span>e pensar que tudo começou</span>
            <strong>com um café...</strong>
            <i>♥</i>
          </div>
        </div>

        <div className="together__manifesto">
          <span>daí pra frente</span>

          <p>
            A vida começou a ganhar
            <em>um monte de versões nossas.</em>
          </p>
        </div>

        <div className="memories">
          <div className="memories__celebration">
            <figure className="memory memory--celebration">
              <img
                src="/images/02-nos/02-celebracao.jpg"
                alt="Maurício e Brenda comemorando juntos"
              />

              <figcaption>
                <span>comemorar</span>
                <strong>lado a lado.</strong>
              </figcaption>
            </figure>

            <p className="memories__scribble memories__scribble--celebration">
              qualquer motivo fica melhor com você ↗
            </p>
          </div>

          <div className="memories__quiet">
            <figure className="memory memory--quiet">
              <img
                src="/images/02-nos/03-casa.jpg"
                alt="Brenda descansando em um momento tranquilo"
              />
            </figure>

            <div className="memories__quiet-copy">
              <span>também teve isso</span>

              <p>
                Os momentos que não precisavam ser grandes
                para virarem memória.
              </p>
            </div>
          </div>

          <div className="memories__pair">
            <figure className="memory memory--pair-one">
              <img
                src="/images/02-nos/04-juntos.jpg"
                alt="Maurício e Brenda sentados juntos"
              />
            </figure>

            <figure className="memory memory--pair-two">
              <img
                src="/images/02-nos/05-juntos.jpg"
                alt="Maurício e Brenda em mais um momento juntos"
              />
            </figure>

            <span className="memories__pair-caption">
              a gente sendo a gente.
            </span>
          </div>

          <div className="memories__kiss">
            <div className="memories__kiss-copy">
              <span>e eu descobri uma coisa</span>

              <blockquote>
                Eu gosto muito
                <em>da vida do teu lado.</em>
              </blockquote>
            </div>

            <figure className="memory memory--kiss">
              <img
                src="/images/02-nos/06-beijinho.jpg"
                alt="Maurício dando um beijo em Brenda"
              />

              <figcaption>
                <span>e disso aqui também</span>
                <strong>óbvio.</strong>
              </figcaption>
            </figure>
          </div>

          <div className="memories__adventure">
            <figure className="memory memory--adventure">
              <img
                src="/images/02-nos/07-aventura.jpg"
                alt="Maurício e Brenda juntos em uma aventura"
              />
            </figure>

            <div className="memories__adventure-copy">
              <span>lugares novos.</span>
              <span>histórias novas.</span>
              <strong>a mesma pessoa.</strong>
            </div>
          </div>

          <div className="memories__road">
            <figure className="memory memory--road">
              <img
                src="/images/02-nos/08-estrada.jpg"
                alt="Maurício e Brenda juntos durante uma viagem"
              />
            </figure>

            <div className="memories__road-copy">
              <span>no caminho,</span>

              <p>
                em casa, na rua,
                viajando ou sem fazer absolutamente nada.
              </p>

              <strong>eu só queria continuar indo com você.</strong>
            </div>
          </div>
        </div>

        <footer className="together__ending">
          <span>e isso era só o começo.</span>

          <div className="together__ending-line" />

          <strong>↓</strong>
        </footer>
      </section>

      <section className="life">
        <div className="life__noise" />

        <header className="life__intro">
          <div className="life__chapter">
            <span>capítulo</span>
            <strong>03</strong>
          </div>

          <p className="section-label">depois que virou nós</p>

          <h2>
            A vida
            <span>acontecendo.</span>
          </h2>

          <div className="life__intro-copy">
            <p>
              E aí veio a melhor parte:
              não precisava acontecer nada extraordinário.
            </p>

            <strong>
              Bastava acontecer com você.
            </strong>
          </div>
        </header>

        <div className="life__collage">
          <figure className="life-photo life-photo--tradition">
            <img
              src="/images/03-vida-juntos/01-tradicao.jpg"
              alt="Maurício e Brenda em trajes tradicionais gaúchos"
            />

            <figcaption>
              <span>até nisso</span>
              <strong>a gente combina.</strong>
            </figcaption>
          </figure>

          <div className="life__tradition-copy">
            <span>um pouco daqui.</span>
            <span>um pouco dali.</span>
            <strong>um monte de nós.</strong>
          </div>

          <figure className="life-photo life-photo--night">
            <img
              src="/images/03-vida-juntos/02-noite.jpg"
              alt="Maurício e Brenda juntos durante a noite"
            />
          </figure>

          <figure className="life-photo life-photo--role">
            <img
              src="/images/03-vida-juntos/03-role.jpg"
              alt="Maurício e Brenda juntos em um rolê"
            />

            <figcaption>
              <span>saindo por aí</span>
              <strong>♥</strong>
            </figcaption>
          </figure>

          <p className="life__scribble life__scribble--night">
            aparentemente a gente gosta de sair de casa ↗
          </p>
        </div>

        <section className="life__gym">
          <div className="life__gym-title">
            <span>inclusive...</span>

            <h3>
              Até sofrer
              <em>junto.</em>
            </h3>

            <p>
              Porque em algum momento a gente decidiu
              que academia também era programa de casal.
            </p>
          </div>

          <div className="life__gym-photos">
            <figure className="life-photo life-photo--gym-one">
              <img
                src="/images/03-vida-juntos/04-treino.jpg"
                alt="Maurício e Brenda juntos na academia"
              />
            </figure>

            <figure className="life-photo life-photo--gym-two">
              <img
                src="/images/03-vida-juntos/10-treino-juntos.jpg"
                alt="Maurício e Brenda depois de mais um treino juntos"
              />
            </figure>

            <span className="life__gym-note">
              casal que treina junto...
              <small>reclama junto também.</small>
            </span>
          </div>
        </section>

        <section className="life__slow">
          <figure className="life-photo life-photo--grass">
            <img
              src="/images/03-vida-juntos/05-grama.jpg"
              alt="Maurício e Brenda descansando juntos na grama"
            />
          </figure>

          <div className="life__slow-copy">
            <span>mas calma.</span>

            <h3>
              A gente também
              <em>não fazia nada.</em>
            </h3>

            <p>
              E, estranhamente, esses momentos também
              acabavam virando alguns dos meus favoritos.
            </p>
          </div>
        </section>

        <section className="life__home">
          <header>
            <span>entre uma coisa e outra</span>

            <h3>
              Foi ficando
              <em>com cara de casa.</em>
            </h3>
          </header>

          <div className="life__home-cards">
            <figure className="life-photo life-photo--home">
              <img
                src="/images/03-vida-juntos/07-casa.jpg"
                alt="Maurício e Brenda em um momento tranquilo juntos"
              />

              <figcaption>
                <span>nós</span>
                <strong>+ companhia.</strong>
              </figcaption>
            </figure>

            <figure className="life-photo life-photo--pause">
              <img
                src="/images/03-vida-juntos/08-pausa.jpg"
                alt="Um momento de pausa na vida de Maurício e Brenda"
              />
            </figure>

            <figure className="life-photo life-photo--family">
              <img
                src="/images/03-vida-juntos/09-familia.jpg"
                alt="Maurício, Brenda e o cachorro juntos"
              />

              <figcaption>
                <span>olha a família aí</span>
                <strong>♥</strong>
              </figcaption>
            </figure>
          </div>

          <p className="life__home-note">
            eu gosto dessa nossa bagunça.
          </p>
        </section>

        <section className="fireworks">
          <div className="fireworks__prelude">
            <span>pera aí...</span>

            <p>
              Lembra que lá no começo eu disse que
              nossa história não começou com fogos?
            </p>
          </div>

          <figure className="fireworks__photo">
            <img
              src="/images/03-vida-juntos/06-fogos.jpg"
              alt="Maurício e Brenda se beijando enquanto fogos iluminam o céu"
            />

            <div className="fireworks__shade" />

            <figcaption>
              <span>tá.</span>

              <strong>
                Talvez tenha tido
                <em>alguns fogos.</em>
              </strong>
            </figcaption>
          </figure>

          <div className="fireworks__after">
            <span>a história não começou com eles.</span>
            <strong>mas eles apareceram no caminho.</strong>
            <i>♥</i>
          </div>
        </section>

        <footer className="life__ending">
          <span>e ainda tinha tanta coisa pra viver...</span>

          <div />

          <strong>↓</strong>
        </footer>
      </section>

      <section className="soundtrack">
        <div className="soundtrack__lights" />

        <header className="soundtrack__header">
          <div className="soundtrack__number">
            <span>capítulo</span>
            <strong>04</strong>
          </div>

          <p className="soundtrack__eyebrow">nossa trilha sonora</p>

          <h2>
            Entre acordes
            <span>e nós.</span>
          </h2>

          <div className="soundtrack__opening">
            <p>
              Tem dias que tudo que a gente precisa
              é de uma boa música, um lugar cheio de gente
              e a sorte de estar do teu lado.
            </p>

            <strong>
              No fim, algumas músicas acabam guardando
              pedaços inteiros da nossa história.
            </strong>
          </div>
        </header>

        <div className="soundtrack__gallery">
          <figure className="concert-photo concert-photo--us">
            <div className="concert-photo__image">
              <img
                src="/images/04-musica/01-nos-no-show.jpg"
                alt="Maurício e Brenda juntos no meio de um show"
              />
            </div>

            <figcaption>
              <span>você + eu</span>
              <strong>+ boa música ♥</strong>
            </figcaption>
          </figure>

          <figure className="concert-photo concert-photo--stage">
            <div className="concert-photo__image">
              <img
                src="/images/04-musica/02-palco.jpg"
                alt="Um dos shows que fizeram parte da história de Maurício e Brenda"
              />
            </div>

            <figcaption>
              <span>alguns momentos</span>
              <strong>ficam pra sempre.</strong>
            </figcaption>
          </figure>

          <figure className="concert-photo concert-photo--night">
            <div className="concert-photo__image">
              <img
                src="/images/04-musica/03-mais-uma-noite.jpg"
                alt="Maurício e Brenda juntos em mais uma noite de música"
              />
            </div>

            <figcaption>
              <span>mais disso,</span>
              <strong>por favor. ♥</strong>
            </figcaption>
          </figure>

          <p className="soundtrack__scribble">
            bons shows.<br />
            melhores companhias.
          </p>
        </div>

        <section className="our-song">
          <div className="our-song__intro">
            <span>mas no meio de todas as músicas...</span>
          </div>

          <div className="our-song__title">
            <p>tem uma que sempre volta pra gente.</p>

            <h3>IRIS</h3>

            <span>GOO GOO DOLLS</span>
          </div>

          <div
            className={`music-player ${
              isPlaying ? 'music-player--playing' : ''
            }`}
          >
            <audio
              ref={audioRef}
              src="/media/iris/iris.mp3"
              preload="metadata"
              onLoadedMetadata={(event) => {
                setDuration(event.currentTarget.duration)
              }}
              onDurationChange={(event) => {
                setDuration(event.currentTarget.duration)
              }}
              onTimeUpdate={(event) => {
                setCurrentTime(event.currentTarget.currentTime)
              }}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={finishIris}
            />

            <div className="music-player__cover">
              <img
                src="/media/iris/cover.jpg"
                alt="Capa de Iris, Goo Goo Dolls"
              />

              <div className="music-player__cover-glow" />
            </div>

            <div className="music-player__body">
              <div className="music-player__meta">
                <div>
                  <strong>Iris</strong>
                  <span>Goo Goo Dolls</span>
                </div>

                <span
                  className="music-player__brand"
                  aria-hidden="true"
                >
                  ♫
                </span>
              </div>

              <div
                className="music-player__progress"
                role="slider"
                tabIndex={0}
                aria-label="Progresso de Iris"
                aria-valuemin={0}
                aria-valuemax={Math.round(duration || 0)}
                aria-valuenow={Math.round(currentTime)}
                onClick={seekIris}
                onKeyDown={(event) => {
                  const audio = audioRef.current

                  if (!audio) return

                  if (event.key === 'ArrowRight') {
                    audio.currentTime = Math.min(
                      audio.currentTime + 5,
                      duration,
                    )
                  }

                  if (event.key === 'ArrowLeft') {
                    audio.currentTime = Math.max(
                      audio.currentTime - 5,
                      0,
                    )
                  }
                }}
              >
                <div
                  className="music-player__progress-fill"
                  style={{
                    width: duration
                      ? `${(currentTime / duration) * 100}%`
                      : '0%',
                  }}
                />

                <span
                  className="music-player__progress-dot"
                  style={{
                    left: duration
                      ? `${(currentTime / duration) * 100}%`
                      : '0%',
                  }}
                />
              </div>

              <div className="music-player__times">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>

              <div className="music-player__controls">
                <button
                  className="music-player__secondary"
                  type="button"
                  aria-label="Voltar ao início"
                  onClick={restartIris}
                >
                  ‹
                </button>

                <button
                  className="music-player__play"
                  type="button"
                  aria-label={
                    isPlaying
                      ? 'Pausar Iris'
                      : 'Tocar Iris'
                  }
                  onClick={toggleIris}
                >
                  {isPlaying ? 'Ⅱ' : '▶'}
                </button>

                <button
                  className="music-player__secondary"
                  type="button"
                  aria-label="Avançar cinco segundos"
                  onClick={() => {
                    const audio = audioRef.current

                    if (!audio) return

                    audio.currentTime = Math.min(
                      audio.currentTime + 5,
                      duration,
                    )
                  }}
                >
                  ›
                </button>
              </div>

              <small>
                nossa música ♥
              </small>
            </div>
          </div>
          <div className="our-song__note">
            <span>não é só uma música.</span>

            <strong>
              É uma daquelas coisas que,
              de algum jeito, virou nossa.
            </strong>

            <i>♥</i>
          </div>
        </section>

        <footer className="soundtrack__ending">
          <span>as músicas também contam a nossa história.</span>
          <strong>e essa ainda está tocando.</strong>
          <div />
          <b>↓</b>
        </footer>
      </section>
    </main>
  )
}

export default App
