import { useContext } from "react"
import { useRouter } from 'next/router'
import { OPEN_MODAL_ACTION, ADD_ITEM_ACTION } from '../../../context/actions'
import { NomeContext } from "../../../context/store"
import { products } from "../../../data/products"

export default function ProductCardComponent({products}){
    const router = useRouter()
    const { collection, productID } = router.query
    const item = products[collection].find( p => p.slug === productID )

    const [, dispatch] = useContext(NomeContext)

    const addItem = (id, name, price, image) =>{
        dispatch(OPEN_MODAL_ACTION())
        dispatch(ADD_ITEM_ACTION({
            item: {
                id,
                name,
                price,
                quantity: 1,
                image
            }
        }))
    }
 
    return(
        <section className='review'>
            <div className='review__item' >
                <div className='review__bg' style={{backgroundImage: `url(${item.image})`}}>
                    <div className='review__filter' >
                        <img className='review__img' src={item.image}/>
                    </div>
                </div>    

                <div className='review__info'>
                    <div className='review__info-wrapper'>
                        <h3 className='review__info-name'>{item.name}</h3>
                        <span className='review__info-price'>{item.price}</span>
                        <p className='review__info-description'>{item.description}</p>
                        <button className='review__info-button' onClick={()=>addItem(item.id, item.name, item.price, item.image)}>Add to basket</button>
                        <a className='review__info-back' onClick={() =>router.back()}>back</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export async function getStaticProps({params}){
    // const req = await fetch(`http://localhost:3000/api/products`)
    // const products = await req.json()
    return {
        props: { products },
        revalidate: 86400
    }
}

export async function getStaticPaths(){
    // const req = await fetch(`http://localhost:3000/api/products`)
    // const products = await req.json()
    const paths = Object.keys(products).map( pro => (
        products[pro].map( p => {
            return {
                params: {
                    collection: pro,
                    productID: p.slug
                }
            }
        })
    )).flat()

	return {
		paths,
		fallback: false
	}
}



