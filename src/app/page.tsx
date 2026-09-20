export default function Home() {
    return (
        <main>
            <h1>Elias Teikari</h1>
            {/* Native HTML keeps the photo free of framework-injected styles. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/elias-teikari.png"
                alt="Elias Teikari smiling and holding up a peace sign"
                width="300"
                height="201"
            />
            <p>
                Hello hello! I&apos;m an Estonian 20 year old hustler and nice
                guy.
            </p>

            <h2>TLDR</h2>
            <ul>
                <li>Produced a song for Škoda at 16 years old</li>
                <li>OpenAI featured my hackathon project in an article</li>
                <li>
                    Made an SVG benchmark for AI models, collected 2.8 million
                    human opinions
                </li>
                <li>People find me useful for my taste.</li>
            </ul>

            <h2>It all started with Music</h2>
            <ul>
                <li>
                    Produced music for big clients, like Škoda at 16 years old
                </li>
                <li>
                    I signed to a record label (
                    <a href="https://www.faarmusic.com/people/elias-teikari/">
                        FAAR Music
                    </a>
                    ) at 17 years old, proof of my immaculate taste.
                </li>
                <li>
                    Produced and written with songwriters, who have made hits
                    for Beyoncé, Ariana Grande and Justin Bieber.
                </li>
                <li>
                    Flown around the world to participate in 12 international
                    songwriting/producing camps in South Korea, Norway,
                    Lithuania, Sweden and Estonia.
                </li>
            </ul>

            <h2>Cool first company I built in 11th grade</h2>
            <ul>
                <li>
                    Best Student Company in Estonia 2024 &ldquo;
                    <a href="https://pof.ja.ee/pof2024tulemused">Nullivann</a>
                    &rdquo;
                </li>
                <li>
                    Represented Estonia in the Best Student Company in Europe
                    competition{" "}
                    <a href="https://2024.gen-e.eu/">Gen-E 2024</a>
                </li>
                <li>
                    Programmed a website for my student company that went on to
                    win the E-Commerce Union&apos;s &ldquo;Best Website
                    Award&rdquo; (1000 EUR prize)
                </li>
            </ul>

            <h2>
                Cooler second company I built in my first semester (spoiler: it
                failed ;( )
            </h2>
            <ul>
                <li>
                    AI music tool for music producers, first AI-first workflow
                    to produce music in a DAW
                </li>
                <li>
                    Pitched weekly to unicorn founders and audiences at monthly
                    events
                </li>
                <li>
                    Participated in Estonia&apos;s biggest startup launchpad{" "}
                    <a href="https://www.ruumtallinn.com/">ruum</a>
                </li>
            </ul>

            <h2>Floating around phase, second semester (hackathon era)</h2>
            <ul>
                <li>
                    Got selected in to{" "}
                    <a href="https://nullfellows.com">nullfellows.com</a>{" "}
                    (&lt;1% acceptance rate)
                </li>
                <li>
                    Won the NullHack Hackathon, powered by Anthropic and
                    Lovable. Got flown out to San Francisco as the prize
                </li>
                <li>
                    Won the President&apos;s EdTech Hackathon (6000€ prize), the
                    project is still operating as a non-profit with a team of 10
                    people.
                </li>
                <li>
                    OpenAI featured the project in{" "}
                    <a href="https://edunewsletter.openai.com/p/the-future-starts-in-this-room">
                        their article
                    </a>
                </li>
                <li>
                    OpenAI has kept in close contact helping us in giving
                    teachers back their time
                </li>
            </ul>

            <h2>Coolest company Rapidata.ai</h2>
            <ul>
                <li>
                    The best access to human annotations for frontier AI model
                    providers
                </li>
                <li>
                    Helping <a href="https://www.benchmark.ai/">benchmark.ai</a>{" "}
                    to become the main benchmark
                </li>
                <li>
                    Collected over 2,800,000 human opinions on SVGs (
                    <a href="https://huggingface.co/datasets/Rapidata/svg-benchmark">
                        Hugging Face dataset
                    </a>
                    ), my Hugging Face dataset has over 12,000 downloads
                </li>
            </ul>

            <h2>Contact</h2>
            <ul>
                <li>
                    <a>elias[dot]tkri[at]gmail[dot]com</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/eliasteikari">
                        LinkedIn
                    </a>
                </li>
            </ul>
        </main>
    );
}
