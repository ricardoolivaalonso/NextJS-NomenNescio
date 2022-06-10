import { useRouter } from 'next/router'

export default function NotFound(){
    const router = useRouter()

    return(
        <section className="notfound">
            <div className="notfound__filter" style={{backgroundImage: `url('assets/images/404.jpg')`}}>
            </div>
            <div className="notfound__info">
                <div className="notfound__info-wrapper">
                    <h1 className="notfound__info-title">404 - Not Found</h1>
                    <button className='review__info-button' onClick={() =>router.push('/')}>Back to homepage</button>
                </div>
            </div>
        </section>
    )
}