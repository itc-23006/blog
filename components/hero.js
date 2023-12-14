const Hero = ({ title, subtitle, image0n = false }) => {
  return (
    <div>
      <h1>title</h1>
      <p>subtitle</p>
      {image0n && <figure> [画像] </figure>}
    </div>
  )
}
export default Hero
