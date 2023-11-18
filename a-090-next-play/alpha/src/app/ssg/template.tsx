


export default function SsgTemplate({ children }: { children: React.ReactNode }) {
    console.log("ssg template");
    return <div>
        <div>ssg template</div>
        <div>{children}</div>
    </div>;
}