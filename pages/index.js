import HeroSection from '../components/01-sections/HeroSections'
import CollectionSection from '../components/01-sections/CollectionSection'
import FooterSection from '../components/01-sections/FooterSection'
import { collections } from '../data/collections'

export default function HomePage({collections}) {
	return (
		<>	
			<HeroSection />
			<CollectionSection collections={collections}/>
			<FooterSection />
		</>
	)
}

export async function getStaticProps(){
    const req = await fetch('http://localhost:3000/api/collections')
    const collections = await req.json()

    return {
        props: { collections }
    }
}