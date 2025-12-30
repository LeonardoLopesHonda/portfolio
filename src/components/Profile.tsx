interface props {
    url: string;
    alt?: string;
}

export default function Profile({ url, alt = '' }: props) {
    return <div className="w-full mx-auto my-4 self-start">
        <img className="w-24 rounded-full" src={url} alt={alt} />
    </div>
}