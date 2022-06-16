import Link from 'next/link'

export const LogoElement = () => {
    return (
        <Link href="/">
            <a className='header__logo'>
                ∏ <h1>Nomen Nescio</h1>
            </a>
        </Link>
    )
}
