export const TitlElement = ({children, mod}) => {
    return(
        <h3 className={`title ${mod ? mod : ''}`}>{children}</h3>
    )
} 