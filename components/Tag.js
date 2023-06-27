import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <div className="mr-3 mt-2 rounded-md bg-primary-500 bg-opacity-50 px-2 duration-200 ease-in hover:scale-105">
      <Link
        className="text-xs font-semibold uppercase text-primary-900 dark:text-primary-100"
        href={`/tags/${kebabCase(text)}`}
      >
        {text.split(' ').join('-')}
      </Link>
    </div>
  )
}

export default Tag
