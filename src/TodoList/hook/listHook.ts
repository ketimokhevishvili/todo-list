import React, {useState} from "react";

interface ListHook {
    getListSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    list: string[]
}

const listHook = (): ListHook => {
    const [list, setList] = useState<string[]>([])

    const getListSubmit =  (event: React.FormEvent) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement
        const newItem = (form.elements.namedItem('list') as HTMLInputElement).value
        if (newItem) {
            setList(prevList => [...prevList, newItem])
            form.reset()
        }
    }
    return {list, getListSubmit}
}

export default listHook
