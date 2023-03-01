import './buttons.css';

const Buttons = () => {

  const listRedes = [
    { id: 1, urlName: 'Instagram', url: 'https://www.instagram.com/stonxdyxs/' },
    { id: 2, urlName: 'AnimeTV', url: 'https://www.animetv.com.br/' }
  ]

  const linksRedes = listRedes.map((props) =>
    <div key={props.id} className='content-links'>
      <a href={props.url}>{props.urlName}</a>
    </div>
  )
  return (
    <>
      {linksRedes}
    </>
  )
}

export default Buttons;