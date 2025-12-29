interface props {
    btn_type?: string;
    value: string;
    href?: string;
}

export default function Button({ btn_type = '', value, href = "" }: props) {
    return btn_type === 'mail' ?
    <a className="w-1/5 text-center mt-8 p-4 px-8 rounded-lg hover:bg-amber-200 hover:-translate-y-1 hover:scale-105 bg-white transition-all ease-out duration-500" href={href}>{ value }</a> : 
    <button className="w-1/5 text-center mt-8 p-4 px-8 rounded-lg hover:bg-amber-200 hover:-translate-y-1 hover:scale-105 bg-white transition-all ease-out duration-500">{ value }</button> ;
}