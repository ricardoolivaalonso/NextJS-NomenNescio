import Head from 'next/head'
import { useRouter } from 'next/router'
import FooterSection from '../../components/01-sections/FooterSection'
import ProductSection from '../../components/01-sections/ProductSection'
import { products } from '../../data/products'

export default function ProductsPage({products}) {
    const router = useRouter()
    const { collection } = router.query
    
    return(
        <>
            <Head>
				<title>Nomennescio - {collection.toUpperCase()}</title>
			</Head>
            <ProductSection products={products} collection={collection}/>
            <FooterSection />
        </>
    )
}

export async function getStaticProps(){
    // const req = await fetch('http://localhost:3000/api/products')
    // const products = await req.json()
    
    return {
        props: { products }
    }
}

export async function getStaticPaths(){
    // const req = await fetch('http://localhost:3000/api/products')
    // const data = await req.json()
    const data = products

    const paths = Object.keys(data).map( p => {
        return {
            params: { collection: `${p}` } 
        }
    })

	return {
		paths: paths,
		fallback: false
	}
}