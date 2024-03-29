import { IKeyValueCheckProps } from "../Headers_dropdown";

export interface IFormURL {
    BASE_URL: string;
    req: string;
    method: string;
    headers: IKeyValueCheckProps[]; 
}

export default function FormUrl(props: IFormURL) {
    const hdrs = props.headers.length > 0 ? `{${props.headers.map(
        (header) => `"${header.key}":"${header.value}"` 
    ).join(",")}}` : ""
    const val = `${props.BASE_URL}req=${props.req}&method=${props.method}${hdrs !== "" ? "&headers=" + hdrs : ""}`
    return (
        <span onClick={() => navigator.clipboard.writeText(val)} className="cursor-pointer">
            {val}
        </span>
    )

}