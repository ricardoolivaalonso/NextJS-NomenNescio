import Link from "next/link"

export default function ProductCardComponent({data, collection}){
    return(
        <article className="product-item" key={data.id}>
            <Link href={`/${collection}/${data.slug}`} >
                <div className="product-item__wrapper">
                    <div className="product-item__picture"> 
                        <div className="product-item__bg">
                            <img className="product-item__img" src={data.image}/>
                        </div>
                    </div>
                    <a className="product-item__title">{data.name}</a>
                </div>
            </Link>
        </article>
    )
}