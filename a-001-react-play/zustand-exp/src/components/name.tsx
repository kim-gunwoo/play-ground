import useZutand from "@/zustand/store"

export default function Name(){
    const name = useZutand(state => state.form.name)
    
    return <div>
       name : {name}
    </div>
}