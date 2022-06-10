import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from "react"
import { OPEN_MODAL_ACTION } from "../../context/actions"
import { NomeContext } from "../../context/store"

export default function HeaderSection({collections}){
	const router = useRouter()
	const { collection } = router.query
	const [state, dispatch] = useContext(NomeContext)
	const { cart } = state

	const urls = ['mens','womens','trending']

    return(
        <header className='header'>
			<Link href="/">
				<a className='header__logo'>
					∏ <h1>Nomen Nescio</h1>
				</a>
			</Link>

			<nav className='main-menu'>
				<ul className='main-menu__list'>
					{
						urls.map( url =>
							<li className='main-menu__item' key={url}>
								<Link href={`/${url}`}>
									<a className={collection == `${url}` ? "main-menu__link main-menu__link--active" : "main-menu__link"}>{url}</a>
								</Link>
							</li>	
						)
					}
					
				</ul>
			</nav>

			<nav className='settings-menu'>
				<ul className='settings-menu__list'>
					<li className='settings-menu__link'>
						<a className='settings-menu__link'>search</a>
					</li>
					<li className='settings-menu__link'>
						<a className='settings-menu__link' onClick={()=>dispatch(OPEN_MODAL_ACTION())}>basket</a>
						<span className={`settings-menu__counter ${cart.length > 0 ? 'is-cart-active' : ''}`}>({cart.length})</span>
					</li>
				</ul>
			</nav>
        </header>
    )
}