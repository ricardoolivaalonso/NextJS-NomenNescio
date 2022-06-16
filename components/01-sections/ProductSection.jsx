import { ProductCardComponent } from "../02-components/ProductCardComponent"
import { TitlElement } from "../03-elements/TitleElement"

export const ProductSection  = ({products, collection}) => {
    return(
        <div className={`product ${collection === 'trending' ? 'product--trending' : ''}`}>
            <div className="product__settings">
                <TitlElement>Filters</TitlElement>
            </div>
            <div className='product__list'>
                { products[collection].map( c => <ProductCardComponent key={c.id} data={c} collection={collection}/> )}
            </div>
        </div>
    )
}