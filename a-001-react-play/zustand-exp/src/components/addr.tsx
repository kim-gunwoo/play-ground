import useZutand  from "@/zustand/store"

export default function Addr(){
    const addr = useZutand(state => state.form.addr)
    // const addr = useZutand(zustandForm.addr)
    
    return <div>
        addr : {addr}
    </div>
}