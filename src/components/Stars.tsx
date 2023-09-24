import Star from "./Star";


type Count = {
    count?: number;
}

const Stars = (props: Count) => {
    const { count = 0 } = props;
    if (count < 1 || count > 5 || typeof count !== "number") return;
    const countList: number[] = [];
    while (countList.length < count) countList.push(0);
    return (
        <ul className="card-body-stars u-clearfix">
            {countList.map((_el, i) => (
                <li key={i}>
                    <Star />
                </li>
            ))}
        </ul>
    );
};

export default Stars;
