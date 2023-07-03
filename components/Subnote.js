import { useEffect, useState } from 'react'

// Custom Hook to detect whether the user is using a mobile device
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  return isMobile
}

const Subnote = ({ text }) => {
  const [show, setShow] = useState(false)
  const isMobile = useIsMobile()

  const handleInteraction = () => setShow(!show)

  return (
    <span
      className="group relative mt-1 inline-block cursor-pointer align-top font-sans"
      onClick={isMobile ? handleInteraction : undefined}
      onMouseEnter={isMobile ? undefined : () => setShow(true)}
      onMouseLeave={isMobile ? undefined : () => setShow(false)}
    >
      <svg width="7" height="7" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12.5" cy="12.5" r="10.5" fill="#ECAC45" />
      </svg>
      {show && (
        <span className="absolute bottom-2 right-0 flex flex-col items-center">
          <span className="non-italic relative z-10 min-w-[8rem] whitespace-normal rounded-md bg-black p-2 text-xs leading-none text-white dark:bg-white dark:text-black">
            {text}
          </span>
        </span>
      )}
    </span>
  )
}

export default Subnote

// const Subnote = ({ text }) => {
//   const [show, setShow] = useState(false)
//   useEffect(() => {
//     setShow(true)
//   }, [])

//   return (
//     <span
//       className="group relative mt-1 inline-block cursor-pointer align-top font-sans"
//       onMouseEnter={() => setShow(true)}
//       onMouseLeave={() => setShow(false)}
//     >
//       <svg width="7" height="7" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <circle cx="12.5" cy="12.5" r="10.5" fill="#ECAC45" />
//       </svg>
//       <span className="absolute bottom-2 right-0 flex hidden flex-col items-center group-hover:flex">
//         <span className="non-italic relative z-10 min-w-[8rem] whitespace-normal rounded-md bg-black p-2 text-xs leading-none text-white dark:bg-white dark:text-black">
//           {text}
//         </span>
//         {/* <span className="-mt-2 h-3 w-3 rotate-45 bg-black dark:bg-white"></span> */}
//       </span>
//     </span>
//   )
// }
// export default Subnote
