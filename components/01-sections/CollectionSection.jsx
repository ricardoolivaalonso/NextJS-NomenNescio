import { CollectionCardComponent } from "../02-components/CollectionCardComponent"
import { TitlElement } from "../03-elements/TitleElement"

export const CollectionSection = ({collections}) => {
    return(
        <section className="collection">
            {
                collections.map( col => 
                    <div className="collection__row" key={col.id}>
                        <div className="collection-info">
                            <TitlElement mod="title--sticky">{col.name}</TitlElement>
                        </div>
                        <div className="collection__list">
                            { col.items.map( c => <CollectionCardComponent data={c} key={c.id}/> ) }
                        </div>    
                    </div>
                )
            }
        </section>
    )
}

