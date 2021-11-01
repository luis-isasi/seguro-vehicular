import Image from 'next/image'

import logoRimac from '/public/img/logo-rimac.svg'
import PhoneIcon from '@mui/icons-material/Phone'

const Header = () => {
  return (
    <header className="w-full h-16 px-5 flex justify-between items-center border-b-1 border-gray-300">
      <figure className="">
        <Image src={logoRimac} alt="logo-rimac" width={120} height={40} />
      </figure>
      <div>
        <a className="text-gray-700 text-xs mr-5 cursor-pointer">
          ¿Tienes alguna duda?
        </a>
        <a className="text-[#6F7DFF] cursor-pointer text-xs">
          <PhoneIcon
            className="fill-current mr-1"
            style={{ fontSize: '24px' }}
          />
          <span>(01) 411 6001</span>
        </a>
      </div>
    </header>
  )
}

export default Header
