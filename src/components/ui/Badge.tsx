interface Props {
    title: string;
}
const Badge = ({ title }: Props) => {
    return (
        <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded bg-gray-100" style={{ fontWeight: 500 }}>
            {title}
        </span>
    )
}

export default Badge