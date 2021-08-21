const Href = ({ children, className, link }) => {
    return (
        <a className={className} href={link}>
            {children}
        </a>
    )
}

export default Href
