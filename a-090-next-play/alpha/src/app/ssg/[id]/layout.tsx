const title = 'Static Test Page';

export const metadata = {
    title,
};

export default function SsgIdLayout({ children }: { children: React.ReactNode }) {
    return <div>
        <div>{children}</div>
    </div>
}