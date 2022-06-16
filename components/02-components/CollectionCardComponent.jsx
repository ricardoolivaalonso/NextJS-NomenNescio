import Link from "next/link"

export const CollectionCardComponent = ({data}) => {
    return(
        <article className="collection-item" key={data.id}>
            <Link href={`/mens`}>
                <div className="collection-item__wrapper">
                    <div className="collection-item__picture">
                        <div className="collection-item__bg">
                            <img className="collection-item__img" src={data.image}/>
                        </div>
                    </div>
                    <a className="collection-item__title">{data.title}</a>
                </div>
            </Link>
        </article>
    )
}