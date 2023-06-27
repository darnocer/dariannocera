import Image from 'next/image'

const imageSelector = (category, title) => {
  let imagePath = ''

  switch (category) {
    case 'obsidian':
      imagePath = '/../public/static/images/snippets/obsidian.png'
      break
    case 'css':
      imagePath = '/../public/static/images/snippets/css.png'
      break
    case 'html':
      imagePath = '/../public/static/images/snippets/html.png'
      break
    default:
      imagePath = '/../public/static/images/snippets/default.png'
      break
  }

  console.log('image:' + imagePath)

  return <Image src={imagePath} alt={title} width="50" height="50" />
}

export default imageSelector
