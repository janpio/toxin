import Image from 'next/image';
import '../styles/style.scss';
import Link from 'next/link';
import { HeaderNav, HeaderButtons } from './ui/';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__content'>
        <Link href='/'>
          <Image
            src='/header-logo.svg'
            alt='logo'
            width={105}
            height={40}
          />
        </Link>
        <HeaderNav />
        <HeaderButtons />
      </div>
    </header>
  );
};

export { Header };